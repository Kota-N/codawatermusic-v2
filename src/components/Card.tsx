import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Song } from '../types';
import useStore from '../store';

interface IProps { song: Song; }

const Card = ({ song }: IProps) => {
    const { id, title, mp3Url, wavUrl, genre } = song;
    const playedSongId = useStore(s => s.playedSongId);
    const isPlaying = useStore(s => s.isPlaying);
    const setIsPlaying = useStore(s => s.setIsPlaying);
    const setPlayedSong = useStore(s => s.setPlayedSong);
    const setDlUrls = useStore(s => s.setDlUrls);
    const cardRef = useRef<HTMLDivElement>(null);

    const imgSrc = genre === 'Game/8bit' ? '/Video Game.jpg' : `/${genre}.jpg`;

    useEffect(() => {
        if (playedSongId !== id) cardRef.current?.classList.remove('playing');
        else {
            if (isPlaying) cardRef.current?.classList.add('playing');
            else cardRef.current?.classList.remove('playing');
        }
    }, [isPlaying, playedSongId, id]);

    return (
        <div
            id={`${id}`}
            onClick={() => {
                setIsPlaying(true);
                setPlayedSong(id);
            }}
            className="card"
            title="Play"
            ref={cardRef}
        >
            <div className="img-container">
                <h2 className="card-genre">{genre}</h2>
                <img className="card-img" src={imgSrc} alt={genre} />
            </div>

            <div className="card-title">
                <Link
                    to={`/music/description?id=${id}`}
                    onClick={e => e.stopPropagation()}
                >
                    <h3 title={title}>{title}</h3>
                </Link>
            </div>
            <i
                onClick={e => {
                    e.stopPropagation();
                    setDlUrls(mp3Url, wavUrl);
                }}
                title="Download"
                className="fas fa-download"
            ></i>
            <div className="vinyl-player">
                <div className="vinyl ball"></div>
                <div className="vinyl rectangle"></div>
                <div className="vinyl needle"></div>
                <div className="vinyl needle2"></div>
                <i className="fas fa-compact-disc"></i>
            </div>
        </div>
    );
};

export default Card;
