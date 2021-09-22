import Image from "next/image";
import { Playlist } from "@components/Playlist";
import { Playbar } from "@components/Playbar";
import { useAppContext } from "src/State/AppState";
import { useState } from "react";
import { TrackC } from "../src/State/AppState";
import { AnimatePresence, motion } from "framer-motion";
import Menu from "@components/Menu/Menu";
const Home: React.FC = () => {
    const [isMenu, setIsMenu] = useState<boolean>(false);
    const state = useAppContext();

    const count = state.trackCount!.reduce((prev, curr) => {
        return prev + curr.count;
    }, 0);

    return (
        <div className="w-full z-0 relative flex flex-col items-center align-middle justify-center h-screen  md:pl-80 bg-black">
            <AnimatePresence>
                {isMenu && <Menu setIsOpen={setIsMenu} />}
            </AnimatePresence>
            <button
                className="absolute top-5 right-5 z-50 text-white md:hidden"
                onClick={() => setIsMenu((c) => !c)}
            >
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="34px"
                    height="27px"
                    viewBox="0 0 34 27"
                >
                    <rect
                        fill={isMenu ? "#00000" : "#FFFFFF"}
                        width="34"
                        height="4"
                    />
                    <rect
                        y="11"
                        fill={isMenu ? "#00000" : "#FFFFFF"}
                        width="34"
                        height="4"
                    />
                    <rect
                        y="23"
                        fill={isMenu ? "#00000" : "#FFFFFF"}
                        width="34"
                        height="4"
                    />
                </svg>
            </button>

            <div className="z-0 relative w-full h-full">
                <div className="absolute hidden sm:flex z-40 top-10 right-10">
                    <a href="https://www.lezardsquibougent.com/">
                        <Image
                            width={130}
                            height={50}
                            src="/logo.webp"
                            quality={100}
                        />
                    </a>
                </div>
                <Image className="z-0" layout="fill" src="/bgalien.jpg" />
            </div>
            <div className="absolute text-sm items-center align-middle justify-between top-10 w-auto sm:top-20 sm:w-96 flex flex-col text-gray-200 font-bold bg-black rounded-lg bg-opacity-90 p-5">
                {state.tracks[state.index].name}
                <span className="font-normal text-xs">
                    ( {state.count} écoutes sur cet épisode)
                </span>
                <span className="font-normal text-xs">
                    ( {count} écoutes au Total)
                </span>
            </div>
            <motion.div className="z-40 absolute text-white sm:w-96 bg-black bg-opacity-90 md:rounded-lg p-10">
                Un feuilleton proposé par la Compagnie Lézards qui Bougent,
                imaginé et écrit par les jeunes de l'Espace Socio-Culturel
                Municipal et de la Maison de la Vie Citoyenne Saint-Étienne de
                Bayonne, et interprété par les élèves de l'école de théâtre
                Scaramuccia de Saint-Jean de Luz .
            </motion.div>
            <Playlist />
            <Playbar />
        </div>
    );
};

export default Home;
