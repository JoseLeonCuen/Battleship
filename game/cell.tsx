
// depedencies
import * as React from 'react';

// files
import { PositionType } from './ships';

export interface CellProps{
    position: PositionType;
    hit: string;
}

export default function Cell(props){
    return(
        <div className="cell"></div>
    )    
}
