import React, { useState } from "react";
import { SlRefresh } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import arrow from "../assets/arrowup.png";
import pic from "../assets/picture.png";
import QR from "../assets/QR.png";
import { MdOutlineFileDownload } from "react-icons/md";
import SwitchOffer from "./SwitchOffer";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { VscGoToFile } from "react-icons/vsc";
import { RxCrossCircled } from "react-icons/rx";
import { motion } from "framer-motion";
import { Chart } from "react-google-charts";
import {useNavigate} from "react-router-dom";

const MerchantDetails = ({ f }) => {
  const data1 = [
    {
      id: "1",
      user: "Souptik das",
      userId: "UID00012",
      contact: "7603037718",
      spend: "1000",
      recommend: "200",
      visit: "20",
      action: "View Details",
    },
    {
      id: "2",
      user: "Souptik das",
      userId: "UID00012",
      contact: "7603037718",
      spend: "1000",
      recommend: "200",
      visit: "20",
      action: "View Details",
    },
    {
      id: "3",
      user: "Souptik das",
      userId: "UID00012",
      contact: "7603037718",
      spend: "1000",
      recommend: "200",
      visit: "20",
      action: "View Details",
    },
    {
      id: "4",
      user: "Souptik das",
      userId: "UID00012",
      contact: "7603037718",
      spend: "1000",
      recommend: "200",
      visit: "20",
      action: "View Details",
    },
    {
      id: "5",
      user: "Souptik das",
      userId: "UID00012",
      contact: "7603037718",
      spend: "1000",
      recommend: "200",
      visit: "20",
      action: "View Details",
    },
    {
      id: "6",
      user: "Souptik das",
      userId: "UID00012",
      contact: "7603037718",
      spend: "1000",
      recommend: "200",
      visit: "20",
      action: "View Details",
    },
    {
      id: "7",
      user: "Souptik das",
      userId: "UID00012",
      contact: "7603037718",
      spend: "1000",
      recommend: "200",
      visit: "20",
      action: "View Details",
    },
    {
      id: "8",
      user: "Souptik das",
      userId: "UID00012",
      contact: "7603037718",
      spend: "1000",
      recommend: "200",
      visit: "20",
      action: "View Details",
    },
    {
      id: "9",
      user: "Souptik das",
      userId: "UID00012",
      contact: "7603037718",
      spend: "1000",
      recommend: "200",
      visit: "20",
      action: "View Details",
    },
    {
      id: "10",
      user: "Souptik das",
      userId: "UID00012",
      contact: "7603037718",
      spend: "1000",
      recommend: "200",
      visit: "20",
      action: "View Details",
    },
  ];

  const data3 = [
    {
      name: "Walk-in Offer",
      redeem: 50,
      discount: 500,
    },
    {
      name: "Flat Discount",
      redeem: 35,
      discount: 500,
    },
    {
      name: "Happy Hours",
      redeem: 60,
      discount: 500,
    },
    {
      name: "Birthday Offer",
      redeem: 10,
      discount: 500,
    },
    {
      name: "Special Day Offer",
      redeem: 30,
      discount: 500,
    },
  ];

  const [formData, setFormData] = useState({
    brandName: "",
    businessType: "",
    email: "",
    contact: "",
    fssai: "",
    gst: "",
    permission: "",
    upiId: "",
    bankingName: "",
  });

  const resetFormData = () => {
    // Reset form values
    setFormData({
      brandName: "",
      businessType: "",
      email: "",
      contact: "",
      fssai: "",
      gst: "",
      permission: "",
      upiId: "",
      bankingName: "",
    });
  };

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

  function closePopup() {
    console.log("inside closePopup");
    document.getElementById("admin").style.display = "none";
    document.getElementById("popup1").style.display = "none";
    document.body.style.overflow = "auto";

    // Check if the restaurant element exists before trying to modify its style
    const restaurantElement = document.getElementById("admin");
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

  const [data, setData] = useState(data1);
  const navigate=useNavigate()

  function btnHandle3() {
    document.getElementById("btn3").style.background = "#004AAD";
    document.getElementById("btn3").style.color = "white";
    document.getElementById("btn2").style.background = "white";
    document.getElementById("btn2").style.color = "black";
    document.getElementById("btn1").style.background = "white";
    document.getElementById("btn1").style.color = "black";
  }

  const changeComp = (id) => {
    navigate("/userdetails")
    console.log(id);
    f(id);
  };

  const Pagination = ({ data }) => {
    //data =data?.reverse();

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const maxPage = Math.ceil(data?.length / itemsPerPage);

    function currentPageData() {
      const startIndex = (currentPage - 1) * itemsPerPage;
      return data?.slice(startIndex, startIndex + itemsPerPage);
    }

    function goToPage(pageNumber) {
      setCurrentPage(pageNumber);
    }

    const renderPageNumbers = () => {
      const pageNumbers = [];
      let itemsToShow = 3; // Number of pages to show before and after the current page
      let start = Math.max(currentPage - itemsToShow, 1);
      let end = Math.min(currentPage + itemsToShow, maxPage);

      if (start > 1) {
        pageNumbers.push(1);
        if (start > 2) {
          pageNumbers.push("...");
        }
      }

      for (let i = start; i <= end; i++) {
        pageNumbers.push(i);
      }

      if (end < maxPage) {
        if (end < maxPage - 1) {
          pageNumbers.push("...");
        }
        pageNumbers.push(maxPage);
      }

      return pageNumbers.map((number, index) =>
        number === "..." ? (
          <span key={index} className="page-item dots">
            {number}
          </span>
        ) : (
          <button
            key={index}
            onClick={() => goToPage(number)}
            className={`page-item ${currentPage === number ? "active" : ""}`}
          >
            {number}
          </button>
        )
      );
    };

    return (
      <div>
        {/* Render the current page's data */}
        {currentPageData()?.map((data, i) => (
          <div key={i} className="w-full flex p-4 border-b ">
            <div className="w-[55%] flex justify-between">
              <p className="w-[25%] text-[#1C2434] text-[14px] font-semibold ml-4">
                {data.user}
              </p>
              <p className="w-[25%] text-center text-[#1C2434] text-[14px]">
                {data.userId}
              </p>
              <p className="w-[25%] text-center text-[#1C2434] text-[14px]">
                {data.contact}
              </p>
              <p className="w-[25%] text-center text-[#422B0D] text-[14px] font-semibold">
                {data.spend}
              </p>
            </div>
            <div className="w-[45%] flex justify-between">
              <p className="w-[40%] text-center text-[#422B0D] text-[14px] font-semibold">
                {data.recommend}
              </p>
              <p className="w-[30%] text-center text-[#422B0D] text-[14px] font-semibold pr-6">
                {data.visit}
              </p>
              <div
                onClick={() => changeComp(data.id)}
                className="w-[30%] flex items-center gap-1 text-[#3C50E0] text-[14px] font-semibold"
              >
                <button>{data.action}</button>
                <VscGoToFile className="size-[18px]" />
              </div>
            </div>
          </div>
        ))}
        <div className="flex justify-between px-8  mt-7 sm:flex-row flex-col sm:gap-0 gap-4">
          {/* Pagination controls */}
          {/* Dropdown for items per page */}
          <div className="items-per-page">
            <label htmlFor="items-per-page">Items per page:</label>
            <select
              className="border-2 mx-2 rounded-md"
              id="items-per-page"
              value={itemsPerPage}
              onChange={(e) => setItemsPerPage(Number(e.target.value))}
            >
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </select>
          </div>
          <div className="flex gap-5">
            <button
              className="page-item"
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              <GrFormPrevious />
            </button>
            <div className="flex gap-3">{renderPageNumbers()}</div>
            <button
              className="page-item"
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === maxPage}
            >
              <MdNavigateNext />
            </button>
          </div>

          <div className="current-page sm:block hidden">
            Page {currentPage} of {maxPage}
          </div>
        </div>
      </div>
    );
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = QR; // Ensure QR is a URL or base64 string
    link.download = "QR_Code.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Campaign graph data
  const options2 = {
    pieHole: 0.4,
    is3D: false,
    colors: ["#3C50E0", "#6577F3", "#80CAEE", "#0FADCF"],
    legend: {
      position: "bottom",
      textStyle: {
        bold: true, // Make the legend text bold
      },
      alignment: "start", // Align the legend text to the start (left) of the legend box
    },
  };

  const data2 = [
    ["Campaign Type", "count"],
    ["Mobile", 20],
    ["Email", 12],
    ["WhatsApp", 23],
    // CSS-style declaration
  ];

  // Transaction graph data
  const options4 = {
    pieHole: 0.4,
    is3D: false,
    colors: ["#3C50E0", "#6577F3", "#80CAEE", "#0FADCF", "#6577F3"],
    legend: {
      position: "bottom",
      textStyle: {
        bold: true, // Make the legend text bold
      },
      alignment: "start", // Align the legend text to the start (left) of the legend box
    },
  };

  const data4 = [
    ["Method", "count"],
    ["UPI", 20],
    ["Debit Card", 12],
    ["Rupay", 9],
    ["Credit Card", 7],
    ["Others", 3],
    // CSS-style declaration
  ];

  // Gender graph data
  const options5 = {
    pieHole: 0.4,
    is3D: false,
    colors: ["#3C50E0", "#6577F3", "#80CAEE", "#0FADCF"],
    legend: {
      position: "bottom",
      textStyle: {
        bold: true, // Make the legend text bold
      },
      alignment: "start", // Align the legend text to the start (left) of the legend box
    },
  };

  const data5 = [
    ["Gender", "count"],
    ["Male", 20],
    ["Female", 12],
    ["Others", 2],
    ["Non disclose", 7],
    // CSS-style declaration
  ];

  return (
    <div
      id="merchantDetails"
      className="w-full h-fit relative sm:w-[80%] sm:ml-[20%] bg-[#F6F8FF] flex flex-col"
    >
      {/* Edit merchant */}
      {/* <motion.div
        id="popup1"
        whileInView={{ y: [400, 0] }}
        transition={{ duration: 0.5, type: "tween" }}
        className="w-[500px] h-[475px] sm:left-[30%] fixed bg-[#FFFFFF] hidden  z-[900] mt-[80px] rounded-2xl sm:p-4 p-4 "
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
            <div className="w-full flex flex-col gap-6 mt-4">
              <div className="w-full flex md:flex-row flex-col gap-6">
                <label className="md:w-[50%] w-full font-semibold text-left text-m flex flex-col gap-3">
                  Brand Name
                  <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
                    <input
                      type="text"
                      name="brandName"
                      placeholder="Foodoos"
                      value={formData.brandName}
                      onChange={handleChange}
                      className="w-full h-full text-richblack-5 outline-none"
                    />
                  </div>
                </label>

                <label className="md:w-[50%] w-full font-semibold text-left text-m flex flex-col gap-3">
                  <p className="font-semibold ">Business Type</p>
                  <div className="flex w-full h-[3rem] border rounded-[0.5rem] px-[12px] items-center gap-3">
                    <select
                      required
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      className="w-full h-full outline-none"
                    >
                      <option value="">Select Business Type</option>
                      <option value="Retail">Retail</option>
                      <option value="Hospitality">Hospitality</option>
                      <option value="Technology">Technology</option>
                      <option value="Healthcare">Healthcare</option>
                    </select>
                  </div>
                </label>
              </div>

              <div className="w-full flex md:flex-row flex-col gap-6">
                <label className="md:w-[50%] w-full font-semibold text-left text-m flex flex-col gap-3">
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

                <label className="md:w-[50%] w-full font-semibold text-left text-m flex flex-col gap-3">
                  Phone Number
                  <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
                    <input
                      type="tel"
                      name="contact"
                      placeholder="Enter phone number"
                      value={formData.contact}
                      onChange={handleChange}
                      className="w-full h-full text-richblack-5 outline-none"
                    />
                  </div>
                </label>
              </div>

              <div className="w-full flex md:flex-row flex-col gap-6">
                <label className="md:w-[50%] w-full font-semibold text-left text-m flex flex-col gap-3">
                  FSSAI License Number
                  <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
                    <input
                      type="number"
                      name="fssai"
                      placeholder="Enter FSSAI"
                      value={formData.fssai}
                      onChange={handleChange}
                      className="w-full h-full text-richblack-5 outline-none"
                    />
                  </div>
                </label>

                <label className="md:w-[50%] w-full font-semibold text-left text-m flex flex-col gap-3">
                  GST License Number
                  <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
                    <input
                      type="number"
                      name="gst"
                      placeholder="Enter gst number"
                      value={formData.gst}
                      onChange={handleChange}
                      className="w-full h-full text-richblack-5 outline-none"
                    />
                  </div>
                </label>
              </div>

              <div className="w-full">
                <label className="w-full text-left text-m flex flex-col gap-3">
                  <p className="font-semibold ">Permission</p>
                  <div className="flex w-full h-[3rem] border rounded-[0.5rem] px-[12px] items-center gap-3">
                    <select
                      required
                      name="permission"
                      value={formData.permission}
                      onChange={handleChange}
                      className="w-full h-full outline-none"
                    >
                      <option value="">UPI</option>
                      <option value="Retail">Retail</option>
                      <option value="Hospitality">Hospitality</option>
                      <option value="Technology">Technology</option>
                      <option value="Healthcare">Healthcare</option>
                    </select>
                  </div>
                </label>
              </div>

              <div className="w-full flex md:flex-row flex-col gap-6">
                <label className="md:w-[50%] w-full font-semibold text-left text-m flex flex-col gap-3">
                  UPI ID
                  <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
                    <input
                      type="text"
                      name="upiId"
                      placeholder="Enter UPI"
                      value={formData.upiId}
                      onChange={handleChange}
                      className="w-full h-full text-richblack-5 outline-none"
                    />
                  </div>
                </label>

                <label className="md:w-[50%] w-full font-semibold text-left text-m flex flex-col gap-3">
                  Banking Name
                  <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
                    <input
                      type="text"
                      name="bankingName"
                      placeholder="Enter name"
                      value={formData.bankingName}
                      onChange={handleChange}
                      className="w-full h-full text-richblack-5 outline-none"
                    />
                  </div>
                </label>
              </div>

              <div className="w-full flex gap-3 justify-center mt-2 mb-2 mx-auto">
                <button className="w-full bg-[#3C50E0] rounded-[8px] text-white font-medium text-richblack-900 px-[12px] py-[8px] mt-6">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </motion.div> */}
      <div className="w-full h-fit  mt-[70px] px-6">
        <div className="w-full flex justify-between">
          <div className="w-[40%] flex gap-4 py-4 items-center">
            <p className="text-[#1C2434] text-lg font-semibold ">
              Merchant Details
            </p>
            <div className="flex  bg-[#B9D7FF] border px-1 py-[0.05rem] items-center rounded-md text-sm">
              <button>Basic Plan</button>
            </div>
          </div>

          <div className="w-fit flex gap-4 py-4 text-[#0F172A] text-sm">
            <button className=" bg-white border px-2  items-center shadow-sm">
              MetaID: 6789987643
            </button>
            <button className=" bg-white border px-2  items-center shadow-sm">
              Open Menu
            </button>
            <button className=" bg-white border px-2  items-center shadow-sm">
              Open Console
            </button>
            {/* <button
              onClick={openPopup}
              className="h-[2rem]  bg-white border px-6 font-semibold items-center shadow-sm"
            >
              Edit
            </button>
            <button className="h-[2rem] bg-white border px-6 font-semibold items-center shadow-sm">
              View Profile
            </button> */}
          </div>
        </div>
      </div>

      <div className="w-full h-fit  mb-4 px-6 flex justify-between ">
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex justify-between">
            <div className="w-full  bg-white p-4 flex items-center gap-4 shadow-md">
              <div className="w-full flex gap-4 items-center">
                <img
                  src={pic}
                  alt="pic"
                  className="h-[60px] w-[70px] aspect-auto cursor-pointer"
                />
                <div className="w-full flex justify-between items-center flex-wrap">
                  <div className="flex flex-col gap-1">
                    <div className="text-[#1C2434B0] text-[16px] gap-2 font-semibold flex  text-nowrap">
                      <p>Merchant Name:</p>
                      <p className="text-[#1C2434]">The Canister’s Cafe</p>
                    </div>
                    <div className="text-[#1C2434B0] text-[16px] font-semibold gap-3 flex text-nowrap">
                      <p>Merchant Mail:</p>
                      <p className="text-[#1C2434]">asasa@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex text-[#1C2434B0] text-[16px] gap-2 font-semibold text-nowrap">
                    <p>Profile created :</p>{" "}
                    <p className="text-[#1C2434]">19/08/2002</p>
                  </div>
                  <div className="flex text-[#1C2434B0] text-[16px] gap-2 font-semibold text-nowrap">
                    <p>Merchant ID:</p>
                    <p className="text-[#1C2434]">ID010101</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-fit  mb-4 px-6 flex justify-between gap-4">
        {/*business details */}
        <div className="w-[50%] h-fit bg-white flex flex-col shadow-md">
          <div className="w-full px-4 py-2 border-b-2 border-slate-300">
            <p className="text-[#212B36] text-[20px] font-semibold">
              Business Details
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
              <p className="text-[#1C2434B0] text-[16px]">Business Landmark</p>
              <p className="text-[#1C2434] text-[16px]">Amp Baisakhi Mall</p>
            </div>
          </div>
          <div className="w-full py-3 px-5 border-b">
            <div className="w-full flex justify-between font-semibold">
              <p className="text-[#1C2434B0] text-[16px]">Business State</p>
              <p className="text-[#1C2434] text-[16px]">West Bengal</p>
            </div>
          </div>
          <div className="w-full py-3 px-5 border-b">
            <div className="w-full flex justify-between font-semibold">
              <p className="text-[#1C2434B0] text-[16px]">Pincode</p>
              <p className="text-[#1C2434] text-[16px]">700059</p>
            </div>
          </div>
          <div className="w-full py-3 px-5 border-b">
            <div className="w-full flex justify-between font-semibold">
              <p className="text-[#1C2434B0] text-[16px]">Manager Name</p>
              <p className="text-[#1C2434] text-[16px]">Sangit Saha</p>
            </div>
          </div>
          <div className="w-full py-3 px-5 border-b">
            <div className="w-full flex justify-between font-semibold">
              <p className="text-[#1C2434B0] text-[16px]">Manager Contact</p>
              <p className="text-[#1C2434] text-[16px]">+01 7603037718</p>
            </div>
          </div>
        </div>

        {/*billing details */}
        <div className="w-[50%] h-fit bg-white flex flex-col shadow-md">
          <div className="w-full px-4 py-2 border-b-2 border-slate-300">
            <p className="text-[#212B36] text-[20px] font-semibold">
              Billing Details
            </p>
          </div>
          <div className="w-full py-3 px-5 border-b">
            <div className="w-full flex justify-between font-semibold">
              <p className="text-[#1C2434B0] text-[16px]">Business Name</p>
              <p className="text-[#1C2434] text-[16px]">Canister’s Cafe</p>
            </div>
          </div>
          <div className="w-full py-3 px-5 border-b">
            <div className="w-full flex justify-between font-semibold">
              <p className="text-[#1C2434B0] text-[16px]">Business Country</p>
              <p className="text-[#1C2434] text-[16px]">India</p>
            </div>
          </div>
          <div className="w-full py-3 px-5 border-b">
            <div className="w-full flex justify-between font-semibold">
              <p className="text-[#1C2434B0] text-[16px]">Business State</p>
              <p className="text-[#1C2434] text-[16px]">West Bengal</p>
            </div>
          </div>
          <div className="w-full py-3 px-5 border-b">
            <div className="w-full flex justify-between font-semibold">
              <p className="text-[#1C2434B0] text-[16px]">Pincode</p>
              <p className="text-[#1C2434] text-[16px]">700059</p>
            </div>
          </div>
          <div className="w-full py-3 px-5 border-b">
            <div className="w-full flex justify-between font-semibold">
              <p className="text-[#1C2434B0] text-[16px]">GST Number</p>
              <p className="text-[#1C2434] text-[16px]">Sangit Saha</p>
            </div>
          </div>
          <div className="w-full py-3 px-5 border-b">
            <div className="w-full flex justify-between font-semibold">
              <p className="text-[#1C2434B0] text-[16px]">Address</p>
              <p className="text-[#1C2434] text-[16px]">
                AG-112/amp baisakhi mall, Salt Lake
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-fit  my-4 px-6 flex justify-between ">
        <div className="w-full flex justify-between gap-4">
          <div className="w-1/3 h-[77px] bg-white p-4 flex justify-center shadow-md">
            <div className="w-full flex justify-between items-center">
              <p className="text-[#1C2434] text-[20px] font-semibold">
                Digital Menu
              </p>
              <SwitchOffer isActive={false} />
            </div>
          </div>
          <div className="w-1/3 h-[77px] bg-white p-4 flex justify-center shadow-md">
            <div className="w-full flex justify-between items-center">
              <p className="text-[#1C2434] text-[20px] font-semibold">
                CRM Control
              </p>
              <SwitchOffer isActive={false} />
            </div>
          </div>

          <div className="w-1/3 h-[77px] bg-white p-4 flex justify-center shadow-md">
            <div className="w-full flex justify-between items-center">
              <p className="text-[#1C2434] text-[20px] font-semibold">
                Marketing
              </p>
              <SwitchOffer isActive={false} />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-fit  my-3 px-6">
        <div className="w-full flex justify-between">
          <div className="w-[40%] flex gap-4 py-2 items-center">
            <p className="text-[#1C2434] text-[24px] font-semibold ">
              Campaign Usage
            </p>
          </div>

          <div className="w-fit flex gap-4 py-2">
            <button
              id="btn3"
              onClick={btnHandle3}
              className="h-[2rem]  bg-white border px-6 font-semibold items-center shadow-sm"
            >
              Last 30 days
            </button>
            <button className=" bg-white border px-2  items-center shadow-sm">
              View Wallet
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-fit mb-4 px-6 flex justify-between ">
        <div className="w-[32.5%] h-[130px] bg-white py-4 px-6 border shadow-lg">
          <div className="w-full flex flex-col gap-3">
            <p className="text-[16px] text-[#64748B] font-semibold">
              Campaign Cost
            </p>
            <p className="text-[#1C2434] text-[32px] font-semibold">100</p>
          </div>
        </div>
        <div className="w-[32.5%] h-[130px] bg-white py-4 px-6 border shadow-lg">
          <div className="w-full flex flex-col gap-3">
            <p className="text-[16px] text-[#64748B] font-semibold">
              Due Payment
            </p>
            <p className="text-[#1C2434] text-[32px] font-semibold">0</p>
          </div>
        </div>
        <div className="w-[32.5%] h-[130px] bg-white py-4 px-6 border shadow-lg">
          <div className="w-full flex flex-col gap-3">
            <p className="text-[16px] text-[#64748B] font-semibold">
              Wallet Balance
            </p>
            <p className="text-[#1C2434] text-[32px] font-semibold">2,000</p>
          </div>
        </div>
      </div>

      <div className="w-full h-fit px-6">
        <div className="w-[40%] flex flex-col py-2 justify-center items-start">
          <p className="text-[#1C2434] text-[24px] font-semibold ">
            User database
          </p>
          <p className="text-[#7F7E7E] text-sm font-semibold ">
            Total customer database: <span className="text-[#004AAD]">100 records</span>
          </p>
        </div>
      </div>

      <div className="w-full h-fit  px-6 flex justify-between">
        <div className="w-full h-fit bg-white flex flex-col gap-4 p-4 shadow-lg">
          <div className="w-full bg-[#F7F9FC] flex p-4">
            <div className="w-[55%] flex justify-between">
              <p className="w-[25%] text-[#64748B] text-[12px] font-semibold ml-4">
                User Name
              </p>
              <p className="w-[25%] text-center text-[#64748B] text-[12px] font-semibold">
                User ID
              </p>
              <p className="w-[25%] text-center text-[#64748B] text-[12px] font-semibold">
                Mobile Number
              </p>
              <p className="w-[25%] text-center text-[#64748B] text-[12px] font-semibold">
                Total Spend
              </p>
            </div>
            <div className="w-[45%] flex justify-between">
              <p className="w-[40%] text-center text-[#64748B] text-[12px] font-semibold">
                Dish Recommendation
              </p>
              <p className="w-[30%] text-center text-[#64748B] text-[12px] font-semibold">
                Resturant Visit
              </p>
              <p className="w-[30%] text-center text-[#64748B] text-[12px] font-semibold">
                Action
              </p>
            </div>
          </div>

          <div className="w-full h-fit ">
            <Pagination data={data1} />
          </div>
        </div>
      </div>

      <div className="w-full h-fit my-6 px-6">
        <button className="w-full h-[3rem] bg-[#F44336] text-white font-semibold border rounded-lg">
          Permanentaly Delete Merchant
        </button>
      </div>
    </div>
  );
};

export default MerchantDetails;
