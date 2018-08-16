import {battle} from '../util/api';
import {FIGHT, WINNER_FOUND, ERROR} from './actionTypes';

export const fight = () => ({
  type: FIGHT,
});

export const winnerFound = results => ({
  type: WINNER_FOUND,
  payload: results,
});

export const error = msg => ({
  type: ERROR,
  payload: msg,
});

export const doFight = () => (dispatch, getState) => {
  console.log('fight');
  const state = getState();
  const playerOneName = state.battle.playerOne.name;
  const playerTwoName = state.battle.playerTwo.name;
  if (playerOneName === null || playerTwoName === null) {
    return dispatch(error('failed.'));
  }

  battle([playerOneName, playerTwoName]).then(results => {
    if (results === null) {
      return dispatch(error('failed.'));
    }
    return dispatch(winnerFound(results));
    /*this.setState(() => {
      return {
        error: null,
        winner: results[0],
        loser: results[1],
        loading: false
      };
    });*/
  });
};
