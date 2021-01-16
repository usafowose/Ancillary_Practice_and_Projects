import React from 'react';


class Image extends React.Component {

  state = { clickedAlready: false }

  handleClickEvent = (e) => {

    if (this.state.clickedAlready) {
      return
      // Find A Way to restart game? Here or app?
    } else {
      this.props.increaseScore();
      this.setState({ clickedAlready: true })
    }
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

