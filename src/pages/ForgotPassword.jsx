import React, { useState } from "react";
import { CiMail } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import AuthLogo from "../assets/Group 1000002296.png";
import mail from "/mail.svg";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
  });

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
    });
    // setLoading(true);
    // setIsLoggedIn(true);
    // toast.success("Logged In");
    console.log("Printing the formData ");
    console.log(formData);
  }

  return (
    <div
      id="forgotPassword"
      className="w-full h-[100vh] bg-[#E2E8F0] flex justify-center items-center"
    >
      <div className="w-[65%] h-fit bg-white flex gap-2 ">
        <div className="w-[50%] flex flex-col justify-center items-center px-4 py-10">
          <img src={AuthLogo} width={300} height={100} />
        </div>

        <div className="w-[2px] bg-[#E2E8F0]"></div>

        <div className="w-[50%] px-8 py-10 my-12">
          <div className="w-full ">
            <form
              onSubmit={submitHandler}
              className="flex flex-col w-full gap-14"
            >
              <h2 className="text-[#1C2434] text-left text-[24px] font-semibold">
                Reset Password
              </h2>

              <label className="w-full text-left text-m flex flex-col gap-2">
                <p className="font-semibold">Enter Admin mail</p>
                <div className="flex w-full h-[3rem] border rounded-[0.5rem]  items-center gap-3 ">
                  <input
                    required
                    type="text"
                    placeholder="Enter your company mail"
                    name="email"
                    value={formData.email}
                    onChange={changeHandler}
                    className="w-full h-full text-richblack-5 px-2 focus:outline-[#3C50E0]"
                  />
                  <img src={mail} className="mr-3" />
                </div>
              </label>

              <button className="bg-[#3056D3] rounded-[8px] text-white font-medium text-richblack-900 px-[12px] py-[8px] mb-4">
                Next
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
