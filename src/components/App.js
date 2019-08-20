import React from 'react';
import {connect} from 'react-redux';
import '../App.css';

import SearchInput from './SearchInput';
import RaceSchedule from './RaceSchedule';
import RaceDetails from './RaceDetails';

const ATG_LOGO = 'https://omatg.se/wp-content/uploads/2019/01/ATG_primary.png';
const  App = () =>  {
    return (
      <div>
        <SearchInput/>
        <div className="search-results" >
          <div className="schedule-container">
          <img src={ATG_LOGO} className="atg-image" alt=""/>
            <RaceSchedule/>
          </div>
          <div style={{ flex:'1'}}>
            <RaceDetails/>
          </div>
        </div>
      </div>
    );
}

const mapStateToProps = state => {
    return {
      data: state 
    }
};

export default connect(mapStateToProps, {})(App);
