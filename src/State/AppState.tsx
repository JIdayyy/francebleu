import {
    createContext,
    Dispatch,
    SetStateAction,
    useContext,
    useState,
} from "react";
import tracks from "../datas";
interface Track {
    id: number;
    name: string;
    description: string;
    url: string;
}

export interface AppState {
    setIsLoading: Dispatch<SetStateAction<boolean>> | null;
    isLoading: boolean;
    tracks: Track[];
    onListen: string;
    setOnListen: Dispatch<SetStateAction<string>>;
    index: number;
    setIndex: Dispatch<SetStateAction<number>>;
    setIsPlaying: Dispatch<SetStateAction<boolean>>;
    isPlaying: boolean;
    duration: number;
    currentTime: number;
    setDuration: Dispatch<SetStateAction<number>>;
    setVolume: Dispatch<SetStateAction<number>>;
    setCurrentTime: Dispatch<SetStateAction<number>>;
    volume: number;
}

const AppContextDefault: AppState = {
    isPlaying: false,
    isLoading: false,
    tracks: tracks,
    volume: 0.5,
    setIsLoading: null,
    index: 0,
    onListen: tracks[0].url,
    setOnListen: null as unknown as Dispatch<SetStateAction<string>>,
    setVolume: null as unknown as Dispatch<SetStateAction<number>>,
    setIndex: null as unknown as Dispatch<SetStateAction<number>>,
    setIsPlaying: null as unknown as Dispatch<SetStateAction<boolean>>,
    setDuration: null as unknown as Dispatch<SetStateAction<number>>,
    setCurrentTime: null as unknown as Dispatch<SetStateAction<number>>,
    duration: 0,
    currentTime: 0,
};

const AppState = createContext<AppState>(AppContextDefault);

export function useAppContext(): AppState {
    return useContext(AppState);
}
export function AppContextWrapper({ children }: Props): JSX.Element {
    const [isLoading, setIsLoading] = useState(false);
    const [index, setIndex] = useState(0);
    const [onListen, setOnListen] = useState(tracks[index].url);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [volume, setVolume] = useState(0.5);
    return (
        <AppState.Provider
            value={{
                tracks,
                isPlaying,
                setIsPlaying,
                isLoading,
                setIsLoading,
                setOnListen,
                volume,
                setVolume,
                onListen,
                index,
                setIndex,
                setDuration,
                setCurrentTime,
                duration,
                currentTime,
            }}
        >
            {children}
        </AppState.Provider>
    );
}
