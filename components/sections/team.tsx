import React from 'react';

function Team() {
    return (
        <div id="team">
            <section className="grid place-items-center w-full min-h-screen bg-white">
                <div className="flex-col text-8xl pl-[10vw] pr-[10vw] pt-12 pb-12">
                    <h1 className="font-extrabold">Team</h1>
                    <div className=" mx-auto px-4 mt-32">

                        <div className="flex flex-wrap -m-7 mb-12">
                            <div className="w-full md:w-1/2 p-7">
                                <div className="flex flex-col lg:flex-row -m-3.5">
                                    <div className="w-auto p-3.5">
                                        <img className="border w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                                             src="/team/lisa.png"
                                             alt=""/>
                                    </div>
                                    <div className="flex-1 p-3.5">
                                        <p className="mb-6 text-lg text-gray-700 italic">"Bereits in der Schule habe ich
                                            mich für die Entwicklung von neuen Produkten interessiert und ... Bei
                                            Smiling Food bin ich für die Produktentwicklung sowie das Marketing
                                            zuständig ..."</p>
                                        <h3 className="font-heading font-bold text-lg text-[#628474]">Lisa, <span
                                            className="

                                            font-light">Marketing & Sales</span></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 p-7">
                                <div className="flex flex-col lg:flex-row -m-3.5">
                                    <div className="w-auto p-3.5">
                                        <img className="border w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                                             src="/team/max.png"
                                             alt=""/>
                                    </div>
                                    <div className="flex-1 p-3.5">
                                        <p className="mb-6 text-lg text-gray-700 italic">"Bereits in der Schule habe ich
                                            mich für die Entwicklung von neuen Produkten interessiert und ... Bei
                                            Smiling Food bin ich für die Produktentwicklung sowie das Marketing
                                            zuständig ..."</p>
                                        <h3 className="font-heading font-bold text-lg text-[#628474]">Max, <span
                                            className="font-light">Operations & Business Development</span></h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap -m-7">
                            <div className="w-full md:w-1/2 p-7">
                                <div className="flex md:justify-end flex-col lg:flex-row md:flex-wrap-reverse -m-3.5">
                                    <div className="flex-1 p-3.5 order-1">
                                        <p className="mb-6 text-lg text-gray-700 italic">"Bereits sehr früh habe ich
                                            begonnen zu programmieren und mich für die Informatik zu interessieren.
                                            Momentan studiere ich Software-Engineering an der TU-Wien und arbeite
                                            Teilzeit als Softwareentwickler. Bei Smiling Food bin ich für die Webseite
                                            und sonstige technische Challenges zuständig."</p>
                                        <h3 className="font-heading font-bold text-lg text-[#628474]">Kyrill, <span
                                            className="font-light">Web Development</span></h3>
                                    </div>
                                    <div className="w-auto p-3.5 lg:order-1">
                                        <img className="border w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                                             src="/team/kyrillus.png"
                                             alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 p-7">
                                <div className="flex md:justify-end flex-col lg:flex-row md:flex-wrap-reverse -m-3.5">
                                    <div className="flex-1 p-3.5 order-1">
                                        <p className="mb-6 text-lg text-gray-700 italic">"Bereits in der Schule habe ich
                                            mich für die Entwicklung von neuen Produkten interessiert und ... Bei
                                            Smiling Food bin ich für die Produktentwicklung sowie das Marketing
                                            zuständig ..."</p>
                                        <h3 className="font-heading font-bold text-lg text-[#628474]">Sami, <span
                                            className="font-light">Food-Tech</span></h3>
                                    </div>
                                    <div className="w-auto p-3.5 lg:order-1">
                                        <img className="border w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
                                             src="/team/sami.png"
                                             alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Team;