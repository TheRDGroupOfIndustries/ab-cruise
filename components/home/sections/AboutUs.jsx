"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/utils";
import { FaShip, FaUserShield, FaEye, FaUsers } from "react-icons/fa";

const iconMap = {
  FaShip: FaShip,
  FaUserShield: FaUserShield,
  FaEye: FaEye,
  FaUsers: FaUsers,
};

const AboutUs = ({ aboutUsData }) => {
  return (
    <motion.section
      id="about-us"
      className="select-text w-full h-fit relative overflow-hidden"
      variants={staggerContainer(0.2, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
    >
      {/* background Image */}
      <motion.div
        variants={fadeIn("left", 0.3)}
        style={{
          backgroundImage: `url('${aboutUsData?.bannerURL || "/assets/aboutBoat.jpeg"}')`,
        }}
        className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-center overflow-hidden"
      ></motion.div>
      <motion.div
        variants={fadeIn("right", 0.3)}
        className="absolute inset-0 z-10 bg-gradient-to-br md:bg-gradient-to-r from-40% from-white to-transparent"
      ></motion.div>

      {/* about us contents */}
      <div className="relative z-20 container mx-auto p-4 overflow-hidden">
        <motion.div
          className="lg:max-w-3xl space-y-4"
          variants={fadeIn("right", 0.2)}
        >
          <motion.h2
            className="font-elMessiri text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold text-[#002663]"
            variants={fadeIn("up", 0.3)}
          >
            {aboutUsData.title}
          </motion.h2>

          {aboutUsData?.body?.map((para, index) => (
            <motion.p
              key={index}
              className="text-gray-700 text-base sm:text-lg md:text-xl text-justify text-balance"
              variants={fadeIn("up", 0.4 * (index + 1))}
            >
              {para}
            </motion.p>
          ))}

          {/* <motion.p
            className="text-gray-700 text-base sm:text-lg md:text-xl text-justify text-balance"
            variants={fadeIn("up", 0.5)}
          >
            {aboutUsData.subDescription}
          </motion.p> */}

          {/* Icons Section */}
          <motion.div
            className="w-fit grid grid-cols-2 sm:grid-cols-2 gap-8 pt-4 md:pt-8"
            variants={fadeIn("up", 0.7)}
          >
            {aboutUsData.services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              return (
                <motion.div
                  key={index}
                  className="w-44 lg:w-80 text-center space-y-2"
                  variants={fadeIn("up", 0.7 + index * 0.3)}
                >
                  <IconComponent className="text-4xl mx-auto" />
                  <h3 className="font-semibold text-lg sm:text-xl md:text-2xl">
                    {service.title}
                  </h3>
                  <p className="text-xs text-gray-600 md:text-sm">
                    {service.description}
                  </p>
                </motion.div>
              );
            })}
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
