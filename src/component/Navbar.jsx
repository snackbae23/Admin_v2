import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//image
import logo from "../assets/IMG-20231226-WA0003 3.png";
import pic from "../assets/picture.png";

const Navbar = () => {
  const navigate = useNavigate();

  const [showOptions, setShowOptions] = useState(false);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <div className="fixed bg-white z-[600] w-full h-[70px] flex justify-between items-center px-[1.5rem] border shadow-md">
      <div className="flex flex-col items-center justify-center">
        {/* logo */}
        <img
          onClick={() => {
            navigate("/");
          }}
          src={logo}
          alt="logo"
          className="h-[2.065rem] w-[3.75rem]  aspect-auto  cursor-pointer sm:block hidden "
        />
        <p className="text-[#1C2434] text-sm">SnackBae Admin</p>
      </div>

      <div
        onClick={toggleOptions}
        className="flex items-center justify-center gap-4"
      >
        <div className="flex flex-col items-center justify-center ">
          <p className="text-[#212B36] text-[14px]">Intekhab</p>
          <p className="text-[#637381] text-[12px]">Full-stack Dev</p>
        </div>
        <img
          src={pic}
          alt="pic"
          className="h-[46px] w-[50px] aspect-auto mr-4 cursor-pointer sm:block hidden "
        />
      </div>

      {showOptions && (
        <div className="absolute w-[15%] top-[60px] right-0 flex flex-col justify-center items-center bg-white shadow-md rounded">
          <button onClick={() => navigate("/resetPassword")} className="block w-full py-4 px-4 font-semibold hover:bg-gray-100">
            Reset Password
          </button>
          <div className="w-full h-[1px] bg-[#E2E8F0]"></div>
          <button onClick={() => navigate("/")} className="block w-full py-4 px-4 font-semibold hover:bg-gray-100">
            Logout
          </button>
        </div>
      )}

    </div>
  );
};

export default Navbar;
