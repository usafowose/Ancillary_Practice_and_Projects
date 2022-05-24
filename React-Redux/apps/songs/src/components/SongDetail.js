import React from "react";
import { connect } from "react-redux";

const SongDetail = ({selectedSong}) => {
  return (
    <div>
    {selectedSong.title}
    <br></br>
    <span>{selectedSong.duration}</span>
  </div>
  )
}

const mapStateToProps = state => ({selectedSong: state.selectedSong});

export default connect(mapStateToProps)(SongDetail);