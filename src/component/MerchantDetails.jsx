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
  const [sortType, setSortType] = useState("");

  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    console.log(sortValue);
    setSortType(sortValue);
    sortData(sortValue);
  };

  const sortData = (type) => {
    let newData = [...data];
    switch (type) {
      case "Paymentbydates":
        newData = newData.sort(
          (a, b) =>
            new Date(b.date.split("-").reverse().join("-")) -
            new Date(a.date.split("-").reverse().join("-"))
        );
        break;
      case "Highestamount":
        newData = newData.sort(
          (a, b) =>
            parseFloat(b.billamount.replace("₹", "")) -
            parseFloat(a.billamount.replace("₹", ""))
        );
        break;
      case "Highestdiscount":
        newData = newData.sort(
          (a, b) =>
            parseFloat(b.discount.replace("₹", "")) -
            parseFloat(a.discount.replace("₹", ""))
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

  function btnHandle4() {
    document.getElementById("btn4").style.background = "#004AAD";
    document.getElementById("btn4").style.color = "white";
    document.getElementById("btn5").style.background = "white";
    document.getElementById("btn5").style.color = "black";
    document.getElementById("btn6").style.background = "white";
    document.getElementById("btn6").style.color = "black";
  }

  function btnHandle5() {
    document.getElementById("btn5").style.background = "#004AAD";
    document.getElementById("btn5").style.color = "white";
    document.getElementById("btn4").style.background = "white";
    document.getElementById("btn4").style.color = "black";
    document.getElementById("btn6").style.background = "white";
    document.getElementById("btn6").style.color = "black";
  }

  function btnHandle6() {
    document.getElementById("btn6").style.background = "#004AAD";
    document.getElementById("btn6").style.color = "white";
    document.getElementById("btn5").style.background = "white";
    document.getElementById("btn5").style.color = "black";
    document.getElementById("btn4").style.background = "white";
    document.getElementById("btn4").style.color = "black";
  }

  const changeComp = (id) => {
    console.log(id);
    f(id);
  };

  const Pagination = ({ data }) => {
    //data =data?.reverse();

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(6);
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
              <option value="6">6</option>
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
    <div id="merchantDetails" className="w-full h-fit relative">
      {/* Edit merchant */}
      <motion.div
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
      </motion.div>
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
            <button
              onClick={openPopup}
              className="h-[2rem]  bg-white border px-6 font-semibold items-center shadow-sm"
            >
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
                <MdOutlineFileDownload
                  className="size-[24px]"
                  onClick={handleDownload}
                />
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

      <div className="w-full h-fit  my-3 px-6">
        <div className="w-full flex justify-between">
          <div className="w-[40%] flex gap-4 py-2 items-center">
            <p className="text-[#1C2434] text-[24px] font-semibold ">
              Campaign Usage
            </p>
          </div>

          <div className="w-fit flex gap-4 py-2">
            <button
              id="btn1"
              onClick={btnHandle1}
              className="h-[2rem]  bg-[#004AAD] border px-6 text-white font-semibold items-center shadow-sm"
            >
              Today
            </button>
            <button
              id="btn2"
              onClick={btnHandle2}
              className="h-[2rem]  bg-white border px-6 font-semibold items-center shadow-sm"
            >
              Weekly
            </button>
            <button
              id="btn3"
              onClick={btnHandle3}
              className="h-[2rem]  bg-white border px-6 font-semibold items-center shadow-sm"
            >
              Monthly
            </button>
            <input
              type="date"
              className="h-[2rem] focus:outline-none px-3 border shadow-sm"
            />
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

      <div className="w-full h-fit  my-4 px-6 flex justify-between ">
        <div className="w-[60%] flex flex-col gap-4">
          <div className="w-full flex justify-between">
            <div className="w-[49%] h-[150px] bg-white p-4 flex flex-col justify-between shadow-md">
              <p className="text-[16px] text-[#64748B] font-semibold">
                Total Campaign sent
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
            <div className="w-[49%] h-[150px] bg-white p-4 flex flex-col justify-between shadow-md">
              <p className="text-[16px] text-[#64748B] font-semibold">
                Mobile campaign sent
              </p>
              <p className="text-[#1C2434] text-[32px] font-semibold">1000</p>
              <div className="flex gap-2 items-center">
                <div className="flex gap-1 text-[#1A9882] items-center bg-[#10B9814D] rounded-lg p-1">
                  <img className="size-[14px]" src={arrow} />
                  <p className="text-[10px]">18%</p>
                </div>
                <p className="text-[#64748B] text-[14px]">Since last week</p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between">
            <div className="w-[49%] h-[150px] bg-white p-4 flex flex-col justify-between shadow-md">
              <p className="text-[16px] text-[#64748B] font-semibold">
                Email campaign sent
              </p>
              <p className="text-[#1C2434] text-[32px] font-semibold">₹1000</p>
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
                Whatsapp campaign sent
              </p>
              <p className="text-[#1C2434] text-[32px] font-semibold">₹8,000</p>
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
        <div className="w-[39%] h-[316px] bg-white flex flex-col shadow-md">
          <div className="w-full px-4 py-2 border-b-2 border-slate-300">
            <p className="text-[#212B36] text-[22px] font-semibold">
            Campaign Utilisation
            </p>
          </div>
          <Chart
            chartType="PieChart"
            width="100%"
            height="265px"
            data={data2}
            options={options2}
          />
        </div>
      </div>

      <div className="w-full h-fit  my-3 px-6">
        <div className="w-full flex justify-between">
          <div className="w-[40%] flex gap-4 py-2 items-center">
            <p className="text-[#1C2434] text-[24px] font-semibold ">
              Payment overview
            </p>
          </div>

          <div className="w-fit flex gap-4 py-2">
            <button
              id="btn4"
              onClick={btnHandle4}
              className="h-[2rem]  bg-[#004AAD] border px-6 text-white font-semibold items-center shadow-sm"
            >
              Today
            </button>
            <button
              id="btn5"
              onClick={btnHandle5}
              className="h-[2rem]  bg-white border px-6 font-semibold items-center shadow-sm"
            >
              Weekly
            </button>
            <button
              id="btn6"
              onClick={btnHandle6}
              className="h-[2rem]  bg-white border px-6 font-semibold items-center shadow-sm"
            >
              Monthly
            </button>
            <input
              type="date"
              className="h-[2rem] focus:outline-none px-3 border shadow-sm"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-fit  my-4 px-6 flex justify-between ">
        <div className="w-[60%] flex flex-col gap-4">
          <div className="w-full flex justify-between">
            <div className="w-[49%] h-[150px] bg-white p-4 flex flex-col justify-between shadow-md">
              <p className="text-[16px] text-[#64748B] font-semibold">
                Total Payment Collection (GMV)
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
            <div className="w-[49%] h-[150px] bg-white p-4 flex flex-col justify-between shadow-md">
              <p className="text-[16px] text-[#64748B] font-semibold">
                Total Transaction Count
              </p>
              <p className="text-[#1C2434] text-[32px] font-semibold">1000</p>
              <div className="flex gap-2 items-center">
                <div className="flex gap-1 text-[#1A9882] items-center bg-[#10B9814D] rounded-lg p-1">
                  <img className="size-[14px]" src={arrow} />
                  <p className="text-[10px]">18%</p>
                </div>
                <p className="text-[#64748B] text-[14px]">Since last week</p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between">
            <div className="w-[49%] h-[150px] bg-white p-4 flex flex-col justify-between shadow-md">
              <p className="text-[16px] text-[#64748B] font-semibold">
                Total Gateway fee Collection
              </p>
              <p className="text-[#1C2434] text-[32px] font-semibold">₹1000</p>
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
                Total Convenience Fee collection
              </p>
              <p className="text-[#1C2434] text-[32px] font-semibold">₹8,000</p>
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
        <div className="w-[39%] h-[316px] bg-white flex flex-col shadow-md">
          <div className="w-full px-4 py-2 border-b-2 border-slate-300">
            <p className="text-[#212B36] text-[22px] font-semibold">
              Transaction Analytics
            </p>
          </div>
          <Chart
            chartType="PieChart"
            width="100%"
            height="265px"
            data={data4}
            options={options4}
          />
        </div>
      </div>

      <div className="w-full h-fit  my-3 px-6">
        <div className="w-full flex justify-between">
          <div className="w-[40%] flex gap-4 py-2 items-center">
            <p className="text-[#1C2434] text-[24px] font-semibold ">
              Offers overview
            </p>
          </div>

          <div className="w-fit flex gap-4 py-2">
            <button
              id="btn4"
              onClick={btnHandle4}
              className="h-[2rem]  bg-[#004AAD] border px-6 text-white font-semibold items-center shadow-sm"
            >
              Today
            </button>
            <button
              id="btn5"
              onClick={btnHandle5}
              className="h-[2rem]  bg-white border px-6 font-semibold items-center shadow-sm"
            >
              Weekly
            </button>
            <button
              id="btn6"
              onClick={btnHandle6}
              className="h-[2rem]  bg-white border px-6 font-semibold items-center shadow-sm"
            >
              Monthly
            </button>
            <input
              type="date"
              className="h-[2rem] focus:outline-none px-3 border shadow-sm"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-fit  my-4 px-6 flex justify-between ">
        <div className="w-[52%] flex flex-col gap-4">
          <div className="w-full flex justify-between">
            <div className="w-[49%] h-[136px] bg-white px-4 py-6 flex flex-col gap-4 shadow-md">
              <p className="text-[16px] text-[#64748B] font-semibold">
                Total Offer redeemed
              </p>
              <p className="text-[#1C2434] text-[32px] font-semibold">1000</p>
            </div>
            <div className="w-[49%] h-[136px] bg-white px-4 py-6 flex flex-col gap-4 shadow-md">
              <p className="text-[16px] text-[#64748B] font-semibold">
                Total discounted Amount
              </p>
              <p className="text-[#1C2434] text-[32px] font-semibold">1000</p>
            </div>
          </div>
          <div className="w-full flex justify-between">
            <div className="w-[49%] h-[136px] bg-white px-4 py-6 flex flex-col gap-4 shadow-md">
              <p className="text-[16px] text-[#64748B] font-semibold">
                Unique Redemption
              </p>
              <p className="text-[#1C2434] text-[32px] font-semibold">20</p>
            </div>
            <div className="w-[49%] h-[136px] bg-white px-4 py-6 flex flex-col gap-4 shadow-md">
              <p className="text-[16px] text-[#64748B] font-semibold">
                Repeat Redemption
              </p>
              <p className="text-[#1C2434] text-[32px] font-semibold">100</p>
            </div>
          </div>
        </div>
        <div className="w-[47%] h-[288px] bg-white flex flex-col  shadow-lg">
          <div className="px-4 py-3 flex flex-col gap-2">
            <p className="text-[#212B36] text-[22px] font-semibold">
              Offers redemption
            </p>

            <div className="w-full flex justify-between">
              <p className="w-[55%] text-[#64748B] text-[12px] font-semibold mt-2">
                Offer Type
              </p>
              <div className="w-[40%] flex gap-6">
                <p className="w-[50%] text-center text-[#64748B] text-[12px] font-semibold">
                  Redeemtion
                </p>
                <p className="w-[50%] text-center text-[#64748B] text-[12px] font-semibold">
                  Discount
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-fit">
            {data3?.map((data, i) => (
              <div key={i} className="w-full flex justify-between py-2 px-4 ">
                <div className="w-[55%] flex">
                  <p className="text-[#1C2434] text-[14px] font-semibold">
                    {data.name}
                  </p>
                </div>
                <div className="w-[40%] flex justify-between">
                  <p className="w-[50%] text-center text-[#1C2434] text-[14px] font-semibold">
                    {data.redeem}
                  </p>
                  <p className="w-[50%] text-center text-[#1C2434] text-[14px] font-semibold">
                    {data.discount}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-fit  my-3 px-6">
        <div className="w-[40%] flex gap-4 py-2 items-center">
          <p className="text-[#1C2434] text-[24px] font-semibold ">
            User database
          </p>
        </div>
      </div>

      <div className="w-full h-fit  my-4 px-6 flex justify-between ">
        <div className="w-[60%] flex flex-col gap-4">
          <div className="w-full flex justify-between">
            <div className="w-[49%] h-[150px] bg-white p-4 flex flex-col justify-between shadow-md">
              <p className="text-[16px] text-[#64748B] font-semibold">
                Total User Database
              </p>
              <p className="text-[#1C2434] text-[32px] font-semibold">1000</p>
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
                User with activity
              </p>
              <p className="text-[#1C2434] text-[32px] font-semibold">1000</p>
              <div className="flex gap-2 items-center">
                <div className="flex gap-1 text-[#1A9882] items-center bg-[#10B9814D] rounded-lg p-1">
                  <img className="size-[14px]" src={arrow} />
                  <p className="text-[10px]">18%</p>
                </div>
                <p className="text-[#64748B] text-[14px]">Since last week</p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between">
            <div className="w-[49%] h-[150px] bg-white p-4 flex flex-col justify-between shadow-md">
              <p className="text-[16px] text-[#64748B] font-semibold">
                User with payments
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
            <div className="w-[49%] h-[150px] bg-white p-4 flex flex-col justify-between shadow-md">
              <p className="text-[16px] text-[#64748B] font-semibold">
                User with recomendation
              </p>
              <p className="text-[#1C2434] text-[32px] font-semibold">1,000</p>
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
        <div className="w-[39%] h-[316px] bg-white flex flex-col shadow-md">
          <div className="w-full px-4 py-2 border-b-2 border-slate-300">
            <p className="text-[#212B36] text-[22px] font-semibold">
              User Gender Split
            </p>
          </div>
          <Chart
            chartType="PieChart"
            width="100%"
            height="265px"
            data={data5}
            options={options5}
          />
        </div>
      </div>

      <div className="w-full h-fit my-6 px-6 flex justify-between">
        <div className="w-full h-fit bg-white flex flex-col gap-4 p-4 shadow-lg">
          <div className="w-full flex gap-4">
            <div className="w-[30%] h-[2rem] bg-white relative flex items-center border shadow-sm">
              <input
                className="w-full h-fit px-4 rounded-lg focus:outline-none"
                type="text"
                placeholder="Search"
              />
              <CiSearch className="absolute text-[1.3rem] font-semibold right-5" />
            </div>

            <div className="w-[12%] flex h-[2rem] bg-white border px-[12px] items-center gap-2 shadow-sm">
              <select
                name="sort_by"
                value={sortType}
                onChange={handleSortChange}
                className="w-full h-full font-semibold outline-none"
              >
                <option value="">Sort By</option>
                <option value="startingDate">Starting Date</option>
                <option value="endingDate">Ending Date</option>
              </select>
            </div>
          </div>

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
