import React from 'react'
import { FaStar } from 'react-icons/fa'
import { MdBookOnline } from "react-icons/md";
import { IoPerson } from "react-icons/io5"
import { FaPersonPraying } from "react-icons/fa6";
import { GoPackage } from "react-icons/go";
import { IoBook } from "react-icons/io5";
import { GiNurseFemale } from "react-icons/gi";
import { FaPlay } from "react-icons/fa";


import TrustPilot from "../assets/logo/trustpilot.webp"
import Facebook from "../assets/logo/Facebook.jpg"
import HajUmrah from "../assets/logo/hajumrah.jpg"
import TheYP from "../assets/logo/theYP.png"
import Angi from "../assets/logo/angi.png"
import Hajj from "../assets/img/4.jpg"
import HajjEc from "../assets/img/2.avif"
import Umrah from "../assets/img/3.jpg"
import UmrahEc from "../assets/img/1.jpg"
import Ticket from "../assets/img/5.avif"
import KuwaitA from "../assets/logo/Kwait.png"
import Biman from "../assets/logo/Biman.png"
import Qatar from "../assets/logo/Qatar.jpg"
import Novair from "../assets/logo/novair-.svg"
import Hilton from "../assets/logo/hilton.jpg"
import Hayat from "../assets/logo/Hyatt.png"
import Alaqsa from "../assets/img/7.avif"
import hajpac from "../assets/img/6.jpg"
import umrahpac from "../assets/img/8.jpg"
import ziyarat from "../assets/img/9.avif"
import Kabahdua from "../assets/img/10.webp"

