import React, { MouseEvent } from 'react';

interface IProps {
    currentProgressPercent: string;
    playedSongUrl: string;
    updateProgress: (e: MouseEvent<HTMLDivElement>) => void;
}

const ProgressBar = ({
    currentProgressPercent,
    playedSongUrl,
    updateProgress,
}: IProps) => {
    return (
        <div className="progress-background">
            <div style={{ width: currentProgressPercent }} className="progress">
                <div
                    onClick={e => {
                        playedSongUrl && updateProgress(e);
                    }}
                    className="progress-hoverarea"
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;
