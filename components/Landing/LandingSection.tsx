import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import LandingCoverPhoto from "@/assets/LandingCoverPhoto.jpg";

function LandingSection() {
  return (
    <div className="w-screen flex items-center justify-center flex-col relative bg-fixed h-screen">
      <Image
        src={LandingCoverPhoto}
        alt="landing image"
        className="fixed z-0 object-cover w-screen h-screen"
      />
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
  );
}

export default LandingSection;
