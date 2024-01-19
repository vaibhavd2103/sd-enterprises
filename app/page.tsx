"use client";

import LandingNavbar from "@/components/Landing/LandingNavbar";
import { motion, useScroll, useTransform } from "framer-motion";
import LandingSection from "@/components/Landing/LandingSection";
import LandingProducts from "@/components/Landing/LandingProducts";

export default function Landing() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="flex flex-col w-screen">
      <LandingNavbar />
      <div className="flex flex-col relative mt-16 z-0">
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="w-screen h-1 bg-secondary fixed z-20 top-0 left-0 right-0 mt-16 self-start"
        />
        <LandingSection />
        <LandingProducts />
      </div>
    </div>
  );
}
