import React, {PropsWithChildren} from 'react';
import Navbar from "../components/Navbar";
import {Container} from "@material-ui/core";
import Player from "../components/Player";
import Head from "next/head";

interface MainLayoutProps extends PropsWithChildren {
    title?: string;
    description?: string;
    keywords?: string;
}

const MainLayout: React.FC<MainLayoutProps>
    = ({
           children,
           title,
           description,
           keywords
       }) => {
    return (
        <>
            <Head>
                <title>{title || 'Music'}</title>
                <meta name="description"
                      content={`Here, everyone can leave their track and become famous.` + description}/>
                <meta name="robots" content="index, follow"/>
                <meta name="keywords" content={keywords || "Music, tracks, artists"}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <Navbar/>
            <Container style={{margin: '90px 0'}}>
                {children}
            </Container>
            <Player/>
        </>
    );
};

export default MainLayout;
