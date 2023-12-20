"use client";

import LandingNavbar from "@/components/LandingNavbar";
import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import { motion, useScroll } from "framer-motion";

export default function Landing() {
  const { scrollYProgress } = useScroll();
  return (
    <div className="flex flex-col w-screen">
      <LandingNavbar />
      <div className="flex flex-col relative mt-16">
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="w-screen h-1 bg-secondary fixed z-20 top-0 left-0 right-0 mt-16 self-start"
        />
        <div className="relative flex items-center w-screen aspect-video justify-end pr-10">
          <Image
            src={require("@/assets/HairOil.jpg")}
            alt="hair oil"
            className="absolute left-0 top-0"
          />
          {/* <Parallax speed={30}> */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-col max-w-[600px] w-[90vw] backdrop-blur-xl p-5 items-center z-20 mt-80"
          >
            <h1 className="text-white font-sans font-bold text-4xl">
              Hair Oil
            </h1>
            <p className="text-gray-light mt-4">
              {`Crafted with utmost care and a dedication to natural beauty, our herbal hair oil is a symphony of botanical goodness. Infused with a blend of time-honored extracts like nourishing coconut oil, revitalizing amla, and strengthening bhringraj, each drop is a testament to centuries of holistic hair care wisdom. We meticulously source and combine these potent herbs, harnessing their inherent properties to promote lush, vibrant hair. Our formulation aims not just to enhance hair's radiance but to nurture the scalp, fostering an environment where healthy hair thrives. From the soothing touch during application to the lustrous results, our herbal hair oil is a testament to nature's bounty, promising a journey towards stronger, silkier, and more resilient locks.`}
            </p>
          </motion.div>
          {/* </Parallax> */}
        </div>
        <div className="relative flex items-center w-screen aspect-video justify-start pl-10">
          <Image
            src={require("@/assets/Image2.jpg")}
            alt="hair oil"
            className="absolute left-0 top-0"
          />
          <Parallax speed={30}>
            <div className="flex flex-col max-w-[400px] backdrop-blur-xl p-5 items-center z-20 mt-80">
              <h1 className="text-white font-sans font-bold text-4xl">
                Hair Oil
              </h1>
              <p className="text-gray-light mt-4">
                {`Crafted with utmost care and a dedication to natural beauty, our herbal hair oil is a symphony of botanical goodness. Infused with a blend of time-honored extracts like nourishing coconut oil, revitalizing amla, and strengthening bhringraj, each drop is a testament to centuries of holistic hair care wisdom. We meticulously source and combine these potent herbs, harnessing their inherent properties to promote lush, vibrant hair. Our formulation aims not just to enhance hair's radiance but to nurture the scalp, fostering an environment where healthy hair thrives. From the soothing touch during application to the lustrous results, our herbal hair oil is a testament to nature's bounty, promising a journey towards stronger, silkier, and more resilient locks.`}
              </p>
            </div>
          </Parallax>
        </div>
        <div className="relative flex items-center w-screen aspect-video justify-end pr-10">
          <Image
            src={require("@/assets/Image3.jpg")}
            alt="hair oil"
            className="absolute left-0 top-0"
          />
          <Parallax speed={30}>
            <div className="flex flex-col w-[40vw] backdrop-blur-xl p-5 items-center z-20 mt-80">
              <h1 className="text-white font-sans font-bold text-4xl">
                Hair Oil
              </h1>
              <p className="text-gray-light mt-4">
                {`Crafted with utmost care and a dedication to natural beauty, our herbal hair oil is a symphony of botanical goodness. Infused with a blend of time-honored extracts like nourishing coconut oil, revitalizing amla, and strengthening bhringraj, each drop is a testament to centuries of holistic hair care wisdom. We meticulously source and combine these potent herbs, harnessing their inherent properties to promote lush, vibrant hair. Our formulation aims not just to enhance hair's radiance but to nurture the scalp, fostering an environment where healthy hair thrives. From the soothing touch during application to the lustrous results, our herbal hair oil is a testament to nature's bounty, promising a journey towards stronger, silkier, and more resilient locks.`}
              </p>
            </div>
          </Parallax>
        </div>
      </div>
    </div>
  );
}
