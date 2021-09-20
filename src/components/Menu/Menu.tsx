import React, { Dispatch, ReactElement, SetStateAction } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useAppContext } from "src/State/AppState";
interface Props {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Menu({ setIsOpen }: Props): ReactElement {
    const state = useAppContext();
    const variants = {
        open: { width: "100%" },
        close: { width: "0%" },
        exit: { x: -999 },
    };
    const handleClick = (e: any) => {
        state.setIndex(e.target.value - 1);
        setIsOpen(false);
    };

    return (
        <motion.div
            variants={variants}
            initial="close"
            animate="open"
            exit="exit"
            className="w-full fixed top0  left-0 h-screen bg-gray-100 z-50"
        >
            <motion.ul className="flex  flex-col relative left-0 w-full h-full items-center align-middle justify-center px-5">
                <motion.div
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <span className="text-gray-900 font-extrabold  text-xl w-full text-left">
                        EPISODES 👽
                    </span>
                    {state.tracks.map((track) => (
                        <motion.button
                            onClick={handleClick}
                            key={track.id}
                            value={track.id}
                            className={`text-gray-900 w-full rounded-lg px-2 py-1 ${
                                state.index + 1 === track.id && "bg-gray-400"
                            } text-sm sm:text-base text-left my-2 md:text-xl lg:text-4xl font-bold`}
                        >
                            {track.name}{" "}
                            {state.index + 1 === track.id && (
                                <img
                                    src="/SOUCOUPE.png"
                                    className="w-10 mx-2"
                                />
                            )}
                        </motion.button>
                    ))}
                </motion.div>
                <div className="absolute bottom-0 left-2">
                    <a href="https://www.lezardsquibougent.com/">
                        <Image width={130} height={50} src="/logo.webp" />
                    </a>
                </div>
            </motion.ul>
        </motion.div>
    );
}
