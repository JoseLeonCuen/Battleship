
// dependencies
import * as React from 'react';
// files
import Cell, {CellProps} from './cell';


export default class Grid extends React.Component{
    player: number;
    grid:CellProps[];
    constructor(props){
        super(props);
        this.player=props.player;
        this.grid=[];
    }
    generateGrid(){

    }
    render(){
        return(
            <Cell/>
        )
    }
}

