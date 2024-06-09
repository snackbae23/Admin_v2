import React from "react";
import { SlRefresh } from "react-icons/sl";
import arrow from "../assets/arrowup.png";
import pic from "../assets/picture.png";
import { CgLaptop } from "react-icons/cg";

const UserDetails = ({ d }) => {
  const changeComp = () => {
    d();
  };

  return (
    <div id="userDetails" className="w-full h-fit relative">
      <div className="w-full h-fit  mt-[70px] px-6">
        <div className="w-full flex justify-between items-center">
          <div className="w-[40%] flex gap-4 py-4 items-center">
            <p className="text-[#1C2434] text-[24px] font-semibold ">
              User Details
            </p>
            <div className="flex justify-center items-center gap-1 border shadow-sm bg-white px-3 py-1 text-black">
              <SlRefresh />
              <button className="text-[14px]">Refresh</button>
            </div>
          </div>

          <div className="w-fit flex gap-2 py-4">
            <p className="text-[#64748B] text-[14px] font-semibold">
              User Details
            </p>
            <p className="text-[#64748B] text-[14px] font-semibold">/</p>
            <p
              onClick={changeComp}
              className="text-[#3C50E0] text-[14px] font-semibold"
            >
              User Analytics
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-fit  my-4 sm:px-6 px-4 flex justify-between ">
        <div className="w-[60%] flex flex-col gap-4">
          <div className="w-full flex justify-between">
            <div className="w-full h-[127px] bg-white p-4 flex items-center gap-4 shadow-md">
              <div className="w-[55%] flex justify-between items-center">
                <img
                  src={pic}
                  alt="pic"
                  className="h-[66px] w-[70px] aspect-auto cursor-pointer"
                />
                <div className="w-[70%] flex justify-between">
                  <div className="text-[#1C2434B0] text-[16px] gap-2 font-semibold flex flex-col">
                    <p>User Name:</p>
                    <p>User Id:</p>
                  </div>
                  <div className="text-[#1C2434] text-[16px] font-semibold gap-2 flex flex-col">
                    <p>Souptik Das</p>
                    <p>ID010101</p>
                  </div>
                </div>
              </div>
              <div className="w-[1px] h-[70px] bg-slate-500"></div>
              <div className="w-[40%] flex justify-between ">
                <div className="text-[#1C2434B0] text-[16px] gap-2 font-semibold flex flex-col">
                  <p>First Visit:</p>
                  <p>Last Visit:</p>
                </div>
                <div className="text-[#1C2434] text-[16px] gap-2 font-semibold flex flex-col">
                  <p>19 August, 2023</p>
                  <p>19 August, 2024</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between">
            <div className="w-[49%] h-[150px] bg-white p-4 flex flex-col justify-between shadow-md">
              <p className="text-[16px] text-[#64748B] font-semibold">
                Total Merchant Visit
              </p>
              <p className="text-[#1C2434] text-[32px] font-semibold">200</p>
              <div className="flex gap-2 items-center">
                <div className="flex gap-1 text-[#1A9882] items-center bg-[#10B9814D] rounded-lg p-1">
                  <img className="size-[14px]" src={arrow} />
                  <p className="text-[10px]">18%</p>
                </div>
                <p className="text-[#64748B] text-[14px]">Since last week</p>
              </div>
            </div>
            <div className="w-[49%] h-[150px] bg-white p-4 flex flex-col justify-between shadow-md">
              <p className="text-[16px] text-[#64748B] font-semibold">
                Total Spent
              </p>
              <p className="text-[#1C2434] text-[32px] font-semibold">
                ₹10,000
              </p>
              <div className="flex gap-2 items-center">
                <div className="flex gap-1 text-[#1A9882] items-center bg-[#10B9814D] rounded-lg p-1">
                  <img className="size-[14px]" src={arrow} />
                  <p className="text-[10px]">18%</p>
                </div>
                <p className="text-[#64748B] text-[14px]">Since last week</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[39%] h-[293px] bg-white flex flex-col shadow-md">
          <div className="w-full px-4 py-2 border-b border-slate-600">
            <p className="text-[#212B36] text-[22px] font-semibold">
              Basic Info
            </p>
          </div>
          <div className="w-full py-3 px-5 border-b">
            <div className="w-full flex justify-between font-semibold">
              <p className="text-[#1C2434B0] text-[16px]">Gender</p>
              <p className="text-[#1C2434] text-[16px]">Male</p>
            </div>
          </div>
          <div className="w-full py-3 px-5 border-b">
              <div className="w-full flex justify-between font-semibold">
                <p className="text-[#1C2434B0] text-[16px]">Mobile Number</p>
                <p className="text-[#1C2434] text-[16px]">7603037718</p>
              </div>
            </div>
            <div className="w-full py-3 px-5 border-b">
              <div className="w-full flex justify-between font-semibold">
                <p className="text-[#1C2434B0] text-[16px]">Email ID</p>
                <p className="text-[#1C2434] text-[16px]">
                  souptik.das@snackbae.in
                </p>
              </div>
            </div>
            <div className="w-full py-3 px-5 border-b">
              <div className="w-full flex justify-between font-semibold">
                <p className="text-[#1C2434B0] text-[16px]">DOB</p>
                <p className="text-[#1C2434] text-[16px]">19-08-2002</p>
              </div>
            </div>
            <div className="w-full py-3 px-5 border-b">
              <div className="w-full flex justify-between font-semibold">
                <p className="text-[#1C2434B0] text-[16px]">Anniversary</p>
                <p className="text-[#1C2434] text-[16px]">-</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
