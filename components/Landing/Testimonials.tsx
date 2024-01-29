import React from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import SanitaryNapkinIcon from "@/assets/SanitaryIcon";
import HairOilIcon from "@/assets/HairOilIcon";

function Testimonials() {
  const reviews = [
    {
      id: "1",
      user_name: "Emily",
      product_type: "OIL",
      rating: 4.5,
      review_text:
        "I've been using this hair oil for a month now and I'm impressed with the results. My hair feels softer and looks shinier than ever before. The oil has a pleasant fragrance that lingers throughout the day.",
    },
    {
      id: "2",
      user_name: "Michael",
      product_type: "OIL",
      rating: 3.8,
      review_text:
        "This hair oil works okay for me. It does make my hair smoother but I haven't noticed much improvement in terms of hair growth. The scent is nice, not too overpowering.",
    },
    {
      id: "3",
      user_name: "Sophia",
      product_type: "OIL",
      rating: 5,
      review_text:
        "Absolutely love this hair oil! It has transformed my dry, frizzy hair into silky smooth locks. The natural ingredients are gentle on my scalp and the results are incredible. Will definitely repurchase!",
    },
    {
      id: "4",
      user_name: "Jessica",
      product_type: "NAPKIN",
      rating: 4.2,
      review_text:
        "These sanitary napkins are comfortable to wear and provide great protection. They are super absorbent and keep me feeling fresh and dry all day long. The packaging is discreet and convenient for carrying in my bag.",
    },
    {
      id: "5",
      user_name: "David",
      product_type: "NAPKIN",
      rating: 3.5,
      review_text:
        "I found these sanitary napkins to be just average. They do the job but nothing exceptional. The adhesive could be stronger as they tend to shift during the day.",
    },
    {
      id: "6",
      user_name: "Sophie",
      product_type: "NAPKIN",
      rating: 4.8,
      review_text:
        "Best sanitary napkins I've ever used! They are incredibly soft and gentle on my skin. Plus, they offer excellent leak protection, giving me peace of mind throughout my day. Highly recommend!",
    },
    {
      id: "7",
      user_name: "Emily",
      product_type: "OIL",
      rating: 4.5,
      review_text:
        "I've been using this hair oil for a month now and I'm impressed with the results. My hair feels softer and looks shinier than ever before. The oil has a pleasant fragrance that lingers throughout the day.",
    },
    {
      id: "8",
      user_name: "Michael",
      product_type: "OIL",
      rating: 3.8,
      review_text:
        "This hair oil works okay for me. It does make my hair smoother but I haven't noticed much improvement in terms of hair growth. The scent is nice, not too overpowering.",
    },
    {
      id: "9",
      user_name: "Sophia",
      product_type: "OIL",
      rating: 5,
      review_text:
        "Absolutely love this hair oil! It has transformed my dry, frizzy hair into silky smooth locks. The natural ingredients are gentle on my scalp and the results are incredible. Will definitely repurchase!",
    },
  ];

  const iconMotion = {
    rest: {
      color: "grey",
      x: 0,
      transition: {
        duration: 2,
        type: "tween",
        ease: "easeIn",
      },
    },
    hover: {
      color: "blue",
      x: 30,
      transition: {
        duration: 0.4,
        type: "tween",
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="bg-white w-screen p-8 flex flex-col items-center">
      <h3 className="text-2xl md:text-4xl drop-shadow-2xl mb-8 font-semibold text-center">
        Testimonials
      </h3>
      <div className="grid md:grid-cols-3 gap-10">
        {reviews.map((item) => {
          return (
            <motion.div
              whileHover={{
                scale: 1.1,
                transition: {
                  duration: 0.3,
                },
              }}
              className="relative group shadow-lg rounded-xl p-4 text-slate-600 flex flex-col justify-center items-center gap-2 cursor-default hover:bg-slate-50 transition-all duration-200"
              key={item.id}
            >
              <div className="flex items-center justify-between w-full">
                <p className="text-slate-700 text-lg font-medium">
                  {item.user_name}
                </p>
                <div className="flex items-center gap-1">
                  <p className="text-yellow font-extrabold">{item.rating}</p>
                  <FaStar className="text-yellow" />
                </div>
              </div>
              <p>{item.review_text}</p>
              <motion.div className="transition-all invisible group-hover:visible absolute w-[calc(100%/3)] h-40 opacity-5">
                {item.product_type === "NAPKIN" ? (
                  <SanitaryNapkinIcon />
                ) : (
                  <HairOilIcon />
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Testimonials;
