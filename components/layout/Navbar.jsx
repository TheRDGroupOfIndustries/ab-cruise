"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { fadeIn, staggerContainer } from "@/lib/utils";
import { motion } from "framer-motion";
import { links } from "@/constant/data";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

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
    <nav className="select-none fixed top-0 left-0 right-0 z-50 w-full h-16 lg:h-20 animate-slide-down overflow-hidden">
      {/* Background SVG */}
      <div className="hidden lg:block absolute inset-0 w-full h-4 bg-white rounded-b-full"></div>
      <div className="absolute top-[0.967rem] left-0 w-full flex justify-center">
        <div className="hidden lg:block w-[1920px] max-w-full h-[50px] relative z-50">
          <Image
            src="/assets/TOP_CURVE.svg"
            alt="background curve"
            fill
            className="w-full"
          />
        </div>
      </div>

      <div className="absolute top-4 left-0 w-full z-[51] flex items-center justify-end lg:justify-between px-4 lg:px-8">
        {/* desktop menu */}
        <motion.div
          className="hidden lg:flex max-w-7xl justify-center gap-6 mx-auto"
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
                  className={`text-sm lg:text-xl capitalize ${
                    link.label !== "ab"
                      ? isActive
                        ? "text-[#0060FA] underline underline-offset-8"
                        : "hover-link-underline text-gray-800 hover:text-[#0060FA]"
                      : "rounded-full bg-gradient-to-tr from-[#0E5AD6] via-[#002663] to-[#0060FA] text-white text-lg lg:text-2xl font-['El_Messiri'] font-semibold p-2 lg:p-3"
                  } ease-in-out duration-300`}
                >
                  {link.label}
                </Link>
              </motion.div>
            );
          })}
        </motion.div>

        {/* mobile menu */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="lg:hidden p-2 bg-[#0e5bd698] backdrop-blur-md rounded-md overflow-hidden">
              <Menu className="w-6 h-6 text-[#ffffff]" />
            </button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="p-6 bg-white/10 backdrop-blur-md"
          >
            <div className="w-14 h-14 flex-center rounded-full mb-4 bg-gradient-to-tr from-[#0E5AD6] via-[#002663] to-[#0060FA] text-white text-xl font-['El_Messiri'] font-semibold px-4 py-2">
              <Link href="/">
                <SheetClose>AB</SheetClose>
              </Link>
            </div>
            <div className="flex flex-col space-y-6">
              {links.map((link, index) => {
                const isActive =
                  activeSection === "hero"
                    ? link.href === "/"
                    : link.href === "/#" + activeSection;

                return (
                  link.label !== "ab" && (
                    <Link key={index} href={link.href} className="w-fit">
                      <SheetClose
                        className={`text-2xl capitalize ${
                          isActive
                            ? "text-[#0060FA] underline underline-offset-8"
                            : "text-white hover:text-[#0060FA]"
                        } ease-in-out duration-300`}
                      >
                        {link.label}
                      </SheetClose>
                    </Link>
                  )
                );
              })}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
