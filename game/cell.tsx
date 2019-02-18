
// depedencies
import * as React from 'react';

// files
import { PositionType } from './ships';

export interface CellProps{
    position: PositionType;
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
