"use client";

import React, { useState } from "react";

function Authenticate() {
  const [userType, setUserType] = useState("RETAILER");
  const [method, setMethod] = useState("LOGIN");
  const [fields, setFields] = useState({
    name: "",
    phoneNumber: "",
    password: "",
    email: "",
    managerId: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    phoneNumber: "",
    password: "",
    email: "",
    managerId: "",
  });

  return (
    <div className="flex w-screen h-screen">
      <div className="w-[50%] bg-red-600"></div>
      <div className="flex flex-col justify-center items-center w-[50%] bg-green">
        <p> {method === "LOGIN" ? "Login" : "Register"} as</p>
        <div className="flex flex-row">
          <p onClick={() => setUserType("RETAILER")}>Retailer</p>
          <p onClick={() => setUserType("CUSTOMER")}>Customer</p>
        </div>
        {method === "LOGIN" ? (
          <div className="flex flex-col gap-[20px]">
            {/* ------------------------------------------------------------------------------------------------------------------- */}
            <div>
              <p>Phone number</p>
              {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
              <input
                placeholder="Enter phone number"
                value={fields.phoneNumber}
                onChange={(e) => {
                  setFields((prev) => ({
                    ...prev,
                    phoneNumber: e.target.value,
                  }));
                  setErrors((prev) => ({ ...prev, phoneNumber: "" }));
                }}
                onBlur={() => {
                  if (fields.phoneNumber === "") {
                    setErrors((prev) => ({
                      ...prev,
                      phoneNumber: "Phone number cannot be empty",
                    }));
                  }
                }}
              />
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------- */}
            <div>
              <p>Password</p>
              {errors.password && <p>{errors.password}</p>}
              <input
                placeholder="Enter password"
                value={fields.password}
                onChange={(e) => {
                  setFields((prev) => ({ ...prev, password: e.target.value }));
                  setErrors((prev) => ({ ...prev, password: "" }));
                }}
                onBlur={() => {
                  if (fields.password === "") {
                    setErrors((prev) => ({
                      ...prev,
                      password: "password cannot be empty",
                    }));
                  }
                }}
              />
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------- */}
            <p>
              Don't have an account?
              <span onClick={() => setMethod("SIGN_IN")}>Register</span>
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-[20px]">
            {/* ------------------------------------------------------------------------------------------------------------------- */}
            <div>
              <p>Name</p>
              {errors.name && <p>{errors.name}</p>}
              <input
                placeholder="Enter name"
                value={fields.name}
                onChange={(e) => {
                  setFields((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }));
                  setErrors((prev) => ({ ...prev, name: "" }));
                }}
                onBlur={() => {
                  if (fields.name === "") {
                    setErrors((prev) => ({
                      ...prev,
                      name: "Name cannot be empty",
                    }));
                  }
                }}
              />
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------- */}
            <div>
              <p>Phone number</p>
              {errors.phoneNumber && <p>{errors.phoneNumber}</p>}
              <input
                placeholder="Enter phone number"
                value={fields.phoneNumber}
                onChange={(e) => {
                  setFields((prev) => ({
                    ...prev,
                    phoneNumber: e.target.value,
                  }));
                  setErrors((prev) => ({ ...prev, phoneNumber: "" }));
                }}
                onBlur={() => {
                  if (fields.phoneNumber === "") {
                    setErrors((prev) => ({
                      ...prev,
                      phoneNumber: "Phone number cannot be empty",
                    }));
                  }
                }}
              />
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------- */}
            <div>
              <p>Email</p>
              {errors.email && <p>{errors.email}</p>}
              <input
                placeholder="Enter email"
                value={fields.email}
                onChange={(e) => {
                  setFields((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }));
                  setErrors((prev) => ({ ...prev, email: "" }));
                }}
                onBlur={() => {
                  if (fields.email === "") {
                    setErrors((prev) => ({
                      ...prev,
                      email: "Email cannot be empty",
                    }));
                  }
                }}
              />
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------- */}
            <div>
              <p>Password</p>
              {errors.password && <p>{errors.password}</p>}
              <input
                placeholder="Enter password"
                value={fields.password}
                onChange={(e) => {
                  setFields((prev) => ({ ...prev, password: e.target.value }));
                  setErrors((prev) => ({ ...prev, password: "" }));
                }}
                onBlur={() => {
                  if (fields.password === "") {
                    setErrors((prev) => ({
                      ...prev,
                      password: "password cannot be empty",
                    }));
                  }
                }}
              />
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------- */}
            {userType === "RETAILER" && (
              <div>
                <p>Manager id</p>
                {errors.managerId && <p>{errors.managerId}</p>}
                <input
                  placeholder="Enter managerId"
                  value={fields.managerId}
                  onChange={(e) => {
                    setFields((prev) => ({
                      ...prev,
                      managerId: e.target.value,
                    }));
                    setErrors((prev) => ({ ...prev, managerId: "" }));
                  }}
                  onBlur={() => {
                    if (fields.managerId === "") {
                      setErrors((prev) => ({
                        ...prev,
                        managerId: "Manager id cannot be empty",
                      }));
                    }
                  }}
                />
              </div>
            )}
            {/* ------------------------------------------------------------------------------------------------------------------- */}
            <p>
              Already have an account?
              <span onClick={() => setMethod("LOGIN")}>Login</span>
            </p>
          </div>
        )}

        {method === "LOGIN" ? <button>Login</button> : <button>Sign in</button>}
      </div>
    </div>
  );
}

export default Authenticate;
