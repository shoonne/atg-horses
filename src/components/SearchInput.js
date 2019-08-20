import React, { Component } from 'react';
import {connect} from 'react-redux';
import {onSearchInputChange, fetchGameData} from '../actions';

const GAME_SCHEDULE_ENDPOINT = `https://www.atg.se/services/racinginfo/v1/api/products/`;


class SearchInput extends Component {


  handleSubmit = (e) => {
      const searchTerm = this.props.data.input;
        e.preventDefault();
        this.props.fetchGameData(GAME_SCHEDULE_ENDPOINT + searchTerm);
    }

  render() {
    return (
      <div style={{textAlign:'center'}}> 
          <form onSubmit={this.handleSubmit}>
              <input 
              className="search-input"
              type="text"
              value={this.props.data.input.searchTerm}
              onChange={e => this.props.onSearchInputChange(e.target.value.toUpperCase())}/>
              <button type="submit" className="button button2">SEARCH</button>
          </form>
       </div>
    );
  }
}


const mapStateToProps = state => {
    return {
      data: state 
    }
};

export default connect(mapStateToProps, {onSearchInputChange, fetchGameData})(SearchInput);
