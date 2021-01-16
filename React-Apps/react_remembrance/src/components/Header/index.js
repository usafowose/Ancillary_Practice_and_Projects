import React from 'react';

const Header = (props) => {
  return (
    <div>
      <header>
        <h4>React Rememberace</h4>
        <h1> Clicky game</h1>
        <p>Score: {props.score}</p>
      </header>
    </div>
  )
};

export default Header; 