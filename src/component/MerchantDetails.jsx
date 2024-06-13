import React, { useState } from "react";
import { SlRefresh } from "react-icons/sl";
import arrow from "../assets/arrowup.png";
import pic from "../assets/picture.png";
import QR from "../assets/QR.png";
import { MdOutlineFileDownload } from "react-icons/md";
import SwitchOffer from "./SwitchOffer";

const MerchantDetails = () => {
  return (
    <div id="merchantDetails" className="w-full h-fit relative">
      <div className="w-full h-fit  mt-[70px] px-6">
        <div className="w-full flex justify-between">
          <div className="w-[40%] flex gap-4 py-4 items-center">
            <p className="text-[#1C2434] text-[24px] font-semibold ">
              Merchant Details
            </p>
            <div className="flex h-[2rem] bg-white border px-[12px] font-semibold items-center gap-2 shadow-sm">
              <SlRefresh />
              <button>Refresh</button>
            </div>
          </div>

          <div className="w-fit flex gap-4 py-4">
            <button className="h-[2rem]  bg-white border px-6 font-semibold items-center shadow-sm">
              Edit
            </button>
            <button className="h-[2rem] bg-white border px-6 font-semibold items-center shadow-sm">
              View Profile
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-fit  mb-4 px-6 flex justify-between ">
        <div className="w-[60%] flex flex-col gap-4">
          <div className="w-full flex justify-between">
            <div className="w-full h-[127px] bg-white p-4 flex items-center gap-4 shadow-md">
              <div className="w-[70%] flex gap-4 items-center">
                <img
                  src={pic}
                  alt="pic"
                  className="h-[66px] w-[70px] aspect-auto cursor-pointer"
                />
                <div className="w-[80%] flex justify-between items-center">
                  <div className="text-[#1C2434B0] text-[16px] gap-2 font-semibold flex flex-col text-nowrap">
                    <p>Merchant Name:</p>
                    <p>Merchant ID:</p>
                    <p>Profile created :</p>
                  </div>
                  <div className="text-[#1C2434] text-[14px] font-semibold gap-3 flex flex-col text-nowrap">
                    <p>The Canister’s Cafe</p>
                    <p>ID010101</p>
                    <p>19/08/2002</p>
                  </div>
                </div>
              </div>
              <div className="w-[1.5px] h-[90px] bg-slate-300 "></div>
              <div className="w-[25%] flex justify-between items-center pl-4">
                <img
                  src={QR}
                  alt="QR"
                  className="h-[66px] w-[70px] aspect-auto cursor-pointer"
                />
                <MdOutlineFileDownload className="size-[24px]" />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between">
            <div className="w-[49%] h-[150px] bg-white p-4 flex flex-col justify-between shadow-md">
              <p className="text-[16px] text-[#64748B] font-semibold">
                Payout Balance
              </p>
              <p className="text-[#1C2434] text-[32px] font-semibold">0</p>
              <div className="flex gap-2 items-center">
                <div className="flex gap-1 text-[#1A9882] items-center bg-[#10B9814D] rounded-lg p-1">
                  <img className="size-[14px]" src={arrow} />
                  <p className="text-[10px]">18%</p>
                </div>
                <p className="text-[#64748B] text-[14px]">Since last week</p>
              </div>
            </div>
            <div className="w-[49%] h-[150px] bg-white flex flex-col shadow-md">
              <div className="w-full px-4 py-2 border-b-2 border-slate-300">
                <p className="text-[#212B36] text-[16px] font-semibold">
                  Payout Method
                </p>
              </div>
              <div className="w-full px-4 py-2 flex flex-col gap-2">
                <p className="text-[#1C2434B0] text-[14px] font-semibold">
                  UPI
                </p>
                <div className="flex gap-2 text-[#1C2434B0] text-[14px] font-semibold">
                  <p>UPI ID:</p>
                  <p>abcdfcg@ybl</p>
                </div>
                <div className="flex gap-2 text-[#1C2434B0] text-[14px] font-semibold">
                  <p>Banking Name:</p>
                  <p>Souptik Das</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[39%] h-[293px] bg-white flex flex-col shadow-md">
          <div className="w-full px-4 py-2 border-b-2 border-slate-300">
            <p className="text-[#212B36] text-[22px] font-semibold">
              Basic Info
            </p>
          </div>
          <div className="w-full py-3 px-5 border-b">
            <div className="w-full flex justify-between font-semibold">
              <p className="text-[#1C2434B0] text-[16px]">Business Type</p>
              <p className="text-[#1C2434] text-[16px]">Cafe</p>
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
              <p className="text-[#1C2434B0] text-[16px]">FSSAI</p>
              <p className="text-[#1C2434] text-[16px]">
                1282363367327272626626
              </p>
            </div>
          </div>
          <div className="w-full py-3 px-5 border-b">
            <div className="w-full flex justify-between font-semibold">
              <p className="text-[#1C2434B0] text-[16px]">GST</p>
              <p className="text-[#1C2434] text-[16px]">-</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-fit  my-4 px-6 flex justify-between ">
        <div className="w-[54%] flex flex-col gap-4">
          <div className="w-full flex justify-between">
            <div className="w-[48%] h-[77px] bg-white p-4 flex justify-center shadow-md">
              <div className="w-[60%] flex justify-between items-center">
                <p className="text-[#1C2434] text-[20px] font-semibold">
                  Games
                </p>
                <SwitchOffer isActive={false} />
              </div>
            </div>
            <div className="w-[48%] h-[77px] bg-white p-4 flex justify-center shadow-md">
              <div className="w-[70%] flex justify-between items-center">
                <p className="text-[#1C2434] text-[20px] font-semibold">
                  Campaign
                </p>
                <SwitchOffer isActive={false} />
              </div>
            </div>
          </div>

          <div className="w-full flex justify-between">
            <div className="w-[48%] h-[77px] bg-white p-4 flex justify-center shadow-md">
              <div className="w-[60%] flex justify-between items-center">
                <p className="text-[#1C2434] text-[20px] font-semibold">
                  Offers
                </p>
                <SwitchOffer isActive={false} />
              </div>
            </div>
            <div className="w-[48%] h-[77px] bg-white p-4 flex justify-center shadow-md">
              <div className="w-[70%] flex justify-between items-center">
                <p className="text-[#1C2434] text-[20px] font-semibold">
                  Payments
                </p>
                <SwitchOffer isActive={false} />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[44%] h-[170px] bg-white flex flex-col shadow-md">
          <div className="w-full px-4 py-2 border-b-2 border-slate-300">
            <p className="text-[#212B36] text-[16px] font-semibold">
              Pricing Plan
            </p>
          </div>
          <div className="w-full px-4 py-2 flex gap-4">
            <div className="w-[40%] flex flex-col gap-2 items-center">
              <p className="text-[#3C50E0] text-[24px] font-semibold">
                Basic Plan
              </p>
              <div className="flex flex-col">
                <p className="text-[#000000] text-[20px] font-semibold">
                  249/Month
                </p>
                <p className="text-[#5b5858d5] text-[14px] font-semibold">
                  Billed Annually
                </p>
              </div>
            </div>
            <div className="w-[1.5px] h-[fit] bg-slate-300 mt-2"></div>

            <div className="w-[55%] flex flex-col justify-between items-start ">
              <div className="w-full flex flex-col justify-between items-start">
                <div className="w-full flex justify-between text-[#1C2434B0] text-[14px] font-semibold">
                  <p>Starting Date</p>
                  <p>19-08-2024</p>
                </div>
                <div className="w-full flex justify-between text-[#1C2434B0] text-[14px] font-semibold">
                  <p>Ending Date</p>
                  <p>19-08-2025</p>
                </div>
              </div>
              <div className="w-full flex justify-between text-[#1C2434B0] text-[14px] font-semibold">
                <p>Payment Method</p>
                <p>Online</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MerchantDetails;