export default function Home() {

    const Reviews = ({ image, rating, review }) => {
        return (
            <div data-aos="fade-right" className='flex flex-col items-center'>
                <img src={image} alt="" className='w-40 h-20 object-contain' />
                <span>
                    <FaStar className='text-yellow-400 text-xl' />{rating}/5
                </span>
                <p className='pt-3 text-lg'>{review}reviews</p>
            </div>
        )
    }

    const Card = ({ image, packageType, duration, amount, type }) => {
        return (
            <div data-aos="fade-left" className=' transition-transform duration-300 hover:scale-105' >
                <img src={image} alt="" className='w-full rounded-[10px] object-cover bg-white shadow-md h-[212px]' />
                <p className='text-orange-500 text-base font-semibold pt-4 pb-2'>{type}</p>
                <h6 className='text-2xl'>{packageType}</h6>
                <span>
                    ${amount} <p className='text-black text-sm font-medium'>person</p>
                </span>
                <p className='pt-4 pb-6 font-medium'>Package Duration {duration} days</p>
                <button className='rounded-full px-8 py-3 border-none outline-none font-medium text-base bg-sky-500 hover:bg-cyan-700 hover:text-white hoverBtn'>Details</button>
            </div>
        )
    }

    const Offers = ({ icon, text, title }) => {
        return (
            <div className='flex items-center gap-x-4'>
                <span className='rounded-full bg-white w-16 h-16 flex items-center justify-center text-3xl'>{icon}</span>
                <span>
                    <p className='text-xl font-semibold pb-2'>{text}</p>
                    <p className='font-semibold'>{title}</p>
                </span>
            </div>
        )
    }

    const Packages = ({ image, title, text }) => {
        return (
            <div className='text-center flex flex-col justify-between items-center'>
                <div className='rounded-[4rem] border-[1rem] border-black border-solid w-1/2 h-60'>
                    <img src={image} alt="" className='w-full h-full rounded-[3rem] object-contain' />
                </div>
                <p className='text-3xl font-semibold w-44 py-4'>{title}</p>
                <p className='leading-7 px-2'>{text}</p>
                <button>Read Info</button>
            </div>
        )
    }

    return (
        <>
            <div className=" bg-no-repeat min-h-[50rem] h-screen pt-24"
                style={{
                    backgroundImage: "url('/main_image.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <h1 data-aos="fade-up" className='text-violet-50 text-center lg:text-5xl text-3xl pt-10 pb-8'>Ecanomy Hajj & Umrah Package </h1>
                <div data-aos="fade-up" className='flex justify-center py-8'>
                    <button className='bg-orange-500 rounded-full px-10 py-4 outline-none border-none font-semibold text-base hoverBtn'>Get a Package Price</button>
                </div>
            </div>


            <section className='conatiner mx-auto px-6 xl:pt-16 pb-24'>
                <div className='flex flex-wrap items-center lg:justify-evenly justify-center py-16 gap-y-8 gap-12'>
                    <Reviews image={TrustPilot} rating="4.5" review="1597" />
                    <Reviews image={Facebook} rating="5" review="3789" />
                    <Reviews image={HajUmrah} rating="4.5" review="2456" />
                    <Reviews image={TheYP} rating="4.7" review="3040" />
                    <Reviews image={Angi} rating="4.5" review="2450" />
                </div>
                <h2 data-aos="fade-right" className='font-semibold lg:text-5xl text-3xl text-center'>Hajj And Umrah Special Offers</h2>
                <p data-aos="fade-right" className='text-center pt-8 font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, mollitia.</p>
                <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 pt-16'>
                    <Card amount="15,000" duration="42-45" image={Hajj} packageType="Hajj Package" type="Clasic" />
                    <Card amount="12,000" duration="42-45" image={HajjEc} packageType="Hajj Package" type="Ecanomy" />
                    <Card amount="10,000" duration="10-14" image={Umrah} packageType="Umrah Package" type="Clasic" />
                    <Card amount="10,000" duration="10-14" image={UmrahEc} packageType="Umrah Package" type="Ecanomy" />
                </div>
            </section>

            <section className='bg-white relative container mx-auto px-6'>

                <div className="container mx-auto px-6 lg:py-24 py-12 flex flex-col lg:flex-row lg:items-center">
                    <img data-aos="fade-left"
                        src={Ticket}
                        alt="#"
                        className="lg:absolute lg:right-10 xl:w-auto pt-5 lg:w-1/2 lg:h-[700px] rounded-2xl h-80 order-1 lg:order-none" />
                    <div data-aos="fade-right">
                        <h2 className="font-semibold lg:text-5xl text-3xl">What Do We Offer</h2>
                        <p className="lg:w-1/3 leading-8 font-semibold py-6">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores iure facere distinctio recusandae, laborum eum inventore illum beatae est, ex natus minus harum magnam reprehenderit error a! Quasi, minus est?
                        </p>
                        <button className="bg-orange-500 rounded-full px-10 py-4 outline-none border-none font-semibold text-base mt-2 hoverBtn">
                            Learn More
                        </button>
                        <div className="grid lg:grid-cols-2 grid-cols-1 lg:w-1/2 gap-8 pt-16">
                            <Offers icon={<MdBookOnline />} text="We have over 40 payment ways." title="Hotel Booking" />
                            <Offers icon={<IoPerson />} text="Best Ramadan Hajj Package." title="Hajj Offers" />
                            <Offers icon={<IoBook />} text="No hustling in visa processing." title="Visa processing" />
                            <Offers icon={<FaPersonPraying />} text="Umrah offers for family." title="Umrah processing" />
                            <Offers icon={<GiNurseFemale />} text="Our Guide will lead you all." title="Ziyarat Tours" />
                            <Offers icon={<GoPackage />} text="This is a group umrah package" title="Umrah package" />
                        </div>
                    </div>
                </div>

            </section>

            <section className='container mx-auto px-6 lg:pt-24 pt-12'>
                <h4 className='text-2xl font-semibold text-center'> Our Affiliations Flights & Hotels</h4>
                <div data-aos="fade-down-right" className='flex flex-wrap items-center justify-evenly py-16 gap-8'>
                    <img src={KuwaitA} alt="" className='w-40 h-20 object-contain' />
                    <img src={Biman} alt="" className='w-40 h-20 object-contain' />
                    <img src={Qatar} alt="" className='w-40 h-20 object-contain' />
                    <img src={Novair} alt="" className='w-40 h-20 object-contain' />
                    <img src={Hilton} alt="" className='w-40 h-20 object-contain' />
                    <img src={Hayat} alt="" className='w-40 h-20 object-contain' />
                </div>
                <h2 className='font-semibold lg:text-5xl text-3xl text-center py-4'> All Inculusive Packages</h2>
                <p className='lg:w-2/5 mx-auto leading-8 py-6 text-center'> All inculusive Umrah package with good hotels. Solely focus and maximize every minute of your tour with our cheap Umrah package.</p>
                <div data-aos="flip-left" className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 py-16'>
                    <Packages image={Alaqsa} text='In Islam , theterm "al-Aqsa" refers to the Noble SancTuary. The masque is believed.' title="Al-aqsa packages" />
                    <Packages image={hajpac} text='Muslims practice all other patterns of tourism such as business, attending conference and cultural tourism' title="Islamic Tour packages" />
                    <Packages image={umrahpac} text='The hajj is an annual islamic pilgrimage to mecca, Saudi Arabia, the holiest city for Muslims.' title="Hajj packages" />
                    <Packages image={ziyarat} text='The Umrah is an Islamic pilgrimage to mecca that can be undertaken at any time of the year.' title="Umarh packages" />
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="3000" className='lg:flex items-center gap-x-16 lg:pt-16'>
                    <div className='relative lg:w-[45rem] lg:h-[35rem] bg-white px-8 py-[3.5rem]'>
                        <img src={Kabahdua} alt="" className='w-full h-full rounded-[10px] object-cover relative z-10' />
                        <div className='absolute bg-orange-500 h-full w-2/5 top-0 left-2/4'></div>
                    </div>
                    <div className='lg:w-2/5 lg:py-0 py-8'>
                        <h2 className='font-semibold lg:text-5xl text-3xl'>Learn correctly how to perform Umrah</h2>
                        <p className='leading-8 py-8 font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit sed reprehenderit tempora in corporis voluptatibus doloribus nesciunt voluptate a accusantium.</p>
                        <button className='text-white text-base bg-sky-800 rounded-full px-8 py-4 flex items-center gap-2 outline-none border-none hoverBtn'>
                            <FaPlay /> Watch Video
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
