import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { BiSolidDashboard } from "react-icons/bi";
import { GiProfit } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";
import { BiSolidAnalyse } from "react-icons/bi";
import { IoLogOutOutline } from "react-icons/io5";

import Dashboard from '../component/Dashboard';
import Sales from '../component/Sales';
import Payment from '../component/Payment';
import Analytics from '../component/Analytics';
import UserDetails from '../component/UserDetails';
import MerchantDetails from '../component/MerchantDetails';
import Navbar from '../component/Navbar';

const AdminConsole = () => {

    function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // This enables smooth scrolling
        });
      }
    
      const screenWidth = window.innerWidth;
      const navigate = useNavigate();
    
      const [das, setdas] = useState(true);
      const [sale, setsale] = useState(false);
      const [pay, setpay] = useState(false);
      const [ana, setana] = useState(false);
      const [det,setDet] = useState(false);
      const [Mdet,setMdet] = useState(false);
    
    
      const a = () => {
        setdas(true)
        setsale(false)
        setpay(false)
        setana(false)
        setDet(false)
        setMdet(false)
        setIsToggled(false);
        scrollToTop();
    
      }

      const b = () => {
        setdas(false)
        setsale(true)
        setpay(false)
        setana(false)
        setDet(false)
        setMdet(false)
        setIsToggled(false);
        scrollToTop();
      }

      const c = () => {
        setdas(false)
        setsale(false)
        setpay(true)
        setana(false)
        setDet(false)
        setMdet(false)
        setIsToggled(false);
        scrollToTop();
      }

      const d = () => {
        setdas(false)
        setsale(false)
        setpay(false)
        setana(true)
        setDet(false)
        setMdet(false)
        setIsToggled(false);
        scrollToTop();
        }  

      const f = (id) => {
        console.log(id);
        setdas(false)
        setsale(false)
        setpay(false)
        setana(false)
        setDet(true)
        setMdet(false)
        setIsToggled(false);
        scrollToTop();
      }

      const g = (id) => {
        console.log(id);
        setdas(false)
        setsale(false)
        setpay(false)
        setana(false)
        setDet(false)
        setMdet(true)
        setIsToggled(false);
        scrollToTop();
      }
     

      const e = () => {
        console.log("inside e")
        const userId = localStorage.removeItem('user');
        console.log(userId)
        navigate("/");
      }
    
      const removeleft = () => {
        if (screenWidth < 768) { // Adjust the threshold as needed
          
          document.getElementById('left').style.display = "none";
          setIsToggled(false);
          
        } 
    
      }


    return (
        
        <>
        <div id='admin' className='absolute w-full h-[400vh] bg-black z-[700] opacity-45 hidden'></div>
        <Navbar/>
          <div id='admin' className='w-full h-fit flex justify-center  relative  '>
    
            {/* left side */}
    
            <div id='left' className={` ${ screenWidth >= 768 ?
                               'sm:w-[20%] bg-black fixed left-0  z-40    h-full   mt-[70px] px-6 text-[.95rem]  gap-32 ' : 
                               ' fixed hidden left-0 z-40 h-fit rounded-lg   mt-[70px] px-6 text-[.95rem]  gap-32 bg-white ' }`}>
              <div className='mt-14'>
                <div id=''
                  onClick={a}
    
                  className={`w-full h-[50px] cursor-pointer  mb-1 flex items-center rounded-lg font-semibold p-4 gap-3 ${das ? ('bg-[#333A48] text-[#F8FAFC]') : ('text-[#F8FAFC]')} `}
                >
                  <BiSolidDashboard className='text-[1.1rem]' /> <p className=''>Dashboard</p>
                </div>
                <div id=''
                  onClick={b}
    
                  className={`w-full h-[50px] cursor-pointer mb-1 flex items-center rounded-lg font-semibold p-4 gap-3 ${(sale || Mdet) ? ('bg-[#333A48] text-[#F8FAFC]') : ('text-[#F8FAFC]')} `}
                >
                  <GiProfit  className='text-[1.1rem]' /> <p className=''>Sales & Revenue</p>
                </div>
                <div id=''
                  onClick={c}
    
                  className={`w-full h-[50px] cursor-pointer mb-1 flex items-center rounded-lg font-semibold p-4 gap-3 ${pay ? ('bg-[#333A48] text-[#F8FAFC]') : ('text-[#F8FAFC]')} `}
                >
                  <RiSecurePaymentLine className='text-[1.1rem]' /> <p className=''>Payments</p>
                </div>
                <div id=''
                  onClick={d}
    
                  className={`w-full h-[50px] cursor-pointer  mb-1 flex items-center rounded-lg font-semibold p-4 gap-3 ${(ana || det) ? ('bg-[#333A48] text-[#F8FAFC]') : ('text-[#F8FAFC]')} `}
                >
                  <BiSolidAnalyse className='text-[1.1rem]' /> <p className=''>User Analytics</p>
                </div>
            
              </div>
    
              <div className='mt-24'>
                <div id=''
                  onClick={e}
                  
                  className={`w-[60%] h-[50px] cursor-pointer bg-[#3C50E0] mx-auto  text-white  flex items-center rounded-3xl font-semibold p-4 gap-3 sm:mb-1 mb-8`}
                >
                  <IoLogOutOutline className='text-[1.2rem]' /><p className='text-[14px]'>Log Out</p>
                </div>
              </div>
    
    
            </div>
    
    
    
            {/* Right side */}
    
    
            <div id='right' onClick={removeleft}  className='sm:w-[80%] sm:ml-[20%] w-full h-fit bg-[#F6F8FF] flex flex-col '>
    
              {das && <Dashboard  />}
              {sale && <Sales g={g}/>}
              {pay && <Payment />}
              {ana && <Analytics f={f}/>}
              {det && <UserDetails d={d} />}
              {Mdet && <MerchantDetails f={f}/>}
    
            </div>
    
          </div>
        
          
        </>
      )
}

export default AdminConsole