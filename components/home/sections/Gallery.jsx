"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/utils";
import BlurFade from "@/components/ui/blur-fade";

const Gallery = ({ galleryData }) => {
  return (
    <section
      id="gallery"
      className="select-text w-full h-fit container mx-auto px-4 py-16 overflow-hidden"
    >
      <motion.h2
        variants={fadeIn("down", 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="font-elMessiri text-5xl 2xl:text-7xl font-bold text-[#002663]"
      >
        {galleryData?.title || "GALLERY"}
      </motion.h2>
      <motion.div
        variants={staggerContainer(0.2, 0.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
      >
        {galleryData?.galleryImages.map((image, index) => (
          <BlurFade
            key={index}
            delay={0.25 + index * 0.05}
            inView
            className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 relative h-[250px]"
          >
            <Image
              src={image?.imageUrl}
              alt={image?.alt || `Gallery image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </BlurFade>
        ))}
      </motion.div>
    </section>
  );
};

export default Gallery;
