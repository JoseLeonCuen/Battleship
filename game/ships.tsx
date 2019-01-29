
// dependencies
import * as React from 'react';
//files
export interface PositionProps{
    x:number;
    y:number;
}
export interface ShipProps{
    name:string;
    position: PositionProps[];
    health: number;
}

export default class Ships extends React.Component{
    ships: ShipProps[];
    constructor(props){
        super(props);
        this.ships= props.ships;
    }
    render(){
        return(
            <h2>This will display the ships</h2>
        )
    }
}