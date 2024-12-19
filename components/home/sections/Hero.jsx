"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Particles from "@/components/ui/particles";
import Meteors from "@/components/ui/meteors";
import WordPullUp from "@/components/ui/word-pull-up";
import BlurFade from "@/components/ui/blur-fade";

const Hero = () => {
  const handleExplore = () => {
    const scrollDistance =
      window.innerWidth <= 768
        ? window.innerHeight * 0.5
        : window.innerHeight - 32;

    window.scrollTo({
      top: scrollDistance,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="hero"
      className="select-none relative w-full h-[50vh] lg:h-screen p-4 overflow-hidden"
    >
      <motion.div
        variants={staggerContainer(0.2, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="relative h-full w-full rounded-2xl flex-center bg-gradient-to-tr from-[#0E5AD6] via-[#002663] to-[#0060FA] animate-slide-up overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(165deg, #0E5AD6, #002663, #0060FA)",
        }}
      >
        <div className="absolute inset-0 z-30">
          <Meteors number={30} />
          <Particles
            className="absolute inset-0"
            quantity={300}
            ease={10}
            color={"#ffffff"}
            refresh
          />
        </div>
        <div className="w-full max-w-6xl h-full p-4 sm:p-8 md:p-12 relative">
          <div className="w-full relative flex flex-col items-start h-full max-h-full justify-start pt-8 2xl:pt-12">
            <div className="w-full">
              <WordPullUp
                words="AB CRUISE"
                className="font-['El_Messiri'] text-white text-5xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-9xl 2xl:text-10xl font-black leading-tight tracking-wider mb-4 sm:mb-6"
              />
              {/* <motion.h1
                variants={fadeIn("down", 0.3)}
              >
                AB CRUISE
              </motion.h1> */}
              <motion.p
                variants={fadeIn("down", 0.5)}
                className="font-['DM_Sans'] text-white text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-light leading-snug mb-6 sm:mb-8"
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
                  className="relative z-40 font-['DM_Sans'] md:h-12 2xl:scale-125 2xl:mr-10 px-6 sm:px-8 md:px-10 border border-white text-white font-semibold bg-gradient-to-tr from-[#001556] to-[#002FBC] to-100% rounded-full text-base sm:text-xl md:text-2xl hover:bg-[length:400%_400%] hover:animate-gradient hover:border-none transition-all ease-in-out duration-300"
                >
                  Explore now
                </Button>
              </motion.div>
            </div>
          </div>
          <BlurFade
            delay={0.8}
            inView
            yOffset={40}
            className="absolute left-0 bottom-0 w-full h-[80%] sm:h-[60%] lg:h-[70%] xl:h-[80%] 2xl:h-[90%]"
          >
            <Image
              src="/assets/boat.png"
              alt="AB Cruise Boat"
              width={1000}
              height={1000}
              priority
              className="w-full h-full object-contain"
            />
          </BlurFade>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
