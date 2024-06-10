import React, { useState } from "react";
import { SlRefresh } from "react-icons/sl";
import arrow from "../assets/arrowup.png";
import pic from "../assets/picture.png";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

const UserDetails = ({ d }) => {
  const data1 = [
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      paymentId: "pay_OCSyvhF0sC3hbH",
      date: "18-08-2002",
      customer: "Souptik Das",
      customerId: "ID238975",
      billamount: "₹1000",
      discount: "₹100",
      conveniencefee: "₹2",
      finalamount: "₹902",
      paymentmode: "upi",
    },
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      paymentId: "pay_OCSyvhF0sC3hbH",
      date: "19-08-2002",
      customer: "Souptik Das",
      customerId: "ID238975",
      billamount: "₹1000",
      discount: "₹100",
      conveniencefee: "₹2",
      finalamount: "₹902",
      paymentmode: "upi",
    },
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      paymentId: "pay_OCSyvhF0sC3hbH",
      date: "18-08-2002",
      customer: "Souptik Das",
      customerId: "ID238975",
      billamount: "₹2000",
      discount: "₹200",
      conveniencefee: "₹2",
      finalamount: "₹902",
      paymentmode: "upi",
    },
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      paymentId: "pay_OCSyvhF0sC3hbH",
      date: "19-08-2002",
      customer: "Souptik Das",
      customerId: "ID238975",
      billamount: "₹1000",
      discount: "₹100",
      conveniencefee: "₹2",
      finalamount: "₹902",
      paymentmode: "upi",
    },
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      paymentId: "pay_OCSyvhF0sC3hbH",
      date: "19-08-2002",
      customer: "Souptik Das",
      customerId: "ID238975",
      billamount: "₹1000",
      discount: "₹100",
      conveniencefee: "₹2",
      finalamount: "₹902",
      paymentmode: "upi",
    },
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      paymentId: "pay_OCSyvhF0sC3hbH",
      date: "19-08-2002",
      customer: "Souptik Das",
      customerId: "ID238975",
      billamount: "₹1000",
      discount: "₹100",
      conveniencefee: "₹2",
      finalamount: "₹902",
      paymentmode: "upi",
    },
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      paymentId: "pay_OCSyvhF0sC3hbH",
      date: "19-08-2002",
      customer: "Souptik Das",
      customerId: "ID238975",
      billamount: "₹1000",
      discount: "₹100",
      conveniencefee: "₹2",
      finalamount: "₹902",
      paymentmode: "upi",
    },
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      paymentId: "pay_OCSyvhF0sC3hbH",
      date: "19-08-2002",
      customer: "Souptik Das",
      customerId: "ID238975",
      billamount: "₹1000",
      discount: "₹100",
      conveniencefee: "₹2",
      finalamount: "₹902",
      paymentmode: "upi",
    },
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      paymentId: "pay_OCSyvhF0sC3hbH",
      date: "19-08-2002",
      customer: "Souptik Das",
      customerId: "ID238975",
      billamount: "₹1000",
      discount: "₹100",
      conveniencefee: "₹2",
      finalamount: "₹902",
      paymentmode: "upi",
    },
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      paymentId: "pay_OCSyvhF0sC3hbH",
      date: "19-08-2002",
      customer: "Souptik Das",
      customerId: "ID238975",
      billamount: "₹1000",
      discount: "₹100",
      conveniencefee: "₹2",
      finalamount: "₹902",
      paymentmode: "upi",
    },
  ];

  const data5 = [
    {
      merchantName: "foodoos",
      totalVisit: "546",
      date: "18-08-2002",
    },
    {
      merchantName: "foodoos",
      totalVisit: "546",
      date: "18-08-2002",
    },
    {
      merchantName: "foodoos",
      totalVisit: "546",
      date: "18-08-2002",
    },
    {
      merchantName: "foodoos",
      totalVisit: "546",
      date: "18-08-2002",
    },
    {
      merchantName: "foodoos",
      totalVisit: "546",
      date: "18-08-2002",
    },
    {
      merchantName: "foodoos",
      totalVisit: "546",
      date: "18-08-2002",
    },
    {
      merchantName: "foodoos",
      totalVisit: "546",
      date: "18-08-2002",
    },
    {
      merchantName: "foodoos",
      totalVisit: "546",
      date: "18-08-2002",
    },
    {
      merchantName: "foodoos",
      totalVisit: "546",
      date: "18-08-2002",
    },
    {
      merchantName: "foodoos",
      totalVisit: "546",
      date: "18-08-2002",
    },
    {
      merchantName: "foodoos",
      totalVisit: "546",
      date: "18-08-2002",
    },
    {
      merchantName: "foodoos",
      totalVisit: "546",
      date: "18-08-2002",
    },
    {
      merchantName: "foodoos",
      totalVisit: "546",
      date: "18-08-2002",
    },
    {
      merchantName: "foodoos",
      totalVisit: "546",
      date: "18-08-2002",
    },
    {
      merchantName: "foodoos",
      totalVisit: "546",
      date: "18-08-2002",
    },
    {
      merchantName: "foodoos",
      totalVisit: "5460",
      date: "18-08-2002",
    },
    {
      merchantName: "foodoos",
      totalVisit: "100",
      date: "18-08-2002",
    },
    {
      merchantName: "foodoos",
      totalVisit: "16",
      date: "15-06-2002",
    },
    {
      merchantName: "foodoos",
      totalVisit: "6",
      date: "18-08-2002",
    },
    {
      merchantName: "foodoos",
      totalVisit: "56",
      date: "18-07-2002",
    },
    {
      merchantName: "foodoos",
      totalVisit: "54",
      date: "12-08-2002",
    },
    {
      merchantName: "foodoos",
      totalVisit: "546",
      date: "19-08-2002",
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

  const data4 = [
    {
      merchanName : "Foodoos",
      date: "19-08-2002",
      remark: "Liked",
      dish: "Fish & Chips"
    },
    {
      merchanName : "Foodoos",
      date: "19-08-2002",
      remark: "Liked",
      dish: "Fish & Chips"
    },
    {
      merchanName : "Foodoos",
      date: "19-08-2002",
      remark: "Liked",
      dish: "Fish & Chips"
    },
    {
      merchanName : "Foodoos",
      date: "19-08-2002",
      remark: "Liked",
      dish: "Fish & Chips"
    },
    {
      merchanName : "Foodoos",
      date: "19-08-2002",
      remark: "Liked",
      dish: "Fish & Chips"
    },
    {
      merchanName : "Foodoos",
      date: "19-08-2002",
      remark: "Liked",
      dish: "Fish & Chips"
    },
    {
      merchanName : "Foodoos",
      date: "19-08-2002",
      remark: "Liked",
      dish: "Fish & Chips"
    },
    {
      merchanName : "Foodoos",
      date: "19-08-2002",
      remark: "Liked",
      dish: "Fish & Chips"
    },
  ];

  const [data, setData] = useState(data1);

  const changeComp = () => {
    d();
  };

  const [data2, setData2] = useState(data5);
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
          (a, b) => parseFloat(b.totalVisit) - parseFloat(a.totalVisit)
        );
        break;
      case "Latestvisit":
        newData = newData.sort(
          (a, b) =>
            new Date(b.date.split("-").reverse().join("-")) -
            new Date(a.date.split("-").reverse().join("-"))
        );
        break;
      default:
        break;
    }
    console.log("newData", newData);
    setData2(newData);
    console.log("Data2", data2);
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
          <div key={i} className="w-full flex gap-2 p-4 border-b ">
            <div className="w-[55%] flex justify-between">
              <p className="w-[25%] text-center text-[#1C2434] text-[14px] font-semibold">
                {data.merchant}
              </p>
              <p className="w-[35%] text-center text-[#1C2434] text-[14px]">
                {data.paymentId}
              </p>
              <p className="w-[20%] text-center text-[#1C2434] text-[14px]">
                {data.date}
              </p>
              <p className="w-[20%] text-center text-[#10B981] text-[14px] font-semibold">
                {data.billamount}
              </p>
            </div>
            <div className="w-[45%] flex justify-between">
              <p className="w-[25%] text-center text-[#ED7770] text-[14px] font-semibold">
                {data.discount}
              </p>
              <p className="w-[25%] text-center text-[#F4A223] text-[14px] font-semibold">
                {data.conveniencefee}
              </p>
              <p className="w-[25%] text-center text-[#10B981] text-[14px] font-semibold">
                {data.finalamount}
              </p>
              <p className=" w-[25%] text-center text-[14px] font-semibold">
                {data.paymentmode}
              </p>
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
              className="text-[#3C50E0] text-[14px] font-semibold cursor-pointer"
            >
              User Analytics
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-fit  mb-4 px-6 flex justify-between ">
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

      <div className="w-full px-6">
        <div className="w-full h-fit bg-white mb-2 flex justify-between border shadow-lg">
          <div className="w-[25%] flex justify-center items-center p-4 gap-1">
            <div className="flex flex-col">
              <p className="text-[#1C2434] text-[28px] font-semibold">18.6K</p>
              <p className="text-[#64748B] text-[14px] font-semibold">
                Total Lifetime Spent
              </p>
            </div>
          </div>

          <div className="w-[25%] flex justify-center items-center p-4 gap-1">
            <div className="flex flex-col">
              <p className="text-[#1C2434] text-[28px] font-semibold">1500</p>
              <p className="text-[#64748B] text-[14px] font-semibold">
                Average Pay Size
              </p>
            </div>
          </div>

          <div className="w-[25%] flex justify-center items-center p-4 gap-1">
            <div className="flex flex-col">
              <p className="text-[#1C2434] text-[28px] font-semibold">500</p>
              <p className="text-[#64748B] text-[14px] font-semibold">
                Total Discount Availed
              </p>
            </div>
          </div>

          <div className="w-[25%] flex justify-center items-center p-4 gap-2">
            <div className="flex flex-col">
              <p className="text-[#1C2434] text-[28px] font-semibold">180</p>
              <p className="text-[#64748B] text-[14px] font-semibold">
                Total Transaction Count
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-fit px-6">
        <div className="w-full flex justify-between">
          <div className="w-[40%] flex gap-4 py-4 items-center">
            <p className="text-[#1C2434] text-[24px] font-semibold ">
              Transactions
            </p>
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

      <div className="w-full my-2 px-6">
        <div className="w-full h-fit bg-white px-1 py-4 shadow-md">
          <div className="w-full bg-[#F7F9FC] flex gap-2 p-4">
            <div className="w-[55%] flex justify-between">
              <p className=" w-[25%] text-center text-[#64748B] text-[12px] font-semibold">
                Merchant
              </p>
              <p className="w-[35%] text-center text-[#64748B] text-[12px] font-semibold">
                Payment ID
              </p>
              <p className="w-[20%] text-center text-[#64748B] text-[12px] font-semibold">
                Date
              </p>
              <p className="w-[20%] text-center text-[#64748B] text-[12px] font-semibold">
                Bill Amount
              </p>
            </div>
            <div className="w-[45%] flex justify-between">
              <p className="w-[25%] text-center text-[#64748B] text-[12px] font-semibold">
                Discount
              </p>
              <p className="w-[25%] text-center text-[#64748B] text-[12px] font-semibold">
                Convenience fee
              </p>
              <p className="w-[25%] text-center text-[#64748B] text-[12px] font-semibold">
                Final Amount
              </p>
              <p className="w-[25%] text-center text-[#64748B] text-[12px] font-semibold">
                Payment Mode
              </p>
            </div>
          </div>

          <div className="w-full h-fit ">
            <Pagination data={data} />
          </div>
        </div>
      </div>

      <div className="w-full h-fit px-6">
        <div className="w-[40%] flex gap-4 py-4 items-center">
          <p className="text-[#1C2434] text-[24px] font-semibold ">
            User Activity
          </p>
        </div>
      </div>

      <div className="w-full flex px-6 mb-4 justify-between">
        <div className="w-[49%] bg-white border shadow-lg">
          <div className="w-full px-4 py-4 flex justify-between items-center">
            <p className="text-[#212B36] text-[18px] font-semibold">Visits</p>
            <div className="w-[60%] flex justify-between">
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
                  <option value="Latestvisit">Latest Visit</option>
                </select>
              </div>
            </div>
          </div>

          <div className="w-full px-6 flex justify-between">
            <p className="w-[55%] text-[#64748B] text-[12px] font-semibold">
              Merchant Names
            </p>
            <div className="w-[40%] flex gap-10">
              <p className="w-[50%] text-center text-[#64748B] text-[12px] font-semibold">
                Total Visit
              </p>
              <p className="w-[50%] text-center text-[#64748B] text-[12px] font-semibold">
                Latest Visit
              </p>
            </div>
          </div>

          <div className="w-full h-[650px] mt-2 overflow-hidden">
            <div className="w-full h-full overflow-y-auto scrollbar-hide">
              {data2?.map((data, i) => (
                <div
                  key={i}
                  className="w-full flex justify-between pl-8 pr-6 py-4 border-b"
                >
                  <div className="w-[55%] flex">
                    <p className="text-[#1C2434] text-[14px] font-semibold">
                      {data.merchantName}
                    </p>
                  </div>
                  <div className="w-[40%] flex justify-between">
                    <p className="w-[40%] text-center  text-[#1C2434] text-[14px] font-semibold">
                      {data.totalVisit}
                    </p>
                    <p className="w-[50%] text-center text-[#1C2434] text-[14px] font-semibold">
                      {data.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[49%] flex flex-col gap-4 h-[740px]">
          <div className="bg-white flex flex-col w-full h-[370px] border shadow-lg">
            <div className="px-4 py-3 flex flex-col gap-2">
              <p className="text-[#212B36] text-[22px] font-semibold">
                Offers redemption
              </p>

              <div className="w-full flex justify-between items-center">
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
                <div
                  key={i}
                  className="w-full flex justify-between py-4 px-4 border-b "
                >
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

          <div className="bg-white flex flex-col w-full h-[355px] overflow-hidden border shadow-lg">
            <div className="px-4 py-3 flex flex-col gap-2">
              <p className="text-[#212B36] text-[22px] font-semibold">
                Recomendation Activity
              </p>

              <div className="w-full flex justify-between items-center">
                <p className="w-[40%] text-[#64748B] text-[12px] font-semibold mt-2">
                  Merchant Name
                </p>
                <div className="w-[60%] flex gap-6">
              <p className="w-[33%] text-center text-[#64748B] text-[12px] font-semibold">
                Date
              </p>
              <p className="w-[33%] text-center text-[#64748B] text-[12px] font-semibold">
                Remark
              </p>
              <p className="w-[33%] text-center text-[#64748B] text-[12px] font-semibold">
                Dish
              </p>
            </div>
              </div>
            </div>

            <div className="w-full h-full overflow-y-auto scrollbar-hide">
              {data4?.map((data, i) => (
                <div
                  key={i}
                  className="w-full flex justify-between py-4 px-4 border-b "
                >
                  <div className="w-[40%] flex">
                    <p className="text-[#1C2434] text-[14px] font-semibold">
                      {data.merchanName}
                    </p>
                  </div>
                  <div className="w-[60%] flex justify-between">
                    <p className="w-[33%%] text-center text-[#1C2434] text-[14px] font-semibold">
                      {data.date}
                    </p>
                    <p className="w-[33%%] text-center text-[#1C2434] text-[14px] font-semibold">
                      {data.remark}
                    </p>
                    <p className="w-[33%] text-center text-[#1C2434] text-[14px] font-semibold">
                      {data.dish}
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

export default UserDetails;
