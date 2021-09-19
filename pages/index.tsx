import React from "react";
import Image from "next/image";

import { Playlist } from "@components/Playlist";
import { Playbar } from "@components/Playbar";
import { useAppContext } from "src/State/AppState";
const Home: React.FC = () => {
    const state = useAppContext();
    return (
        <div className="w-full z-0 relative flex flex-col items-center align-middle justify-center h-screen">
            <div className="z-0 relative w-full h-full">
                <Image className="z-0" layout="fill" src="/bgalien.jpg" />
            </div>
            <div className="absolute top-10 flex flex-col text-white font-bold bg-black rounded-lg bg-opacity-90 p-5">
                {state.tracks[state.index].name}
                <span className="font-normal">
                    ( Cet épisode à été écouté{" "}
                    {state.trackCount[state.index].count} fois )
                </span>
            </div>
            <div className="z-50 absolute text-white w-96 bg-black bg-opacity-90 rounded-lg p-10">
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
