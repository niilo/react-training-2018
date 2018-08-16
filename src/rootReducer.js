import {combineReducers} from 'redux';
import battleReducer from './battle/reducer';

export default combineReducers({
  battle: battleReducer,
});
