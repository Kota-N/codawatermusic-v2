import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-menu">
                <ul>
                    <Link to="/music">
                        <li>Music</li>
                    </Link>
                    <Link to="/license">
                        <li>License</li>
                    </Link>
                    <Link to="/contact">
                        <li>Contact</li>
                    </Link>
                </ul>
            </div>

            <div className="sns-links">
                <ul>
                    <li>
                        <a
                            href="https://www.youtube.com/channel/UCzWtkkio1ejAFoJn1TsLPfA/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-youtube"></i>
                        </a>
                    </li>

                    <li>
                        <a
                            href="https://www.instagram.com/codawatermusic/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="copyright">
                <p>2020&copy;CodaWaterMusic</p>
            </div>
            <div className="extra-padding"></div>
        </div>
    );
};

export default Footer;
