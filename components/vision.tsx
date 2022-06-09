import React from 'react';
import Image from "next/image";

function Vision() {
    return (
        <div id="vision">
            <section className="h-screen min-h-[50em] w-full min-h-screen bg-[#f2f1ec]">
                <div className="flex-col pl-[10vw] pt-20 space-y-2 md:space-y-12 w-full md:w-2/3">
                    <h1 className="text-8xl h-[20vh] text-[#3f4739] font-extrabold">
                        Unsere Vision
                    </h1>

                    <div className="flex flex-row h-1/2 w-full">
                        <h3 className="text-lg md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-4xl h-[20vh]">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                            ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                            dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor

                        </h3>

                    </div>

                </div>

            </section>
        </div>
    );
}

export default Vision;