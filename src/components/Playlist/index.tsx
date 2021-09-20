import { useAppContext } from "src/State/AppState";

export function Playlist(): JSX.Element {
    const state = useAppContext();

    return (
        <div className="bg-black absolute hidden h-full top-0 left-0 lg:flex flex-col items-center align-middle justify-center text-base font-semibold text-gray-400 z-40">
            <ul className="py-5">
                {state.tracks.map((track) => (
                    <li
                        className={`my-2 ${
                            state.index + 1 === track.id && "bg-gray-800"
                        } w-full px-5`}
                    >
                        <button
                            className="font-bold"
                            onClick={() => state.setIndex(track.id - 1)}
                        >
                            {track.name} {state.index + 1 === track.id && "🎵"}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
