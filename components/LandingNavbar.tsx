import React from "react";

function LandingNavbar() {
  const options = [
    {
      id: "1",
      name: "Home",
    },
    {
      id: "2",
      name: "Products",
    },
    {
      id: "3",
      name: "About",
    },
    {
      id: "4",
      name: "Contact",
    },
  ];
  return (
    <div className="fixed flex items-center justify-between px-5 h-16 bg-primary w-[100%] top-0 z-10">
      <div className="w-[140px]"></div>
      <div className="flex items-center gap-5">
        {options.map((item) => {
          return (
            <div key={item.id} className="w-[100px] flex justify-center">
              <h3 className="font-semibold text-white transition-all hover:text-xl cursor-pointer">
                {item.name}
              </h3>
            </div>
          );
        })}
      </div>
      <button className="btn-filled text-black">Login / Sign up</button>
    </div>
  );
}

export default LandingNavbar;
