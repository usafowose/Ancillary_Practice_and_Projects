import React from 'react';



class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: '' }

  }

  handleInputChange = (e) => {
    this.setState({ term: e.target.value })
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.props.handleAPISearchVal(this.state.term)
  }

  render() {
    return (
      <div className='ui segment'>
        <form className='ui form' onSubmit={this.handleFormSubmit}>
          <div className='field'>
            <label htmlFor='inputField'>Image Search</label>
            <input
              id='inputField'
              type='text'
              value={this.state.term}
              onChange={this.handleInputChange}>
            </input>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar