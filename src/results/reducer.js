import {FIGHT, WINNER_FOUND, ERROR} from './actionTypes';

const initialState = {
  winner: null,
  loser: null,
  error: null,
  loading: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FIGHT: {
      const player = action.payload;
      return {...state, loading: false};
    }
    case WINNER_FOUND: {
      const results = action.payload;
      return {
        ...state,
        winner: results[0],
        loser: results[1],
        loading: false,
      };
    }
    case ERROR: {
      const error = action.payload;
      return {...state, error, loading: false};
    }

    default:
      return state;
  }
};
