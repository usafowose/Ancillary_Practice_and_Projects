import React from 'react'

class SearchBar extends React.Component {

  state = { term: '' };

  handleInputChange = e => {
    this.setState({ term: e.target.value })
  }

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.handleSearch(this.state.term);
  }

  render() {
    return (
      <div className='search-bar ui segment'>
        <form
          className='ui form'
          onSubmit={this.handleFormSubmit}
        >
          <div className='field'>
            <label>Video Search</label>
            <input
              type='text'
              value={this.state.term}
              onChange={this.handleInputChange}
            />
          </div>
        </form>
      </div>
    )
  }

}

export default SearchBar;