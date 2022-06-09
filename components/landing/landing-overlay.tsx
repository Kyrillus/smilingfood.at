import React, {useRef, useState} from 'react';
import axios from "axios";

function LandingOverlay() {
    const inputRef = useRef(null);
    const [state, setState] = useState("IDLE");

    const subscribeUser = async (e: any) => {
        e.preventDefault();

        setState("LOADING");

        const res = await fetch("/api/subscribeUser", {
            body: JSON.stringify({
                email: inputRef && inputRef.current ? inputRef.current['value'] : "",
            }),

            headers: {
                "Content-Type": "application/json",
            },

            method: "POST",
        });
        if (res.status === 201) {
            setState("SUCCESS")
        } else {
            setState("ERROR")
        }
    };


    return (
        <div>
            <div
                className="absolute font-bold top-[13vh] left-[10vw]  pt-36 z-10">
                <div className="text-6xl md:text-[6.8vw] 2xl:text-9xl leading-none">
                    <h1 className="text-white">Dein Happy End</h1>
                    <h1 className="text-red-500">Ohne Zucker!</h1>
                </div>


                <div className="flex-col items-stretch mt-12 md:mt-36">
                    <div className="text-xl md:text-[1.9vw] 2xl:text-4xl leading-none">
                        <h1 className="text-white">Lass dich als erstes von unseren </h1>
                        <h1 className="text-red-500">Desserts verführen.</h1>
                    </div>
                    <div className="mt-2">
                        <form onSubmit={subscribeUser}>
                            <input
                                className="bg-gray-100 rounded-lg rounded-r-none text-sm md:text-base  text-gray-800 p-5 w-[58vw] md:w-[37vw] border-2 border-transparent focus:outline-none focus:border-gray-500"
                                ref={inputRef}
                                required
                                autoCapitalize="off"
                                autoCorrect="off"
                                type="email" placeholder="Deine E-Mail sieht hier gut aus"/>
                            <button type="submit" value="" name="sign-up"
                                    disabled={state === "LOADING"}
                                    className={`text-sm md:text-base w-24 whitespace-nowrap md:w-32 rounded-l-none hover:bg-red-400  bg-red-500 rounded-lg  font-medium  text-white p-5 border-2 border-transparent focus:outline-none focus:ring-offset-2 focus:ring-indigo-700 ${
                                        state === "LOADING" ? "cursor-not-allowed" : "cursor-pointer"
                                    }`}>Sign-Up
                                <svg role="status"
                                     className={`inline w-4 h-4 ml-2 align-sub text-white animate-spin dark:text-gray-700 fill-green-500 dark:fill-gray-300 ${
                                         state === "LOADING" ? "block" : "hidden"
                                     }`}
                                     viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="currentColor"/>
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentFill"/>
                                </svg>
                            </button>
                        </form>
                    </div>
                    <div className="mt-2 ml-1">
                        {state === "ERROR" && (
                            <p className="text-red-600">Something went wrong ...</p>
                        )}
                        {state === "SUCCESS" && (
                            <p className="text-green-600">Success!</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingOverlay;