import React from 'react';


class Image extends React.Component {

  state = { clickedAlready: false }

  handleClickEvent = (e) => {
    this.state.clickedAlready ? this.props.increaseScore() : this.setState({ clickedAlready: true })

    // TO-DO : Fix This Logic Its Wrong
  }



  render() {
    return (
      <div
        style={{ border: '1px solid red' }}
        onClick={this.handleClickEvent}
      >Image Would Go Here</div>
    )
  }
}


export default Image;

