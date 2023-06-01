import React, { ChangeEvent, KeyboardEvent, useRef } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import useStore from "../store";

const Search = () => {
    const [inputVal, setInputVal] = useState<string>('');
    const searchPages = useStore(s => s.searchPages);
    const setSearchPages = useStore(s => s.setSearchPages);
    const searchBtnRef = useRef<HTMLAnchorElement>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setInputVal(e.target.value);

    const handleEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        e.stopPropagation();
        if (e.key === 'Enter') {
            if (searchBtnRef.current) {
                searchBtnRef.current.click();
            }
        }
    };

    return (
        <div className="search">
            <input
                onKeyDown={e => handleEnter(e)}
                onChange={e => handleChange(e)}
                value={inputVal}
                type="text"
            />
            {inputVal ? (<p>Search</p>) : (<p className="search-placeholder">Search</p>)}
            <div className="search-underline"></div>

            <Link
                ref={searchBtnRef}
                className="search-btn"
                to={`/music?search=${Array.from(new Set(inputVal.split(' '))).filter(x => x !== '').join('-')}&page=1`}
                onClick={() => {
                    const searchVal = Array.from(new Set(inputVal.split(' '))).filter(x => x !== '').join('-').toLowerCase();
                    if (searchPages.searchVal !== searchVal) setSearchPages(searchVal.split('-'));
                }}
            >
                <i className="fas fa-search"></i>
            </Link>
        </div>
    );
};

export default Search;
