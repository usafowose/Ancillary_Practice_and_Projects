import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './components/SeasonDisplay/SeasonDisplay';
import "semantic-ui-css/semantic.min.css"
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner'
import ErrorPage from './components/ErrorPage/ErrorPage'

class App extends React.Component {
  // state can be intialized outside of constructor --often done...use w/o 'this' outside of constructor
  // if nothing other than state is intitialized inside contructor, construc and props can be removed and state can be intialized like below. 
  // babel will compile this to establish constructor, etc

  state = { lat: null, errorMessage: '' }

  renderContent() {
    return (
      (this.state.errorMessage && !this.state.lat) ?
        <ErrorPage message={`We're Not Authorized To View Your Location`} />
        : (this.state.lat && !this.state.errorMessage) ?
          <SeasonDisplay lat={this.state.lat} />
          : <LoadingSpinner message='Waiting On Location Authorization' />
    )
  }

  render() {
    return (
      <div style={{ border: `10px solid red` }}>
        {this.renderContent()}
      </div>
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