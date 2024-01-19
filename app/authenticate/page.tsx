"use client";

import React, { useState } from "react";

function Authenticate() {
  const [userType, setUserType] = useState("RETAILER");
  const [method, setMethod] = useState("LOGIN");
  return (
    <div className="flex w-screen h-screen">
      <div className="w-[50%] bg-red-600"></div>
      <div className="flex flex-col justify-center items-center w-[50%] bg-green">
        <p> {method === "LOGIN" ? "Login" : "Sign in"} as</p>
        <div className="flex flex-row">
          <p onClick={() => setUserType("RETAILER")}>Retailer</p>
          <p onClick={() => setUserType("CUSTOMER")}>Customer</p>
        </div>
        {method === "LOGIN" ? (
          <div className="flex flex-col">
            <input placeholder="Enter phone number" />
            <input placeholder="Enter password" />
            <p>
              {`Don't have an account?`}
              <span onClick={() => setMethod("SIGN_IN")}>Register</span>
            </p>
          </div>
        ) : (
          <div className="flex flex-col">
            <input placeholder="Enter name" />
            <input placeholder="Enter phone number " />
            <input placeholder="Enter email" />
            <input placeholder="Enter password" />
            {userType === "RETAILER" && <input placeholder="Manager id" />}
            <p>
              Already have an account?
              <span onClick={() => setMethod("LOGIN")}>Login</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Authenticate;
