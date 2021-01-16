import React from 'react';

const Header = (props) => {
  return (
    <div>
      <header>
        <h6>React Rememberace</h6>
        <h1> Clicky game</h1>
        <h6>Hello {props.score}</h6>
      </header>
    </div>
  )
};

export default Header; 