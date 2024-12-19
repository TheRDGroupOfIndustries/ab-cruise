"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/utils";
import { links } from "@/constant/data";
import { ArrowRight } from "lucide-react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      className="select-none w-full text-white p-4 overflow-hidden"
      variants={staggerContainer(0.2, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <motion.div
        className="bg-[#00205B] rounded-3xl p-6"
        variants={fadeIn("up", 0.2)}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* logo and description section */}
            <motion.div variants={fadeIn("left", 0.3)}>
              <h2 className="text-2xl md:text-4xl 2xl:text-5xl font-bold mb-4">
                <Link
                  href="/"
                  className="w-fit hover-link font-elMessiri font-bold"
                >
                  Ab Cruise
                </Link>
              </h2>
              <p className="text-sm italic text-justify text-balance mb-4">
                Experience the timeless charm of Varanasi with{" "}
                <strong>AB Cruise</strong>, where luxury meets tradition on the
                serene waters of the Ganges. From private celebrations to
                tranquil getaways, we create unforgettable memories with
                impeccable service and unmatched elegance. Sail with us and
                redefine your journey.
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  className="flex items-center justify-center w-8 h-8 bg-white text-[#00205B] rounded-full hover:scale-110 transition-transform"
                >
                  <FaFacebook />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  className="flex items-center justify-center w-8 h-8 bg-white text-[#00205B] rounded-full hover:scale-110 transition-transform"
                >
                  <FaTwitter />
                </Link>
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="flex items-center justify-center w-8 h-8 bg-white text-[#00205B] rounded-full hover:scale-110 transition-transform"
                >
                  <FaInstagram />
                </Link>
              </div>
            </motion.div>

            {/* Quick Links Section */}
            <motion.div variants={fadeIn("up", 0.4)}>
              <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
              <ul className="space-y-2">
                {links.map(
                  (link, index) =>
                    link.label !== "AB" && (
                      <motion.li
                        key={index}
                        variants={fadeIn("up", 0.5 + index * 0.1)}
                      >
                        <Link
                          href={link.href}
                          className="w-fit flex items-center group"
                        >
                          <span className="capitalize font-bold hover-link">
                            {link.label}
                          </span>
                          <ArrowRight className="w-4 h-4 ml-2 group-active:translate-x-1 group-active:-translate-y-1 group-hover:scale-110 group-hover:-rotate-45 transition-all ease-in-out duration-300" />
                        </Link>
                      </motion.li>
                    )
                )}
              </ul>
            </motion.div>

            {/* Contact Info Section */}
            <motion.div variants={fadeIn("right", 0.4)}>
              <h2 className="text-xl font-semibold mb-4">Contact Info.</h2>
              <div className="grid space-y-2">
                <motion.div variants={fadeIn("up", 0.5)}>
                  <Link
                    href="tel:+919873214524"
                    className="flex items-center gap-2"
                  >
                    <FaPhone className="w-4 h-4" />
                    <span className="hover-link">+91 9873214524</span>
                  </Link>
                </motion.div>
                <motion.div variants={fadeIn("up", 0.6)}>
                  <Link
                    href="mailto:support@abcruise.com"
                    className="flex items-center gap-2"
                  >
                    <FaEnvelope className="w-4 h-4" />
                    <span className="hover-link">support@abcruise.com</span>
                  </Link>
                </motion.div>
                <motion.div variants={fadeIn("up", 0.7)}>
                  <Link
                    href="https://maps.app.goo.gl/9999999999999999"
                    className="flex items-center gap-2"
                  >
                    <FaMapMarkerAlt className="w-4 h-4" />
                    <span className="hover-link">
                      Near Ganga Ghat, Varanasi 000000, Uttar Pradesh, India
                    </span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-6 pt-6 border-t border-gray-600"
            variants={fadeIn("up", 0.8)}
          >
            <Link href="/" className="w-fit hover-link">
              &copy; {new Date().getFullYear()} All copyrights are reserved by
              AB Cruise
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
