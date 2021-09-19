import axios from "axios";
import { useQuery } from "react-query";
import { useAppContext } from "src/State/AppState";

export function Playlist(): JSX.Element {
    const state = useAppContext();

    console.log(state);

    return (
        <div className="bg-black absolute top-10 hidden lg:top-1/3 rounded-lg left-20 lg:flex flex-col items-center align-middle justify-center h-96 text-gray-400 z-40">
            <ul className="py-5">
                {state.tracks.map((track) => (
                    <li className="my-2 hover:bg-gray-900 w-full px-5">
                        <button onClick={() => state.setIndex(track.id - 1)}>
                            {track.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
