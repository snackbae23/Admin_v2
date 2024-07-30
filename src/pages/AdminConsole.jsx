import React from "react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { IoLogOutOutline } from "react-icons/io5";

import sales from "/saless.svg";
import dashboard from "/dashboard.svg";

const AdminConsole = () => {
  const navigate = useNavigate();
  const location = useLocation();

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // This enables smooth scrolling
    });
  }

  const screenWidth = window.innerWidth;

  const e = () => {
    console.log("inside e");
    const userId = localStorage.removeItem("user");
    console.log(userId);
    navigate("/");
  };

  const removeleft = () => {
    if (screenWidth < 768) {
      // Adjust the threshold as needed

      document.getElementById("left").style.display = "none";
      setIsToggled(false);
    }
  };

  return (
    <>
      <div
        id="admin"
        className="absolute w-full h-[400vh] bg-black z-[700] opacity-45 hidden"
      ></div>
      <div id="admin" className="w-full h-fit flex justify-center  relative  ">
        {/* left side */}

        <div
          id="left"
          className={` ${
            screenWidth >= 768
              ? "sm:w-[20%] bg-[#1C2434] fixed left-0  z-40    h-full   mt-[70px] px-6 text-[.95rem]  gap-32 "
              : " fixed hidden left-0 z-40 h-fit rounded-lg   mt-[70px] px-6 text-[.95rem]  gap-32 bg-white "
          }`}
        >
          <div className="mt-14">
            <div
              id=""
              className={` ${
                location.pathname === "/"
                  ? "bg-[#333A48] "
                  : "bg-[#1C2434]"
              } w-full h-[50px] text-[#F8FAFC] cursor-pointer  mb-1 flex items-center rounded-lg font-semibold p-4 gap-3 `}
            >
              <Link to="/">
                <div className="flex items-center gap-2">
                  <img src={dashboard} /> <p className="">Dashboard</p>
                </div>
              </Link>
            </div>
            <div
              id=""
              className={` ${
                location.pathname === "/sales"
                  ? "bg-[#333A48] "
                  : "bg-[#1C2434]"
              } w-full h-[50px] text-[#F8FAFC] cursor-pointer  mb-1 flex items-center rounded-lg font-semibold p-4 gap-3 `}            >
              <Link to="/sales">
                <div className="flex items-center gap-2">
                  <img src={sales} /> <p className="">Sales</p>
                </div>
              </Link>
            </div>
            <div
              id=""
              className={` ${
                location.pathname === "/userdata"
                  ? "bg-[#333A48] "
                  : "bg-[#1C2434]"
              } w-full h-[50px] text-[#F8FAFC] cursor-pointer  mb-1 flex items-center rounded-lg font-semibold p-4 gap-3 `}            >
              <Link to="/userdata">
                <div className="flex items-center gap-2">
                  <img src={sales} /> <p className="">User Data</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="mt-24">
            <div
              id=""
              className={`w-[60%] h-[50px] cursor-pointer bg-[#3C50E0] mx-auto  text-white  flex items-center rounded-3xl font-semibold p-4 gap-3 sm:mb-1 mb-8`}
            >
              <IoLogOutOutline className="text-[1.2rem]" />
              <p className="text-[14px]">Log Out</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminConsole;
