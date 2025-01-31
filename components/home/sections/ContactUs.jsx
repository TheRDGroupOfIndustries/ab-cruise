"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const ContactUs = ({ contactUsData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <motion.section
      id="contact-us"
      className="select-none p-4 md:p-8 overflow-hidden"
      variants={staggerContainer(0.2, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.15 }}
    >
      <motion.h2
        className="font-elMessiri text-5xl 2xl:text-7xl font-bold text-[#002663] mb-4"
        variants={fadeIn("up", 0.2)}
      >
        {contactUsData?.title || "Contact us"}
      </motion.h2>

      <motion.div
        className="bg-[#002663] rounded-3xl p-4 md:p-8"
        variants={fadeIn("up", 0.3)}
      >
        <motion.h2
          className="text-4xl text-white mb-2"
          variants={fadeIn("up", 0.4)}
        >
          Any Queries?
        </motion.h2>
        <motion.p className="text-gray-300 mb-6" variants={fadeIn("up", 0.5)}>
          We are available 24x7 to answer!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Form Section */}
          <motion.div
            className="bg-white/80 backdrop-blur-md rounded-3xl p-4"
            variants={fadeIn("right", 0.6)}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div className="space-y-1" variants={fadeIn("up", 0.7)}>
                <p className="text-4xl text-gray-950">Write us a message!</p>
                <p className="text-gray-800">
                  We would love to answer your questions!
                </p>
              </motion.div>
              <motion.input
                type="text"
                name="name"
                placeholder="Full name"
                className="w-full p-4 rounded-lg bg-[#002663] text-white placeholder-gray-400"
                variants={fadeIn("up", 0.8)}
              />
              <motion.input
                type="email"
                name="email"
                placeholder="Your email"
                className="w-full p-4 rounded-lg bg-[#002663] text-white placeholder-gray-400"
                variants={fadeIn("up", 0.9)}
              />
              <motion.input
                name="phone"
                type="tel"
                placeholder="Your Phone"
                className="w-full p-4 rounded-lg bg-[#002663] text-white placeholder-gray-400"
                variants={fadeIn("up", 1)}
              />
              <motion.textarea
                placeholder="Your message"
                name="message"
                rows="4"
                className="w-full p-4 rounded-lg bg-[#002663] text-white placeholder-gray-400"
                variants={fadeIn("up", 1.1)}
              />
              <motion.div variants={fadeIn("up", 1.2)}>
                <Button
                  type="submit"
                  className="w-full h-12 text-white font-semibold bg-gradient-to-tr from-[#001556] to-[#002FBC] hover:bg-[length:400%_400%] hover:animate-gradient hover:border-none transition-all ease-in-out duration-300"
                >
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Right Contact Options */}
          <motion.div
            className="bg-white/80 backdrop-blur-md rounded-3xl p-4 text-black overflow-hidden"
            variants={fadeIn("left", 0.6)}
          >
            <motion.h2
              className="text-4xl text-gray-950 mb-2"
              variants={fadeIn("up", 0.7)}
            >
              {contactUsData?.contactInfo?.heading || "Need Quick Response?"}
            </motion.h2>
            <motion.p
              className="text-gray-800 mb-6"
              variants={fadeIn("up", 0.8)}
            >
              {contactUsData?.contactInfo?.subheading ||
                "Feel free to contact us on Phone, Email or visit us at our office."}
            </motion.p>

            <motion.div
              className="space-y-8"
              variants={staggerContainer(0.2, 0.1)}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Phone */}
                <motion.div
                  className="bg-white/80 backdrop-blur-md group rounded-3xl p-4 text-center hover:shadow-lg hover:-translate-y-2 transition-all ease-in-out duration-300"
                  variants={fadeIn("up", 0.5)}
                >
                  <FaPhone className="text-[#002663] text-4xl mx-auto" />
                  <p className="text-gray-800 mt-4">Call us:</p>
                  <Link
                    href={
                      ((
                        contactUsData?.contactInfo?.phone?.link?.includes(
                          "https://wa.me/"
                        )
                      ) ?
                        contactUsData?.contactInfo?.phone?.link
                      : `tel:${contactUsData?.contactInfo?.phone?.link}`) ||
                      "https://wa.me/+918353936768"
                    }
                    target="_blank"
                    className="hover:text-[#002663] transition-colors block mt-1"
                  >
                    <span className="group-hover-link">
                      {contactUsData?.contactInfo?.phone?.number ||
                        "+91 8353936768"}
                    </span>
                  </Link>
                </motion.div>

                {/* Email */}
                <motion.div
                  className="bg-white/80 backdrop-blur-md group rounded-3xl p-4 text-center hover:shadow-lg hover:-translate-y-2 transition-all ease-in-out duration-300"
                  variants={fadeIn("up", 0.8)}
                >
                  <FaEnvelope className="text-[#002663] text-4xl mx-auto" />
                  <p className="text-gray-800 mt-4">Email us:</p>
                  <Link
                    href={`mailto:${contactUsData?.contactInfo?.email?.link || "support@abcruisers.com"}`}
                    target="_blank"
                    className="hover:text-[#002663] transition-colors block mt-1"
                  >
                    <span className="group-hover-link">
                      {contactUsData?.contactInfo?.email?.emailAddress ||
                        "support@abcruisers.com"}
                    </span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              variants={fadeIn("up", 1.1)}
              className="w-full relative bg-white/80 backdrop-blur-md rounded-3xl mt-6 overflow-hidden"
            >
              <iframe
                src={
                  contactUsData?.contactInfo?.address?.iframe ||
                  `https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${encodeURIComponent(
                    contactUsData?.contactInfo?.address?.fullAddress ||
                      "Hotel Ganga Monastery, Ganga Ghat, Varanasi, Uttar Pradesh, India"
                  )}&t=&z=14&ie=UTF8&iwloc=B&output=embed`
                }
                title={
                  contactUsData?.contactInfo?.address?.fullAddress ||
                  "Hotel Ganga Monastery, Ganga Ghat, Varanasi, Uttar Pradesh, India"
                }
                // src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Hotel%20Ganga%20Monastery,%20Ganga%20Ghat,%20Varanasi,%20Uttar%20Pradesh,%20India.+(My%20Business%20Name)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                className="w-full h-60 rounded-2xl"
                loading="lazy"
                style={{ border: 0 }}
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ContactUs;
