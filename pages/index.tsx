import React, { useEffect, useState } from "react";
import Image from "next/image";

import { Playlist } from "@components/Playlist";
import { Playbar } from "@components/Playbar";
import { useAppContext } from "src/State/AppState";
const Home: React.FC = () => {
    const state = useAppContext();

    return (
        <div className="w-full z-0 relative flex flex-col items-center align-middle justify-center h-screen">
            <div className="absolute hidden sm:flex z-50 top-10 left-10">
                <a href="https://www.lezardsquibougent.com/">
                    <Image
                        width={130}
                        height={50}
                        src="/logo.webp"
                        quality={100}
                    />
                </a>
            </div>
            <div className="z-0 relative w-full h-full">
                <Image className="z-0" layout="fill" src="/bgalien.jpg" />
            </div>
            <div className="absolute text-sm items-center align-middle justify-between top-0 sm:top-40 flex flex-col text-gray-200 font-bold bg-black rounded-lg bg-opacity-90 p-5">
                {state.tracks[state.index].name}
                <span className="font-normal">( {state.count} écoutes )</span>
            </div>
            <div className="z-50 absolute text-white sm:w-96 bg-black bg-opacity-90 rounded-lg p-10">
                Un feuilleton proposé par la Compagnie Lézards qui Bougent,
                imaginé et écrit par les jeunes de l'Espace Socio-Culturel
                Municipal et de la Maison de la Vie Citoyenne Saint-Étienne de
                Bayonne, et interprété par les élèves de l'école de théâtre
                Scaramuccia de Saint-Jean de Luz.
            </div>
            <Playlist />
            <Playbar />
        </div>
    );
};

export default Home;
