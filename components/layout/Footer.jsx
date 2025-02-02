"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const iconMap = {
  FaFacebook: FaFacebook,
  FaTwitter: FaTwitter,
  FaInstagram: FaInstagram,
  FaLinkedin: FaLinkedin,
};

const Footer = ({ footerData, navData, contactUsData }) => {
  const pathname = usePathname();
  if (pathname.includes("/studio")) return null;

  return (
    <motion.footer
      className="select-text w-full text-white p-4 overflow-hidden"
      variants={staggerContainer(0.2, 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.05 }}
    >
      <motion.div
        className="bg-[#00205B] rounded-3xl p-6"
        variants={fadeIn("up", 0.2)}
      >
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* logo and description section */}
            <motion.div variants={fadeIn("left", 0.3)}>
              <h2 className="text-2xl md:text-4xl 2xl:text-5xl font-bold mb-4">
                <Link
                  href="/"
                  className="w-fit hover-link font-elMessiri font-bold"
                >
                  {footerData?.heading || "AB Cruisers"}
                </Link>
              </h2>
              <p
                className="text-sm italic text-justify text-balance mb-4"
                dangerouslySetInnerHTML={{
                  __html:
                    footerData?.description?.replace(
                      /AB Cruisers/g,
                      "<strong>AB Cruisers</strong>"
                    ) || "",
                }}
              />

              <div className="flex gap-4">
                {footerData?.socialLinks?.map((link, index) => {
                  const IconComponent = iconMap[link.icon];
                  return (
                    <Link
                      href={link.href}
                      target="_blank"
                      key={index}
                      title={link.label}
                      className="flex items-center justify-center w-8 h-8 bg-white text-[#00205B] rounded-full hover:scale-110 transition-transform"
                    >
                      <IconComponent />
                    </Link>
                  );
                })}
              </div>
            </motion.div>

            {/* nav links section */}
            <motion.div
              variants={fadeIn("up", 0.4)}
              className="w-full h-fit md:flex-center flex-col"
            >
              <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
              <ul className="space-y-2">
                {navData?.links.map(
                  (link, index) =>
                    link.label !== "AB" && (
                      <motion.li
                        key={index}
                        variants={fadeIn("up", 0.5 + index * 0.1)}
                        className="w-fit overflow-hidden"
                      >
                        <Link
                          href={link.href}
                          className="w-fit flex-center gap-1 -translate-x-4 hover:translate-x-0 group ease-in-out duration-200"
                        >
                          <ArrowRight className="w-4 h-4 group-active:translate-x-1 group-active:-translate-y-1 group-hover:scale-110 group-hover:-rotate-45 transition-all ease-in-out duration-500" />

                          <span className="capitalize group-hover-link-underline">
                            {link.label}
                          </span>
                        </Link>
                        {/* <Link
                          href={link.href}
                          target="_blank"
                          className="w-fit flex items-center group"
                        >
                          <span className="capitalize group-hover-link-underline">
                            {link.label}
                          </span>
                          <ArrowRight className="w-4 h-4 ml-2 group-active:translate-x-1 group-active:-translate-y-1 group-hover:scale-110 group-hover:-rotate-45 transition-all ease-in-out duration-300" />
                        </Link> */}
                      </motion.li>
                    )
                )}
              </ul>
            </motion.div>

            {/* contact info section */}
            <motion.div variants={fadeIn("right", 0.4)}>
              <h2 className="text-xl font-semibold mb-4">Contact Info.</h2>
              <div className="grid space-y-2">
                <motion.div
                  variants={fadeIn("up", 0.5)}
                  className="w-fit pb-1 overflow-hidden"
                >
                  <Link
                    href={
                      ((
                        contactUsData?.contactInfo?.phone?.link?.includes(
                          "https://wa.me/"
                        )
                      ) ?
                        contactUsData?.contactInfo?.phone?.link
                      : `tel:${contactUsData?.contactInfo?.phone?.link}`) ||
                      "tel:+918353936768"
                    }
                    target="_blank"
                    className="flex items-center gap-3 group"
                  >
                    <FaPhone className="w-4 h-4" />
                    <span className="group-hover-link">
                      {contactUsData?.contactInfo?.phone?.number ||
                        "+91 8353936768"}
                    </span>
                  </Link>
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.6)}
                  className="w-fit pb-1 overflow-hidden"
                >
                  <Link
                    href={`mailto:${contactUsData?.contactInfo?.email?.link || "support@abcruisers.com"}`}
                    target="_blank"
                    className="flex items-center gap-3 group"
                  >
                    <FaEnvelope className="w-4 h-4" />
                    <span className="group-hover-link">
                      {contactUsData?.contactInfo?.email?.emailAddress ||
                        "support@abcruisers.com"}
                    </span>
                  </Link>
                </motion.div>
                <motion.div
                  variants={fadeIn("up", 0.7)}
                  className="w-fit pb-1 overflow-hidden"
                >
                  <Link
                    href={
                      contactUsData?.contactInfo?.address?.iframe ||
                      `https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${encodeURIComponent(
                        contactUsData?.contactInfo?.address?.fullAddress ||
                          "Hotel Ganga Monastery, Ganga Ghat, Varanasi, Uttar Pradesh, India"
                      )}&t=&z=14&ie=UTF8&iwloc=B&output=embed` ||
                      "https://maps.app.goo.gl/h4aJfGBaoJuBqqB66"
                    }
                    target="_blank"
                    className="w-fit flex items-center gap-3 group"
                  >
                    <FaMapMarkerAlt className="w-6 h-6" />
                    <span className="group-hover-link text-balance">
                      {contactUsData?.contactInfo?.address?.fullAddress ||
                        "Hotel Ganga Monastery, Ganga Ghat, Varanasi, Uttar Pradesh, India."}
                    </span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            {/* legal & support */}
            <motion.div
              variants={fadeIn("right", 0.4)}
              className="w-full h-fit md:flex-center flex-col"
            >
              <h2 className="text-xl font-semibold mb-4">Legal & Support</h2>
              <div className="grid space-y-2">
                {footerData?.legalAndSupport?.map((link, index) => (
                  <motion.div
                    variants={fadeIn("up", 0.5)}
                    key={index}
                    className="w-fit overflow-hidden"
                  >
                    <Link
                      href={link.href}
                      target="_blank"
                      className="w-fit flex-center gap-1 -translate-x-4 hover:translate-x-0 group ease-in-out duration-200"
                    >
                      <ArrowRight className="w-4 h-4 group-active:translate-x-1 group-active:-translate-y-1 group-hover:scale-110 group-hover:-rotate-45 transition-all ease-in-out duration-500" />

                      <span className="group-hover-link-underline">
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="text-center mt-6 pt-6 border-t border-gray-600"
            variants={fadeIn("up", 0.8)}
          >
            <span
              className="text-xs sm:text-sm md:text-base text-gray-300 text-balance"
              dangerouslySetInnerHTML={{
                __html:
                  footerData?.disclaimer?.replace(
                    /Disclaimer/g,
                    "<strong>Disclaimer</strong>"
                  ) || "",
              }}
            />
            <br />
            <Link href="/" className="w-fit hover-link mt-4">
              &copy; {new Date().getFullYear()} {footerData?.abRights}
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
