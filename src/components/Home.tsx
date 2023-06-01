import React from 'react';
import { Link } from 'react-router-dom';
import useStore from '../store';
import { Song } from "../types";

import Card from './Card';

const Home = () => {
    const songs: Song[] = useStore(s => s.pages['all'].items[0]);

    return (
        <div className="home">
            <h2 className="home-text">
                <Link to="/music">Royalty-Free Music</Link>
            </h2>
            <h3>by CodaWaterMusic</h3>

            <div className="new-arrival">
                <p className="new">NEW</p>
                <div className="card-container">
                    <Card song={songs[0]} />
                    <Card song={songs[1]} />
                    <Card song={songs[2]} />
                    <Card song={songs[3]} />
                </div>
                <Link className="new-arrival-link" to="/music?page=1">
                    <p>View All</p> <i className="fas fa-angle-double-down"></i>
                </Link>
            </div>
            <div className="genre-buttons">
                <h3>
                    <Link to="/music?genre=piano&page=1">PIANO</Link>
                </h3>
                <h3>
                    <Link to="/music?genre=electronic&page=1">ELECTRONIC</Link>
                </h3>
                <h3>
                    <Link to="/music?genre=cinematic&page=1">CINEMATIC</Link>
                </h3>
                <h3>
                    <Link to="/music?genre=corporate&page=1">CORPORATE</Link>
                </h3>
                <h3>
                    <Link to="/music?genre=acoustic&page=1">ACOUSTIC</Link>
                </h3>
                <h3>
                    <Link to="/music?genre=rock&page=1">ROCK</Link>
                </h3>
                <h3>
                    <Link to="/music?genre=pop&page=1">POP</Link>
                </h3>
                <h3>
                    <Link to="/music?genre=game/8bit&page=1">GAME/8BIT</Link>
                </h3>
            </div>
        </div>
    );
};

export default Home;
