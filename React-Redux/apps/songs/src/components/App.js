import React from 'react';
import { selectSong } from '../actions';
import SongList from './songList';
import SongDetail from './SongDetail';

export const App = () => {
  return (
    <div className='ui container grid'>
      <div className='ui row'>
        <div className = 'column eight wide'>
          <SongList />
          <SongDetail />
        </div>
      </div>
    </div>
  );
}

// export default App;