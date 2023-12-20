"use client";

import LandingNavbar from "@/components/LandingNavbar";
import Image from "next/image";
import { Parallax, useParallax } from "react-scroll-parallax";

export default function Landing() {
  return (
    <div className="flex flex-col w-screen items-center">
      <LandingNavbar />
      <div className="flex flex-col relative">
        <div className="relative flex items-center w-screen">
          <Image src={require("@/assets/HairOil.jpg")} alt="hair oil" />
          <Parallax speed={30}>
            <div className="absolute flex flex-col right-10 -top-10 w-[40vw] backdrop-blur-xl p-5 items-center z-20">
              <h1 className="text-white font-sans font-bold text-4xl">
                Hair Oil
              </h1>
              <p className="text-gray-light mt-4">
                {`Crafted with utmost care and a dedication to natural beauty, our herbal hair oil is a symphony of botanical goodness. Infused with a blend of time-honored extracts like nourishing coconut oil, revitalizing amla, and strengthening bhringraj, each drop is a testament to centuries of holistic hair care wisdom. We meticulously source and combine these potent herbs, harnessing their inherent properties to promote lush, vibrant hair. Our formulation aims not just to enhance hair's radiance but to nurture the scalp, fostering an environment where healthy hair thrives. From the soothing touch during application to the lustrous results, our herbal hair oil is a testament to nature's bounty, promising a journey towards stronger, silkier, and more resilient locks.`}
              </p>
            </div>
          </Parallax>
        </div>
        <div className="relative flex items-center w-screen">
          <Image src={require("@/assets/Image2.jpg")} alt="hair oil" />
          <Parallax speed={30}>
            <div className="absolute flex flex-col -left-[95vw] -top-20 w-[40vw] backdrop-blur-xl p-5 items-center z-20">
              <h1 className="text-white font-sans font-bold text-4xl">
                Hair Oil
              </h1>
              <p className="text-gray-light mt-4">
                {`Crafted with utmost care and a dedication to natural beauty, our herbal hair oil is a symphony of botanical goodness. Infused with a blend of time-honored extracts like nourishing coconut oil, revitalizing amla, and strengthening bhringraj, each drop is a testament to centuries of holistic hair care wisdom. We meticulously source and combine these potent herbs, harnessing their inherent properties to promote lush, vibrant hair. Our formulation aims not just to enhance hair's radiance but to nurture the scalp, fostering an environment where healthy hair thrives. From the soothing touch during application to the lustrous results, our herbal hair oil is a testament to nature's bounty, promising a journey towards stronger, silkier, and more resilient locks.`}
              </p>
            </div>
          </Parallax>
        </div>
        <div className="relative flex items-center w-screen">
          <Image src={require("@/assets/Image3.jpg")} alt="hair oil" />
          <Parallax speed={30}>
            <div className="absolute flex flex-col right-10 -top-10 w-[40vw] backdrop-blur-xl p-5 items-center z-20">
              <h1 className="text-black font-sans font-bold text-4xl">
                Hair Oil
              </h1>
              <p className="text-black mt-4">
                {`Crafted with utmost care and a dedication to natural beauty, our herbal hair oil is a symphony of botanical goodness. Infused with a blend of time-honored extracts like nourishing coconut oil, revitalizing amla, and strengthening bhringraj, each drop is a testament to centuries of holistic hair care wisdom. We meticulously source and combine these potent herbs, harnessing their inherent properties to promote lush, vibrant hair. Our formulation aims not just to enhance hair's radiance but to nurture the scalp, fostering an environment where healthy hair thrives. From the soothing touch during application to the lustrous results, our herbal hair oil is a testament to nature's bounty, promising a journey towards stronger, silkier, and more resilient locks.`}
              </p>
            </div>
          </Parallax>
        </div>
      </div>
    </div>
  );
}
