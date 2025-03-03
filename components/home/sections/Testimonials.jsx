"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import BlurFade from "@/components/ui/blur-fade";

const Testimonials = ({ testimonialsData }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonialsData?.testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === testimonialsData?.testimonials.length - 1 ? 0 : prev + 1
    );
  }, [testimonialsData]);

  const handleDragEnd = (event, info) => {
    if (Math.abs(info.offset.x) > 100) {
      if (info.offset.x > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        handleNext();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [currentIndex, handleNext, isHovered]);

  return (
    <motion.section
      id="testimonials"
      className="select-text container mx-auto px-4 py-16"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variants={staggerContainer(0.2, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.h2
        className="font-elMessiri text-5xl 2xl:text-7xl font-bold text-[#002663]"
        variants={fadeIn("up", 0.2)}
        dangerouslySetInnerHTML={{
          __html:
            testimonialsData?.title?.replace(
              /customers/g,
              '<span style="color: #2563eb">customers</span>'
            ) || "",
        }}
      />

      <motion.div
        className="relative mt-8 overflow-hidden"
        variants={fadeIn("up", 0.4)}
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          className="cursor-grab active:cursor-grabbing flex"
        >
          <motion.div
            animate={{
              x: -currentIndex * 300,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            className="flex gap-6 py-2"
          >
            {testimonialsData?.testimonials
              .concat(testimonialsData?.testimonials)
              .map((testimonial, index) => (
                <BlurFade key={index} delay={0.08} inView>
                  <TestimonialCard {...testimonial} />
                </BlurFade>
              ))}
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="flex justify-center gap-4 mt-8"
        variants={fadeIn("up", 0.6)}
      >
        <Button
          onClick={handlePrev}
          size="icon"
          className="group w-10 h-10 rounded-full bg-[#002663] text-white flex-center active:translate-y-0"
        >
          <IoIosArrowBack
            size={20}
            className="group-active:-translate-x-1 ease-in-out duration-300"
          />
        </Button>
        <Button
          onClick={handleNext}
          size="icon"
          className="group w-10 h-10 rounded-full bg-[#002663] text-white flex-center active:translate-y-0"
        >
          <IoIosArrowForward
            size={20}
            className="group-active:translate-x-1 ease-in-out duration-300"
          />
        </Button>
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;

const TestimonialCard = ({ name, pfp, role, testimonial }) => {
  return (
    <div className="min-w-[380px] lg:min-w-[400px] p-8 rounded-lg bg-blue-50 shadow-md shadow-gray-300 hover:shadow-xl hover:bg-blue-100 scale-95 hover:scale-100 transition-all ease-in-out duration-300">
      <div className="font-elMessiri w-full text-center text-4xl font-bold mb-4">
        &quot;
      </div>
      <p className="text-gray-600 mb-6">{testimonial}</p>
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <Image
            src={pfp}
            alt={name}
            width={40}
            height={40}
            className="w-8 h-8 rounded-full"
          />
          <h4 className="font-elMessiri font-semibold text-lg">{name}</h4>
        </div>
        <p className="text-gray-500 text-sm">{role}</p>
      </div>
    </div>
  );
};
