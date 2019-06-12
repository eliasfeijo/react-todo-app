import React from 'react';

function About () {
  return (
    <React.Fragment>
      <div className="about">
        <p>Stack used to make this app:</p>
        <ul>
          <li>
            <a href="https://reactjs.org/" target="_blank">
              React
            </a>
          </li>
          <li>
            <a href="https://sass-lang.com/" target="_blank">
              Sass
            </a>
          </li>
          <li>
            <a href="https://jsonplaceholder.typicode.com/" target="_blank">
              JSONPlaceholder
            </a>
          </li>
        </ul>
        <p>
          Many thanks to
          <a href="https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA" target="_blank">
            Traversy Media
          </a>
          for this
          <a href="https://www.youtube.com/watch?v=sBws8MSXN7A" target="_blank">
            tutorial
          </a>
          on React.
        </p>
      </div>
    </React.Fragment>
  );
}

export default About;