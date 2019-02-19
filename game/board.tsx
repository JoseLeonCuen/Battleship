
// dependencies
import * as React from 'react';
import { connect } from 'react-redux';
// files
import Player, {PlayerProps} from './player';

const Game = (props)=>{
    return (
        <div className="board">
            <h1>Battleship</h1>
            <Player player={props.player[1]} dispatch={props.dispatch}/>
            <Player player={props.player[2]} dispatch={props.dispatch}/>
        </div>
    )
}
const mapStateToProps = state => {    
    return {
        turn: state.turn,
        player: state.player
    }
}

const mapDispatchToProps = (dispatch) =>{
    dispatch({type:'INITIALIZE'});
    return {
        dispatch
    };
}

export default connect(        
    mapStateToProps,
    mapDispatchToProps
)(Game);
