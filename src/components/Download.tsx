import React from 'react';
import useStore from "../store";

const Download = () => {
    const dlUrls = useStore(s => s.dlUrls);
    const setDlUrls = useStore(s => s.setDlUrls);

    return (
        <div
            className="download"
            onClick={() => {
                setDlUrls('', '');
            }}
        >
            <div className="download-background" onClick={e => e.stopPropagation()}>
                <p className="free-download">Free Download</p>
                <i
                    className="fas fa-times"
                    onClick={e => {
                        e.stopPropagation();
                        setDlUrls('', '');
                    }}
                ></i>
                <div className="download-btn">
                    <a href={dlUrls.mp3}>
                        <div className="download-mp3 download-option">
                            <i className="fas fa-download"></i>
                            <h3>mp3</h3>
                        </div>
                    </a>
                    <a href={dlUrls.wav}>
                        <div className="download-wav download-option">
                            <i className="fas fa-download"></i>
                            <h3>wav</h3>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Download;
