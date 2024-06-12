import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { SlRefresh } from "react-icons/sl";
import { HiOutlinePlusSmall } from "react-icons/hi2";
import AllMerchant from "./AllMerchant";
import BasicPlan from "./BasicPlan";

const Sales = ({g}) => {

  const data = [
    {
      name: "1",
      value: 10000,
    },
    {
      name: "2",
      value: 12000,
    },
    {
      name: "3",
      value: 5000,
    },
    {
      name: "4",
      value: 9000,
    },
    {
      name: "5",
      value: 2000,
    },
    {
      name: "6",
      value: 15570,
    },
    {
      name: "7",
      value: 1000,
    },
  ];

  const [am, setam] = useState(true);
  const [bp, setbp] = useState(false);
  const [pp, setpp] = useState(false);

  function a() {
    setam(true);
    setbp(false);
    setpp(false);
  }

  function b() {
    setam(false);
    setbp(true);
    setpp(false);
  }

  function c() {
    setam(false);
    setbp(false);
    setpp(true);
  }

  function btnHandle1() {
    document.getElementById("btn1").style.background = "#004AAD";
    document.getElementById("btn1").style.color = "white";
    document.getElementById("btn2").style.background = "white";
    document.getElementById("btn2").style.color = "black";
    document.getElementById("btn3").style.background = "white";
    document.getElementById("btn3").style.color = "black";
  }

  function btnHandle2() {
    document.getElementById("btn2").style.background = "#004AAD";
    document.getElementById("btn2").style.color = "white";
    document.getElementById("btn1").style.background = "white";
    document.getElementById("btn1").style.color = "black";
    document.getElementById("btn3").style.background = "white";
    document.getElementById("btn3").style.color = "black";
  }

  return (
    <div id="sales" className="w-full h-fit relative">

      <div className="w-full h-fit  mt-[70px] px-6">
        <div className="w-full flex justify-between">
          <div className="w-[40%] flex gap-4 py-4 items-center">
            <p className="text-[#1C2434] text-[24px] font-semibold ">
              Sales & Revenue
            </p>
            <div className="flex h-[2rem] bg-white border px-[12px] items-center gap-2 shadow-sm">
              <SlRefresh />
              <button>Refresh</button>
            </div>
          </div>

          <div className="w-fit flex gap-4 py-4">
            <button
              id="btn1"
              onClick={btnHandle1}
              className="h-[2rem] bg-[#004AAD] text-white border px-[12px] items-center shadow-sm"
            >
              Monthly
            </button>
            <button
              id="btn2"
              onClick={btnHandle2}
              className="h-[2rem] bg-white border px-[12px] items-center shadow-sm"
            >
              Yearly
            </button>
            <div
              // onClick={openPopup}
              className="flex h-[2rem] bg-white border px-[12px] items-center gap-2 shadow-sm"
            >
              <HiOutlinePlusSmall />
              <button>Add Merchant</button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-fit mb-4 px-6 flex justify-between ">
        <div className="w-[32%] h-[130px] bg-white py-4 px-6 border shadow-lg">
          <div className="w-full flex flex-col gap-3">
            <p className="text-[16px] text-[#64748B] font-semibold">Total Revenue</p>
            <p className="text-[#1C2434] text-[32px] font-semibold">10,000</p>
          </div>
        </div>
        <div className="w-[32%] h-[130px] bg-white py-4 px-6 border shadow-lg">
          <div className="w-full flex flex-col gap-3">
            <p className="text-[16px] text-[#64748B] font-semibold">Subscription Revenue</p>
            <p className="text-[#1C2434] text-[32px] font-semibold">9,000</p>
          </div>
        </div>
        <div className="w-[32%] h-[130px] bg-white py-4 px-6 border shadow-lg">
          <div className="w-full flex flex-col gap-3">
            <p className="text-[16px] text-[#64748B] font-semibold">Campaign Revenue</p>
            <p className="text-[#1C2434] text-[32px] font-semibold">1,000</p>
          </div>
        </div>
      </div>

      <div className="w-full px-6">
          <div className="w-full h-fit bg-white mb-4 pt-6 flex flex-col justify-between gap-6 border shadow-lg">
            <p className="text-[#212B36] text-[22px] font-semibold pl-8">
              Revenue
            </p>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                barSize={20}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="value" fill="#3C50E0" />
              </BarChart>
            </ResponsiveContainer>
          </div>
      </div>

        <div className="w-full h-fit mb-4 px-6 flex justify-between ">
        <div className="w-[32%] h-[130px] bg-white py-4 px-6 border shadow-lg">
          <div className="w-full flex flex-col gap-3">
            <p className="text-[16px] text-[#64748B] font-semibold">Total Active Merchant </p>
            <p className="text-[#1C2434] text-[32px] font-semibold">100</p>
          </div>
        </div>
        <div className="w-[32%] h-[130px] bg-white py-4 px-6 border shadow-lg">
          <div className="w-full flex flex-col gap-3">
            <p className="text-[16px] text-[#64748B] font-semibold">Basic Plan Merchant</p>
            <p className="text-[#1C2434] text-[32px] font-semibold">90</p>
          </div>
        </div>
        <div className="w-[32%] h-[130px] bg-white py-4 px-6 border shadow-lg">
          <div className="w-full flex flex-col gap-3">
            <p className="text-[16px] text-[#64748B] font-semibold">Premium Plan Merchants</p>
            <p className="text-[#1C2434] text-[32px] font-semibold">10</p>
          </div>
        </div>
      </div>

      <div className="w-full my-6 sm:px-6 px-4">
        <div className="w-full h-fit bg-white px-1 py-4 shadow-md">
          <div className="w-full border-b p-4 flex justify-around">
            <p
              onClick={a}
              className={`font-semibold text-[20px] ${
                am
                  ? "text-[#004AAD] border-b-2 border-[#004AAD]"
                  : "text-[#1C2434]"
              }`}
            >
              All Merchant
            </p>
            <p
              onClick={b}
              className={`font-semibold text-[20px] ${
                bp
                  ? "text-[#004AAD] border-b-2 border-[#004AAD]"
                  : "text-[#1C2434]"
              }`}
            >
              Basic Plan
            </p>
            <p
              onClick={c}
              className={`font-semibold text-[20px] ${
                pp
                  ? "text-[#004AAD] border-b-2 border-[#004AAD]"
                  : "text-[#1C2434]"
              }`}
            >
              Premium Plan
            </p>
          </div>

          {am && <AllMerchant g={g}/>}
          {bp && <BasicPlan g={g}/>}
          {pp && <BasicPlan g={g}/>}
        </div>
      </div>
    </div>
  );
};

export default Sales;
