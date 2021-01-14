import React from 'react';
import VideoPlayer from './VideoPlayer'

const VideoDetail = ({ selectedVideo }) => {
  if (!selectedVideo) {
    return <div>Search For A Video</div>
  } else {
    return (
      <div>
        <VideoPlayer
          video={selectedVideo}
        />
        <div className='ui segment'>
          <h4 className='ui header'>
            {selectedVideo.snippet.title}
          </h4>
          <p>{selectedVideo.snippet.description}</p>
        </div>
      </div>
    )
  }
}

export default VideoDetail; 