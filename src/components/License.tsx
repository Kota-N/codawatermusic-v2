import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const License = () => {
    useEffect(() => window.scrollTo(0, 0), []);

    return (
        <div className="license">
            <ul>
                <li>
                    <h3>CREATIVE COMMONS LICENSE</h3>
                </li>
                <li>
                    <a
                        href="http://creativecommons.org/licenses/by/4.0/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Creative Commons Attribution 4.0 International License
                    </a>
                </li>
                <li>
                    What does this mean?
                    <br />
                    Simply put, you can use my music as long as you don't claim it to be
                    yours.
                </li>
                <li>
                    <span>You CAN:</span>
                    <br />
                    Download and use music on this website for your YouTube Channel,
                    social media, website, presentation, animation, film, shop, etc.
                </li>
                <li>
                    <span>You CANNOT:</span>
                    <br />
                    Claim my music as yours.
                </li>
            </ul>
            <hr />
            <ul>
                <li>
                    When using my music, it'll help me if you can credit this website by
                    providing the link.
                </li>
                <li>
                    You don't need to ask for permission, but I'd always be happy to{' '}
                    <Link to="/contact">hear from you</Link> how my music could help you
                    create better content!
                </li>
                <li>
                    If you have questions, please <Link to="/contact">contact me</Link>.
                </li>
            </ul>
        </div>
    );
};

export default License;
