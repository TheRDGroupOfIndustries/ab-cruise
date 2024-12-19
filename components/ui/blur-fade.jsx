"use client";

import { useRef, useState, useEffect } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";

export default function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  yOffset = 10,
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
}) {
  const ref = useRef(null);
  const [key, setKey] = useState(0); // State to trigger remounting
  const inViewResult = useInView(ref, { once: false, margin: inViewMargin }); // Ensure continuous triggering
  const isInView = !inView || inViewResult;

  const defaultVariants = {
    hidden: { y: yOffset, opacity: 0, filter: `blur(${blur})` },
    visible: { y: -0, opacity: 1, filter: `blur(0px)` },
  };

  const combinedVariants = variant || defaultVariants;

  // Reset the key whenever the element enters the viewport
  useEffect(() => {
    if (isInView) {
      setKey((prevKey) => prevKey + 1); // Increment to force remount
    }
  }, [isInView]);

  return (
    <AnimatePresence>
      <motion.div
        key={key} // Ensure remounting to reset animation
        ref={ref}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }} // Trigger while in view
        animate={isInView ? "visible" : "hidden"}
        exit="hidden"
        variants={combinedVariants}
        transition={{
          delay: 0.04 + delay,
          duration,
          ease: "easeOut",
        }}
        className={className}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

{
  /* <div className="absolute inset-0 z-20">
          <Meteors number={30} />
          <Particles
            className="absolute inset-0"
            quantity={300}
            ease={10}
            color={"#ffffff"}
            refresh
          />
        </div> */
}
