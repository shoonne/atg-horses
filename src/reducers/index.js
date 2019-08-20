import {combineReducers} from 'redux';

import inputReducer from './inputReducer';
import fetchGameDataReducer from './fetchGameDataReducer';
import gameCardInfoReducer from './gameCardInfoReducer';




export default combineReducers({
    input: inputReducer,
    gameSchedule: fetchGameDataReducer,
    gameRaces: gameCardInfoReducer
});