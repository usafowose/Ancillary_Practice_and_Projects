import React from 'react';


class Image extends React.Component {

  state = { clickedAlready: false }


  handleClickEvent = (e) => {

    if (this.state.clickedAlready) {
      // alert('Clicked Already')
      this.props.restart()
      this.setState({ clickedAlready: false })
      // Find A Way to restart game? Here or app?
    } else {
      this.props.increaseScore();
      this.setState({ clickedAlready: true })
    }
  }



  render() {
    console.log(this.state.clickedAlready)
    return (
      <div
        style={{ border: '1px solid red', marginTop: 5}}
        onClick={this.handleClickEvent}
      >Image Would Go Here</div>
    )
  }
}


export default Image;

