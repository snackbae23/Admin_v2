import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";

const MerchantBalances = () => {
  const data = [
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      payoutReceived: "10000",
      payoutBalance: "100000",
    },
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      payoutReceived: "20000",
      payoutBalance: "200000",
    },
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      payoutReceived: "30000",
      payoutBalance: "300000",
    },
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      payoutReceived: "10000",
      payoutBalance: "100000",
    },
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      payoutReceived: "60000",
      payoutBalance: "600000",
    },
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      payoutReceived: "50000",
      payoutBalance: "500000",
    },
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      payoutReceived: "50000",
      payoutBalance: "600000",
    },
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      payoutReceived: "40000",
      payoutBalance: "700000",
    },
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      payoutReceived: "10000",
      payoutBalance: "100000",
    },
  ];

  const [data1, setData] = useState(data);
  const [sortType, setSortType] = useState("");

  const handleSortChange = (e) => {
    const sortValue = e.target.value;
    console.log(sortValue);
    setSortType(sortValue);
    sortData(sortValue);
  };

  const sortData = (type) => {
    let sortedData = [...data1];
    let newData = sortedData;
    switch (type) {
      case "Highestamount":
        newData = sortedData.sort((a, b) => parseFloat(b.payoutBalance) - parseFloat(a.payoutBalance));
        break;
      case "Highestreceived":
        newData = sortedData.sort(
          (a, b) => parseFloat(b.payoutReceived) - parseFloat(a.payoutReceived)
        );
        break;
    }
    console.log("newdata", newData);
    setData(newData);
    console.log(data);
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
          <div
            key={i}
            className="w-full flex justify-between py-4 px-10 border-b "
          >
            <div className="flex items-center">
              <p className="text-[#1C2434] text-[14px] font-semibold">
                {data.merchant}
              </p>
            </div>
            <div className="w-[40%] flex justify-between items-center px-5">
              <p className="text-[#000000] text-[14px] font-semibold">
                {data.payoutReceived}
              </p>
              <p className="text-[#10B981] text-[14px] font-semibold">
                {data.payoutBalance}
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
    <div className="w-full h-fit flex flex-col gap-4 p-4">
      <div className="w-full flex justify-between">
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
            <option value="Highestamount">Highest Balance</option>
            <option value="Highestreceived">Highest Received</option>
          </select>
        </div>
      </div>

      <div className="w-full bg-[#F7F9FC] flex justify-between py-4 px-10">
        <div className="text-[#64748B] text-[14px] font-semibold">
          <p>Merchant</p>
        </div>
        <div className="w-[40%] flex justify-between text-[#64748B] text-[14px] font-semibold">
          <p>Payout Recieved</p>
          <p>Payout Balance</p>
        </div>
      </div>

      <div className="w-full h-fit ">
        <Pagination data={data1} />
      </div>
    </div>
  );
};

export default MerchantBalances;
