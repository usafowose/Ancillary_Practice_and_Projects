import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {

  const renderedList = videos.map(video => {
    return (
      <div className='ui relaxed divided list' key={video.id.videoId}>
        <VideoItem
          onVideoSelect={onVideoSelect}
          video={video}
        />
      </div>
    )
  });

  return (
    <div >
      {renderedList}
    </div>
  )

}

export default VideoList;