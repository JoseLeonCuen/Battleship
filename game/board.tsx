
// dependencies
import * as React from 'react';
import { connect } from 'react-redux';
import { createStore } from 'redux';
// files
import Player, {PlayerProps} from './player';

const Game = (props)=>{
    var turn = 0;
    return (
        <div>
            <h1>Battleship</h1>
            <Player player={props.players[0]}/>
            <Player player={props.players[1]}/>
        </div>
    )
}
const mapStateToProps = state =>{
    return{
        players: state.players
    }
}

export default connect(
    mapStateToProps
)(Game);