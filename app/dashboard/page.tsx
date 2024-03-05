"use client";
import { Drawer } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineMenu } from "react-icons/md";
function Dashboard() {
  const [toggleDrawer, setToggleDrawer] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between px-5 h-16 bg-primary w-[100%] top-0 z-10">
        <div className="flex flex-row items-center ">
          <button
            onClick={() => {
              setToggleDrawer(true);
            }}
          >
            <MdOutlineMenu size={30} />
          </button>
          <div className="flex flex-row items-center bg-white ml-20 w-[40%]">
            <CiSearch size={30} />
            <input className="w-[100%] " placeholder="search.." />
          </div>
        </div>
        <Image
          src={require("@/assets/HairOil.jpg")}
          alt="hair oil"
          className="w-[50px] h-[50px] left-0 top-0"
        />
      </div>
      <Drawer
        anchor={"left"}
        open={toggleDrawer}
        onClose={() => {
          setToggleDrawer(false);
        }}
      >
        <div className="bg-red w-[60vw] h-screen">
          <div className="h-16 flex items-center justify-center">
            <h1>SD Enterprises</h1>
          </div>
          <div className="flex justify-between flex-col bg-green h-[calc(100vh-4rem)]">
            <div className="p-[20px] flex flex-col gap-4">
              <h1>Add sold products</h1>
              <h1>My sold products</h1>
              <h1>All products</h1>
              <h1>Profile</h1>
              <h1>Settings</h1>
            </div>
            <div>
              <h1>Logout</h1>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

export default Dashboard;
