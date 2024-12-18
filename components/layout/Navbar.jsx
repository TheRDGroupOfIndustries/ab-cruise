"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { fadeIn, staggerContainer } from "@/lib/utils";
import { motion } from "framer-motion";
import { links } from "@/constant/data";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe all sections
    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => {
      document.querySelectorAll("section[id]").forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <nav className="select-none fixed top-0 left-0 right-0 z-50 w-full h-16 overflow-hidden">
      {/* Background SVG */}
      <div className="absolute inset-0 w-full h-4 bg-white rounded-b-full"></div>
      <div className="absolute top-[0.967rem] left-0 w-full flex-center">
        <div className="w-[1920px] h-[50px] relative z-50">
          <Image
            src="/assets/TOP_CURVE.svg"
            alt="background curve"
            fill
            className="w-full"
          />
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full z-[51]">
        <motion.div
          className="max-w-7xl flex-center gap-6 mx-auto p-4"
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          animate="show"
        >
          {links.map((link, index) => {
            const isActive =
              activeSection === "hero"
                ? link.href === "/"
                : link.href === "/#" + activeSection;

            return (
              <motion.div key={index} variants={fadeIn("up", index * 0.1)}>
                <Link
                  href={link.href}
                  className={`text-xl capitalize ${
                    link.label !== "ab"
                      ? isActive
                        ? "text-[#0060FA] underline underline-offset-8"
                        : "hover-link-underline text-gray-800 hover:text-[#0060FA]"
                      : "rounded-full bg-gradient-to-tr from-[#0E5AD6] via-[#002663] to-[#0060FA] text-white text-2xl font-['El_Messiri'] font-semibold p-2"
                  } ease-in-out duration-300`}
                >
                  {link.label}
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
