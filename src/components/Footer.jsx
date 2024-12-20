import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaPhone } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";



export default function Footer() {
    return (
        <footer className='bg-black py-20'>
            <div className='container mx-auto px-6'>
                <h2 className='lg:text-5xl text-white text-center font-semibold'>Subscribe for Newletter</h2>
                <p className='text-white text-center py-8'>Never miss teh hajj & Umrah, Taqwa always open for offers.</p>
                <div className='flex gap-x-6 lg:w-1/3 mx-auto h-1/4 my-4'>
                    <input type="email" placeholder='Enter Email' className='rounded-l-full bg-transparent placeholder:text-white border-solid border border-orange-500 outline-none pl-4 w-full'/>
                    <button className='bg-orange-500 font-semibold text-base rounded-r-full outline-none border-none w-40 hoverBtn'>Subscribe</button>

                </div>
                <section className='lg:flex pt-16'>
                    <div className='flex flex-col justify-between'>
                        <div className='flex items-center gap-x-2'>
                            <img src="" alt="" className='w-12'/>
                            <span>
                                <p className='text-white font-semibold text-lg leading-tight'>At-taqwa</p>
                                <p className='text-orange-500 text-sm'>Hajj & Umrah</p>
                            </span>
                        </div>
                        <p className='text-white leading-7 py-4 lg:w-2/3'>At-taqwa hajj & umrah help service for people hajj & islamic Umrah</p>
                        <div className='flex items-center gap-x-6'>
                            <button className='rounded-full outline-none border-none bg-[#262626] text-orange-500 flex items-center p-3 hoverBtn'>
                                <FaFacebook size={24}   className='text-2xl'/>
                            </button>
                            <button className='rounded-full outline-none border-none bg-[#262626] text-orange-500 flex items-center p-3 hoverBtn'>
                                <FaTwitter size={24}   className='text-2xl'/>
                            </button>
                            <button className='rounded-full outline-none border-none bg-[#262626] text-orange-500 flex items-center p-3 hoverBtn'>
                                <FaLinkedin size={24}  className='text-2xl'/>
                            </button>
                            
                        </div>
                    </div>
                    <div className='flex lg:flex-nowrap flex-wrap xl:w-2/3 w-full justify-between lg:pt-0 pt-12'>
                        <div>
                            <h6 className='text-white text-2xl pb-6'>Quick Link</h6>
                            <ul className='flex flex-col gap-6'>
                                <a href="#" className='text-white no-underline hover:text-orange-500'>Hajj & Umrah</a>
                                <a href="#" className='text-white no-underline hover:text-orange-500'>Facilities</a>
                                <a href="#" className='text-white no-underline hover:text-orange-500'>Islamic</a>
                                <a href="#" className='text-white no-underline hover:text-orange-500'>Gallery</a>
                            </ul>
                        </div>
                        <div>
                            <h6 className='text-white text-2xl pb-6'>Offers</h6>
                            <ul className='flex flex-col gap-6'>
                                <a href="#" className='text-white no-underline hover:text-orange-500'>Hajj packages</a>
                                <a href="#" className='text-white no-underline hover:text-orange-500'>Umrah packages</a>
                                <a href="#" className='text-white no-underline hover:text-orange-500'>Hajj Guidelines</a>
                                <a href="#" className='text-white no-underline hover:text-orange-500'>Hajj Management</a>
                            </ul>
                        </div>
                        <div className='sm:pt-0 pt-12 lg:w-1/2'>
                            <h6 className='text-white text-2xl pb-6'>Contact us</h6>
                            <MdLocationPin className='text-orange-500 text-3xl'/>03/25
                            <p className='flex gap-x-2 text-white sm:w-4/5 leading-7'>O'zbekistan Awe. Toshkent</p>
                            <p className='flex items-center gap-x-2 text-white leading-10'><FaPhone className='text-orange-500 text-2xl'/> (+99899) 895-35-01</p>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    )
}
