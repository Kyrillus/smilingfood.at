import React from 'react';
import Head from 'next/head'
import Header from "../components/header";
import Landing from "../components/landing";

function Index() {
    return (
        <div>
            <Head>
                <title>Smiling Food</title>
                <meta property="og:title" content="Smiling Food" key="title" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=Sora:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet"/>
            </Head>

            <Landing/>


        </div>
    );
}

export default Index;