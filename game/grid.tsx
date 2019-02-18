
// dependencies
import * as React from 'react';
// files
import Cell, {CellProps} from './cell';


export default class Grid extends React.Component<{ player: number}>{
    // player: number;
    grid:CellProps[];
    constructor(props){
        super(props);
        this.state={
            player: this.props.player,
            grid:[]
        }        
    }
    generateGrid(){

    }
    render(){
        return(
            <Cell/>
        )
    }
}

