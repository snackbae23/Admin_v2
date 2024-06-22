import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMail } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { PiEyeSlashLight } from "react-icons/pi";
import { PiEyeLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import AuthLogo from "../assets/AuthLogo.png";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    setFormData({
      email: "",
      password: "",
    });
    // setLoading(true);
    // setIsLoggedIn(true);
    // toast.success("Logged In");
    console.log("Printing the formData ");
    console.log(formData);
    navigate("admin");
  }

  return (
    <div
      id="login"
      className="w-full h-[100vh] bg-[#E2E8F0] flex justify-center items-center"
    >
      <div className="w-[65%] h-fit bg-white flex gap-2">
        <div className="w-[50%] flex flex-col justify-center items-center p-4">
          <img src={AuthLogo} width={300} height={100} />
          <p className="text-[#1C2434] text-[24px] font-semibold">
            SnackBAE Admin
          </p>
        </div>

        <div className="w-[2px] bg-[#E2E8F0]"></div>

        <div className="w-[50%] px-8 py-4 my-4">
          <div className="w-full mt-4">
          <form
            onSubmit={submitHandler}
            className="flex flex-col w-full gap-y-4"
          >
            <h2 className="text-[#1C2434] text-left text-[24px] font-semibold">
              Login
            </h2>

            <div className="flex flex-col gap-1">
              <label className="w-full text-left text-m flex flex-col gap-2">
                <p className="font-semibold">Admin mail</p>
                <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3">
                  <CiMail className="size-[25px]" />
                  <input
                    required
                    type="text"
                    placeholder="Enter your company mail"
                    name="email"
                    value={formData.email}
                    onChange={changeHandler}
                    className="w-full h-full text-richblack-5 outline-none"
                  />
                </div>
              </label>

              <label className=" w-full text-left text-m flex flex-col gap-2">
                <p className="font-semibold ">Password</p>
                <div className="flex w-full h-[3rem] border rounded-[0.5rem] pl-[12px] items-center gap-3 relative">
                  <RiLockPasswordLine className="size-[25px]" />
                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter Password"
                    name="password"
                    value={formData.password}
                    onChange={changeHandler}
                    className="w-full h-full text-richblack-5 outline-none"
                  />
                  <span
                    className="absolute right-3 top-[13px] cursor-pointer"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? (
                      <PiEyeLight fontSize={24} />
                    ) : (
                      <PiEyeSlashLight fontSize={24} />
                    )}
                  </span>
                </div>
              </label>
              <div className="w-full mt-1">
              <Link to="/forgotPassword">
                <p className="text-xs text-[#2563EB] font-bold text-right">
                  Forgot Password?
                </p>
              </Link>
            </div>
            </div>

            <button className="bg-[#3056D3] rounded-[8px] text-white font-medium text-richblack-900 px-[12px] py-[8px] mb-4">
              Login
            </button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
