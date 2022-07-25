import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram} from "@fortawesome/free-brands-svg-icons"
import {faTiktok} from "@fortawesome/free-brands-svg-icons"
import {faFacebook} from "@fortawesome/free-brands-svg-icons"
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

function MenuOverlay({navbarOpen, setNavbarOpen}) {
    const scrollToVision = () => document.getElementById('vision').scrollIntoView();
    const scrollToTeam = () => document.getElementById('team').scrollIntoView();
    const scrollToContact = () => document.getElementById('contact').scrollIntoView();

    return (
        <div>
            <nav
                className={`fixed flex top-0 left-0 w-full px-10 z-20 h-screen pt-44 overflow-y-scroll text-6xl bg-[#628474] transform transition-all duration-500 ${
                    navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
                }`}>
                <ul className="w-full flex flex-col gap-8  text-center">

                    <li className="flex hover:cursor-pointer w-full leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-100 transition-all duration-200 ease-in-out">
                        <a
                            className="h-full w-full py-2  text-black"
                            onClick={() => {
                                setNavbarOpen(false);
                                scrollToVision();
                            }}
                        >
                            Vision
                        </a>
                    </li>
                    <li className="flex hover:cursor-pointer w-full leading-8 list-none focus:outline-none group py-2 tracking-normal opacity-100 transition-all duration-200 ease-in-out">
                        <a
                            className="h-full w-full py-2 text-black"
                            onClick={() => {
                                setNavbarOpen(false);
                                scrollToTeam();
                            }}
                        >
                            Team
                        </a>
                    </li>

                    {/* SOCIAL MEDIA */}
                    <div className="flex-col justify-center">
                        <div className="flex mt-12 border-t opacity-50 border-black w-2/3 m-auto">
                        </div>
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
                            <div className="w-9 h-9 hover:cursor-pointer hover:-translate-y-2 transition-all duration-500 ease-in-out">
                                <a href="mailto:office@smilingfood.at">
                                    <FontAwesomeIcon icon={faEnvelope}/>
                                </a>
                            </div>
                            {/*
                            <div className="w-9 h-9 hover:cursor-pointer hover:-translate-y-2 transition-all duration-500 ease-in-out">
                                <FontAwesomeIcon icon={faFacebook} />
                            </div>
                            <div className="w-8 h-8 hover:cursor-pointer hover:-translate-y-2 transition-all duration-500 ease-in-out">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </div> */}
                        </div>

                    </div>
                    <div className="flex justify-center mt-20 text-sm">
                        <p>© 2022, SMILING FOOD. All rights reserved</p>
                    </div>
                </ul>

            </nav>

        </div>

    );
}

export default MenuOverlay;