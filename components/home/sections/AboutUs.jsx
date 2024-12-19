"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/utils";
import { FaUtensils } from "react-icons/fa";
import { GiPartyPopper } from "react-icons/gi";
import { BsSoundwave } from "react-icons/bs";

const AboutUs = () => {
  return (
    <motion.section
      id="about-us"
      className="select-none w-full h-fit relative overflow-hidden"
      variants={staggerContainer(0.2, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      {/* background Image */}
      <motion.div
        variants={fadeIn("left", 0.3)}
        className="absolute inset-0 z-0 bg-[url('/assets/aboutBoat.jpeg')] bg-cover bg-no-repeat bg-center overflow-hidden"
      ></motion.div>
      <motion.div
        variants={fadeIn("right", 0.3)}
        className="absolute inset-0 z-10 bg-gradient-to-br md:bg-gradient-to-r from-40% from-white to-transparent"
      ></motion.div>

      {/* about us contents */}
      <div className="relative z-20 container mx-auto p-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div className="space-y-8" variants={fadeIn("left", 0.2)}>
          <motion.h2
            className="font-['El_Messiri'] text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-[#002663]"
            variants={fadeIn("up", 0.3)}
          >
            ABOUT US
          </motion.h2>

          <motion.p
            className="text-gray-700 text-base sm:text-lg md:text-xl"
            variants={fadeIn("up", 0.4)}
          >
            Lorem ipsum dolor sit amet consectetur. Sit sit diam elementum
            tortor lectus pretium donec mattis. Nulla ipsum suspendisse
            scelerisque montes morbi. Vel risus ut risus non. Lobortis morbi leo
            velit vivamus in sodales nulla malesuada. Mauris facilisi ut
            adipiscing at augue sapien sit pharetra mollis. Aliquam in
            pellentesque id sollicitudin.
          </motion.p>

          <motion.p
            className="text-gray-700 text-base sm:text-lg md:text-xl"
            variants={fadeIn("up", 0.5)}
          >
            Lorem ipsum dolor sit amet consectetur. Sit sit diam elementum
            tortor lectus pretium donec mattis. Nulla ipsum suspendisse
            scelerisque montes morbi. Vel risus ut risus non. Lobortis morbi leo
            velit vivamus in sodales nulla malesuada. Mauris facilisi ut
            adipiscing at augue sapien sit pharetra mollis. Aliquam in
            pellentesque id sollicitudin.
          </motion.p>

          {/* Icons Section */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 pt-4 md:pt-8"
            variants={fadeIn("up", 0.6)}
          >
            <motion.div
              className="text-center space-y-2"
              variants={fadeIn("up", 0.7)}
            >
              <FaUtensils className="text-4xl mx-auto" />
              <h3 className="font-semibold text-lg sm:text-xl md:text-2xl">
                Food Available
              </h3>
              <p className="text-sm text-gray-600 sm:text-base md:text-lg">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </motion.div>

            <motion.div
              className="text-center space-y-2"
              variants={fadeIn("up", 0.8)}
            >
              <GiPartyPopper className="text-4xl mx-auto" />
              <h3 className="font-semibold text-lg sm:text-xl md:text-2xl">
                Party celebration
              </h3>
              <p className="text-sm text-gray-600 sm:text-base md:text-lg">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </motion.div>

            <motion.div
              className="text-center space-y-2"
              variants={fadeIn("up", 0.9)}
            >
              <BsSoundwave className="text-4xl mx-auto" />
              <h3 className="font-semibold text-lg sm:text-xl md:text-2xl">
                Music System
              </h3>
              <p className="text-sm text-gray-600 sm:text-base md:text-lg">
                Lorem ipsum dolor sit amet consectetur.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Content (Optional - Uncomment if needed) */}
        {/* <motion.div
          className="relative h-[600px]"
          variants={fadeIn("right", 0.3)}
        >
          <Image
            src="/assets/aboutBoat.jpeg"
            alt="Boat on water"
            fill
            className="object-cover rounded-lg"
          />
        </motion.div> */}
      </div>
    </motion.section>
  );
};

export default AboutUs;
