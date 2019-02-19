
// dependencies
import * as React from 'react';

// files
import listShips from './utils/shipPanel'

export interface PositionType{
    x:number;
    y:number;
}
export interface ShipType{
    name:string;
    position: PositionType[];
    health: number;
}
export interface ShipProps{
    ships: ShipType[];
}

export default function Ships(props: ShipProps){             
        return(
            <React.Fragment>
                <h3>Ships</h3>
                <div className="shipList">
                    {listShips(props.ships)}
                </div>            
            </React.Fragment>            
        )
}
