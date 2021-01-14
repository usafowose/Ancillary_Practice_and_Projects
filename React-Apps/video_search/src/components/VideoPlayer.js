import React from 'react'

const VideoPlayer = ({ video }) => {
  return (
    <div className='ui embed'>
      <iframe title='video-player' src={`https://www.youtube.com/embed/${video.id.videoId}`} />
    </div>
  )
}

export default VideoPlayer;