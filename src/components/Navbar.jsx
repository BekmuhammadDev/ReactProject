import React, { useState,useEffect } from 'react';
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { RiArrowDropDownLine } from "react-icons/ri";
import KabahLogo from "../assets/logo/Kabah.jpg"
import AOS from "aos";
import "aos/dist/aos.css";


export default function Navbar() {

    const [dropdown, setdropdown] = useState(false);
    const showDropdown = () => {
        setdropdown(!dropdown)
    }

    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      // Tozalash
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        AOS.init({
          duration: 800, // Animatsiya davomiyligi (ms)
        });
      }, []);
    

    return (
        <nav data-aos="fade-up" className={`fixed top-0 left-0 w-full z-50 p-4 transition-all duration-300  ${
            isScrolled ? "bg-gray-800 backdrop-blur-md" : "bg-transparent"}`}>
            <div className='conatiner mx-auto lg:px-6'>
                <div className='lg:w-full w-11/12 mx-auto h-full flex  justify-between  items-center' >
                    <div className='flex flex-col gap-y-4'>
                        <div className='flex items-center gap-x-2'>
                            {/* <img src={KabahLogo} alt="logo image" className='w-12' /> */}
                            <span>
                                <p className='text-white font-semibold text-lg leading-tight'>At Taqwa</p>
                                <p className='text-orange-500 text-sm'>Hajj & Umrah</p>
                            </span>

                        </div>
                    </div>
                    <ul className='flex-1 flex justify-center items-center xl:gap-12 gap-x-4 max-lg:hidden'>
                        <a href="#" className='leading-normal no-underline text-white text-lg hover:text-orange-500'>Home</a>
                        <a href="#" className='leading-normal no-underline text-white text-lg hover:text-orange-500 flex'>Hajj <RiArrowDropDownLine className='text-3xl' /></a>
                        <a href="#" className='leading-normal no-underline text-white text-lg hover:text-orange-500 flex'>Umrah <RiArrowDropDownLine className='text-3xl' /></a>
                        <a href="#" className='leading-normal no-underline text-white text-lg hover:text-orange-500'>Facilities</a>
                        <a href="#" className='leading-normal no-underline text-white text-lg hover:text-orange-500'>Tour</a>
                        <a href="#" className='leading-normal no-underline text-white text-lg hover:text-orange-500'>Blog</a>
                        <a href="#" className='leading-normal no-underline text-white text-lg hover:text-orange-500'>Gallery</a>
                    </ul>
                    <div className='flex max-lg:hidden'>
                        <button className='rounded-full border border-solid border-primary bg-transparent text-lg text-white px-8 py-3 hoverBtn'>Contact Us</button>
                    </div>
                    {dropdown ? (
                        <div onClick={showDropdown} className='lg-hidden text-[22px] cursor-pointer text-white'>
                            <IoMdClose />
                        </div>
                    ) : (
                        <div onClick={showDropdown} className='lg:hidden text-[22px] cursor-pointer text-white'>
                            <HiMenuAlt3 />
                        </div>
                    )}
                </div>
                {dropdown ? (
                    <div
                        onClick={showDropdown}
                        className='lg:hidden w-full h-[100vh] fixed top-24 bg-black ease-in-out duration-100'
                    >
                        <div className='w-full h-[320px] flex flex-col items-baseline pt-8 gap-4'>
                            <ul className='text-center p-0 flex flex-col justify-center w-full gap-y-8 '>
                                <a href="#" className='leading-normal no-underline text-white text-lg hover:text-orange-500'>Home</a>
                                <a href="#" className='leading-normal no-underline text-white text-lg hover:text-orange-500'>Hajj <RiArrowDropDownLine /></a>
                                <a href="#" className='leading-normal no-underline text-white text-lg hover:text-orange-500'>Umrah <RiArrowDropDownLine /></a>
                                <a href="#" className='leading-normal no-underline text-white text-lg hover:text-orange-500'>Facilities</a>
                                <a href="#" className='leading-normal no-underline text-white text-lg hover:text-orange-500'>Tour</a>
                                <a href="#" className='leading-normal no-underline text-white text-lg hover:text-orange-500'>Blog</a>
                                <a href="#" className='leading-normal no-underline text-white text-lg hover:text-orange-500'>Gallery</a>
                            </ul>
                            <div className='flex justify-center w-full'>
                                <button className='rounded-full border border-solid border-primary bg-transparent text-lg text-white px-8 hoverBtn'>Contact Us</button>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
        </nav>
    );
};

Navbar;