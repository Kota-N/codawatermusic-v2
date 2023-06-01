import React, { useEffect } from 'react';
import Card from './Card';
import { Link, useSearchParams } from 'react-router-dom';
import NotFound from "./NotFound";
import useStore from "../store";

const Description = () => {
    useEffect(() => window.scrollTo(0, 0), []);

    const searchParams = useSearchParams()[0];
    const id = searchParams.get('id');
    const data = useStore(s => s.data);
    const searchPages = useStore(s => s.searchPages);
    const setSearchPages = useStore(s => s.setSearchPages);

    if (id === null || +id >= data.length || +id < 0) return <NotFound />;

    const song = data[+id];

    return (
        <div className="description">
            <div className="description-container">
                <Card song={song} />
                <div className="about-track">
                    <h3 className="track-title">{song.title}</h3>
                    <h3>
                        <Link
                            to={`/music?search=${song.artist.split(' ').join('-').toLowerCase()}&page=1`}
                            onClick={() => {
                                const searchVal = song.artist.toLowerCase();
                                if (searchPages.searchVal !== searchVal) setSearchPages([searchVal]);
                            }}
                        >
                            {song.artist}
                        </Link>
                    </h3>
                    <h3>
                        <Link to={`/music?genre=${song.genre.toLowerCase()}&page=1`}>{song.genre}</Link>
                    </h3>
                    <p>{song.description}</p>
                </div>
            </div>
            <div className="tags">
                <h4>Tags: </h4>
                <div className="tag-name">
                    {song.tags.split(', ').map(tag => (
                        <Link
                            key={tag}
                            to={`/music?search=${tag}&page=1`}
                            onClick={() => {
                                const searchVal = tag.toLowerCase();
                                if (searchPages.searchVal !== searchVal) setSearchPages([searchVal]);
                            }}
                        >
                            {tag}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Description;
