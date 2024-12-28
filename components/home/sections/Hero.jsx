"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import WordPullUp from "@/components/ui/word-pull-up";
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
        className="relative h-full w-full bg-black rounded-xl flex-cente animate-slide-up overflow-hidden"
        <div class="absolute inset-0 bg-[url(/assets/hero.jpg)] bg-cover bg-no-repeat backdrop-filter backdrop-blur-xl z-[11] opacity-50 overflow-hidden"></div>

        <div className="w-full h-full p-4 relative z-20">
          <WordPullUp
            words="AB Cruisers"
            className="font-elMessiri text-white text-4xl md:text-4xl xl:text-5xl font-black"
          />
          <div className="w-full h-full relative flex-center flex-col gap-4 text-white pt-8 2xl:pt-12 overflow-hidden">
            <div className="w-fit max-w-3xl h-fit flex-center flex-col gap-4 lg:gap-6">
              <motion.p
                variants={fadeIn("up", 0.5)}
                className="font-dmSans text-white text-md md:text-3xl lg:text-4xl 2xl:text-5xl text-center font-light leading-snug overflow-hidden"
              >
                Experience comfort and luxury on the trails of Ganges!
              </motion.p>
              <motion.p
                variants={fadeIn("up", 0.7)}
                className="max-w-2xl text-[10px] md:text-sm italic text-center text-balanc mb-2 overflow-hidden"
              >
                Discover the timeless charm of Varanasi with{" "}
                <strong>AB Crisers</strong>, blending luxury and tradition on the
                serene Ganges. From private celebrations to tranquil getaways,
                we offer unmatched elegance and unforgettable memories.
              </motion.p>
              <motion.div variants={fadeIn("up", 0.9)} className="">
                <Button
                  onClick={handleBook}
                  size="lg"
                  effect="shine"
                  className="relative z-40 md:h-12 2xl:scale-125 2xl:mr-10 px-6 sm:px-8 md:px-10 border border-white text-white font-semibold bg-[#ffffff30] backdrop-blur-xl rounded-full text-base sm:text-xl md:text-2xl hover:border-none hover:bg-[#ffffff20] transition-all ease-in-out duration-300"
                >
                  Book now
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
