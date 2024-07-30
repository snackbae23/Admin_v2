import React, { useState } from "react";
import { SlRefresh } from "react-icons/sl";
import arrow from "../assets/arrowup.png";
import { CiSearch } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { VscGoToFile } from "react-icons/vsc";
import { Chart } from "react-google-charts";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Analytics = ({ f }) => {
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
  const [sort, setSort] = useState(false);

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

  const [data, setData] = useState(data1);
  const [sortType, setSortType] = useState("");
  const [downloadType, setDownloadType] = useState("");
  const navigate=useNavigate();

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

  const changeComp = (id) => {
    console.log("Sdsdsd")
    navigate("/userdetails")
  };

  const options = {
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
    ["Gender", "count"],
    ["Male", 20],
    ["Female", 12],
    ["Others", 2],
    ["Non disclose", 7],
    // CSS-style declaration
  ];

  return (
    <div
      id="analytics"
      className="w-full h-fit relative sm:w-[80%] sm:ml-[20%] bg-[#F6F8FF] flex flex-col "
    >
      <div className="w-full h-fit  mt-[70px] px-6">
        <div className="w-full flex justify-between items-center">
          <div className="w-[40%] flex gap-4 py-4 items-center">
            <p className="text-[#1C2434] text-[24px] font-semibold ">
              User Analytics
            </p>
            <div className="flex justify-center items-center gap-1 border shadow-sm bg-white px-3 py-1 text-black">
              <SlRefresh />
              <button>Refresh</button>
            </div>
          </div>

          <div className="w-fit flex gap-4 py-4 items-center">
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
              <p className="text-[#1C2434] text-2xl font-bold">18.6K</p>
              <p className="text-[#64748B] text-sm font-semibold">
                Unique Visitors
              </p>
            </div>
            <div className="flex gap-1 text-[#10B981] items-center">
              <img className="size-[18px]" src={arrow} />
              <p className="text-[0.75rem]">18%</p>
            </div>
          </div>

          <div className="w-[25%] flex justify-center items-center p-4 gap-1">
            <div className="flex flex-col">
              <p className="text-[#1C2434] text-2xl font-bold">55.9K</p>
              <p className="text-[#64748B] text-sm font-semibold">
                Total Pageviews
              </p>
            </div>
            <div className="flex gap-1 text-[#10B981] items-center">
              <img className="size-[18px]" src={arrow} />
              <p className="text-[0.75rem]">25%</p>
            </div>
          </div>

          <div className="w-[25%] flex justify-center items-center p-4 gap-1">
            <div className="flex flex-col">
              <p className="text-[#1C2434] text-2xl font-bold">54%</p>
              <p className="text-[#64748B] text-sm font-semibold">
                Bounce Rate
              </p>
            </div>
            <div className="flex gap-1 text-[#10B981] items-center">
              <img className="size-[18px]" src={arrow} />
              <p className="text-[0.75rem]">7%</p>
            </div>
          </div>

          <div className="w-[25%] flex justify-center items-center p-4 gap-2">
            <div className="flex flex-col">
              <p className="text-[#1C2434] text-2xl font-bold">2m 56s</p>
              <p className="text-[#64748B] text-sm font-semibold">
                Visit Duration
              </p>
            </div>
            <div className="flex gap-1 text-[#10B981] items-center">
              <img className="size-[18px]" src={arrow} />
              <p className="text-[0.75rem]">12%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-fit  my-2 sm:px-6 px-4 flex justify-between ">
        <div className="w-[60%] flex flex-col gap-4">
          <div className="w-full flex justify-between">
            <div className="w-[49%] h-[165px] bg-white p-4 flex flex-col justify-between shadow-md">
              <p className="text-sm text-[#64748B] font-semibold">
                Total User Database
              </p>
              <p className="text-[#1C2434] text-2xl font-bold">₹10,00,000</p>
              <div className="flex gap-2 items-center">
                <div className="flex gap-1 text-[#1A9882] items-center bg-[#10B9814D] rounded-lg p-1">
                  <img className="size-[14px]" src={arrow} />
                  <p className="text-[10px]">18%</p>
                </div>
                <p className="text-[#64748B] text-[14px]">Since last week</p>
              </div>
            </div>
            <div className="w-[49%] h-[165px] bg-white p-4 flex flex-col justify-between shadow-md">
              <p className="text-sm text-[#64748B] font-semibold">
                User with activity
              </p>
              <p className="text-[#1C2434] text-2xl font-bold">1000</p>
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
            <div className="w-[49%] h-[165px] bg-white p-4 flex flex-col justify-between shadow-md">
              <p className="text-sm text-[#64748B] font-semibold">
                User with payments
              </p>
              <p className="text-[#1C2434] text-2xl font-bold">₹10,000</p>
              <div className="flex gap-2 items-center">
                <div className="flex gap-1 text-[#1A9882] items-center bg-[#10B9814D] rounded-lg p-1">
                  <img className="size-[14px]" src={arrow} />
                  <p className="text-[10px]">18%</p>
                </div>
                <p className="text-[#64748B] text-[14px]">Since last week</p>
              </div>
            </div>
            <div className="w-[49%] h-[165px] bg-white p-4 flex flex-col justify-between shadow-md">
              <p className="text-sm text-[#64748B] font-semibold">
                User with recommendation
              </p>
              <p className="text-[#1C2434] text-2xl font-bold">₹10,000</p>
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
        <div className="w-[39%] h-[346px] bg-white flex flex-col shadow-md">
          <div className="w-full px-4 py-2 border-b-2 border-slate-300">
            <p className="text-[#212B36] text-[22px] font-semibold">
              User Gender Split
            </p>
          </div>
          <Chart
            chartType="PieChart"
            width="100%"
            height="265px"
            data={data2}
            options={options}
          />
        </div>
      </div>

      <div className="w-full h-fit my-4 sm:px-6 px-4">
        <div className="flex justify-between items-center">
          <p className="text-[#1C2434] text-[24px] font-semibold ">
            User Database
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

            <div className="relative">
              <div
                onClick={() => setSort(!sort)}
                className="bg-white border rounded-lg px-4 py-2 mx-2 flex items-center gap-2 text-sm font-Roboto"
              >
                <button>Sort by</button>
                {!sort ? <IoIosArrowDown /> : <IoIosArrowUp />}
              </div>
              {sort && (
                <ul className="absolute -left-10 mt-2 w-60 bg-white border rounded-lg shadow-lg py-1 z-10 text-center">
                  <li
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100 border-b"
                    onClick={() => handleSortChange("")}
                  >
                    Spent(High-Low)
                  </li>
                  <li
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100 border-b"
                    onClick={() => handleSortChange("")}
                  >
                    Visit(High-Low)
                  </li>
                  <li
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                    onClick={() => handleSortChange("")}
                  >
                    Highest recommendation
                  </li>
                </ul>
              )}
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

      <div className="w-full my-4 sm:px-6 px-4  -mt-2">
        <div className="w-full  bg-white px-2 py-4 shadow-md ">
          <div className="w-full bg-[#F7F9FC] flex p-4">
            <div className="w-[50%] flex justify-between">
              <p className="w-[25%] text-[#64748B] text-[12px] font-semibold ml-4">
                User Name
              </p>
              <p className="w-[25%] text-center text-[#64748B] text-[12px] font-semibold">
                User ID
              </p>
              <p className="w-[25%] text-center text-[#64748B] text-[12px] font-semibold">
                Mobile Number
              </p>
            </div>
            <div className="w-[50%] flex justify-between">
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

          <div className="w-full h-[22.5rem] overflow-y-auto hideScroller -mt-2">
            {/* Render the current page's data */}
            {data1?.map((data, i) => (
              <div key={i} className="w-full flex p-4 border-b ">
                <div className="w-[50%] flex justify-between">
                  <p className="w-[25%] text-[#1C2434] text-[14px] font-semibold ml-4">
                    {data.user}
                  </p>
                  <p className="w-[25%] text-center text-[#1C2434] text-[14px]">
                    {data.userId}
                  </p>
                  <p className="w-[25%] text-center text-[#1C2434] text-[14px]">
                    {data.contact}
                  </p>
                </div>
                <div className="w-[50%] flex justify-between">
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
            ))}{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
