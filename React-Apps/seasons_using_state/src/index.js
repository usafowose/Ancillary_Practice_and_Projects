import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay';
import "semantic-ui-css/semantic.min.css"

class App extends React.Component {
  // state can be intialized outside of constructor --often done...use w/o this outside of constructor
  // if nothing other than state is intitialize dinside contructor, construc and props can be removed and state can be intialized like below. 
  // babel will compile this to establish constructor, etc

  state = { lat: null, errorMessage: '' }

  render() {
    return (
      (this.state.errorMessage && !this.state.lat) ?
        <div>Error: {this.state.errorMessage}</div>
        : (this.state.lat && !this.state.errorMessage) ?
          <SeasonDisplay lat={this.state.lat} />
          : <div>Loading!</div>
    )
  }

  componentDidMount() {
    // grabbing currentLoc --one time process
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
    console.log(this.state)
  }

  componentDidUpdate() {
    console.log(this.state)
    console.log(`My component was just updated`)
  }
}


ReactDOM.render(<App />, document.getElementById('root')) 