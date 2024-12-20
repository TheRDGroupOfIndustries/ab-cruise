"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import BackgroundGradientAnimation from "@/components/ui/background-gradient-animation";
import WordPullUp from "@/components/ui/word-pull-up";
import BlurFade from "@/components/ui/blur-fade";

const Hero = () => {
  const router = useRouter();
  const handleBook = () => router.push("/#booking-info");

  return (
    <section
      id="hero"
      className="select-none relative w-full h-[55vh] md:h-[70vh] lg:h-screen p-4 overflow-hidden"
    >
      <motion.div
        variants={staggerContainer(0.2, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="relative h-full w-full rounded-2xl animate-slide-up overflow-hidden"
        style={{
          backgroundImage: "linear-gradient(165deg, #0E5AD6, #002663, #0060FA)",
        }}
      >
        <BackgroundGradientAnimation containerClassName="bg-gradient-to-br from-[#0E5AD6] via-[#002663] to-[#0060FA] p-4 sm:p-8 md:p-12 relative z-10">
          {/* <div className="w-screen h-full "> */}
          <div className="w-full h-full max-h-full relative flex flex-col items-start justify-start pt-8 2xl:pt-12">
            <div className="w-full">
              <WordPullUp
                words="AB CRUISE"
                className="font-elMessiri text-white text-5xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-9xl 2xl:text-10xl font-black leading-tight tracking-wider"
              />
              <motion.p
                variants={fadeIn("down", 0.5)}
                className="font-dmSans text-white text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-light leading-snug mb-4"
              >
                Experience comfort and luxury on the trails of Ganges!
              </motion.p>
              <motion.div
                variants={fadeIn("up", 0.7)}
                className="w-full flex justify-end"
              >
                <Button
                  onClick={handleBook}
                  size="lg"
                  className="relative z-40 font-elMessiri md:h-12 2xl:scale-125 2xl:mr-10 px-6 sm:px-8 md:px-10 border border-white text-white font-semibold bg-gradient-to-tr from-[#001556] to-[#002FBC] to-100% rounded-full text-base sm:text-xl md:text-2xl hover:bg-[length:400%_400%] hover:animate-gradient hover:border-none transition-all ease-in-out duration-300"
                >
                  Book now
                </Button>
              </motion.div>
            </div>
          </div>
          <BlurFade
            delay={0.8}
            inView
            yOffset={40}
            className="absolute z-30 left-0 bottom-0 w-full h-[80%] sm:h-[60%] md:h-[80%] xl:h-[95%] 2xl:h-[90%]"
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
          {/* </div> */}
        </BackgroundGradientAnimation>
      </motion.div>
    </section>
  );
};

export default Hero;
