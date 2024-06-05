import React, { useState } from "react";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const PayoutRequest = () => {
  const data = [
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      date: "18-08-2002",
      requestedamount: "₹1000",
      gatewayfee: "₹20",
      receivableamount: "₹980",
    },
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      date: "18-08-2002",
      requestedamount: "₹1000",
      gatewayfee: "₹20",
      receivableamount: "₹980",
    },
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      date: "18-08-2002",
      requestedamount: "₹1000",
      gatewayfee: "₹20",
      receivableamount: "₹980",
    },
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      date: "18-08-2002",
      requestedamount: "₹1000",
      gatewayfee: "₹20",
      receivableamount: "₹980",
    },
  ];

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
            <div className="w-[31%] flex justify-between items-center">
              <p className="text-[#1C2434] text-[14px] font-semibold">
                {data.merchant}
              </p>
              <p className="text-[#1C2434] text-[14px] font-semibold">{data.date}</p>
            </div>
            <div className="w-[68%] flex justify-between items-center">
              <p className="text-[#000000] text-[14px] font-semibold mx-auto">
                {data.requestedamount}
              </p>
              <p className="text-[#1C2434] text-[14px] font-semibold mx-auto">
                {data.gatewayfee}
              </p>
              <p className="text-[#10B981] text-[14px] font-semibold mx-auto">
                {data.receivableamount}
              </p>
              <div className="w-[18%] flex gap-1 justify-center items-center bg-[#3C50E0] p-2 rounded-md">
              <TiTick className="size-[16px] text-[#F8FAFC]"/>
              <button className="text-[16px] text-[#F8FAFC]">Approve</button>
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

  return (
    <div className="w-full h-fit p-4">
      <div className="w-full bg-[#F7F9FC] flex gap-8 p-4">
        <div className="w-[29%] flex justify-between text-[#64748B] text-[14px] font-semibold">
          <p>Merchant</p>
          <p>Date</p>
        </div>
        <div className="w-[70%] flex justify-evenly text-[#64748B] text-[14px] font-semibold">
          <p>Requested Amount</p>
          <p>Gateway Fee</p>
          <p>Receivable Amount</p>
          <p>Action</p>
        </div>
      </div>

      <div className="w-full h-fit ">
        <Pagination data={data} />
      </div>
    </div>
  );
};

export default PayoutRequest;
