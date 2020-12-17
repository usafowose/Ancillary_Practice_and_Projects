import react from 'react';
import ReactDOM from 'react-dom'

const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => console.log(position),
    (err) => console.error(err)
  )
// once this component is rendered, the div is instantly shown wthout the geolocation having been loaded. So our Latitude is blank. 

// We have no way of re-rendering or telling App component to pause rendering until data is available. See src/ for solutions. 
return (
  <div>Latitude:</div>
)
};

ReactDOM.render(<App />, document.getElementById('root'))