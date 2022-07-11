import React from 'react';

function Team() {
    return (
        <div id="team">
            <section className="h-screen grid place-items-center w-full min-h-screen min-h-[50em] bg-white">
                <div className="flex-col text-8xl pl-[10vw] pr-[10vw] pt-12 pb-12">
                    <h1 className="font-extrabold grid place-self-start">Team</h1>
                    <div className=" mx-auto px-4 mt-32">

                        <div className="flex flex-wrap -m-7 mb-12">
                          <div className="w-full md:w-1/2 p-7">
                            <div className="flex flex-wrap -m-3.5">
                              <div className="w-auto p-3.5">
                                <img className="w-32 h-32 rounded-full object-cover" src="/team/lisa.png" alt=""/>
                              </div>
                              <div className="flex-1 p-3.5">
                                <p className="mb-6 text-lg text-gray-700 italic">"Bereits in der Schule habe ich mich für die Entwicklung von neuen Produkten interessiert und ... Bei Smiling Food bin ich für die Produktentwicklung sowie das Marketing zuständig ..."</p>
                                <h3 className="font-heading font-bold text-lg text-[#628474]">Lisa, <span className="font-light">Marketing & Sales</span></h3>
                              </div>
                            </div>
                          </div>
                          <div className="w-full md:w-1/2 p-7">
                                                      <div className="flex flex-wrap -m-3.5">
                                                        <div className="w-auto p-3.5">
                                                          <img className="w-32 h-32 rounded-full object-cover" src="/team/lisa.png" alt=""/>
                                                        </div>
                                                        <div className="flex-1 p-3.5">
                                                          <p className="mb-6 text-lg text-gray-700 italic">"Bereits in der Schule habe ich mich für die Entwicklung von neuen Produkten interessiert und ... Bei Smiling Food bin ich für die Produktentwicklung sowie das Marketing zuständig ..."</p>
                                                          <h3 className="font-heading font-bold text-lg text-[#628474]">Lisa, <span className="font-light">Marketing & Sales</span></h3>
                                                        </div>
                                                      </div>
                                                    </div>
                        </div>
                        <div className="flex flex-wrap -m-7">
                          <div className="w-full md:w-1/2 p-7">
                            <div className="flex flex-wrap -m-3.5">
                              <div className="flex-1 p-3.5 order-1">
                                <p className="mb-6 text-lg text-gray-700">Lorem ipsum dolor sit amet, consec tetur adipis cing elit. Eleifend id vulpu tate amet nunc. Elit sagittis sollici tudin cursus aliquam quis dui. Ut curabitur morbi nunc sit leo tellus neque dolor. Amet sem egestas.</p>
                                <h3 className="font-heading font-bold text-lg text-[#628474]">Kyrillus, <span className="font-light">Web Development</span></h3>

                              </div>
                              <div className="w-auto p-3.5 md:order-1">
                                <img className="w-32 h-32 rounded-full object-cover" src="/team/kyrillus.png" alt=""/>
                              </div>
                            </div>
                          </div>
                          <div className="w-full md:w-1/2 p-7">
                            <div className="flex flex-wrap -m-3.5">
                              <div className="flex-1 p-3.5 order-1">
                                <p className="mb-6 text-lg text-gray-700">Lorem ipsum dolor sit amet, consec tetur adipis cing elit. Eleifend id vulpu tate amet nunc. Elit sagittis sollici tudin cursus aliquam quis dui. Ut curabitur morbi nunc sit leo tellus neque dolor. Amet sem egestas.</p>
                                <h3 className="font-heading font-bold text-lg text-[#628474]">Sami, <span className="font-light">Product Development</span></h3>
                              </div>
                              <div className="w-auto p-3.5 md:order-1">
                                <img className="w-32 h-32 rounded-full object-cover" src="/team/sami.png" alt=""/>
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