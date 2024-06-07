import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { GoPerson } from "react-icons/go";

//image
import logo from '../assets/Logo.png';
import pic from '../assets/picture.png';

//icons
import { IoMdMenu, IoMdClose } from "react-icons/io";


const Navbar = ({isToggled, setIsToggled}) => {


    const navigate = useNavigate();

    


  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This enables smooth scrolling
    });
  }

    //handle toggle for menu for small screen
    // const [isToggled, setIsToggled] = useState(false);
    const [isToggled1, setIsToggled1] = useState(false);

    const [fram,setframe]=useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
       
        document.getElementById('left').style.display = "none";

    };
    const handleToggle1 = () => {
        setIsToggled(!isToggled1);
       
        document.getElementById('left').style.display = "block";
        scrollToTop();

    };

    const frames1 =()=>{
        setframe(!fram);
        document.getElementById('frame').style.display = "none";
    };
    const frames2 =()=>{
        setframe(!fram);
        document.getElementById('frame').style.display = "block";
    };
    // Function to handle link click
    const handleLinkClick = () => {
        if (isToggled) {
            setIsToggled(false);
        }
    };


    
    return (
        <div className='fixed bg-white z-[600] w-full h-[70px] flex justify-between items-center px-[1.5rem] border shadow-md'>
            <div className='flex items-center justify-center gap-4'>
                {/* logo */}
            <img
                onClick={
                    () => {
                        navigate('/');
                    }
                } src={logo} alt='logo'
                className='h-[33px] w-[60px] ml-4 aspect-auto  cursor-pointer sm:block hidden ' />
                <p className='text-[#1C2434] text-[14px]'>SnackBae Admin</p>
            </div>

            <div className='flex items-center justify-center gap-4'>
                <div className='flex flex-col items-center justify-center '>
                    <p className='text-[#212B36] text-[14px]'>Intekhab</p>
                    <p className='text-[#637381] text-[12px]'>Full-stack Dev</p>
                </div>
                <img src={pic} alt='pic'
                className='h-[46px] w-[50px] aspect-auto mr-4 cursor-pointer sm:block hidden '/>
            </div>

            

            {/* menu-icons */}
            {
                isToggled ?
                    (<IoMdClose
                        className='sm:hidden block text-[1.7rem] size-7 '
                        onClick={handleToggle} />) :
                    (<IoMdMenu
                        className='sm:hidden block text-[1.6rem] size-7 '
                        onClick={handleToggle1} />)
            }
            <div className='sm:hidden block rounded-full border border-[black] items-center justify-center p-1 relative '>
                {
                    fram ? 
                    (<GoPerson className='size-7 absolute ' onClick={frames1} />):
                    (<GoPerson className='size-7 absolute ' onClick={frames2} />)
                }

            <GoPerson className='size-7 ' onClick={frames1} />
            </div>

        </div>
    )
}

export default Navbar
