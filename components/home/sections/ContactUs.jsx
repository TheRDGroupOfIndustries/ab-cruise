"use client";

import React, { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import { sendEmail } from "@/lib/actions/sendEmail.action";

const ContactUs = ({ contactUsData }) => {
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
            <ContactForm />
          </motion.div>

          {/* Right Contact Options */}
          <motion.div
            className="w-full h-full relative bg-white/80 backdrop-blur-md rounded-3xl p-4 text-black overflow-hidden"
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
              className="w-full min-h-60 h-fit max-h-[21rem] relative bg-white/80 backdrop-blur-md rounded-3xl mt-6 overflow-hidden"
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
                className="w-full min-h-60 h-full max-h-[21rem] relative rounded-2xl"
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

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePhone = (phone) => {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phone);
  };

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    if (!value.trim()) {
      setErrors((prev) => ({ ...prev, name: "Name is required" }));
    } else {
      setErrors((prev) => ({ ...prev, name: "" }));
    }
  };

  const handleEmailChange = (e) => {
    const noSpaceName = e.target.value.replace(/\s/g, "");
    setEmail(noSpaceName);
    if (!noSpaceName) {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
    } else if (!validateEmail(noSpaceName)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email format" }));
    } else {
      setErrors((prev) => ({ ...prev, email: "" }));
    }
  };

  const handlePhoneChange = (e) => {
    const inputPhone = e.target.value
      .replace(/[^\d]/g, "")
      .slice(0, 10)
      .replace(/\s/g, "");
    setPhone(inputPhone);
    if (!inputPhone) {
      setErrors((prev) => ({ ...prev, phone: "Phone number is required" }));
    } else if (!validatePhone(inputPhone)) {
      setErrors((prev) => ({
        ...prev,
        phone: "Minimum phone number should be 10",
      }));
    } else {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    if (!e.target.value) {
      setErrors((prev) => ({ ...prev, message: "Message is required" }));
    } else {
      setErrors((prev) => ({ ...prev, message: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formErrors = {};

    // validating form fields
    if (!name) formErrors.name = "Name is required";
    if (!email) formErrors.email = "Email is required";
    else if (!validateEmail(email)) formErrors.email = "Invalid email format";

    if (!phone) formErrors.phone = "Phone number is required";
    else if (!validatePhone(phone))
      formErrors.phone = "Invalid phone number format";

    if (!message) formErrors.message = "Message is required";

    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      setIsSubmitting(true);

      const submitForm = async () => {
        const phoneWithCountryCode = `${countryCode} ${phone}`;
        const response = await sendEmail(
          name,
          email,
          phoneWithCountryCode,
          message
        );
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        return response;
      };

      try {
        toast.promise(submitForm(), {
          loading: "Sending your message...",
          success: (response) =>
            response.message ||
            "Message sent successfully! We'll reach out to you soon...",
          error: (error) =>
            error.message || "Failed to send message. Please try again later..",
        });
      } catch (error) {
        console.error("Error submitting form:", error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <motion.div className="space-y-1" variants={fadeIn("up", 0.7)}>
        <p className="text-4xl text-gray-950">Write us a message!</p>
        <p className="text-gray-800">We would love to answer your questions!</p>
      </motion.div>
      <motion.div variants={fadeIn("up", 0.8)} className="w-full h-fit">
        <input
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          placeholder="Full name"
          className="w-full p-4 rounded-lg bg-[#002663] text-white placeholder-gray-400"
        />
        {errors.name && (
          <div className="py-0.5">
            <span className="animate-slide-down text-red-500 text-sm">
              {errors.name}
            </span>
          </div>
        )}
      </motion.div>
      <motion.div variants={fadeIn("up", 0.9)} className="w-full h-fit">
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Your email"
          className="w-full p-4 rounded-lg bg-[#002663] text-white placeholder-gray-400"
        />
        {errors.email && (
          <div className="py-0.5">
            <span className="animate-slide-down text-red-500 text-sm">
              {errors.email}
            </span>
          </div>
        )}
      </motion.div>
      <motion.div variants={fadeIn("up", 1)} className="w-full h-fit">
        <div className="w-full h-fit flex-center gap-2">
          <input
            name="phone_country_code"
            type="text"
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            placeholder="+91"
            className="w-16 flex-1 p-4 rounded-lg bg-[#002663] text-white placeholder-gray-400"
          />
          <input
            name="phone"
            type="tel"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="Your Phone"
            className="w-full p-4 rounded-lg bg-[#002663] text-white placeholder-gray-400"
          />
        </div>
        {errors.phone && (
          <div className="py-0.5">
            <span className="animate-slide-down text-red-500 text-sm">
              {errors.phone}
            </span>
          </div>
        )}
      </motion.div>
      <motion.div variants={fadeIn("up", 1.1)} className="w-full h-fit">
        <textarea
          placeholder="Your message"
          name="message"
          value={message}
          onChange={handleMessageChange}
          rows="4"
          className="w-full p-4 rounded-lg bg-[#002663] text-white placeholder-gray-400"
        />
        {errors.message && (
          <div className="py-0.5">
            <span className="animate-slide-down text-red-500 text-sm">
              {errors.message}
            </span>
          </div>
        )}
      </motion.div>
      <motion.div variants={fadeIn("up", 1.2)}>
        <Button
          type="submit"
          effect="gooeyLeft"
          icon={CiLocationArrow1}
          iconPlacement="right"
          disabled={isSubmitting || Object.values(errors).some(Boolean)}
          className={`w-full h-12 text-white font-semibold bg-gradient-to-tr from-[#001556] to-[#002FBC] ${
            isSubmitting || Object.values(errors).some(Boolean) ?
              "opacity-50 cursor-not-allowed"
            : "active:translate-y-0.5 hover:bg-[length:400%_400%] hover:animate-gradient hover:border-none transition-all ease-in-out duration-300"
          } `}
        >
          {isSubmitting ? "Sending Message..." : "Send Message"}
        </Button>
      </motion.div>
    </form>
  );
};
