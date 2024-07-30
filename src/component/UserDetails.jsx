import React, { useState } from "react";
import { SlRefresh } from "react-icons/sl";
import arrow from "../assets/arrowup.png";
import UPI from "../assets/UPI.png";
import RuPay from "../assets/RuPay.png";
import VISA from "../assets/VISA.png";
import IMPS from "../assets/IMPS.png";
import pic from "../assets/picture.png";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import ProgressBar from "@ramonak/react-progress-bar";
import { useNavigate } from "react-router-dom";

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
      paymentmode: "rupay",
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
      paymentmode: "visa",
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
      paymentmode: "other",
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
      paymentmode: "visa",
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
      paymentmode: "rupay",
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
      totalVisit: 546,
      date: "18-08-2002",
      merchantType: "cafe",
    },
    {
      merchantName: "foodoos",
      totalVisit: 546,
      date: "18-08-2002",
      merchantType: "fine dining",
    },
    {
      merchantName: "foodoos",
      totalVisit: 5486,
      date: "18-08-2002",
      merchantType: "fast food",
    },
    {
      merchantName: "foodoos",
      totalVisit: 5146,
      date: "18-08-2002",
      merchantType: "casual dining",
    },
    {
      merchantName: "foodoos",
      totalVisit: 5046,
      date: "18-08-2002",
      merchantType: "cafe",
    },
    {
      merchantName: "foodoos",
      totalVisit: 4546,
      date: "18-08-2002",
      merchantType: "fine dining",
    },
    {
      merchantName: "foodoos",
      totalVisit: 2046,
      date: "18-08-2002",
      merchantType: "fast food",
    },
    {
      merchantName: "foodoos",
      totalVisit: 546,
      date: "18-08-2002",
      merchantType: "casual dining",
    },
    {
      merchantName: "foodoos",
      totalVisit: 5421,
      date: "18-08-2002",
      merchantType: "cafe",
    },
    {
      merchantName: "foodoos",
      totalVisit: 546,
      date: "18-08-2002",
      merchantType: "fine dining",
    },
    {
      merchantName: "foodoos",
      totalVisit: 5117,
      date: "18-08-2002",
      merchantType: "fast food",
    },
    {
      merchantName: "foodoos",
      totalVisit: 546,
      date: "18-08-2002",
      merchantType: "casual dining",
    },
    {
      merchantName: "foodoos",
      totalVisit: 3650,
      date: "18-08-2002",
      merchantType: "cafe",
    },
    {
      merchantName: "foodoos",
      totalVisit: 546,
      date: "18-08-2002",
      merchantType: "fine dining",
    },
    {
      merchantName: "foodoos",
      totalVisit: 5646,
      date: "18-08-2002",
      merchantType: "fast food",
    },
    {
      merchantName: "foodoos",
      totalVisit: 5460,
      date: "18-08-2002",
      merchantType: "casual dining",
    },
    {
      merchantName: "foodoos",
      totalVisit: 100,
      date: "18-08-2002",
      merchantType: "cafe",
    },
    {
      merchantName: "foodoos",
      totalVisit: 1060,
      date: "15-06-2002",
      merchantType: "fine dining",
    },
    {
      merchantName: "foodoos",
      totalVisit: 6,
      date: "18-08-2002",
      merchantType: "fast food",
    },
    {
      merchantName: "foodoos",
      totalVisit: 56,
      date: "18-07-2002",
      merchantType: "casual dining",
    },
    {
      merchantName: "foodoos",
      totalVisit: 54,
      date: "12-08-2002",
      merchantType: "cafe",
    },
    {
      merchantName: "foodoos",
      totalVisit: 4506,
      date: "19-08-2002",
      merchantType: "fine dining",
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
      merchantName: "Foodoos",
      merchantType: "cafe",
      lastVisit: "Visited today",
      totalVisit: 546
    },
    {
      merchantName: "Foodoos",
      merchantType: "cafe",
      lastVisit: "Visited today",
      totalVisit: 546
    },
    {
      merchantName: "Foodoos",
      merchantType: "cafe",
      lastVisit: "Visited today",
      totalVisit: 546
    },
    {
      merchantName: "Foodoos",
      merchantType: "cafe",
      lastVisit: "Visited today",
      totalVisit: 546
    },
    {
      merchantName: "Foodoos",
      merchantType: "cafe",
      lastVisit: "Visited today",
      totalVisit: 546
    },
    {
      merchantName: "Foodoos",
      merchantType: "cafe",
      lastVisit: "Visited today",
      totalVisit: 546
    },
    {
      merchantName: "Foodoos",
      merchantType: "cafe",
      lastVisit: "Visited today",
      totalVisit: 546
    },
    {
      merchantName: "Foodoos",
      merchantType: "cafe",
      lastVisit: "Visited today",
      totalVisit: 546
    },
    {
      merchantName: "Foodoos",
      merchantType: "fine dining",
      lastVisit: "Visited 2 days ago",
      totalVisit: 1234
    },
    {
      merchantName: "Foodoos",
      merchantType: "fast food",
      lastVisit: "Visited 3 days ago",
      totalVisit: 874
    },
    {
      merchantName: "Foodoos",
      merchantType: "casual dining",
      lastVisit: "Visited 5 days ago",
      totalVisit: 953
    },
    {
      merchantName: "Foodoos",
      merchantType: "cafe",
      lastVisit: "Visited today",
      totalVisit: 546
    },
    {
      merchantName: "Foodoos",
      merchantType: "fine dining",
      lastVisit: "Visited 4 days ago",
      totalVisit: 1100
    },
    {
      merchantName: "Foodoos",
      merchantType: "fast food",
      lastVisit: "Visited 1 day ago",
      totalVisit: 750
    },
    {
      merchantName: "Foodoos",
      merchantType: "casual dining",
      lastVisit: "Visited 2 days ago",
      totalVisit: 615
    },
    {
      merchantName: "Foodoos",
      merchantType: "cafe",
      lastVisit: "Visited today",
      totalVisit: 546
    },
    {
      merchantName: "Foodoos",
      merchantType: "fine dining",
      lastVisit: "Visited 1 day ago",
      totalVisit: 980
    },
    {
      merchantName: "Foodoos",
      merchantType: "fast food",
      lastVisit: "Visited 5 days ago",
      totalVisit: 840
    },
    {
      merchantName: "Foodoos",
      merchantType: "casual dining",
      lastVisit: "Visited 3 days ago",
      totalVisit: 690
    },
    {
      merchantName: "Foodoos",
      merchantType: "cafe",
      lastVisit: "Visited today",
      totalVisit: 546
    },
    {
      merchantName: "Foodoos",
      merchantType: "fine dining",
      lastVisit: "Visited 4 days ago",
      totalVisit: 1040
    },
    {
      merchantName: "Foodoos",
      merchantType: "fast food",
      lastVisit: "Visited 2 days ago",
      totalVisit: 860
    },
    {
      merchantName: "Foodoos",
      merchantType: "casual dining",
      lastVisit: "Visited 1 day ago",
      totalVisit: 700
    },
  ];
  
  const [data, setData] = useState(data1);
