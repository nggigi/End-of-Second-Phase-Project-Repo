import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
import './Home.css'

function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="feed-container">
        <Feed />
      </div>
      <Widget />
    </div>
  );
}

export default Home;
