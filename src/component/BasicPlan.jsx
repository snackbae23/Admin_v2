import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { jsPDF } from "jspdf";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import picture from "../assets/picture.png";
import { useNavigate } from "react-router-dom";

const BasicPlan = ({ g }) => {
  const data = [
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      startingDate: "19-02-2024",
      endingDate: "19-02-2025",
      id: "1",
    },
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      startingDate: "16-02-2024",
      endingDate: "16-02-2025",
      id: "2",
    },
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      startingDate: "09-02-2024",
      endingDate: "09-02-2025",
      id: "3",
    },
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      startingDate: "10-05-2024",
      endingDate: "10-05-2025",
      id: "4",
    },
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      startingDate: "01-02-2023",
      endingDate: "01-02-2025",
      id: "5",
    },
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      startingDate: "19-08-2024",
      endingDate: "19-08-2025",
      id: "6",
    },
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      startingDate: "19-02-2024",
      endingDate: "19-02-2025",
      id: "7",
    },
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      startingDate: "19-02-2024",
      endingDate: "19-02-2025",
      id: "8",
    },
  ];

  const [data1, setData] = useState(data);
  const [sortType, setSortType] = useState("");
  const [sort, setSort] = useState(false);

  const handleSortChange = (method) => {
    const sortValue = method;
    console.log(sortValue);
    setSortType(sortValue);
    sortData(sortValue);
  };

  const sortData = (type) => {
    let sortedData = [...data1];
    let newData = sortedData;
    switch (type) {
      case "startingDate":
        newData = sortedData.sort(
          (a, b) =>
            new Date(b.startingDate.split("-").reverse().join("-")) -
            new Date(a.startingDate.split("-").reverse().join("-"))
        );
        break;
      case "endingDate":
        newData = sortedData.sort(
          (a, b) =>
            new Date(b.endingDate.split("-").reverse().join("-")) -
            new Date(a.endingDate.split("-").reverse().join("-"))
        );
        break;
    }
    console.log("newdata", newData);
    setData(newData);
    console.log(data);
  };

  const generatePDF = (invoiceData) => {
    const pdf = new jsPDF();
    pdf.setFontSize(16);
    pdf.text("Invoice", 20, 20);

    pdf.setFontSize(12);
    pdf.text(`Merchant: ${invoiceData.merchant}`, 20, 30);
    pdf.text(`Merchant ID: ${invoiceData.merchantId}`, 20, 40);
    pdf.text(`startingDate: ${invoiceData.startingDate}`, 20, 50);
    pdf.text(`endingDate: ${invoiceData.endingDate}`, 20, 60);

    pdf.save(`invoice_${invoiceData.id}.pdf`);
  };
  const navigate = useNavigate();

  const changeComp = (id) => {
    navigate("/merchantdetails")
    console.log(id);
    g(id);
  };

  // const Pagination = ({ data }) => {
  //   //data =data?.reverse();

  //   const [currentPage, setCurrentPage] = useState(1);
  //   const [itemsPerPage, setItemsPerPage] = useState(6);
  //   const maxPage = Math.ceil(data?.length / itemsPerPage);

  //   function currentPageData() {
  //     const startIndex = (currentPage - 1) * itemsPerPage;
  //     return data?.slice(startIndex, startIndex + itemsPerPage);
  //   }

  //   function goToPage(pageNumber) {
  //     setCurrentPage(pageNumber);
  //   }

  //   const renderPageNumbers = () => {
  //     const pageNumbers = [];
  //     let itemsToShow = 3; // Number of pages to show before and after the current page
  //     let start = Math.max(currentPage - itemsToShow, 1);
  //     let end = Math.min(currentPage + itemsToShow, maxPage);

  //     if (start > 1) {
  //       pageNumbers.push(1);
  //       if (start > 2) {
  //         pageNumbers.push("...");
  //       }
  //     }

  //     for (let i = start; i <= end; i++) {
  //       pageNumbers.push(i);
  //     }

  //     if (end < maxPage) {
  //       if (end < maxPage - 1) {
  //         pageNumbers.push("...");
  //       }
  //       pageNumbers.push(maxPage);
  //     }

  //     return pageNumbers.map((number, index) =>
  //       number === "..." ? (
  //         <span key={index} className="page-item dots">
  //           {number}
  //         </span>
  //       ) : (
  //         <button
  //           key={index}
  //           onClick={() => goToPage(number)}
  //           className={`page-item ${currentPage === number ? "active" : ""}`}
  //         >
  //           {number}
  //         </button>
  //       )
  //     );
  //   };

  //   //   return (
  //   //     <div>
  //   //       {/* Render the current page's data */}

  //   //       <div className="flex justify-between px-8  mt-7 sm:flex-row flex-col sm:gap-0 gap-4">
  //   //         {/* Pagination controls */}
  //   //         {/* Dropdown for items per page */}
  //   //         <div className="items-per-page">
  //   //           <label htmlFor="items-per-page">Items per page:</label>
  //   //           <select
  //   //             className="border-2 mx-2 rounded-md"
  //   //             id="items-per-page"
  //   //             value={itemsPerPage}
  //   //             onChange={(e) => setItemsPerPage(Number(e.target.value))}
  //   //           >
  //   //             <option value="6">6</option>
  //   //             <option value="10">10</option>
  //   //             <option value="15">15</option>
  //   //             <option value="20">20</option>
  //   //           </select>
  //   //         </div>
  //   //         <div className="flex gap-5">
  //   //           <button
  //   //             className="page-item"
  //   //             onClick={() => goToPage(currentPage - 1)}
  //   //             disabled={currentPage === 1}
  //   //           >
  //   //             <GrFormPrevious />
  //   //           </button>
  //   //           <div className="flex gap-3">{renderPageNumbers()}</div>
  //   //           <button
  //   //             className="page-item"
  //   //             onClick={() => goToPage(currentPage + 1)}
  //   //             disabled={currentPage === maxPage}
  //   //           >
  //   //             <MdNavigateNext />
  //   //           </button>
  //   //         </div>

  //   //         <div className="current-page sm:block hidden">
  //   //           Page {currentPage} of {maxPage}
  //   //         </div>
  //   //       </div>
  //   //     </div>
  //   //   );
  // };

  return (
    <div className="w-full h-fit flex flex-col gap-4 p-4">
      <div className="w-full flex justify-between items-center">
        <div className="w-[30%] h-[2rem] bg-white relative flex items-center border shadow-sm">
          <input
            className="w-full h-fit px-4 rounded-lg focus:outline-none"
            type="text"
            placeholder="Search"
          />
          <CiSearch className="absolute text-[1.3rem] font-semibold right-5" />
        </div>

        <div className="relative">
          <div
            onClick={() => setSort(!sort)}
            className="bg-white border rounded-lg px-4 py-2 mx-2 flex items-center gap-2 text-sm font-Roboto"
          >
            <button>Sort by</button>
            {!sort ? <IoIosArrowDown /> : <IoIosArrowUp />}
          </div>
          {sort && (
            <ul className="absolute -left-10 mt-2 w-40 bg-white border rounded-lg shadow-lg py-1 z-10">
              <li
                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                onClick={() => handleSortChange("Highest-payout")}
              >
                Highest Payout
              </li>
              <li
                className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                onClick={() => handleSortChange("Highest-balance")}
              >
                Highest Balance
              </li>
            </ul>
          )}
        </div>
      </div>

      <div className="w-full bg-[#F7F9FC] flex justify-between py-4 px-10">
        <p className="w-[40%] text-[#64748B] text-sm font-semibold">Merchant</p>
        <div className="w-[60%] flex justify-between text-[#64748B] text-sm font-semibold">
          <p className="w-[25%] text-center">Starting Date</p>
          <p className="w-[25%] text-center">Ending Date</p>
          <p className="w-[25%] text-center">Invoice</p>
          <p className="w-[25%] text-center">Action</p>
        </div>
      </div>

      <div className="w-full h-[17rem] overflow-y-auto hideScroller -mt-2">
        {data?.map((data, i) => (
          <div
            key={i}
            className="w-full flex justify-between py-2 px-10 border-b "
          >
            <div className="w-[40%] flex items-center gap-2">
              <img src={picture} className="w-10" />
              <div>
                <p className="w-full text-[#1C2434] text-sm font-medium">
                  {data.merchant}
                </p>
                <p className="text-[0.75rem] text-[#64748B]">ID10001</p>
              </div>
            </div>
            <div className="w-[60%] flex justify-between items-center">
              <p className="w-[25%] text-center text-[#000000] text-sm font-semibold">
                {data.startingDate}
              </p>
              <p className="w-[25%] text-center text-[#000000] text-sm font-semibold">
                {data.endingDate}
              </p>
              <button
                onClick={() => generatePDF(data)}
                className="w-[25%] text-center text-[#004AAD] text-[0.75rem] font-bold mx-auto"
              >
                pdf.invoice
              </button>
              <div className="w-[25%] text-center">
                <button
                  onClick={() => changeComp(data.id)}
                  className="w-[80%] text-center p-2 bg-[#3C50E0] text-white border rounded-md text-[0.75rem] font-bold"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BasicPlan;
