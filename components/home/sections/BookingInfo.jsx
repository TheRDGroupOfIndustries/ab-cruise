"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/utils";
import { cruiseOptions } from "@/constant/data";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BookingInfo = () => {
  return (
    <section
      id="booking-info"
      className="select-none relative bg-gradient-to-b from-30% from-[#020202] to-[#0060FA] text-white py-16 animate-gradient overflow-hidden"
    >
      <motion.div
        variants={staggerContainer(0.2, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="container mx-auto px-4"
      >
        <motion.h2
          variants={fadeIn("down", 0.3)}
          className="font-['El_Messiri'] text-5xl 2xl:text-7xl font-bold"
        >
          Booking Information
        </motion.h2>

        <motion.p
          variants={fadeIn("down", 0.5)}
          className="text-xl mt-2 mb-12"
        >
          You can book our boat on lowest price!
        </motion.p>

        <motion.div
          variants={fadeIn("up", 0.7)}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {cruiseOptions.map((option, index) => (
            <BookingCard key={index} {...option} index={index} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

const BookingCard = ({ title, duration, features, href, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.1 * index)}
      className="group relative rounded-lg bg-opacity-20 bg-white/20 p-4 backdrop-blur-md border border-white/70 hover:bg-white/30 transition-all ease-in-out duration-300"
    >
      <div className="absolute top-0 left-4 font-['El_Messiri'] font-semibold text-md md:text-lg 2xl:text-xl bg-white text-[#002663] rounded-b-md px-4 inline-block mb-6">
        {title}
      </div>

      <h2 className="font-['El_Messiri'] text-2xl 2xl:text-4xl font-bold mt-12 mb-6">
        Get a Quote
      </h2>

      <ul className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center">
            <span className="mr-2">•</span>
            {feature}
          </li>
        ))}
      </ul>

      <Link href={href}>
        <Button className="w-full bg-white text-[#002663] hover:bg-gray-100 transition-colors">
          Book Now
          <ArrowRight className="w-4 h-4 ml-2 group-active:translate-x-1 group-active:-translate-y-1 group-hover:scale-110 group-hover:-rotate-45 transition-all ease-in-out duration-300" />
        </Button>
      </Link>
    </motion.div>
  );
};

export default BookingInfo;
