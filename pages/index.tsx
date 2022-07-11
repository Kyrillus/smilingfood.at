import React, {useEffect, useState} from 'react';
import Head from 'next/head'
import Header from "../components/menu/header";
import Landing from "../components/landing/landing";
import Vision from "../components/vision";
import Team from "../components/team";
import Contact from "../components/contact";
import MenuOverlay from "../components/menu/menuOverlay";

function Index() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    useEffect(() => {
        const onResize = () => {
            if (window.innerWidth >= 1024)
                setNavbarOpen(false)
        }

        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);

    useEffect( () => {
        if (navbarOpen)
            document.body.style.overflow = "hidden"
        else
            document.body.style.overflow = "auto"
    }, [navbarOpen])


    return (
        <div>
            <Head>
                <title>Smiling Food</title>
                <meta property="og:title" content="Smiling Food - Dein Happy End Ohne Zucker!" key="title"/>
                <meta name="description" content="Genieße deine Lieblingsdesserts wie Brownies, Pancakes oder Marmorkuchen jetzt ganz ohne Zucker!  100% Geschmack. 100% Vegan. 0% Zucker."/>
                <link rel="shortcut icon" href="/logo.png"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
                <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100;200;300;400;500;600;700;800;900&family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
            </Head>

            <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
            <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
            <Landing/>
            <Vision/>
            <Team/>
            {/*




            <Contact/> */}


        </div>
);
}

export default Index;