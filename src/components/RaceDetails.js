import React, { Component } from 'react';
import {connect} from 'react-redux';
import RaceTable from './ui/RaceTable'

import '../App.css';

class RaceDetails extends Component {

    renderRacedDetails = () => {
        const  data = this.props.data.gameRaces;
        // If there is data
        // Map the races and get the starts.
        // Map the starts and return a table with the information
        if(data !== null && data.races !== undefined){
          return data.races.map( (race) => {
            return race.starts.map((start, i) => (
              <RaceTable 
              key={i}
              number={start.number} 
              driver={start.driver.firstName + " " + start.driver.lastName}
              trainer={start.horse.trainer.firstName + " " + start.horse.trainer.lastName}
              horseName={start.horse.name}
              horseFather={start.horse.pedigree.father.name}
              />
            ))})
        } else {
          return;
        };
      }

  render() {
    return (
      <div> {this.renderRacedDetails()} </div>
    );
  }
}

const mapStateToProps = state => {
    return {
      data: state 
    }
};

export default connect(mapStateToProps, null)(RaceDetails);
