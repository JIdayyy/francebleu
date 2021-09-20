import React, { Dispatch, ReactElement, SetStateAction } from "react";
import { motion } from "framer-motion";
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
            className="w-full fixed top0 left-0 h-screen bg-black z-50"
        >
            <motion.ul className="flex flex-col left-0 w-full h-full items-center align-middle justify-center px-5">
                <motion.div
                    animate={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ delay: 0.5 }}
                >
                    <span className="text-white font-extrabold underline w-full text-left">
                        EPISODES :
                    </span>
                    {state.tracks.map((track) => (
                        <motion.button
                            onClick={handleClick}
                            value={track.id}
                            className="text-white w-full text-sm sm:text-base text-left my-2 md:text-xl lg:text-4xl font-bold"
                        >
                            {track.name}
                        </motion.button>
                    ))}
                </motion.div>
            </motion.ul>
        </motion.div>
    );
}
