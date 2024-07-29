import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineFileDownload } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { jsPDF } from "jspdf";
import picture from "../assets/picture.png";
import { useNavigate } from "react-router-dom";

const AllMerchant = ({ g }) => {
  const data1 = [
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      contact: "7603037718",
      email: "test@gamil.com",
      accountCreated: "19-08-2002",
      contactPerson: "Souptik Das",
      id: "1",
    },
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      contact: "7603037718",
      email: "test@gamil.com",
      accountCreated: "19-08-2002",
      contactPerson: "Souptik Das",
      id: "2",
    },
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      contact: "7603037718",
      email: "test@gamil.com",
      accountCreated: "19-08-2002",
      contactPerson: "Souptik Das",
      id: "3",
    },
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      contact: "7603037718",
      email: "test@gamil.com",
      accountCreated: "19-08-2002",
      contactPerson: "Souptik Das",
      id: "4",
    },
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      contact: "7603037718",
      email: "test@gamil.com",
      accountCreated: "19-08-2002",
      contactPerson: "Souptik Das",
      id: "5",
    },
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      contact: "7603037718",
      email: "test@gamil.com",
      accountCreated: "19-08-2002",
      contactPerson: "Souptik Das",
      id: "6",
    },
    {
      merchant: "foodoo's",
      merchantId: "ID10001",
      contact: "7603037718",
      email: "test@gamil.com",
      accountCreated: "19-08-2002",
      contactPerson: "Souptik Das",
      id: "7",
    },
  ];

  const [downloadType, setDownloadType] = useState("");

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
  const navigate = useNavigate();
  const changeComp = (id) => {
    navigate("/merchantdetails");
    console.log(id);
    g(id);
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

        <div className="w-[18%] flex h-[2rem] bg-white border px-[12px] items-center gap-0 shadow-sm">
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

      <div className="w-full bg-[#F7F9FC] flex gap-2 p-4">
        <div className="w-[50%] flex justify-between text-[#64748B] text-[14px] font-semibold">
          <p className="w-[33%] text-center">Merchant</p>
          <p className="w-[33%] text-center">Phone Number</p>
          <p className="w-[33%] text-center">Email ID</p>
        </div>
        <div className="w-[49%] flex justify-between text-[#64748B] text-[14px] font-semibold">
          <p className="w-[33%] text-center">Account Created</p>
          <p className="w-[33%] text-center">Contact Person</p>
          <p className="w-[33%] text-center">Action</p>
        </div>
      </div>

      <div className="w-full h-[17rem] overflow-y-auto hideScroller -mt-2">
        {data1?.map((data, id) => (
          <div key={id} className="w-full flex gap-2 p-4 border-b ">
            <div className="w-[50%] flex justify-between items-center">
              <div className="flex items-center gap-2">
                <img src={picture} className="w-10" />
                <div>
                  <p className="w-full text-[#1C2434] text-sm font-medium">
                    {data.merchant}
                  </p>
                  <p className="text-[0.75rem] text-[#64748B]">ID10001</p>
                </div>
              </div>
              <p className="w-[33%] text-center text-[#1C2434] text-[14px] font-semibold">
                {data.contact}
              </p>
              <p className="w-[33%] text-center text-[#1C2434] text-[14px] font-semibold">
                {data.email}
              </p>
            </div>
            <div className="w-[49%] flex justify-between items-center">
              <p className="w-[33%] text-center text-[#000000] text-[14px] font-semibold">
                {data.accountCreated}
              </p>
              <p className="w-[33%] text-center text-[#1C2434] text-[14px] font-semibold">
                {data.contactPerson}
              </p>
              <div className="w-[33%] text-center">
                <button
                  onClick={() => changeComp(data.id)}
                  className="w-[60%] text-center p-2 bg-[#3C50E0] text-white border rounded-md text-[12px] font-bold"
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

export default AllMerchant;
