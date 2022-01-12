import React from 'react';
import ReactDOM from 'react-dom';
import JournalApp from './Components/JournalApp';
import "./Styles/main.scss";
import "animate.css";

ReactDOM.render(
  <React.StrictMode>
    <JournalApp />
  </React.StrictMode>,
  document.getElementById('root')
);
