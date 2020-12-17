import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {

  state = { lat: null, errorMessage: '' }

  render() {
    return (

      (this.state.errorMessage && !this.state.lat) ?
        <div>Error: {this.state.errorMessage}</div>
        : (this.state.lat && !this.state.errorMessage) ?
          <div>Latitude: {this.state.lat}</div>
          : <div>Loading!</div>
    )
  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    console.log(`My component was just updated`)
  }
}


ReactDOM.render(<App />, document.getElementById('root'))