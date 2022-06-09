import React from 'react';
import Image from 'next/image'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faTiktok} from "@fortawesome/free-brands-svg-icons";

function Header({navbarOpen, setNavbarOpen}: { navbarOpen: any, setNavbarOpen: any }) {
    const scrollToLanding = () => document.getElementById('landing').scrollIntoView();
    const scrollToVision = () => document.getElementById('vision').scrollIntoView();
    const scrollToTeam = () => document.getElementById('team').scrollIntoView();
    const scrollToContact = () => document!.getElementById('contact')!.scrollIntoView();
    const genericHamburgerLine = `h-1 w-6 my-0.5 rounded-3xl bg-black transition ease transform duration-300`;

    return (
        <div className="flex justify-between absolute z-30 ">

            <div
                className="flex text-xl lg:text-3xl items-center justify-end fixed w-full  h-24">
                <div
                    className="absolute left-5 top-5 h-[100px] w-[100px] lg:h-[150px] lg:w-[150px] ml-[24px] hover:scale-110 transition-all duration-300 align-base">
                    <Image className="hover:cursor-pointer " onClick={() => {
                        setNavbarOpen(false);
                        scrollToLanding();
                    }} src="/logo_circle.png"
                           layout="fill"></Image>
                </div>
                <div className="hidden lg:flex space-x-14 pr-10 font-semibold ">

                    <div className="flex mt-8 space-x-8 justify-center">
                        <div
                            className="w-8 h-8 hover:cursor-pointer hover:-translate-y-2 transition-all duration-500 ease-in-out">
                            <a href="https://www.instagram.com/smilingfood_official/">
                                <FontAwesomeIcon icon={faInstagram}/>
                            </a>
                        </div>
                        <div
                            className="w-8 h-8 hover:cursor-pointer hover:-translate-y-2 transition-all duration-500 ease-in-out">
                            <a href="https://www.tiktok.com/@smiling.food">
                                <FontAwesomeIcon icon={faTiktok}/>
                            </a>
                        </div>
                        <p>|</p>
                        <div>
                            <a href="mailto:office@smilingfood.at">Contact us!</a>
                            <p></p>
                        </div>
                        {/*
                            <div className="w-9 h-9 hover:cursor-pointer hover:-translate-y-2 transition-all duration-500 ease-in-out">
                                <FontAwesomeIcon icon={faFacebook} />
                            </div>
                            <div className="w-8 h-8 hover:cursor-pointer hover:-translate-y-2 transition-all duration-500 ease-in-out">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </div> */}
                    </div>
                    {/*
                    <p className="hover:cursor-pointer" onClick={scrollToVision}>
                        Vision
                    </p>
                    <p className="hover:cursor-pointer" onClick={scrollToTeam}>
                        Team
                    </p>
                    <p className="hover:cursor-pointer" onClick={scrollToContact}>
                        Contact
                    </p>
                    */}
                </div>
                <div className="flex lg:hidden pr-10 z-30 relative text-white">
                    <button
                        className="flex flex-col h-12 w-12 border-black rounded justify-center items-center group"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <div
                            className={`${genericHamburgerLine} ${
                                navbarOpen
                                    ? "rotate-45 translate-y-2 opacity-100"
                                    : "opacity-100"
                            }`}
                        />
                        <div
                            className={`${genericHamburgerLine} ${
                                navbarOpen ? "opacity-0" : "opacity-100"
                            }`}
                        />
                        <div
                            className={`${genericHamburgerLine} ${
                                navbarOpen
                                    ? "-rotate-45 -translate-y-2 opacity-100"
                                    : "opacity-100"
                            }`}
                        />
                    </button>
                </div>
            </div>

        </div>
    )
        ;
}

export default Header;