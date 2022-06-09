import React from 'react';
import Head from 'next/head';
import Landing from "../components/landing";
import Voting from "../components/voting";
function Index() {
    return (<div>
            <Head>
                <title>Smiling Food</title>
                <meta property="og:title" content="Smiling Food" key="title"/>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
                <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
            </Head>

            <Landing />
            <Voting />


        </div>);
}
export default Index;
