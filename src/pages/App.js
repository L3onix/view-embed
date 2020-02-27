import React, { useState } from 'react';
import './App.css';

function App() {
  const [link, setLink] = useState('')

  function verifyUrlAndReturnNewUrl(link) {
    // se for um link do youtube
    if(link.includes('youtube')){
      return 'https://youtube.com/embed/' + link.split('v=')[1]
    }else if(link.includes('twitch')){
      return 'https://player.twitch.tv/?channel=' + link.split('.tv/')[1]
    }
    
    //return link.split('v=')[1]
  }

  function handleSubmit(event) {
    event.preventDefault()

    console.log(verifyUrlAndReturnNewUrl(link))

    const newLink = verifyUrlAndReturnNewUrl(link)

    window.open(newLink, 'sharer', 'toolbar=0,status=0,width=600,height=338');
  }

  return (
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
  );
}

export default App;
