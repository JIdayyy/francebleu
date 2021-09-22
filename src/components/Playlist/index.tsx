import { useAppContext } from "src/State/AppState";

export function Playlist(): JSX.Element {
    const state = useAppContext();

    return (
        <div className="bg-black absolute hidden h-full top-0 left-0 lg:flex flex-col items-center align-middle justify-center text-base font-semibold text-gray-400 z-40">
            <ul className="py-5">
                {state.tracks.map((track) => (
                    <li
                        key={track.id}
                        className={`my-2 ${
                            state.index + 1 === track.id && "bg-gray-800"
                        } w-full px-5  `}
                    >
                        <button
<<<<<<< HEAD
                            className="font-bold flex items-center align-middle justify-center"
=======
                            className="font-bold flex items-center align-middle justify-center w-full"
>>>>>>> 810c0380a7d2295d403a502bcf514df1026c4c12
                            onClick={() => state.setIndex(track.id - 1)}
                        >
                            {track.name}{" "}
                            {state.index + 1 === track.id && (
<<<<<<< HEAD
                                <img src="/SOUCOUPE.png" className="w-10" />
=======
                                <img
                                    src="/SOUCOUPE.png"
                                    className="w-10 mx-2"
                                />
>>>>>>> 810c0380a7d2295d403a502bcf514df1026c4c12
                            )}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
