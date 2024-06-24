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
    document.getElementById("admin").style.display = "none";
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
    <div id="dashboard" className="w-full h-fit relative">
      {/* add admin */}
      <motion.div
        id="popup1"
        whileInView={{ y: [400, 0] }}
        transition={{ duration: 0.5, type: "tween" }}
        className="w-[500px] h-[450px] sm:left-[30%] fixed bg-[#FFFFFF] hidden  z-[900] mt-[80px] rounded-2xl sm:p-4 p-4 "
      >
        <div className="flex items-center justify-between font-Roboto sm:text-[1.2rem] text-[1.5rem] text-[#0F172A] px-4 border-b-2 mb-4 pb-2">
          <p>Add Admin</p>
          <RxCrossCircled
            onClick={closePopup}
            className="cursor-pointer text-[1.9rem]"
          />
        </div>

        <div className="w-full flex flex-col justify-center items-center ">
          <form
            onSubmit={submitHandler}
            className="w-[95%] h-[350px] hideScroller  overflow-y-scroll"
          >
            <div className="w-full flex flex-col gap-4 mt-4">
              <div className="w-full flex md:flex-row flex-col gap-6">
                <label className="md:w-[50%] w-full font-semibold text-left text-m flex flex-col gap-3">
                  First Name
                  <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
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

                <label className="md:w-[50%] w-full font-semibold text-left text-m flex flex-col gap-3">
                  Last Name
                  <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
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
                <label className=" font-semibold text-left text-m flex flex-col gap-3">
                  Email
                  <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
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
                <label className=" font-semibold text-left text-m flex flex-col gap-3">
                  Role
                  <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
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

          <div className="w-full h-[650px] mt-2 overflow-hidden">
            <div className="w-full h-full overflow-y-auto scrollbar-hide">
              {data2?.map((data, i) => (
                <div
                  key={i}
                  className="w-full flex flex-col py-2 px-4 relative"
                >
                  <div className="w-full">
                    <ProgressBar
                      completed={
                        sortType === "Highestvisit"
                          ? (data.pageVisit / (maxValueData21 * 1.2)) * 100
                          : (data.customerCount / (maxValueData22 * 1.2)) * 100
                      }
                      borderRadius="5px"
                      bgColor="#E2E8F0"
                      baseBgColor="ffffff"
                      height="40px"
                      labelSize="0px"
                      // labelColor="#000000" // Change to white or any contrasting color
                      width="100%"
                      // labelAlignment="left"
                      // customLabel={`${data.name}`}
                    />
                  </div>

                  <div className="absolute top-4 left-4 w-[95%] flex px-4 justify-between items-center">
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
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[39%] flex flex-col gap-4 h-[744px]">
          <div className="bg-white flex flex-col w-full h-[385px] border shadow-lg">
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

            {/* <div className="w-full h-fit">
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
            </div> */}

            {/* <div className="w-full h-fit">
              {data3?.map((data, i) => (
                <div key={i} className="w-full py-2 px-4">
                  <div className="relative w-full h-8 bg-gray-200 rounded">
                    <div
                      className="absolute top-0 left-0 h-fit bg-blue-500 rounded flex items-center"
                      style={{ width: `${data.value}%` }}
                    >
                      <span className="pl-2 text-white font-semibold">
                        {data.name}
                      </span>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-8 flex items-center justify-center">
                      <span className="text-[#1C2434] text-[14px] font-semibold">
                        {data.value}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div> */}

            {/* <div className="w-full h-fit">
              {data3?.map((data, i) => (
                <div
                  key={i}
                  className="w-full flex justify-between py-4 px-4 border-b"
                >
                  <div>
                    <p className="text-[#1C2434] text-[14px] font-semibold">
                      {data.name}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <ProgressBar
                      progress={data.value / 100}
                      text={data.value.toString()}
                      options={{
                        strokeWidth: 4,
                        color: "#1C2434",
                        trailColor: "#ddd",
                        trailWidth: 1,
                        easing: "easeInOut",
                        duration: 1400,
                        svgStyle: { width: "100%", height: "10px" },
                        text: {
                          style: {
                            color: "#1C2434",
                            position: "absolute",
                            right: "10px",
                            top: "0",
                            padding: 0,
                            margin: 0,
                            transform: null,
                          },
                          autoStyleContainer: false,
                        },
                        from: { color: "#FFEA82" },
                        to: { color: "#ED6A5A" },
                        step: (state, bar) => {
                          bar.setText(Math.round(bar.value() * 100) + " %");
                        },
                      }}
                    />
                  </div>
                </div>
              ))}
            </div> */}

            <div className="w-full h-fit">
              {data3?.map((data, i) => (
                <div
                  key={i}
                  className="w-full flex flex-col py-2 px-4 relative"
                >
                  <div className="w-full">
                    <ProgressBar
                      completed={(data.value / (maxValueData3 * 1.2)) * 100}
                      borderRadius="5px"
                      bgColor="#E2E8F0"
                      baseBgColor="ffffff"
                      height="40px"
                      labelSize="0px"
                      // labelColor="#000000" // Change to white or any contrasting color
                      width="100%"
                      // labelAlignment="left"
                      // customLabel={`${data.name}`}
                    />
                  </div>
                  <div className="absolute top-4 left-4 w-[90%] flex px-4 justify-between items-center">
                    <p className="text-[#1C2434] font-semibold">{data.name}</p>
                    <p className="text-[#1C2434] text-[14px] font-semibold">
                      {data.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white flex flex-col w-full h-[345px] border shadow-lg">
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
                  className="w-full flex flex-col py-2 px-4 relative"
                >
                  <div className="w-full">
                    <ProgressBar
                      completed={(data.value / (maxValueData4 * 1.2)) * 100}
                      borderRadius="5px"
                      bgColor="#E2E8F0"
                      baseBgColor="ffffff"
                      height="40px"
                      labelSize="0px"
                      // labelColor="#000000" // Change to white or any contrasting color
                      width="100%"
                      // labelAlignment="left"
                      // customLabel={`${data.name}`}
                    />
                  </div>
                  <div className="absolute top-4 left-4 w-[90%] flex px-4 justify-between items-center">
                    <p className="text-[#1C2434] font-semibold">{data.name}</p>
                    <p className="text-[#1C2434] text-[14px] font-semibold">
                      {data.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-fit my-6 px-6">
        <div className="flex flex-col bg-white justify-between items-center border shadow-lg">
          <div className="w-full flex justify-between p-4 border">
            <p className="text-[#1C2434] text-[24px] font-semibold pl-8">
              Admin Control
            </p>

            <div className="flex gap-4">
              <div className=" h-[2rem] bg-white relative flex items-center border shadow-sm">
                <input
                  className="w-full h-fit px-4 rounded-lg focus:outline-none"
                  type="text"
                  placeholder="Search"
                />
                <CiSearch className="absolute text-[1.3rem] font-semibold right-3" />
              </div>

              <div
                onClick={openPopup}
                className="flex h-[2rem] bg-white border px-[12px] items-center gap-2 shadow-sm"
              >
                <HiOutlinePlusSmall />
                <button>Add admin</button>
              </div>
            </div>
          </div>

          <div className="w-full p-2">
            <div className="w-full bg-[#F7F9FC] flex p-4">
              <div className="w-full flex justify-between">
                <p className="w-[25%] text-[#64748B] text-[12px] font-semibold ml-4">
                  Admin Name
                </p>
                <p className="w-[25%] text-center text-[#64748B] text-[12px] font-semibold">
                  Email
                </p>
                <p className="w-[25%] text-center text-[#64748B] text-[12px] font-semibold">
                  Role
                </p>
                <p className="w-[25%] text-center text-[#64748B] text-[12px] font-semibold">
                  Permission
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-fit">
            {data5?.map((data, i) => (
              <div key={i} className="w-full flex py-4 px-4 border-b ">
                <div className="w-full flex justify-between items-center">
                  <p className="w-[25%] text-[#1C2434] text-[14px] font-semibold ml-6">
                    {data.name}
                  </p>
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
                            <div className="flex gap-1">
                              <div className="w-[48%]">
                                <div
                                  className={`text-center bg-red-700 rounded-full p-1 text-[#F8FAFC] text-[14px] font-semibold`}
                                >
                                  Payment
                                </div>
                              </div>
                              <div className="w-[48%]">
                                <div
                                  className={`text-center bg-orange-400 rounded-full p-1 text-[#F8FAFC] text-[14px] font-semibold`}
                                >
                                  Sales
                                </div>
                              </div>
                            </div>
                          )
                        ) : permit !== "Sales" ? (
                          <div
                            className={`text-center bg-green-500 rounded-full p-1 text-[#F8FAFC] text-[14px] font-semibold ${
                              permit === "All access"
                                ? "bg-green-500 w-[50%] mx-auto"
                                : "bg-orange-400"
                            } `}
                          >
                            {permit}
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
