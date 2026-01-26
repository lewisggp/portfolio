"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";

import { cn } from "@/lib/utils";

interface ScrollVelocityProps {
  baseVelocity: number;
  direction?: number;
  children: React.ReactNode;
  className?: string;
}

export function ScrollVelocityRow({
  baseVelocity = 5,
  direction = 1,
  children,
  className,
}: ScrollVelocityProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const [repetitions, setRepetitions] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const calculateRepetitions = () => {
      if (containerRef.current && textRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const textWidth = textRef.current.offsetWidth;
        const newRepetitions = Math.ceil(containerWidth / textWidth) + 2;
        setRepetitions(newRepetitions);
      }
    };

    calculateRepetitions();

    window.addEventListener("resize", calculateRepetitions);
    return () => window.removeEventListener("resize", calculateRepetitions);
  }, [children]);

  const x = useTransform(baseX, (v) => `${wrap(-100 / repetitions, 0, v)}%`);

  const prevT = useRef<number>(0);

  useAnimationFrame((t) => {
    // Initialize prevT on first frame
    if (prevT.current === 0) {
      prevT.current = t;
      return;
    }

    const delta = t - prevT.current;
    prevT.current = t; // Update prevT for the next frame

    const moveBy = direction * baseVelocity * (delta / 1000);

    // Apply velocity from scroll direction
    // If scroll velocity is negative (scrolling up), we might want to reverse or speed up?
    // The original parallax text implementation typically dynamically changes direction based on scroll.
    // However, the user asked for specific direction 1 and -1 rows.
    // We will combine the base velocity with the scroll velocity factor.

    let velocity = moveBy;

    // Add scroll based acceleration
    if (velocityFactor.get() < 0) {
      // Scrolling up
      // If direction is 1 (right), and we scroll up, usually we want to go faster right or maybe reverse?
      // Standard parallax text reverses on scroll up.
      // Here we can just add the factor.
      direction === 1
        ? (velocity += velocityFactor.get() * moveBy)
        : (velocity -= velocityFactor.get() * moveBy);
    } else {
      // Scrolling down
      direction === 1
        ? (velocity += velocityFactor.get() * moveBy)
        : (velocity -= velocityFactor.get() * moveBy);
    }

    // Simple move
    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * that we have four children (100% / 4). This would also want to be derived
   * from the dynamically generated number of children.
   */
  return (
    <div
      className={cn("w-full overflow-hidden whitespace-nowrap", className)}
      ref={containerRef}
    >
      <motion.div className="inline-block" style={{ x }}>
        {Array.from({ length: repetitions }).map((_, i) => (
          <div key={i} ref={i === 0 ? textRef : null} className="inline-flex">
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function wrap(min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
}

export function ScrollVelocityContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("relative w-full overflow-hidden", className)}>
      {children}
    </div>
  );
}
