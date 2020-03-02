import React, { useState } from 'react';
import './App.css';

import UrlFactory from '../middlewares/UrlFactory'

import about from '../images/about.svg'

function App() {
  const [link, setLink] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const newLink = new UrlFactory(link).verifyUrlAndReturnNewUrl()

    window.open(newLink, 'sharer', 'toolbar=0,status=0,width=600,height=338');
  }

  return (
    <>
    <div className="content">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Link here..."
          value={link}
          onChange={event => setLink(event.target.value)}
        />

        <button className="btn" type="submit">View embed!</button>
      </form>
    </div>
    <img id="about" src={about} alt="About this project"/>
    </>
  );
}

export default App;
