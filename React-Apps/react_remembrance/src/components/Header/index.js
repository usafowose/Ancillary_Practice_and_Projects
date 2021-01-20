import React from 'react';
import styles from './Header.module.css'


const Header = ({ score, highScore }) => {
  return (
    <div>
      <header className={`header ${styles.header}`}>
        <h1 className='ui block header' style={{ 'backgroundColor': 'aliceBlue ' }}>React Rememberace</h1>
        <div className='ui container'>
          <div className={`ui block header segment center ${styles.center}`}>
            <p>Score: {score}</p>
            <p>High Score: {highScore}</p>
          </div>
        </div>
      </header>
    </div>
  )
};

export default Header; 