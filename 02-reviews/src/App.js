import React from 'react';
import Review from './Review';
import {FaGithubSquare} from 'react-icons/fa';

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Reviews</h2>
          <div className="underline"></div>
        </div>
        <Review />
      </section>
    <a href="https://github.com/" rel="noopener" target="_blank"><FaGithubSquare className="icon" /></a>
    </main>
  )
}

export default App;
