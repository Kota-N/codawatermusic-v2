import React, { useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Card from './Card';
import useStore from "../store";
import { Song, numPerPage } from "../types";
import Search from './Search';
import NotFound from "./NotFound";

const Music = () => {
    const searchParams = useSearchParams()[0];
    let [genre, pageNum, searchVal] = [searchParams.get('genre'), searchParams.get('page'), searchParams.get('search')];

    useEffect(() => window.scrollTo(0, 0), [pageNum]);

    const searchPages = useStore(s => s.searchPages);
    const pages = useStore(s => s.pages);

    let songs: Song[][];
    let songsLen: number;
    let songsLenSoFar: number;
    let totalPage: number;

    pageNum = pageNum === null ? '1' : pageNum;

    if (searchVal) {
        // Search result pages
        songs = searchPages.items;
        totalPage = searchPages.totalPage;
    } else {
        // Genre/all pages
        genre = genre === null ? 'all' : genre;
        if (!pages[genre] || Number.isNaN(+pageNum) || +pageNum <= 0 || +pageNum > pages[genre].totalPage) return <NotFound />;
        songs = pages[genre].items;
        totalPage = pages[genre].totalPage;
    }

    songsLen = songs.reduce((total, songs) => total + songs.length, 0);
    songsLenSoFar = (+pageNum - 1) * numPerPage;

    return (
        <div className="music">
            <Search />
            <div className="card-container">
                {songs[+pageNum - 1].map(song => (
                    <Card key={song.id} song={song} />
                ))}
            </div>

            <div className="pagination">
                {+pageNum > 1 && (
                    <Link to={`/music?genre=${genre}&page=${+pageNum - 1}`}>
                        <div className="prev-page">Prev</div>
                    </Link>
                )}
                <p>{`${songs[0].length ? songsLenSoFar + 1 : 0} - ${songsLenSoFar + songs[+pageNum - 1].length} of ${songsLen}`}</p>
                {+pageNum < totalPage && (
                    <Link to={`/music?genre=${genre}&page=${+pageNum + 1}`}>
                        <div className="next-page">Next</div>
                    </Link>
                )}
            </div>

        </div>
    );
};

export default Music;
