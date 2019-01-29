
// dependencies
import * as React from 'react';
// files
import Ships, {ShipProps} from './ships';
import Grid from './grid';

export interface PlayerProps{
    player:{
        id:number;
        ships:ShipProps[];
    }
}

export default function Player(props:PlayerProps){    
    // player:any;
    // constructor(props){
    //     this.player=props.p;
    // }
    // render(){
        return(
            <React.Fragment>
                <Ships ships={props.player.ships}/>
                <Grid player={props.player.id}/>
            </React.Fragment>            
        )
    // }
}

