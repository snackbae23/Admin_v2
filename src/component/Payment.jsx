import React, { useState } from "react";
import { SlRefresh } from "react-icons/sl";
import { CiSearch } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";
import arrow from "../assets/arrowup.png";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import "./Scroll.css";
import PayoutRequest from "./PayoutRequest";
import PayoutHistory from "./PayoutHistory";
import MerchantBalances from "./MerchantBalances";
import { Chart } from "react-google-charts";

const Payment = () => {
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

  const [pr, setpr] = useState(true);
  const [ph, setph] = useState(false);
  const [mb, setmb] = useState(false);

  function a() {
    setpr(true);
    setph(false);
    setmb(false);
  }

  function b() {
    setpr(false);
    setph(true);
    setmb(false);
  }

  function c() {
    setpr(false);
    setph(false);
    setmb(true);
  }

  const [data, setData] = useState(data1);
  const [sortType, setSortType] = useState("");
  const [downloadType, setDownloadType] = useState("");

  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    console.log(sortValue);
    setSortType(sortValue);
    sortData(sortValue);
  };

  // const sortData = (type) => {
  //   let sortedData = [...data];
  //   let newData = sortedData;
  //   switch (type) {
  //     case "Paymentbydates":
  //       newData = sortedData.sort((a, b) => new Date(b.date) - new Date(a.date));
  //       break;
  //     case "Highestamount":
  //       newData = sortedData.sort((a, b) => b.billamount - a.billamount);
  //       break;
  //     case "Highestdiscount":
  //       newData = sortedData.sort((a, b) => b.discount - a.discount);
  //       break;
  //   }
  //   console.log("newdata",newData)
  //   setData(newData);
  //   console.log(data)
  // };

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

  const downloadCSV = () => {
    const data = data1;

    const csvRows = [];
    const headers = Object.keys(data[0]);
    csvRows.push(headers.join(","));

    for (const row of data) {
      const values = headers.map((header) => row[header]);
      csvRows.push(values.join(","));
    }

    const csvContent = csvRows.join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);

    link.setAttribute("href", url);
    link.setAttribute("download", "data.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadImage = () => {
    const data = data1;
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    const cellWidth = 100;
    const cellHeight = 30;
    const padding = 10;

    const columns = Object.keys(data[0]);
    const numRows = data.length + 1; // Including header row
    const numCols = columns.length;

    canvas.width = numCols * cellWidth + 2 * padding;
    canvas.height = numRows * cellHeight + 2 * padding;

    context.fillStyle = "#FFFFFF";
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.font = "16px Arial";
    context.fillStyle = "#000000";
    context.textAlign = "left";
    context.textBaseline = "middle";

    // Draw header row
    columns.forEach((header, index) => {
      context.fillText(
        header,
        padding + index * cellWidth,
        padding + cellHeight / 2
      );
    });

    // Draw data rows
    data.forEach((row, rowIndex) => {
      columns.forEach((col, colIndex) => {
        context.fillText(
          row[col],
          padding + colIndex * cellWidth,
          padding + (rowIndex + 1) * cellHeight + cellHeight / 2
        );
      });
    });

    const url = canvas.toDataURL("image/png");
    const link = document.createElement("a");

    link.setAttribute("href", url);
    link.setAttribute("download", "data.png");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownload = (event) => {
    const selectedOption = event.target.value;

    if (selectedOption === "csv") {
      downloadCSV();
    } else if (selectedOption === "image") {
      downloadImage();
    }

    setDownloadType(selectedOption);
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
          <div key={i} className="w-full flex gap-8 p-4 border-b ">
            <div className="w-[50%] flex justify-between">
              <p className="text-[#1C2434] text-[14px] font-semibold">
                {data.merchant}
              </p>
              <p className="text-[#1C2434] text-[14px]">{data.paymentId}</p>
              <p className="text-[#1C2434] text-[14px]">{data.date}</p>
              <p className="text-[#1C2434] text-[14px] font-semibold">
                {data.customer}
              </p>
            </div>
            <div className="w-[50%] flex justify-between">
              <p className="text-[#10B981] text-[14px] font-semibold">
                {data.billamount}
              </p>
              <p className="text-[#ED7770] text-[14px] font-semibold pr-6">
                {data.discount}
              </p>
              <p className="text-[#F4A223] text-[14px] font-semibold pr-6">
                {data.conveniencefee}
              </p>
              <p className="text-[#10B981] text-[14px] font-semibold pr-6">
                {data.finalamount}
              </p>
              <p className="text-[14px] font-semibold pr-6">
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

  const options = {
    pieHole: 0.3,
    is3D: false,
  };

  const data2 = [
    ["Gender", "count"],
    ["Male", 20],
    ["Female", 12],
    ["Others", 2],
    ["Non disclose", 7],
    // CSS-style declaration
  ];

  return (
    <div id="payment" className="w-full h-fit relative">
      <div className="w-full h-fit  mt-[70px] px-6">
        <div className="w-full flex justify-between">
          <div className="w-[40%] flex gap-4 py-4 items-center">
            <p className="text-[#1C2434] text-[24px] font-semibold ">
              Payment overview
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

      <div className="w-full h-fit  my-4 sm:px-6 px-4 flex justify-between ">
        <div className="w-[60%] flex flex-col gap-4">
          <div className="w-full flex justify-between">
            <div className="w-[49%] h-[150px] bg-white p-4 flex flex-col justify-between shadow-md">
              <p className="text-[16px] text-[#64748B] font-semibold">
                Total Payment Collection (GMV)
              </p>
              <p className="text-[#1C2434] text-[32px] font-semibold">
                ₹10,00,000
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
                Total Convenience Fee collection
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
        <div className="w-[39%] h-[316px] bg-white flex flex-col shadow-md">
        <div className="w-full px-4 py-2 border-b-2 border-slate-300">
            <p className="text-[#212B36] text-[22px] font-semibold">
              User Gender Split
            </p>
          </div>
          <Chart
            chartType="PieChart"
            width="100%"
            height="267px"
            data={data2}
            options={options}
          />
        </div>
      </div>

      <div className="w-full h-fit my-6 sm:px-6 px-4">
        <div className="flex justify-between items-center">
          <p className="text-[#1C2434] text-[24px] font-semibold ">
            Transaction overview
          </p>

          <div className="w-[60%] flex gap-4">
            <div className="w-[40%] h-[2rem] bg-white relative flex items-center border shadow-sm">
              <input
                className="w-full h-fit px-4 rounded-lg focus:outline-none"
                type="text"
                placeholder="Search"
              />
              <CiSearch className="absolute text-[1.3rem] font-semibold right-5" />
            </div>

            <div className="w-[20%] flex h-[2rem] bg-white border px-[12px] items-center gap-2 shadow-sm">
              <select
                name="sort_by"
                value={sortType}
                onChange={handleSortChange}
                className="w-full h-full font-semibold outline-none"
              >
                <option value="">Sort By</option>
                <option value="Highestamount">Payment Volume</option>
                <option value="Paymentbydates">Payment by dates</option>
                <option value="Highestdiscount">Highest discount</option>
              </select>
            </div>

            <div className="w-[30%] flex h-[2rem] bg-white border px-[12px] items-center gap-0 shadow-sm">
              <MdOutlineFileDownload className="size-[34px]" />
              <select
                name="download"
                value={downloadType}
                onChange={handleDownload}
                className="w-full font-semibold h-full outline-none"
              >
                <option value="">Download</option>
                <option value="csv">Download CSV</option>
                <option value="image">Download IMAGE</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full my-6 sm:px-6 px-4">
        <div className="w-full h-fit bg-white px-1 py-4 shadow-md">
          <div className="w-full bg-[#F7F9FC] flex gap-8 p-4">
            <div className="w-[50%] flex justify-between">
              <p className="text-[#64748B] text-[12px] font-semibold">
                Merchant
              </p>
              <p className="text-[#64748B] text-[12px] font-semibold">
                Payment ID
              </p>
              <p className="text-[#64748B] text-[12px] font-semibold">Date</p>
              <p className="text-[#64748B] text-[12px] font-semibold">
                Customer
              </p>
            </div>
            <div className="w-[50%] flex justify-between">
              <p className="text-[#64748B] text-[12px] font-semibold">
                Bill Amount
              </p>
              <p className="text-[#64748B] text-[12px] font-semibold">
                Discount
              </p>
              <p className="text-[#64748B] text-[12px] font-semibold">
                Convenience fee
              </p>
              <p className="text-[#64748B] text-[12px] font-semibold">
                Final Amount
              </p>
              <p className="text-[#64748B] text-[12px] font-semibold">
                Payment Mode
              </p>
            </div>
          </div>

          <div className="w-full h-fit ">
            <Pagination data={data} />
          </div>
        </div>
      </div>

      <div className="w-full my-6 sm:px-6 px-4">
        <div className="w-full h-fit bg-white px-1 py-4 shadow-md">
          <div className="w-full border-b p-4 flex justify-around">
            <p
              onClick={a}
              className={`font-semibold text-[20px] ${
                pr
                  ? "text-[#004AAD] border-b-2 border-[#004AAD]"
                  : "text-[#1C2434]"
              }`}
            >
              Payout Requests
            </p>
            <p
              onClick={b}
              className={`font-semibold text-[20px] ${
                ph
                  ? "text-[#004AAD] border-b-2 border-[#004AAD]"
                  : "text-[#1C2434]"
              }`}
            >
              Payout History
            </p>
            <p
              onClick={c}
              className={`font-semibold text-[20px] ${
                mb
                  ? "text-[#004AAD] border-b-2 border-[#004AAD]"
                  : "text-[#1C2434]"
              }`}
            >
              Merchant Balances
            </p>
          </div>

          {pr && <PayoutRequest />}
          {ph && <PayoutHistory />}
          {mb && <MerchantBalances />}
        </div>
      </div>
    </div>
  );
};

export default Payment;
