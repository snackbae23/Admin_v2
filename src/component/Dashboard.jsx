import React, { useState, useEffect } from "react";
// import Select from "react-dropdown-select";
import Select from "react-select";
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
import { HiOutlinePlusSmall } from "react-icons/hi2";
import { RxCrossCircled } from "react-icons/rx";
import { motion } from "framer-motion";
import ProgressBar from "@ramonak/react-progress-bar";

import picture from "../assets/picture.png";

const Dashboard = () => {
  // const data = Array.from({ length: 30 }, (_, i) => ({
  //   name: `${i + 1}`,
  //   value: Math.floor(Math.random() * 20000), // Generates a random value between 0 and 20000
  // }));

  const data = [
    { name: "1", value: 10000 },
    { name: "2", value: 12000 },
    { name: "3", value: 5000 },
    { name: "4", value: 9000 },
    { name: "5", value: 2000 },
    { name: "6", value: 15570 },
    { name: "7", value: 1000 },
    { name: "8", value: 8000 },
    { name: "9", value: 6000 },
    { name: "10", value: 7000 },
    { name: "11", value: 3000 },
    { name: "12", value: 14000 },
    { name: "13", value: 16000 },
    { name: "14", value: 11000 },
    { name: "15", value: 500 },
    { name: "16", value: 12000 },
    { name: "17", value: 7000 },
    { name: "18", value: 9000 },
    { name: "19", value: 13000 },
    { name: "20", value: 10000 },
    { name: "21", value: 8000 },
    { name: "22", value: 4000 },
    { name: "23", value: 6000 },
    { name: "24", value: 2000 },
    { name: "25", value: 10000 },
    { name: "26", value: 11000 },
    { name: "27", value: 15000 },
    { name: "28", value: 9000 },
    { name: "29", value: 13000 },
    { name: "30", value: 5000 },
  ];

  const data1 = [
    {
      merchantName: "foodoos",
      pageVisit: 546,
      customerCount: 399,
    },
    {
      merchantName: "foodoos",
      pageVisit: 546,
      customerCount: 399,
    },
    {
      merchantName: "foodoos",
      pageVisit: 546,
      customerCount: 399,
    },
    {
      merchantName: "foodoos",
      pageVisit: 546,
      customerCount: 399,
    },
    {
      merchantName: "foodoos",
      pageVisit: 546,
      customerCount: 99,
    },
    {
      merchantName: "foodoos",
      pageVisit: 546,
      customerCount: 399,
    },
    {
      merchantName: "foodoos",
      pageVisit: 546,
      customerCount: 399,
    },
    {
      merchantName: "foodoos",
      pageVisit: 546,
      customerCount: 399,
    },
    {
      merchantName: "foodoos",
      pageVisit: 46,
      customerCount: 39,
    },
    {
      merchantName: "foodoos",
      pageVisit: 5436,
      customerCount: 3799,
    },
    {
      merchantName: "foodoos",
      pageVisit: 546,
      customerCount: 399,
    },
    {
      merchantName: "foodoos",
      pageVisit: 33546,
      customerCount: 67399,
    },
    {
      merchantName: "foodoos",
      pageVisit: 1000,
      customerCount: 400,
    },
    {
      merchantName: "foodoos",
      pageVisit: 546,
      customerCount: 399,
    },
    {
      merchantName: "foodoos",
      pageVisit: 92306,
      customerCount: 4999,
    },
    {
      merchantName: "foodoos",
      pageVisit: 8946,
      customerCount: 1099,
    },
    {
      merchantName: "foodoos",
      pageVisit: 54,
      customerCount: 399,
    },
    {
      merchantName: "foodoos",
      pageVisit: 546,
      customerCount: 399,
    },
    {
      merchantName: "foodoos",
      pageVisit: 546,
      customerCount: 399,
    },
    {
      merchantName: "foodoos",
      pageVisit: 546,
      customerCount: 399,
    },
    {
      merchantName: "foodoos",
      pageVisit: 46,
      customerCount: 699,
    },
    {
      merchantName: "foodoos",
      pageVisit: 546,
      customerCount: 399,
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
      value: 2908,
    },
    {
      name: "Special Day Offer",
      value: 1790,
    },
  ];

  const data4 = [
    {
      name: "Awareness Campaign",
      value: 3900,
    },
    {
      name: "Birthday Campaign",
      value: 5090,
    },
    {
      name: "Greeting Campaign",
      value: 1986,
    },
    {
      name: "Marketing Campaign",
      value: 2639,
    },
  ];

  const data5 = [
    {
      name: "Souptik Das",
      email: "souptik@gmail.com",
      role: "CEO",
      permission: ["All access"],
    },
    {
      name: "Souvik Das",
      email: "souvik@gmail.com",
      role: "CEO",
      permission: ["All access"],
    },
    {
      name: "Tanmay Kumar",
      email: "tanmay@gmail.com",
      role: "Teck Lead",
      permission: ["All access"],
    },
    {
      name: "Sreya Gupta",
      email: "sreya@gmail.com",
      role: "Finance",
      permission: ["Payment", "Sales"],
    },
  ];
  console.log(data5);
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    permission: [],
  });

  const resetFormData = () => {
    // Reset form values
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      role: "",
      permission: [],
    });
  };

  const options = [
    { value: "allAccess", label: "All access" },
    { value: "payment", label: "Payment" },
    { value: "sales", label: "Sales" },
  ];

  function openPopup() {
    console.log("inside popup");
    setIsOpen(true);
    document.getElementById("popup1").style.display = "block";
    document.getElementById("admin").style.display = "block";
    document.body.style.overflow = "hidden";
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (selected) => {
    setFormData({
      ...formData,
      permission: selected || [],
    });
  };

  function closePopup() {
    console.log("inside closePopup");
    setIsOpen(false);
    if (document.getElementById("admin"))
      document.getElementById("admin").style.display = "none";
    if (document.getElementById("popup1"))
      document.getElementById("popup1").style.display = "none";
    document.body.style.overflow = "auto";

    // Check if the restaurant element exists before trying to modify its style
    const restaurantElement = document.getElementById("dashboard");
    if (restaurantElement) {
      // Uncomment the line you need
      restaurantElement.style.filter = "none";
      //  restaurantElement.style.filter = "blur(10px)";
    } else {
      console.error("Element with id 'restaurant' not found.");
    }

    // Ensure resetFormData function exists and is callable
    if (typeof resetFormData === "function") {
      resetFormData();
    } else {
      console.error("resetFormData function is not defined.");
    }
  }

  function submitHandler(e) {
    e.preventDefault();
    console.log(formData);
    resetFormData();
    closePopup();
  }

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

  const maxValueData3 = data3.reduce(
    (max, data) => (data.value > max ? data.value : max),
    data3[0].value
  );
  console.log("max Value");
  console.log(maxValueData3);

  const maxValueData4 = data4.reduce(
    (max, data) => (data.value > max ? data.value : max),
    data4[0].value
  );
  const maxValueData21 = data2.reduce(
    (max, data) => (data.pageVisit > max ? data.pageVisit : max),
    data2[0].pageVisit
  );
  const maxValueData22 = data2.reduce(
    (max, data) => (data.customerCount > max ? data.customerCount : max),
    data2[0].customerCount
  );
  console.log("max Value21");
  console.log(maxValueData21);
  console.log("max Value22");
  console.log(maxValueData22);

  // const getNormalizedValue = (value) => {
  //   return (value / 5000) * 100;
  // };

  return (
    <div
      id="dashboard"
      className="w-full h-fit pt-[70px]  sm:w-[80%] sm:ml-[20%] bg-[#F6F8FF] flex flex-col "
    >
      {/* add admin */}
      {isOpen && (
        <div
          id="default-modal"
          // tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-900 bg-opacity-50"
        ></div>
      )}
      <motion.div
        id="popup1"
        whileInView={{ y: [400, 0] }}
        transition={{ duration: 0.5, type: "tween" }}
        className="h-fit w-fit  fixed inset-0 bg-[#FFFFFF] hidden  z-[900] mx-auto my-auto rounded-2xl  p-4 "
      >
        <div className="flex items-center z-[60] justify-between font-Roboto sm:text-[1.2rem] text-[1.5rem] text-[#0F172A] px-4 border-b-2 mb-4 pb-2">
          <p>Add Admin</p>
          <RxCrossCircled
            onClick={closePopup}
            className="cursor-pointer text-[1.9rem]"
          />
        </div>

        <div className="w-full flex flex-col justify-center items-center ">
          <form
            onSubmit={submitHandler}
            className="w-[95%] h-[80%] hideScroller  overflow-y-scroll"
          >
            <div className="w-full flex flex-col gap-2 ">
              <div className="w-full flex md:flex-row flex-col gap-6">
                <label className="md:w-[50%] w-full font-semibold text-left text-m flex flex-col gap-2">
                  First Name
                  <div className="flex w-full h-[2.5rem] border rounded-[0.5rem] pl-[12px] items-center gap-2">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Enter your first name"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full h-full text-richblack-5 outline-none"
                    />
                  </div>
                </label>

                <label className="md:w-[50%] w-full font-semibold text-left text-m flex flex-col gap-2">
                  Last Name
                  <div className="flex w-full h-[2.5rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Enter your first name"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full h-full text-richblack-5 outline-none"
                    />
                  </div>
                </label>
              </div>

              <div className="w-full">
                <label className=" font-semibold text-left text-m flex flex-col gap-2">
                  Email
                  <div className="flex w-full h-[2.5rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full h-full text-richblack-5 outline-none"
                    />
                  </div>
                </label>
              </div>

              <div className="w-full">
                <label className=" font-semibold text-left text-m flex flex-col gap-2">
                  Role
                  <div className="flex w-full h-[2.5rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
                    <input
                      type="text"
                      name="role"
                      placeholder="Enter role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full h-full text-richblack-5 outline-none"
                    />
                  </div>
                </label>
              </div>

              <div className="w-full">
                <label className="font-semibold text-left text-m flex flex-col gap-2">
                  Permission
                  <Select
                    isMulti
                    options={options}
                    value={formData.permission}
                    onChange={handleSelectChange}
                  />
                </label>
              </div>

              <div className="w-full flex gap-3 justify-center mt-2 mb-5 mx-auto">
                <button className="w-full bg-[#3C50E0] rounded-[8px] text-white font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
                  Add Admin
                </button>
              </div>
            </div>
          </form>
        </div>
      </motion.div>

      <div className="w-full h-fit px-6">
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

          <div className="w-fit flex gap-4 py-4 flex-wrap justify-center">
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
        <div className="w-full h-fit bg-white mb-2 flex justify-between border shadow-lg">
          <div className="w-[25%] flex justify-center items-center p-2 gap-1">
            <div className="flex flex-col">
              <p className="text-[#1C2434] text-2xl font-semibold">18.6K</p>
              <p className="text-[#64748B] text-sm font-semibold">
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
              <p className="text-[#1C2434] text-2xl  font-semibold">55.9K</p>
              <p className="text-[#64748B] text-sm font-semibold">
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
              <p className="text-[#1C2434] text-2xl  font-semibold">54%</p>
              <p className="text-[#64748B] text-sm font-semibold">
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
              <p className="text-[#1C2434] text-2xl  font-semibold">2m 56s</p>
              <p className="text-[#64748B] text-sm font-semibold">
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
          <p className="text-[#212B36] text-[1.375rem] font-semibold pl-8">
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
              barSize={15}
            >
              <CartesianGrid strokeDasharray="3 3"  vertical={false}/>
              <XAxis dataKey="name" axisLine={false} tickLine={false} />
              <YAxis axisLine={false} tickLine={false} />
              <Bar dataKey="value" fill="#3C50E0" radius={[3, 3, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="w-full h-fit my-6 px-6">
        <div className="flex flex-col bg-white justify-between items-center border shadow-lg">
          <div className="w-full flex justify-between items-center p-2 border">
            <p className="text-[#1C2434] text-2xl font-semibold pl-8">
              Admin Control
            </p>

            <div className="flex gap-4">
              <div
                onClick={openPopup}
                className="flex py-2 px-3 bg-white border  items-center gap-2 cursor-pointer"
              >
                <HiOutlinePlusSmall />
                <button>Add admin</button>
              </div>
            </div>
          </div>

          <div className="w-full p-2 py-2">
            <div className="w-full bg-[#F7F9FC] flex p-3">
              <div className="w-full flex justify-between">
                <p className="w-[25%] text-[#64748B] text-sm font-semibold ml-4">
                  Admin Name
                </p>
                <p className="w-[25%] text-center text-[#64748B] text-sm font-semibold">
                  Email
                </p>
                <p className="w-[25%] text-center text-[#64748B] text-sm font-semibold">
                  Role
                </p>
                <p className="w-[25%] text-center text-[#64748B] text-sm font-semibold">
                  Permission
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-[17rem] overflow-y-auto hideScroller -mt-2">
            {data5?.map((data, i) => (
              <div key={i} className="w-full flex py-3 px-4 border-b ">
                <div className="w-full flex justify-between items-center">
                  <div className="w-[25%] flex items-center">
                    <img src={picture} />
                    <p className=" text-[#1C2434] text-[14px] font-semibold ml-6">
                      {data.name}
                    </p>
                  </div>
                  <p className="w-[25%] text-center text-[#1C2434] text-[14px] font-semibold">
                    {data.email}
                  </p>
                  <p className="w-[25%] text-center text-[#1C2434] text-[14px] font-semibold">
                    {data.role}
                  </p>
                  <div className="w-[25%]">
                    {data.permission.map((permit, i) => (
                      <div key={i} className="w-full">
                        {permit === "Payment" || permit === "Sales" ? (
                          i ===
                            data.permission.findIndex(
                              (p) => p === "Payment"
                            ) && (
                            <div className="flex justify-center items-center gap-1">
                              <div
                                className={`text-center bg-[#C62828] rounded-full px-4 py-2 text-[#F8FAFC] text-sm font-semibold`}
                              >
                                Payments
                              </div>
                              <div
                                className={`text-center bg-[#F4A223] rounded-full px-4 py-2 text-[#F8FAFC] text-sm font-semibold`}
                              >
                                Sales
                              </div>
                            </div>
                          )
                        ) : permit !== "Sales" ? (
                          <div className="flex justify-center">
                            <div
                              className={`text-center bg-[#10B981] rounded-full px-4 py-2 text-[#F8FAFC] text-sm font-semibold ${
                                permit === "All access"
                                  ? "bg-[#10B981] "
                                  : "bg-[#F4A223]"
                              } `}
                            >
                              {permit}
                            </div>
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
