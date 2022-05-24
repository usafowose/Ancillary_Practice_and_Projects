import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";

export const SongList = (props) => {
  return props.songs.map((song, index) => {
    return (
    <div className="ui divided list">
      <div className="item" key={song.title}>
        <div className="right floated content">
          <button className="ui button primary" key={song.title} onClick={(_) => props.selectSong(song)}>Select</button>
        </div>
        <div className="content">{song.title}</div>
      </div>
    </div>
    );
  });
}

const mapStateToProps = (state) => {
  return {songs: state.songs};
};

export default connect(mapStateToProps, { selectSong })(SongList);