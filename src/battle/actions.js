import {
  SET_FIRST_PLAYER,
  SET_SECOND_PLAYER,
  RESET_FIRST_PLAYER,
  RESET_SECOND_PLAYER,
} from './actionTypes';

const constructPlayer = player => {
  const playerData = {
    name: player,
    image: `https://github.com/${player}.png?size=200`,
  };
  return playerData;
};

export const setFirstPlayer = player => ({
  type: SET_FIRST_PLAYER,
  payload: constructPlayer(player),
});

export const setSecondPlayer = player => ({
  type: SET_SECOND_PLAYER,
  payload: constructPlayer(player),
});

export const resetFirstPlayer = player => ({
  type: RESET_FIRST_PLAYER,
});

export const resetSecondPlayer = player => ({
  type: RESET_SECOND_PLAYER,
});
