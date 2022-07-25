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
                                    <div className="flex justify-end w-auto p-3.5 pr-8 md:pr-3.5">
                                        <img className="border w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover"
                                             src="/team/lisa.png"
                                             alt=""/>
                                    </div>
                                    <div className="flex-1 p-3.5">
                                        <p className="mb-6 text-lg text-gray-700 italic">"Das kann man doch besser
                                            machen" - und aus man wurde ich. Selbst Dinge in die Hand zu nehmen, anstatt
                                            sich zu beschweren zeichnet mich aus. Ich liebe es innovative Lösungen für
                                            Probleme zu finden und dafür zu sorgen, dass sie funktionieren. Bei Smiling
                                            Food bin ich the woman to go wenn es um Strategie, Organisation, Marketing
                                            und Product planning geht.</p>
                                        <h3 className="font-heading font-bold text-lg text-[#628474]">Lisa, <span
                                            className="

                                            font-light">Marketing & Sales</span></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 p-7">
                                <div className="flex flex-col lg:flex-row -m-3.5">
                                    <div className="flex justify-end w-auto p-3.5 pr-8 md:pr-3.5">
                                        <img className="border w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover"
                                             src="/team/max.png"
                                             alt=""/>
                                    </div>
                                    <div className="flex-1 p-3.5">
                                        <p className="mb-6 text-lg text-gray-700 italic">Ein cleaner Schreibtisch,
                                            Handy, Laptop, Bildschirm mehr nicht. Ich mag es simple. Wenn ich will
                                            möchte ich die ganze Nacht arbeiten, 9 to 5 ist nichts für mich. Tagsüber
                                            bin ich der Ansprechpartner für Operations und Logistik. Doch sobald es
                                            dunkel wird dreht sich bei mir alles um unser Business Developement.</p>
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
                                        <p className="mb-6 text-lg text-gray-700 italic">Dinge zu erschaffen war immer
                                            schon meine größte Leidenschaft. Technologie hat es mir ermöglicht meine
                                            Ideen mit ein paar Zeilen Code in die Wirklichkeit zu zaubern und meine
                                            kreative und analytische Persönlichkeit zu bündeln. Bei Smiling-Food bin ich
                                            für die Web-Entwicklung und Technologiebezogene Challenges
                                            verantwortlich.</p>
                                        <h3 className="font-heading font-bold text-lg text-[#628474]">Kyrill, <span
                                            className="font-light">Web Development</span></h3>
                                    </div>
                                    <div className="flex justify-end w-auto p-3.5 pr-8 md:pr-3.5 lg:order-1">
                                        <img className="border w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover"
                                             src="/team/kyrillus.png"
                                             alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 p-7">
                                <div className="flex md:justify-end flex-col lg:flex-row md:flex-wrap-reverse -m-3.5">
                                    <div className="flex-1 p-3.5 order-1">
                                        <p className="mb-6 text-lg text-gray-700 italic">"Schon seit meiner Kindheit
                                            liebe ich es Wissen mit Kreativität zu kombinieren. Arbeiten mit Hobbys. Im
                                            spielerischen Umgang Neues auszuprobieren und zu entwickeln bewegt meine
                                            Welt voran.</p>
                                        <h3 className="font-heading font-bold text-lg text-[#628474]">Sami, <span
                                            className="font-light">Food-Tech</span></h3>
                                    </div>
                                    <div className="flex justify-end w-auto p-3.5 pr-8 md:pr-3.5 lg:order-1">
                                        <img className="border w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover"
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