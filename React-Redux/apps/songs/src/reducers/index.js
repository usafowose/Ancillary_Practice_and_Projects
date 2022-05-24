import { combineReducers } from "redux";

// return static list of songs to state
// selectedSong reducer
// takes in state and an action to compose return value

// unnecessary reducer used purely for example of initial state
const songsReducer = (state, action) => {
  return [{
    title: 'Pushin P',
    duration: '4: 05'
  }, {
    title: 'No Scrubs',
    duration: '3:22'
  }, {
    title: 'They Dont Know',
    duration: '3:09'
  }, {
    title: 'Brain Freeze',
    duration: '6:43'
  }];
};

const selectedSongReducer = (selectedSong = {}, action) => {
  switch(action.type) {
    case 'songs/selectSong' : {
      return action.payload;
    }
    default: return selectedSong;
  }
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});