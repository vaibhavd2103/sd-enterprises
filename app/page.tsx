"use client";

import LandingNavbar from "@/components/Landing/LandingNavbar";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import LandingSection from "@/components/Landing/LandingSection";
import LandingProducts from "@/components/Landing/LandingProducts";
import Image from "next/image";
import LandingCoverPhoto from "@/assets/LandingCoverPhoto.jpg";
import Testimonials from "@/components/Landing/Testimonials";
import JoinAsRetailer from "@/components/Landing/JoinAsRetailer";

export default function Landing() {
  const { scrollYProgress, scrollY } = useScroll();
  let scrollValue = useTransform(scrollY, [0, 900], ["0%", "100%"]);
  return (
    <div className="flex flex-col w-screen">
      <LandingNavbar />
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="w-screen h-1 bg-secondary fixed z-10 top-0 left-0 right-0 mt-16 self-start"
      />
      <div className="flex flex-col relative mt-16 z-0">
        {/* <LandingSection /> */}
        <div className="w-screen flex items-center justify-center flex-col relative bg-fixed h-screen">
          <Image
            src={LandingCoverPhoto}
            alt="landing image"
            className="absolute object-cover w-screen h-screen"
          />
          {/* <motion.div
            className="absolute object-cover w-screen h-screen bg-white"
            style={{ opacity: scrollValue }}
          ></motion.div> */}
          <div className="z-10 flex flex-col items-center gap-4">
            <h1 className="font-serif text-white text-6xl font-semibold text-center drop-shadow-2xl">
              {`Nature's Haven: `}
              <span className="text-secondary">{"Unveil Your Wellness"}</span>
            </h1>
            <h3 className="font-mono text-gray-light text-3xl font-semibold text-center max-w-[600px] drop-shadow-lg">
              Discover Your Essential Care Routine with Our Trusted Products
            </h3>
          </div>
        </div>
        <div className="w-screen flex items-center justify-center flex-col bg-transparent relative">
          <div className="bg-gradient-to-t from-white to-transparent w-screen h-[300px] absolute -top-[300px]"></div>
          <h3 className="text-black text-2xl md:text-4xl font-semibold mb-8 text-center">
            Some of our best selling products!
          </h3>
          <div className="relative">
            <LandingProducts />
            <div className="invisible md:visible bg-gradient-to-b from-white to-transparent w-screen h-[200px] absolute top-[0px]"></div>
            <div className="invisible md:visible bg-gradient-to-t from-white to-transparent w-screen h-[200px] absolute bottom-[0px]"></div>
          </div>
        </div>
        <Testimonials />
        <div className="w-full flex flex-col justify-center items-center overflow-hidden bg-primary p-6">
          <h3 className="text-white text-2xl md:text-4xl font-semibold mb-8 text-center">
            Want to be a part of our growing community?
          </h3>
          <JoinAsRetailer />
        </div>
      </div>
    </div>
  );
}
