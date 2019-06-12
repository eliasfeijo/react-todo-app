import React from 'react';
import './About.scss';

function About () {
  return (
    <React.Fragment>
      <main className="about">
        <p>Stack used to make this app:</p>
        <ul>
          <li>
            <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
              React
            </a>
          </li>
          <li>
            <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
              Sass
            </a>
          </li>
          <li>
            <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noopener noreferrer">
              JSONPlaceholder
            </a>
          </li>
        </ul>
        <p>
          Many thanks to <a href="https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA" target="_blank" rel="noopener noreferrer">
            Traversy Media
          </a> for this <a href="https://www.youtube.com/watch?v=sBws8MSXN7A" target="_blank" rel="noopener noreferrer">
            tutorial
          </a> on React.
        </p>
      </main>
    </React.Fragment>
  );
}

export default About;