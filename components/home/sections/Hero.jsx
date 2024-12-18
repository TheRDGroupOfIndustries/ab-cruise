"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleExplore = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      className="select-none relative w-full h-[100svh] p-2 sm:p-4 overflow-hidden"
    >
      <motion.div
        variants={staggerContainer(0.2, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="relative flex-center bg-gradient-to-tr from-[#0E5AD6] via-[#002663] to-[#0060FA] h-full w-full overflow-hidden rounded-2xl"
        style={{
          backgroundImage: "linear-gradient(165deg, #0E5AD6, #002663, #0060FA)",
        }}
      >
        <div className="w-[80%] h-full p-4 sm:p-8 md:p-10 relative">
          <div className="w-full relative flex flex-col items-start h-full max-h-full justify-start pt-8 lg:pt-12">
            <div className="w-full">
              <motion.h1
                variants={fadeIn("down", 0.3)}
                className="2xl:mt-4 font-['El_Messiri'] text-white text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-11xl font-black leading-tight tracking-wider mb-2 sm:mb-4"
              >
                AB CRUISE
              </motion.h1>
              <motion.p
                variants={fadeIn("down", 0.5)}
                className="font-['DM_Sans'] text-white text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl 2xl:text-8xl font-light leading-snug mb-4"
              >
                We make every ride Enjoyable!
              </motion.p>
              <motion.div
                variants={fadeIn("up", 0.7)}
                className="w-full flex justify-end"
              >
                <Button
                  onClick={handleExplore}
                  size="lg"
                  className="relative z-10 font-['DM_Sans'] md:h-12 2xl:scale-125 2xl:mr-10 px-6 sm:px-8 md:px-12 border border-white text-white font-semibold bg-gradient-to-tr from-[#001556] to-[#002FBC] to-100% rounded-full text-base sm:text-xl md:text-2xl hover:bg-[length:400%_400%] hover:animate-gradient hover:border-none transition-all ease-in-out duration-300"
                >
                  Explore now
                </Button>
              </motion.div>
            </div>
          </div>
          <motion.div
            variants={fadeIn("up", 0.9)}
            className="absolute left-0 bottom-0 2xl:-bottom-14 w-full h-[60%] sm:h-[70%] 2xl:h-full"
          >
            <Image
              src="/assets/boat.png"
              alt="AB Cruise Boat"
              width={1000}
              height={1000}
              priority
              className="w-[75%] h-full object-contain"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
