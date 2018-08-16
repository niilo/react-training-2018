import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  setFirstPlayer,
  setSecondPlayer,
  resetFirstPlayer,
  resetSecondPlayer,
} from '../battle/actions';
import PlayerInput from './PlayerInput';
import PlayerPreview from './PlayerPreview';

const Battle = props => {
  const {match, playerOne, playerTwo} = props;
  return (
    <div>
      <div className="row">
        {!playerOne.name && (
          <PlayerInput
            id="playerOne"
            label="Player One"
            onSubmit={props.setFirstPlayer}
          />
        )}
        {playerOne.image !== null && (
          <PlayerPreview
            avatar={playerOne.image}
            username={playerOne.name}
            onReset={props.resetFirstPlayer}
            id="playerOne"
          />
        )}
        {!playerTwo.name && (
          <PlayerInput
            id="playerTwo"
            label="Player Two"
            onSubmit={props.setSecondPlayer}
          />
        )}
        {playerTwo.image !== null && (
          <PlayerPreview
            avatar={playerTwo.image}
            username={playerTwo.name}
            onReset={props.resetSecondPlayer}
            id="playerTwo"
          />
        )}
      </div>
      {playerOne.image &&
        playerTwo.image && (
          <Link
            className="button"
            to={{
              pathname: `${match.url}/results`,
              search: `?playerOneName=${playerOne.name}&playerTwoName=${
                playerTwo.name
              }`,
            }}
          >
            Battle
          </Link>
        )}
    </div>
  );
};
const mapStateToProps = state => ({
  playerOne: state.battle.playerOne,
  playerTwo: state.battle.playerTwo,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setFirstPlayer,
      setSecondPlayer,
      resetFirstPlayer,
      resetSecondPlayer,
    },
    dispatch,
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Battle);
