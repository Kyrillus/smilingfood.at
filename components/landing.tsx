import React from 'react';
import Image from "next/image";
import Header from "./header";

function Landing() {
    return (
        <section className="h-screen w-full min-h-screen">
            <Header/>
            <img className="object-cover w-screen  max-h-[900px] bottom-0 absolute"  alt="backg" src="/header_image.webp">
            </img>
        </section>
    );
}

export default Landing;