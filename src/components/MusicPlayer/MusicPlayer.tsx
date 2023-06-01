import React, { useState, useEffect, useRef, MouseEvent, ChangeEvent } from 'react';
import useStore from "../../store";
import ProgressBar from './ProgressBar';
import TimeDisplay from './TimeDisplay';
import Controls from './Controls';

const MusicPlayer = () => {
    const [currentProgressPercent, setCurrentProgressPercent] = useState<string>('100%');
    const [currentSecond, setCurrentSecond] = useState<number>(0);
    const [currentMinute, setCurrentMinute] = useState<number>(0);
    const [totalMinute, setTotalMinute] = useState<number>(0);
    const [totalSecond, setTotalSecond] = useState<number>(0);
    const [volumeRangeValue, setVolumeRangeValue] = useState<number>(100);
    const [isMuted, setIsMuted] = useState<boolean>(false);
    const [previousVolume, setPreviousVolume] = useState<number>(1);

    const isPlaying = useStore(s => s.isPlaying);
    const playedSongUrl = useStore(s => s.playedSongUrl);
    const playedSongData = useStore(s => s.playedSongData);
    const setIsPlaying = useStore(s => s.setIsPlaying);
    const audioRef = useRef<HTMLAudioElement>(null);

    const updateProgress = (e: MouseEvent<HTMLDivElement>) => {
        const width: number = (e.target as any).clientWidth;
        const clickX: number = e.pageX;
        if (audioRef.current)
            audioRef.current.currentTime = (clickX / width) * audioRef.current.duration;
    };
    const changeVolume = (e: ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            setVolumeRangeValue((e.target as any).value);
            audioRef.current.volume = volumeRangeValue / 100;
            setPreviousVolume(volumeRangeValue / 100);
            setIsMuted(false);

            audioRef.current.muted = false;
        }
    };

    const toggleMute = () => {
        if (audioRef.current) {
            if (audioRef.current.muted) {
                setIsMuted(false);
                audioRef.current.muted = false;
                setVolumeRangeValue(previousVolume * 100);
                audioRef.current.volume = previousVolume;
            } else if (!audioRef.current.muted) {
                setIsMuted(true);
                audioRef.current.muted = true;
                setVolumeRangeValue(0);
            }
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play();
                setIsPlaying(true);
            } else {
                audioRef.current.pause();
                setIsPlaying(false);
            }
        }
    }, [isPlaying, setIsPlaying, playedSongUrl]);

    useEffect(() => {
        const spaceBarToPlay = (e: any) => {
            if (e.code === 'Space') {
                e.preventDefault();
                if (audioRef.current) {
                    if (!audioRef.current.paused) setIsPlaying(false);
                    else if (audioRef.current.paused) setIsPlaying(true);
                }
            }
        };
        window.addEventListener('keydown', spaceBarToPlay);
        return () => window.removeEventListener('keydown', spaceBarToPlay);
    }, [setIsPlaying]);

    return (
        <div className="music-player">
            <ProgressBar
                currentProgressPercent={currentProgressPercent}
                playedSongUrl={playedSongUrl}
                updateProgress={updateProgress}
            />

            <TimeDisplay
                currentMinute={currentMinute}
                currentSecond={currentSecond}
                totalMinute={totalMinute}
                totalSecond={totalSecond}
            />
            <audio
                ref={audioRef}
                onCanPlay={() => {
                    if (audioRef.current) {
                        setTotalMinute(Math.floor(audioRef.current.duration / 60));
                        setTotalSecond(
                            Math.floor(audioRef.current.duration) - Math.floor(audioRef.current.duration / 60) * 60,
                        );
                    }

                }}
                onTimeUpdate={() => {
                    if (audioRef.current) {
                        setCurrentProgressPercent(
                            `${(audioRef.current.currentTime / audioRef.current.duration) * 100}%`
                        );
                        setCurrentSecond(Math.floor(audioRef.current.currentTime));
                        setCurrentMinute(Math.floor(audioRef.current.currentTime / 60));
                        if (audioRef.current.currentTime === audioRef.current.duration) setIsPlaying(false);
                    }
                }}
                src={playedSongUrl}
            />
            <p className="title-genre">{playedSongData?.title}</p>
            <Controls
                volumeRangeValue={volumeRangeValue}
                changeVolume={changeVolume}
                toggleMute={toggleMute}
                isMuted={isMuted}
            />
        </div>
    );
};

export default MusicPlayer;
