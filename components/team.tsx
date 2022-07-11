import React from 'react';

function Team() {
    return (
        <div id="team">
            <section className="h-screen grid place-items-center w-full min-h-screen min-h-[50em] bg-white">
                <div className="flex-col text-8xl pl-[10vw] pr-[10vw] pt-12 pb-12">
                    <h1 class="font-extrabold">Team</h1>
                    <div class="container mx-auto px-4 mt-32">

                        <div class="flex flex-wrap -m-7 mb-12">
                          <div class="w-full md:w-1/2 p-7">
                            <div class="flex flex-wrap -m-3.5">
                              <div class="w-auto p-3.5">
                                <img class="w-32 h-32 rounded-full object-cover" src="/team/lisa_reiss.png" alt=""/>
                              </div>
                              <div class="flex-1 p-3.5">
                                <p class="mb-6 text-lg text-gray-700 italic">"Bereits in der Schule habe ich mich für die Entwicklung von neuen Produkten interessiert und ... Bei Smiling Food bin ich für die Produktentwicklung sowie das Marketing zuständig ..."</p>
                                <h3 class="font-heading font-bold text-lg text-[#628474]">Lisa Reiss, <span class="font-light">Marketing & Sales</span></h3>
                              </div>
                            </div>
                          </div>
                          <div class="w-full md:w-1/2 p-7">
                            <div class="flex flex-wrap -m-3.5">
                              <div class="p-3.5">
                                <img class="w-32 h-32 rounded-full object-cover" src="/team/maximilian_geyer.png" alt=""/>
                              </div>
                              <div class="flex-1 p-3.5">
                                <p class="mb-6 text-lg text-gray-700">Lorem ipsum dolor sit amet, consec tetur adipis cing elit. Eleifend id vulpu tate amet nunc. Elit sagittis sollici tudin cursus aliquam quis dui. Ut curabitur morbi nunc sit leo tellus neque dolor. Amet sem egestas.</p>
                                <h3 class="font-heading font-bold text-lg text-[#628474]">Maximilian Geyer, <span class="font-light">Operations & Business Development</span></h3>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="flex flex-wrap -m-7">
                          <div class="w-full md:w-1/2 p-7">
                            <div class="flex flex-wrap -m-3.5">
                              <div class="flex-1 p-3.5 order-1">
                                <p class="mb-6 text-lg text-gray-700">Lorem ipsum dolor sit amet, consec tetur adipis cing elit. Eleifend id vulpu tate amet nunc. Elit sagittis sollici tudin cursus aliquam quis dui. Ut curabitur morbi nunc sit leo tellus neque dolor. Amet sem egestas.</p>
                                <h3 class="font-heading font-bold text-lg text-[#628474]">Kyrillus Mehanni, <span class="font-light">Web Development</span></h3>

                              </div>
                              <div class="w-auto p-3.5 md:order-1">
                                <img class="w-32 h-32 rounded-full object-cover" src="/team/kyrillus_mehanni.png" alt=""/>
                              </div>
                            </div>
                          </div>
                          <div class="w-full md:w-1/2 p-7">
                            <div class="flex flex-wrap -m-3.5">
                              <div class="flex-1 p-3.5 order-1">
                                <p class="mb-6 text-lg text-gray-700">Lorem ipsum dolor sit amet, consec tetur adipis cing elit. Eleifend id vulpu tate amet nunc. Elit sagittis sollici tudin cursus aliquam quis dui. Ut curabitur morbi nunc sit leo tellus neque dolor. Amet sem egestas.</p>
                                <h3 class="font-heading font-bold text-lg text-[#628474]">Sami Elyas, <span class="font-light">Product Development</span></h3>
                              </div>
                              <div class="w-auto p-3.5 md:order-1">
                                <img class="w-32 h-32 rounded-full object-cover" src="/team/sami_elyas.png" alt=""/>
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