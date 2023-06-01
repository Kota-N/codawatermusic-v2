import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import reportWebVitals from './reportWebVitals';

import './index.css';
import './css/Nav.css';
import './css/Home.css';
import './css/Card/Card.css';
import './css/Card/vinyl-player.css';
import './css/Download.css';
import './css/MusicPlayer/MusicPlayer.css';
import './css/MusicPlayer/volume-slider.css';
import './css/Music.css';
import './css/License.css';
import './css/Contact.css';
import './css/Search.css';
import './css/Footer.css';
import './css/Description.css';
import './css/media.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
