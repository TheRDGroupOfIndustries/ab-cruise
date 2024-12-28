"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/utils";
import { bookingOptions, privateCharter } from "@/constant/data";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const BookingInfo = () => {
  return (
    <>
      <section
        id="booking-info"
        className="select-none relative md:p-4 lg:px-8 xl:px-10 lg:py-12 overflow-hidden"
      >
        <motion.div
          variants={staggerContainer(0.2, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.15 }}
          className="container mx-auto px-4"
        >
          <motion.h2
            variants={fadeIn("down", 0.3)}
            className="font-elMessiri text-[#002663] text-5xl 2xl:text-7xl font-bold mb-6"
          >
            Booking Information
          </motion.h2>

          <PrivateCharter />

          <motion.p
            variants={fadeIn("down", 0.5)}
            className="w-full font-elMessiri font-semibold text-[#002663] text-center text-2xl md:text-3xl lg:text-4xl mt-4 mb-6"
          >
            You can book our boat on{" "}
            <span className="text-blue-600">lowest</span> price!
          </motion.p>

          <motion.div
            variants={fadeIn("up", 0.7)}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {bookingOptions.map((option, index) => (
              <BookingCard key={index} {...option} index={index} />
            ))}
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default BookingInfo;

const PrivateCharter = () => {
  return (
    <motion.div
      variants={fadeIn("up", 0.5)}
      className="group grid md:grid-cols-2 gap-4 relative rounded-lg mb-8 overflow-hidden"
    >
      <div id="left" className="w-full h-full space-y-4 p-4 overflow-hidden">
        <div className="space-y-2">
          <div className="text-xl md:text-2xl lg:text-4xl font-elMessiri font-bold">
            {privateCharter.title}
          </div>
          <h4 className="text-2xl md:text-3xl lg:text-4xl xl:text-3xl font-normal">
            Make a booking now!
          </h4>
        </div>

        <ul className="space-y-3 mb-8">
          {privateCharter.features.map((feature, idx) => (
            <li key={idx} className="flex items-center">
              <span className="mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>

        <Link href={privateCharter.href} target="_blank">
          <Button
            size="lg"
            className="mt-5 w-fit px-5 text-white font-extrabold rounded-3xl bg-gradient-to-tr from-[#001556] to-[#002FBC] to-100% hover:bg-[length:400%_400%] hover:animate-gradient hover:border-none transition-all ease-in-out duration-300"
          >
            Book Now
            <ArrowRight className="w-4 h-4 ml-2 group-active:translate-x-1 group-active:-translate-y-1 group-hover:scale-110 group-hover:-rotate-45 transition-all ease-in-out duration-300" />
          </Button>
        </Link>
      </div>

      <div id="right" className="w-full h-full rounded-3xl overflow-hidden">
        <Image
          src={privateCharter.img}
          alt={privateCharter.title}
          width={800}
          height={800}
          objectFit="fill"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
};

const BookingCard = ({ title, duration, features, href, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", 0.1 * index + 1)}
      className="group relative flex-center flex-col gap-4 rounded-lg backdrop-blur-md shadow-[0_0_5px_rgba(0,0,0,0.5)] hover:shadow-[0_0_10px_rgba(0,0,0,0.5)] p-4 ease-in-out duration-300 overflow-hidden"
    >
      <div className="w-36 h-36 rounded-3xl overflow-hidden">
        <Image
          src="/assets/logo.png"
          alt="PrivateCharter"
          width={500}
          height={500}
          objectFit="fill"
          className="w-full h-full object-cover"
        />
      </div>

      <h1 className="text-xl text-blue-800">{duration}</h1>
      <div className="space-y-2">
        <h3 className="font-elMessiri text-2xl md:text-3xl lg:text-4xl font-bold">
          {title}
        </h3>

        <ul className="space-y-3">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center">
              <span className="mr-2">•</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <Link href={href} target="_blank">
        <Button
          size="lg"
          className="w-fit px-5 text-white font-extrabold rounded-3xl bg-gradient-to-tr from-[#001556] to-[#002FBC] to-100% hover:bg-[length:400%_400%] hover:animate-gradient hover:border-none transition-all ease-in-out duration-300"
        >
          Book Now
          <ArrowRight className="w-4 h-4 ml-2 group-active:translate-x-1 group-active:-translate-y-1 group-hover:scale-110 group-hover:-rotate-45 transition-all ease-in-out duration-300" />
        </Button>
      </Link>
    </motion.div>
  );
};
