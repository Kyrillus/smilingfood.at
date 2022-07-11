import React from 'react';
import Image from "next/image";

function Vision() {
    return (
        <div id="vision">
            <section className="h-screen grid place-items-center min-h-[50em] w-full min-h-screen bg-[#f2f1ec] ">
                <div className="flex-col pl-[10vw] pr-[10vw] space-y-2 md:space-y-12 w-full">
                    <h1 className="text-8xl h-[20vh] text-[#3f4739] font-extrabold">
                        Unsere Vision
                    </h1>

                    <div className="flex flex-row h-1/2 w-full text-2xl xl:text-3xl 2xl:text-4xl pt-12 md:pt-4">
                        <h3 className="leading-relaxed h-[20vh]">
                            Wir möchten den Menschen helfen, sich gesünder zu ernähren, indem wir eine Marke aufbauen, die sich auf zuckerfreie Produkte konzentriert, bei denen unsere Kunden darauf vertrauen können, dass nur hochwertige Zutaten und gesunde Zuckerersatzstoffe verwendet werden.

                        </h3>

                    </div>

                </div>

            </section>
        </div>
    );
}

export default Vision;