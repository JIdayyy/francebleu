import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { useAppContext } from "src/State/AppState";
import Convert from "../../hooks/useConvert.js";
import axios from "axios";
import { useQuery } from "react-query";
export function Playbar(): JSX.Element {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const state = useAppContext();
    console.log(state);
    const { data, isLoading, error, refetch } = useQuery(
        "getCount",
        () =>
            axios
                .get(process.env.NEXT_PUBLIC_API_URL as string)
                .then((r) => r.data),
        {
            onSuccess: (data) => {
                state.setTrackCount(data);
                state.setCount(data[state.index].count);
            },
        },
    );

    const controls = {
        play: () => state.setIsPlaying(true),
        pause: () => state.setIsPlaying(false),
        forward: () => {
            if (state.index === state.tracks.length - 1) {
                state.setIndex(0);
                return state.setOnListen(state.tracks[state.index].url);
            }
            state.setIndex((c) => c + 1);
            state.setOnListen(state.tracks[state.index].url);
        },
        backward: () => {
            if (state.index === 0) {
                state.setIndex(state.tracks.length - 1);
                return state.setOnListen(state.tracks[state.index].url);
            }
            state.setIndex((c) => c - 1);
            state.setOnListen(state.tracks[state.index].url);
        },
        volume: (e: React.ChangeEvent<HTMLInputElement>) => {
            if (parseInt(e.target.value) < 3) {
                state.setVolume(0);
                return (audioRef.current!.volume = state.volume);
            }
            state.setVolume(parseInt(e.target.value) / 100);
            audioRef.current!.volume = state.volume;
        },
    };

    useEffect(() => {
        audioRef.current?.load();
        if (state.isPlaying === true) {
            axios.put(
                `${process.env.NEXT_PUBLIC_API_URL}/${
                    state.tracks[state.index].id
                }`,
            );
            refetch();
            state.setCount(data[state.index].count);
            state.setTrackCount(data);
            audioRef.current?.play();
        }
        if (!isLoading) {
            state.setCount(data[state.index].count);
        }
    }, [state.index, state.isPlaying]);

    useEffect(() => {
        if (state.isPlaying) {
            const timer = window.setInterval(() => {
                if (audioRef.current!.currentTime > 0) {
                    state.setCurrentTime(
                        Math.floor(audioRef.current!.currentTime as number),
                    );
                    state.setDuration(
                        Math.floor(audioRef.current!.duration as number),
                    );
                }
                return function () {
                    clearInterval(timer);
                };
            }, 1000);
        }
    }, [audioRef, state.isPlaying]);

    useEffect(() => {
        if (
            audioRef.current?.currentTime === audioRef.current?.duration &&
            state.isPlaying
        ) {
            controls.forward();
        }
    }, [audioRef]);

    return (
        <div className="bg-black absolute bottom-10 bg-opacity-90 p-5 rounded-lg shadow-lg flex items-center align-middle justify-center">
            <div className="text-white font-bold mx-4">
                {state.isPlaying && Convert(audioRef.current?.currentTime)}
            </div>

            <button
                className="mx-2 transform -translate-x-1 translate-y-1"
                onClick={controls.backward}
            >
                <Image src="/icons/backward.png" width={22} height={22} />
            </button>
            {!state.isPlaying ? (
                <button
                    className="mx-2 transform -translate-x-1 translate-y-1"
                    onClick={controls.play}
                >
                    <Image src="/icons/play.png" width={22} height={22} />
                </button>
            ) : (
                <button
                    className="mx-2 transform -translate-x-1 translate-y-1"
                    onClick={controls.pause}
                >
                    <Image src="/icons/pause.png" width={22} height={22} />
                </button>
            )}
            <button
                className="mx-2 transform -translate-x-1 translate-y-1"
                onClick={controls.forward}
            >
                <Image src="/icons/forward.png" width={22} height={22} />
            </button>
            <div className="text-white font-bold mx-4">
                {state.isPlaying &&
                    Convert(
                        audioRef.current!.duration -
                            audioRef.current!.currentTime,
                    )}
            </div>
            <audio ref={audioRef} src={state.onListen}></audio>
        </div>
    );
}
