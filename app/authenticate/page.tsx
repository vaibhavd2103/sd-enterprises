"use client";

import { SIGN_UP } from "@/APIs/Authentication.api";
import React, { useState } from "react";

function Authenticate() {
  const [userType, setUserType] = useState("RETAILER");
  const [method, setMethod] = useState("LOGIN");
  const [loading, setLoading] = useState(false);

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

  const validator = () => {
    let valid: boolean = true;

    if (!fields.name) {
      valid = false;
      setErrors((prev) => ({ ...prev, name: "Name cannot be empty" }));
    }
    if (!fields.phoneNumber) {
      valid = false;
      setErrors((prev) => ({
        ...prev,
        phoneNumber: "Phone number cannot be empty",
      }));
    }
    if (fields.password.length < 6) {
      valid = false;
      setErrors((prev) => ({
        ...prev,
        password: "Password must be at least 6 characters",
      }));
    }
    if (!fields.managerId) {
      valid = false;
      setErrors((prev) => ({
        ...prev,
        managerId: "Manager ID cannot be empty",
      }));
    }
    return valid;
  };

  /* ------------------------------------------------------------------------------------------------------------------- */

  const signUp = async () => {
    setLoading(true);
    const body = {
      name: fields.name,
      email: fields.email,
      password: fields.password,
      phone_number: fields.phoneNumber,
      manager_id: fields.managerId,
    };
    await SIGN_UP(body)
      .then((res) => {
        console.log(res);
        setMethod("LOGIN");
        setFields({
          name: "",
          phoneNumber: "",
          password: "",
          email: "",
          managerId: "",
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  /* ------------------------------------------------------------------------------------------------------------------- */

  return (
    <div className="flex w-screen h-screen">
      <div className="w-[50%] bg-red hidden sm:flex"></div>
      <div className="flex flex-col justify-center items-center w-[50%]">
        <p className="text-[30px] font-medium text-primary mb-2">
          {method === "LOGIN" ? "Login" : "Register"} as
        </p>
        <div className="flex flex-row w-[50%] justify-evenly mb-2">
          <div
            className="bg-primary w-[50%] flex justify-center text-white font-bold py-2 border-2 border-primary rounded-md cursor-pointer"
            onClick={() => setUserType("RETAILER")}
          >
            Retailer
          </div>
          <div
            className="w-[50%] flex justify-center text-primary font-bold py-2 border-2 border-primary rounded-md cursor-pointer"
            onClick={() => setUserType("CUSTOMER")}
          >
            Customer
          </div>
        </div>
        {method === "LOGIN" ? (
          <div className="flex flex-col gap-[20px] w-[50%] items-center">
            {/* ------------------------------------------------------------------------------------------------------------------- */}
            <div className="w-[100%]">
              <p className="input-label">
                Phone number <span className="text-red">*</span>
              </p>
              {errors.phoneNumber && (
                <div className="error-message">{errors.phoneNumber}</div>
              )}
              <input
                className="input-text"
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
            <div className="w-[100%]">
              <p className="input-label">Password *</p>
              {errors.password && (
                <div className="error-message">
                  {errors.password} <span className="text-red">*</span>
                </div>
              )}
              <input
                className="input-text"
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
                      password: "Password cannot be empty",
                    }));
                  }
                }}
              />
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------- */}
            <p className="text-primary">
              Don't have an account? {"  "}
              <span
                className="font-bold cursor-pointer"
                onClick={() => setMethod("SIGN_IN")}
              >
                Register
              </span>
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-[20px] w-[50%] items-center">
            {/* ------------------------------------------------------------------------------------------------------------------- */}
            <div className="w-[100%]">
              <p className="input-label">
                Name <span className="text-red">*</span>
              </p>
              {errors.name && (
                <div className="error-message">{errors.name}</div>
              )}
              <input
                className="input-text"
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
            <div className="w-[100%]">
              <p className="input-label">
                Phone number <span className="text-red">*</span>
              </p>
              {errors.phoneNumber && (
                <div className="error-message">{errors.phoneNumber}</div>
              )}
              <input
                className="input-text"
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
            <div className="w-[100%]">
              <p className="input-label">Email</p>
              {errors.email && (
                <div className="error-message">{errors.email}</div>
              )}
              <input
                className="input-text"
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
            <div className="w-[100%]">
              <p className="input-label">
                Password <span className="text-red">*</span>
              </p>
              {errors.password && (
                <div className="error-message">{errors.password}</div>
              )}
              <input
                className="input-text"
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
                      password: "Password cannot be empty",
                    }));
                  }
                }}
              />
            </div>
            {/* ------------------------------------------------------------------------------------------------------------------- */}
            {userType === "RETAILER" && (
              <div className="w-[100%]">
                <p className="input-label">
                  Manager ID <span className="text-red">*</span>
                </p>
                {errors.managerId && (
                  <div className="error-message">{errors.managerId}</div>
                )}
                <input
                  className="input-text"
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
                        managerId: "Manager ID cannot be empty",
                      }));
                    }
                  }}
                />
              </div>
            )}
            {/* ------------------------------------------------------------------------------------------------------------------- */}
            <p className="text-primary">
              Already have an account? {"  "}
              <span
                className="font-bold cursor-pointer"
                onClick={() => setMethod("LOGIN")}
              >
                Login
              </span>
            </p>
          </div>
        )}

        {method === "LOGIN" ? (
          <button className="btn-filled px-[100px] py-[10px] text-[16px] my-[15px]">
            Login
          </button>
        ) : (
          <button
            className="btn-filled px-[100px] py-[10px] text-[16px] my-[15px]"
            onClick={() => {
              const valid = validator();
              if (valid) {
                signUp();
              }
            }}
            disabled={loading}
          >
            Sign in
          </button>
        )}
      </div>
    </div>
  );
}

export default Authenticate;
