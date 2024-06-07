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
import arrow from "../assets/arrowup.png";
import { CiSearch } from "react-icons/ci";

const Dashboard = () => {
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

  const data1 = [
    {
      merchantName: "foodoos",
      pageVisit: "546",
      customerCount: "399",
    },
    {
      merchantName: "foodoos",
      pageVisit: "546",
      customerCount: "399",
    },
    {
      merchantName: "foodoos",
      pageVisit: "546",
      customerCount: "399",
    },
    {
      merchantName: "foodoos",
      pageVisit: "546",
      customerCount: "399",
    },
    {
      merchantName: "foodoos",
      pageVisit: "546",
      customerCount: "399",
    },
    {
      merchantName: "foodoos",
      pageVisit: "546",
      customerCount: "399",
    },
    {
      merchantName: "foodoos",
      pageVisit: "546",
      customerCount: "399",
    },
    {
      merchantName: "foodoos",
      pageVisit: "546",
      customerCount: "399",
    },
    {
      merchantName: "foodoos",
      pageVisit: "46",
      customerCount: "39",
    },
    {
      merchantName: "foodoos",
      pageVisit: "5436",
      customerCount: "3799",
    },
    {
      merchantName: "foodoos",
      pageVisit: "546",
      customerCount: "399",
    },
    {
      merchantName: "foodoos",
      pageVisit: "33546",
      customerCount: "67399",
    },
    {
      merchantName: "foodoos",
      pageVisit: "1000",
      customerCount: "400",
    },
    {
      merchantName: "foodoos",
      pageVisit: "546",
      customerCount: "399",
    },
    {
      merchantName: "foodoos",
      pageVisit: "92306",
      customerCount: "4999",
    },
    {
      merchantName: "foodoos",
      pageVisit: "8946",
      customerCount: "1099",
    },
    {
      merchantName: "foodoos",
      pageVisit: "546",
      customerCount: "399",
    },
    {
      merchantName: "foodoos",
      pageVisit: "546",
      customerCount: "399",
    },
    {
      merchantName: "foodoos",
      pageVisit: "546",
      customerCount: "399",
    },
    {
      merchantName: "foodoos",
      pageVisit: "546",
      customerCount: "399",
    },
    {
      merchantName: "foodoos",
      pageVisit: "546",
      customerCount: "399",
    },
    {
      merchantName: "foodoos",
      pageVisit: "546",
      customerCount: "399",
    },
  ];

  const data3 = [
    {
      name: "Walk-in Offer",
      value: 2500,
    },
    {
      name: "Flat Discount",
      value: 376,
    },
    {
      name: "Happy Hours",
      value: 465,
    },
    {
      name: "Birthday Offer",
      value: 298,
    },
    {
      name: "Special Day Offer",
      value: 179,
    },
  ];

  const data4 = [
    {
      name: "Awareness Campaign",
      value: 3900,
    },
    {
      name: "Birthday Campaign",
      value: 509,
    },
    {
      name: "Greeting Campaign",
      value: 986,
    },
    {
      name: "Marketing Campaign",
      value: 639,
    },
  ];

  const [data2, setData] = useState(data1);
  const [sortType, setSortType] = useState("");

  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    console.log(sortValue);
    setSortType(sortValue);
    sortData(sortValue);
  };

  const sortData = (type) => {
    let newData = [...data2];
    switch (type) {
      case "Highestvisit":
        newData = newData.sort(
          (a, b) => parseFloat(b.pageVisit) - parseFloat(a.pageVisit)
        );
        break;
      case "Highestcount":
        newData = newData.sort(
          (a, b) => parseFloat(b.customerCount) - parseFloat(a.customerCount)
        );
        break;
      default:
        break;
    }
    console.log("newData", newData);
    setData(newData);
  };

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

  function btnHandle3() {
    document.getElementById("btn3").style.background = "#004AAD";
    document.getElementById("btn3").style.color = "white";
    document.getElementById("btn2").style.background = "white";
    document.getElementById("btn2").style.color = "black";
    document.getElementById("btn1").style.background = "white";
    document.getElementById("btn1").style.color = "black";
  }

  return (
    <div id="dashboard" className="w-full h-fit relative">
      <div className="w-full h-fit  mt-[70px] px-6">
        <div className="w-full flex justify-between">
          <div className="w-[40%] flex gap-4 py-4 items-center">
            <p className="text-[#1C2434] text-[24px] font-semibold ">
              Dashboard
            </p>
            <div className="flex justify-center items-center gap-1 border shadow-sm bg-white px-3 py-1 text-black">
              <SlRefresh />
              <button>Refresh</button>
            </div>
          </div>

          <div className="w-fit flex gap-4 py-4">
            <button
              id="btn1"
              onClick={btnHandle1}
              className="bg-[#004AAD] px-3 py-1 border shadow-sm text-white"
            >
              Today
            </button>
            <button
              id="btn2"
              onClick={btnHandle2}
              className="bg-white px-3 py-1 border shadow-sm text-black"
            >
              Weekly
            </button>
            <button
              id="btn3"
              onClick={btnHandle3}
              className="bg-white px-3 py-1 border shadow-sm text-black"
            >
              Monthly
            </button>
            <input
              type="date"
              className="focus:outline-none px-3 border shadow-sm"
            />
          </div>
        </div>
      </div>

      <div className="w-full px-6">
        <div className="w-full h-fit bg-white mb-4 flex justify-between border shadow-lg">
          <div className="w-[25%] flex justify-center items-center p-4 gap-1">
            <div className="flex flex-col">
              <p className="text-[#1C2434] text-[28px] font-semibold">18.6K</p>
              <p className="text-[#64748B] text-[14px] font-semibold">
                Unique Visitors
              </p>
            </div>
            <div className="flex gap-1 text-[#10B981] items-center">
              <img className="size-[18px]" src={arrow} />
              <p className="text-[14px]">18%</p>
            </div>
          </div>

          <div className="w-[25%] flex justify-center items-center p-4 gap-1">
            <div className="flex flex-col">
              <p className="text-[#1C2434] text-[28px] font-semibold">55.9K</p>
              <p className="text-[#64748B] text-[14px] font-semibold">
                Total Pageviews
              </p>
            </div>
            <div className="flex gap-1 text-[#10B981] items-center">
              <img className="size-[18px]" src={arrow} />
              <p className="text-[14px]">25%</p>
            </div>
          </div>

          <div className="w-[25%] flex justify-center items-center p-4 gap-1">
            <div className="flex flex-col">
              <p className="text-[#1C2434] text-[28px] font-semibold">54%</p>
              <p className="text-[#64748B] text-[14px] font-semibold">
                Bounce Rate
              </p>
            </div>
            <div className="flex gap-1 text-[#10B981] items-center">
              <img className="size-[18px]" src={arrow} />
              <p className="text-[14px]">7%</p>
            </div>
          </div>

          <div className="w-[25%] flex justify-center items-center p-4 gap-2">
            <div className="flex flex-col">
              <p className="text-[#1C2434] text-[28px] font-semibold">2m 56s</p>
              <p className="text-[#64748B] text-[14px] font-semibold">
                Visit Duration
              </p>
            </div>
            <div className="flex gap-1 text-[#10B981] items-center">
              <img className="size-[18px]" src={arrow} />
              <p className="text-[14px]">12%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-6">
        <div className="w-full h-fit bg-white mb-4 pt-6 flex flex-col justify-between gap-6 border shadow-lg">
          <p className="text-[#212B36] text-[22px] font-semibold pl-8">
            Visitors Analytics
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

      <div className="w-full flex px-6 mb-4 justify-between">
        <div className="w-[59%] bg-white border shadow-lg">
          <div className="w-full px-4 py-4 flex justify-between items-center">
            <p className="text-[#212B36] text-[16px] font-semibold">
              Merchants Performance
            </p>
            <div className="w-[50%] flex justify-between">
              <div className="w-[63%] h-[2rem] bg-white relative flex items-center border shadow-sm">
                <input
                  className="w-full h-fit px-2 rounded-lg focus:outline-none"
                  type="text"
                  placeholder="Search"
                />
                <CiSearch className="absolute text-[1.3rem] font-semibold right-3" />
              </div>

              <div className="w-[35%] flex h-[2rem] bg-white border px-[4px] items-center gap-2 shadow-sm">
                <select
                  name="sort_by"
                  value={sortType}
                  onChange={handleSortChange}
                  className="w-full h-full font-semibold outline-none"
                >
                  <option value="">Sort By</option>
                  <option value="Highestvisit">Highest Visit</option>
                  <option value="Highestcount">Highest Count</option>
                </select>
              </div>
            </div>
          </div>

          <div className="w-full px-6 flex justify-between">
            <p className="text-[#64748B] text-[12px] font-semibold">
              Merchant Names
            </p>
            <div className="flex gap-10">
              <p className="text-[#64748B] text-[12px] font-semibold">
                Page Visit
              </p>
              <p className="text-[#64748B] text-[12px] font-semibold">
                Customer Count
              </p>
            </div>
          </div>

          {/* <div className="w-full h-[650px] overflow-y-auto mt-2">
            {data2?.map((data, i) => (
              <div
                key={i}
                className="w-full flex justify-between px-8 py-4 border-b "
              >
                <div className="w-[60%] flex">
                  <p className="text-[#1C2434] text-[14px] font-semibold">
                    {data.merchantName}
                  </p>
                </div>
                <div className="w-[32%] flex justify-between">
                  <p className="text-[#1C2434] text-[14px] font-semibold mr-6">
                    {data.pageVisit}
                  </p>
                  <p className="text-[#1C2434] text-[14px] font-semibold pr-6">
                    {data.customerCount}
                  </p>
                </div>
              </div>
            ))}
          </div> */}
          <div className="w-full h-[650px] mt-2 overflow-hidden">
    <div className="w-full h-full overflow-y-auto scrollbar-hide">
      {data2?.map((data, i) => (
        <div
          key={i}
          className="w-full flex justify-between px-8 py-4 border-b"
        >
          <div className="w-[60%] flex">
            <p className="text-[#1C2434] text-[14px] font-semibold">
              {data.merchantName}
            </p>
          </div>
          <div className="w-[32%] flex justify-between">
            <p className="text-[#1C2434] text-[14px] font-semibold mr-6">
              {data.pageVisit}
            </p>
            <p className="text-[#1C2434] text-[14px] font-semibold pr-6">
              {data.customerCount}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
        </div>

        <div className="w-[39%] flex flex-col gap-4 h-[740px]">
          <div className="bg-white flex flex-col w-full h-[370px] border shadow-lg">
            <div className="px-4 py-3 flex flex-col gap-2">
              <p className="text-[#212B36] text-[22px] font-semibold">
                Top Offers
              </p>

              <div className="w-full flex px-2 justify-between items-center">
                <p className="text-[#64748B] text-[12px] font-semibold mt-2">
                  Offer Type
                </p>
                <p className="text-[#64748B] text-[12px] font-semibold">
                  Redeemtion
                </p>
              </div>
            </div>

            <div className="w-full h-fit">
              {data3?.map((data, i) => (
                <div
                  key={i}
                  className="w-full flex justify-between py-4 px-4 border-b "
                >
                  <div className="">
                    <p className="text-[#1C2434] text-[14px] font-semibold">
                      {data.name}
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[#1C2434] text-[14px] font-semibold pr-6">
                      {data.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white flex flex-col w-full h-[355px] border shadow-lg">
            <div className="px-4 py-3 flex flex-col gap-2">
              <p className="text-[#212B36] text-[22px] font-semibold">
              Top Campaigns
              </p>

              <div className="w-full flex px-2 justify-between items-center">
                <p className="text-[#64748B] text-[12px] font-semibold mt-2">
                Campaign Type
                </p>
                <p className="text-[#64748B] text-[12px] font-semibold">
                Campaign Usage
                </p>
              </div>
            </div>

            <div className="w-full h-fit">
              {data4?.map((data, i) => (
                <div
                  key={i}
                  className="w-full flex justify-between py-4 px-4 border-b "
                >
                  <div className="">
                    <p className="text-[#1C2434] text-[14px] font-semibold">
                      {data.name}
                    </p>
                  </div>
                  <div className="">
                    <p className="text-[#1C2434] text-[14px] font-semibold pr-6">
                      {data.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
