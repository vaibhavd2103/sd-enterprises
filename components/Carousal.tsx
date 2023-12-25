import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

function Carousal() {
  const carousalItems = [
    {
      id: "1",
      title: "Herbal Hair Oil",
      subTitle: "Rejuvenate Your Tresses",
      image: require("@/assets/HairOil.jpg"),
      description:
        "Immerse your hair in the goodness of nature with our herbal hair oil blend. Enriched with revitalizing botanicals like argan, amla, and hibiscus, experience luscious locks that shine with vitality.",
    },
    {
      id: "2",
      title: "Cotton Towel",
      subTitle: "Luxurious Comfort, Naturally",
      image: require("@/assets/Image2.jpg"),
      description:
        "Wrap yourself in pure comfort with our sustainably sourced cotton towels. Indulge in luxurious softness and exceptional absorbency, crafted to elevate your everyday routine with nature's touch.",
    },
    {
      id: "3",
      title: "Sanitary Napkins",
      subTitle: "Gentle Care for You",
      image: require("@/assets/Image3.jpg"),
      description:
        "Empower your feminine care routine with our ultra-soft and absorbent sanitary pads. Crafted with organic cotton, they provide comfort and confidence, keeping you at ease throughout the day.",
    },
    {
      id: "4",
      title: "Herbal Shampoo",
      subTitle: "Pure Elegance for Your Hair",
      image: require("@/assets/Image2.jpg"),
      description:
        "Indulge in our herbal shampoo, meticulously formulated to cleanse gently and restore your hair's natural balance. Free from harsh chemicals, it embraces your hair in a nurturing embrace, leaving it soft and manageable.",
    },
  ];
  return (
    <div className="py-[1px] gap-[1px] flex bg-white w-screen">
      {carousalItems.map((item) => {
        return (
          <div
            key={item.id}
            className="group bg-black relative flex flex-col items-center w-[25%] hover:w-screen transition-all duration-500 rounded-md p-2 h-screen justify-center"
          >
            <Image
              src={item.image}
              alt="image"
              className="object-cover absolute z-10 h-[100%] opacity-40 group-hover:opacity-100 transition-all duration-500"
            />
            <div className="flex flex-col items-center justify-center w-[90%] z-20 group-hover:backdrop-blur-xl rounded-xl group-hover:bg-[#0003] group-hover:p-2 ">
              <h1 className="text-center font-bold text-2xl text-white">
                {item.title}
              </h1>
              <p className="text-center text-white">{item.subTitle}</p>
              <p
                key={item.id}
                className="hidden text-center text-white group-hover:flex"
              >
                {item.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Carousal;
