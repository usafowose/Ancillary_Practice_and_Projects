// Holds Our Main State i.e. List of Videos We Are Fetching & maybe the video we are currently rendering 

import React from 'react';
import SearchBar from './SearchBar';
import youtube from './../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component {

  state= {
    videos: [], 
    selectedVideo: null
  }; 

  componentDidMount() {
    this.handleVideoSearch('')
  };

  handleVideoSearch = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
    })
  }

  handleVideoSelect = video => {
    this.setState({ selectedVideo: video })
  }


  render() {
    return (
      <div className='ui container'>
        <SearchBar handleSearch={this.handleVideoSearch} />
        <div className='ui grid'>
          <div className='ui row'>
            <div className='eleven wide column'>
              <VideoDetail selectedVideo={this.state.selectedVideo} />
            </div>
            <div className='five wide column'>
              <VideoList onVideoSelect={this.handleVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}

export default App; 