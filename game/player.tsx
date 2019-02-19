
// dependencies
import * as React from 'react';
// files
import Ships, {ShipType} from './ships';
import Grid from './grid';

export interface PlayerProps{
    player:{
        id: number;
        ships: ShipType[];
    }
    dispatch: Function;
}

export default function Player(props:PlayerProps){    
    // player:any;
    // constructor(props){
    //     this.player=props.p;
    // }
    // render(){
        return(
            <div className="player">
                <Ships ships={props.player.ships}/>
                <Grid player={props.player.id}/>
            </div>
        )
    // }
}

