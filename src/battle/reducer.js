import {
  SET_FIRST_PLAYER,
  SET_SECOND_PLAYER,
  RESET_FIRST_PLAYER,
  RESET_SECOND_PLAYER,
} from './actionTypes';

const initialState = {
  playerOne: {name: null, image: null},
  playerTwo: {name: null, image: null},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_FIRST_PLAYER: {
      const player = action.payload;
      return {...state, playerOne: player};
    }
    case SET_SECOND_PLAYER: {
      const player = action.payload;
      return {...state, playerTwo: player};
    }
    case RESET_FIRST_PLAYER: {
      return {...state, playerOne: {name: null, image: null}};
    }
    case RESET_SECOND_PLAYER: {
      return {...state, playerTwo: {name: null, image: null}};
    }
    default:
      return state;
  }
};
