import React from 'react';
import './VideoItem.css'

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className=' video-item item'>
      <img className='ui image' src={video.snippet.thumbnails.default.url} alt={video.snippet.description} />
      <div className='content'>
        <div className='header'>{video.snippet.title}</div>
      </div>
    </div>
  )
}

export default VideoItem; 