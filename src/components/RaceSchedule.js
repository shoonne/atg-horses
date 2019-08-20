import React, { Component } from 'react';
import {connect} from 'react-redux';
import RaceScheduleCard from './ui/RaceScheduleCard';
import { getRaceInformation} from '../actions';


const GAME_RACES_ENDPOINT = 'https://www.atg.se/services/racinginfo/v1/api/games/';

class RaceSchedule extends Component {

  // Take the id of the selected schedule, and fetch the details.
  handleCardClick = id => {
    this.props.getRaceInformation(GAME_RACES_ENDPOINT + id);
  }

  renderRaceSchedule = () => {
    const data = this.props.data.gameSchedule;

    // If there is no data, return.
    if(data === null){
      return
    } else {
      if(data.upcoming){
        return data.upcoming.map((upcomingGame, index) => (
          <RaceScheduleCard 
          gameDetails={this.props.data.gameRaces}
          id={upcomingGame.id}
          key={index}
          type={data.betType}
          onClick={() => this.handleCardClick(upcomingGame.id)}
          startTime={upcomingGame.startTime}
          />
        ))
      } else if (!data.upcoming && data.results) {
        return data.results.map((result, index) => (
        <RaceScheduleCard 
          key={index}
          type={data.betType}
          onClick={() => this.handleCardClick(result.id)}
          startTime={result.startTime}
          />

        ))
      } else {
        return;
      }
    }
  }
  render() {
    return (
      <div style={{float:'left', marginLeft:'24%' ,cursor: 'pointer' }}>
      {this.renderRaceSchedule()}
      </div>
    );
  }
}


const mapStateToProps = state => {
  //console.log(state)
    return {
      data: state 
    }
};

export default connect(mapStateToProps, {getRaceInformation})(RaceSchedule);
