"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import WordPullUp from "@/components/ui/word-pull-up";
import BlurFade from "@/components/ui/blur-fade";

const Hero = () => {
  const router = useRouter();
  const handleBook = () => router.push("/#booking-info");
  return (
    <>
      <motion.section
        id="hero"
        variants={staggerContainer(0.2, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="select-none relative w-full h-fit md:h-[70vh] lg:h-screen flex-between flex-col-reverse md:flex-row gap-4 p-2 md:p-4 overflow-hidden"
      >
        <div className="w-full h-full">
          <WordPullUp
            words="AB Cruisers"
            className="font-elMessiri text-blue-600 text-4xl md:text-4xl font-black"
          />
          <div className="w-full h-full flex flex-col justify-center gap-2 md:p-4 overflow-hidden">
            <motion.p
              variants={fadeIn("up", 0.5)}
              className="font-dmSans text-[#002663] text-md md:text-3xl lg:text-4xl 2xl:text-5xl font-light leading-snug"
            >
              Experience comfort and luxury on the trails of Ganges!
            </motion.p>
            <motion.p
              variants={fadeIn("up", 0.7)}
              className="text-[10px] md:text-sm italic text-justif text-balance mb-2"
            >
              Discover the timeless charm of Varanasi with{" "}
              <strong>AB Cruise</strong>, blending luxury and tradition on the
              serene Ganges. From private celebrations to tranquil getaways, we
              offer unmatched elegance and unforgettable memories.
            </motion.p>
            <motion.div variants={fadeIn("up", 0.9)} className="">
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
          className="w-full h-full bg-transparent rounded-3xl overflow-hidden"
        >
          <Image
            src="/assets/heroBannerRectangle.png"
            alt="PrivateCharter"
            width={1000}
            height={1000}
            loading="eager"
            objectFit="fill"
            className="w-full h-full object-center"
          />
        </BlurFade>
      </motion.section>
    </>
  );
};

export default Hero;