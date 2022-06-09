import React from 'react';

function Contact() {
    return (
        <div id="contact">
            <section className="h-screen w-full min-h-screen min-h-[50em] bg-[#628474]">
                <div className="flex-col pl-[10vw] pt-20">
                    <div>
                        <h1 className="text-8xl text-[#f2f1ec] font-extrabold">Let's talk! </h1>
                        <h1 className="text-5xl text-[#f2f1ec] pt-2">Wir freuen uns über jede Kontaktaufnahme :)</h1>
                    </div>

                    <div className="flex-col h-[60vh] w-[40vw] min-w-fit bg-white mt-24 p-2  pb-6  space-y-2 rounded-2xl">
                        <div className="flex-col bg-gray-100 rounded-2xl p-2 pl-4 h-1/5">
                            <h1 className="text-gray-700 hover:cursor-default">Name:</h1>

                        </div>

                        <div className="flex-col bg-gray-100 rounded-2xl p-2 pl-4 h-1/5">
                            <h1>E-Mail:</h1>

                        </div>
                        <div className="flex-col bg-gray-100 rounded-2xl p-2 pl-4 h-3/5">
                            <h1>Deine Nachricht:</h1>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;