//action creator that must return an action
export const selectSong = (song) => {
  return {
    type: 'songs/selectSong',
    payload: song
  };
}

