import React from 'react';

const Header = ({ score, highScore }) => {
  return (
    <div>
      <header>
        <h4>React Rememberace</h4>
        <h1> Clicky game</h1>
        <p>Score: {score}</p>
        <p>High Score: {highScore}</p>
      </header>
    </div>
  )
};

export default Header; 