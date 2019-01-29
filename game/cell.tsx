
// depedencies
import * as React from 'react';
//files
import {PositionProps} from './ships';

export interface CellProps{
    position: PositionProps;
    hit: string;
}

export default class Cell extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(<div className="cell"></div>)
    }
}
