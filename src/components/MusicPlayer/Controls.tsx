import React, { useEffect, useRef, ChangeEvent } from 'react';
import useStore from "../../store";

interface IProps {
    volumeRangeValue: number;
    changeVolume: (e: ChangeEvent<HTMLInputElement>) => void;
    toggleMute: () => void;
    isMuted: boolean;
}

const Controls = ({
    volumeRangeValue,
    changeVolume,
    toggleMute,
    isMuted,
}: IProps) => {
    const isPlaying = useStore(s => s.isPlaying);
    const playedSongData = useStore(s => s.playedSongData);
    const setIsPlaying = useStore(s => s.setIsPlaying);

    const marqueePRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        if (marqueePRef.current) {
            if (isPlaying) {
                marqueePRef.current.classList.add('scrolling');
            } else if (!isPlaying) {
                marqueePRef.current.classList.remove('scrolling');
            }
        }
    }, [isPlaying]);

    return (
        <div className="controls">
            {playedSongData &&
                (
                    <div className="marquee">
                        <p className="marquee-p" ref={marqueePRef}>
                            {playedSongData.title} - {playedSongData.artist}
                        </p>
                    </div>
                )
            }

            {isPlaying ? (
                <i
                    onClick={() => {
                        playedSongData && setIsPlaying(false);
                    }}
                    className="fas fa-pause"
                ></i>
            ) : (
                <i
                    onClick={() => {
                        playedSongData && setIsPlaying(true);
                    }}
                    className="fa fa-play"
                ></i>
            )}
            {isMuted ? (
                <i onClick={toggleMute} className="volume fas fa-volume-mute"></i>
            ) : volumeRangeValue < 20 ? (
                <i onClick={toggleMute} className="volume fas fa-volume-off"></i>
            ) : volumeRangeValue <= 70 ? (
                <i onClick={toggleMute} className="volume fas fa-volume-down"></i>
            ) : (
                <i onClick={toggleMute} className="volume fas fa-volume-up"></i>
            )}

            <div className="volume-slider">
                <div className="volume-background">
                    <div
                        style={{ width: `${volumeRangeValue}%` }}
                        className="volume-fill"
                    ></div>
                    <input
                        type="range"
                        value={volumeRangeValue}
                        onChange={e => changeVolume(e)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Controls;
