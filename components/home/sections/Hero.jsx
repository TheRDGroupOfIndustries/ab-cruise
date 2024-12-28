// "use client";

// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { fadeIn, staggerContainer } from "@/lib/utils";
// import { Button } from "@/components/ui/button";
// import WordPullUp from "@/components/ui/word-pull-up";
// import BlurFade from "@/components/ui/blur-fade";

// const Hero = () => {
//   const router = useRouter();
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

//   const handleBook = () => router.push("/#booking-info");

//   return (
//     <section
//       id="hero"
//       className="select-none relative w-full h-[55vh] md:h-[70vh] lg:h-screen p-4 overflow-hidden"
//     >
//       <motion.div
//         variants={staggerContainer(0.2, 0.3)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0.25 }}
//         className="relative h-full w-full rounded-2xl flex-start bg-gradient-to-br from-blue-300 to-blue-700 animate-slide-up overflow-hidden"
//       >
//         <div className="w-5/6 max-w-6xl h-full p-4 sm:p-8 md:p-12 relative z-10">
//           <div className="w-5/6 h-full max-h-full relative flex flex-col items-start justify-start pt-8 2xl:pt-40 ml-0">
//             {/* <div className="w-full">
//               <WordPullUp
//                 words="AB CRUISE"
//                 className="font-elMessiri text-white text-5xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-9xl 2xl:text-10xl font-black leading-tight tracking-wider"
//               />
//               <motion.p
//                 variants={fadeIn("down", 0.5)}
//                 className="font-dmSans text-white text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-light leading-snug mb-4"
//               >
//                 Experience comfort and luxury on the trails of Ganges!
//               </motion.p>
//               <motion.div
//                 variants={fadeIn("up", 0.7)}
//                 className="w-full flex justify-start ml-1"
//               >
//                 <Button
//                   onClick={handleBook}
//                   size="lg"
//                   className="relative z-40 font-elMessiri md:h-12 2xl:scale-100 2xl:mr-10 px-6 sm:px-8 md:px-10 border border-white text-white font-semibold bg-gradient-to-tr from-[#001556] to-[#002FBC] to-100% rounded-full text-base sm:text-xl md:text-2xl hover:bg-[length:400%_400%] hover:animate-gradient hover:border-none transition-all ease-in-out duration-300"
//                 >
//                   Book now
//                 </Button>
//               </motion.div>
//             </div> */}
//                     <div className="w-full h-full">
//                       <WordPullUp
//                         words="AB Cruisers"
//                         className="font-elMessiri text-blue-600 text-4xl md:text-4xl font-black"
//                       />
//                       <div className="w-full h-full flex flex-col justify-center gap-2 md:p-4 overflow-hidden">
//                         <motion.p
//                           variants={fadeIn("up", 0.5)}
//                           className="font-dmSans text-[#002663] text-md md:text-3xl lg:text-4xl 2xl:text-5xl font-light leading-snug"
//                         >
//                           Experience comfort and luxury on the trails of Ganges!
//                         </motion.p>
//                         <motion.p
//                           variants={fadeIn("up", 0.7)}
//                           className="text-[10px] md:text-sm italic text-justif text-balance mb-2"
//                         >
//                           Discover the timeless charm of Varanasi with{" "}
//                           <strong>AB Cruisers</strong>, blending luxury and tradition on the
//                           serene Ganges. From private celebrations to tranquil getaways, we
//                           offer unmatched elegance and unforgettable memories.
//                         </motion.p>
//                         <motion.div variants={fadeIn("up", 0.9)} className="">
//                           <Button
//                             onClick={handleBook}
//                             size="lg"
//                             className="relative z-40 font-elMessiri md:h-12 2xl:scale-125 2xl:mr-10 px-6 sm:px-8 md:px-10 border border-white text-white font-semibold bg-gradient-to-tr from-[#001556] to-[#002FBC] to-100% rounded-full text-base sm:text-xl md:text-2xl hover:bg-[length:400%_400%] hover:animate-gradient hover:border-none transition-all ease-in-out duration-300"
//                           >
//                             Book now
//                           </Button>
//                         </motion.div>
//                       </div>
//                     </div>
//           </div>
          
//           <BlurFade
//             delay={0.8}
//             inView
//             xOffset={40}
//             className="absolute z-30 left-[50%] -bottom-20 w-5/6 h-[80%] sm:h-[60%] md:h-[80%] xl:h-[95%] 2xl:h-[90%]"
//           >
//             <Image
//               src="/assets/boat_2.png"
//               alt="AB Cruise Boat"
//               width={1200}
//               height={1200}
//               priority
//               className="w-full h-full object-contain"
//             />
//           </BlurFade>
//         </div>
//       </motion.div>
//     </section>
//   );
// };

// export default Hero;

"use client";

import { useRouter } from "next/navigation";
// import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import WordPullUp from "@/components/ui/word-pull-up";
import BlurFade from "@/components/ui/blur-fade";
import Image from "next/image";
// import BlurFade from "@/components/ui/blur-fade";

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
        className="relative h-full w-full bg-gradient-to-br from-blue-400 to-blue-800 rounded-xl flex-cente animate-slide-up overflow-hidden"
      >

        <div className="w-full h-full p-4 relative z-20">
          <WordPullUp
            words="AB Cruisers"
            className="font-elMessiri text-white text-4xl md:text-4xl xl:text-5xl font-black"
          />
          <div className="w-full h-full relative flex sm:items-start justify-start sm:justify-center flex-col gap-4 text-white pt-8 2xl:pt-12 overflow-hidden">
            <div className="w-fit max-w-3xl h-fit flex sm:items-start justify-start sm:justify-center flex-col gap-4 lg:gap-6">
              <motion.p
                variants={fadeIn("up", 0.5)}
                className="font-dmSans text-white text-md md:text-3xl lg:text-4xl 2xl:text-5xl text-left font-semibold overflow-hidden"
              >
                Experience comfort and luxury on the trails of Ganges!
              </motion.p>
              <motion.p
                variants={fadeIn("up", 0.7)}
                className="max-w-2xl text-[10px] md:text-sm italic text-left text-balanc mb-2 overflow-hidden"
              >
                Discover the timeless charm of Varanasi with{" "}
                <strong>AB Cruise</strong>, blending luxury and tradition on the
                serene Ganges. From private celebrations to tranquil getaways,
                we offer unmatched elegance and unforgettable memories.
              </motion.p>
              <motion.div variants={fadeIn("up", 0.9)} className="ml-0 sm:ml-8">
                <Button
                  onClick={handleBook}
                  size="lg"
                  effect="shine"
                  className="relative z-40 2xl:scale-125 2xl:mr-10 px-6 sm:px-8 md:px-10 border border-white text-white font-semibold bg-[#ffffff30] backdrop-blur-xl rounded-full text-base sm:text-xl md:text-2xl hover:border-none hover:bg-[#ffffff20] transition-all ease-in-out duration-300"
                >
                  Book now
                </Button>
              </motion.div>
            </div>
          </div>
          <BlurFade
            delay={0.8}
            inView
            xOffset={40}
            className="absolute z-30 left-[36%] -bottom-14 sm:-bottom-44 w-5/6 h-[80%] sm:h-[60%] md:h-[80%] xl:h-[95%] 2xl:h-[100%]"
          >
            <Image
              src="/assets/my_boat.png"
              alt="AB Cruise Boat"
              width={1280}
              height={1280}
              priority
              className="w-full h-full object-contain"
              style={{filter: "drop-shadow(30px 10px 6px #00000040)"}}
            />
          </BlurFade>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