const navigate=useNavigate();

  const changeComp = () => {
    navigate("/userdata")
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

  const maxValueData2 = data2.reduce(
    (max, data) => (data.totalVisit > max ? data.totalVisit : max),
    data2[0].totalVisit
  );
  const maxValueData3 = data3.reduce(
    (max, data) => (data.redeem > max ? data.redeem : max),
    data3[0].redeem
  );
  console.log("max Value");
  console.log(maxValueData3);

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

  return (
    <div
      id="userDetails"
      className="w-full h-fit relative sm:w-[80%] sm:ml-[20%] bg-[#F6F8FF] flex flex-col"
    >
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
        <div className="w-[60%] flex flex-col shadow-md bg-white ">
          <div className="w-full h-[127px]  p-4 flex items-center gap-4 border-b">
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
                <p>Created On:</p>
                <p>Last Active:</p>
              </div>
              <div className="text-[#1C2434] text-[16px] gap-2 font-semibold flex flex-col">
                <p>19 August, 2023</p>
                <p>19 August, 2024</p>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between px-4 py-6 gap-4">
            <div className="w-[50%] h-[110px]  p-4 flex flex-col  justify-center gap-3 border rounded-lg">
              <p className="text-sm text-[#64748B] font-semibold">
                Total Merchant Visit
              </p>
              <p className="text-[#1C2434] text-2xl font-bold">200</p>
            </div>
            <div className="w-[50%] h-[110px]  p-4 flex flex-col justify-center gap-3 border rounded-lg">
              <p className="text-sm text-[#64748B] font-semibold">
                Last Merchant Visit
              </p>
              <p className="text-[#1C2434] text-2xl font-bold">
                19 August, 2023
              </p>
            </div>
          </div>
        </div>
        <div className="w-[39%] h-[293px] bg-white flex flex-col shadow-md">
          <div className="w-full px-4 py-4 border-b border-slate-600">
            <p className="text-[#212B36] text-xl font-bold">Basic Data</p>
          </div>
          <div className="w-full py-4 px-5 border-b">
            <div className="w-full flex justify-between font-semibold">
              <p className="text-[#1C2434B0] text-[16px]">Gender</p>
              <p className="text-[#1C2434] text-[16px]">Male</p>
            </div>
          </div>
          <div className="w-full py-4 px-5 border-b">
            <div className="w-full flex justify-between font-semibold">
              <p className="text-[#1C2434B0] text-[16px]">Mobile Number</p>
              <p className="text-[#1C2434] text-[16px]">7603037718</p>
            </div>
          </div>
          <div className="w-full py-4 px-5 border-b">
            <div className="w-full flex justify-between font-semibold">
              <p className="text-[#1C2434B0] text-[16px]">DOB</p>
              <p className="text-[#1C2434] text-[16px]">19-08-2002</p>
            </div>
          </div>
          <div className="w-full py-4 px-5 ">
            <div className="w-full flex justify-between font-semibold">
              <p className="text-[#1C2434B0] text-[16px]">Anniversary</p>
              <p className="text-[#1C2434] text-[16px]">-</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex px-6 mb-4 justify-between">
        <div className="w-[49%] bg-white border shadow-lg">
          <div className="w-full px-4 py-4 flex justify-between items-center">
            <p className="text-[#212B36] text-[18px] font-semibold">Visits</p>
            <div className="w-[60%] flex justify-between flex-wrap">
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
            <p className="w-[50%] text-[#64748B] text-[12px] font-semibold">
              Merchant Names
            </p>
            <div className="w-[50%] flex  justify-end">
              <p className="w-[55%] text-center text-[#64748B] text-[12px] font-semibold">
                Merchant type
              </p>
              <p className="w-[45%] text-center text-[#64748B] text-[12px] font-semibold">
                Total Visit
              </p>
            </div>
          </div>

          <div className="w-full h-fit max-h-[550px] mt-2 overflow-y-auto hideScroller">
            <div className="w-full h-full overflow-y-auto scrollbar-hide">
              {data2?.map((data, i) => (
                <div
                  key={i}
                  className="w-full flex flex-col py-2 px-4 relative"
                >
                  <div className="w-full">
                    <ProgressBar
                      completed={
                        (data.totalVisit / (maxValueData2 * 1.2)) * 100
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
                    <div className="w-[50%] flex">
                      <p className="text-[#1C2434] text-[14px] font-semibold">
                        {data.merchantName}
                      </p>
                    </div>
                    <div className="w-[50%] flex justify-between">
                      <p className="w-[55%] text-center  text-[#1C2434] text-[14px] font-semibold">
                        {data.merchantType}
                      </p>
                      <p className="w-[45%] text-center  text-[#1C2434] text-[14px] font-semibold">
                        {data.totalVisit}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-[49%] flex flex-col gap-4 ">
          <div className="bg-white flex flex-col w-full border shadow-lg">
            <div className="px-4 py-3 flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <p className="text-[#212B36] text-lg font-semibold">
                  Visit By Merchant
                </p>
                <div className="w-[40%] h-[2rem] bg-white relative flex items-center border shadow-sm">
                  <input
                    className="w-full h-fit px-2 rounded-lg focus:outline-none"
                    type="text"
                    placeholder="Search"
                  />
                  <CiSearch className="absolute text-[1.3rem] font-semibold right-3" />
                </div>
              </div>

              <div className="w-full flex justify-between items-center">
                <p className="w-[30%] text-[#64748B] text-[12px] font-semibold mt-2">
                  Merchant Name
                </p>
                <p className="w-[23.33%] text-center text-[#64748B] text-[12px] font-semibold">
                  Business Type
                </p>
                <p className="w-[23.33%] text-center text-[#64748B] text-[12px] font-semibold">
                  Visited
                </p>
                <p className="w-[23.33%] text-center text-[#64748B] text-[12px] font-semibold">
                  Total Visits
                </p>
              </div>
            </div>

            <div className="w-full h-fit max-h-[550px] overflow-y-auto hideScroller">
              {data4?.map((data, i) => (
                <div
                  key={i}
                  className="w-full flex justify-around py-4 px-4 border-b "
                >
                  <div className="w-[30%] flex">
                    <p className="text-[#1C2434] text-[14px] font-semibold">
                      {data.merchantName}
                    </p>
                  </div>
                  <p className="w-[23.33%] text-center text-[#1C2434] text-[14px] font-semibold">
                    {data.merchantType}
                  </p>
                  <p className="w-[23.33%] text-center text-[#1C2434] text-[14px] font-semibold">
                    {data.lastVisit}
                  </p>
                  <p className="w-[23.33%] text-center text-[#1C2434] text-[14px] font-semibold">
                    {data.totalVisit}
                  </p>
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
