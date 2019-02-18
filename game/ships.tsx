
// dependencies
import * as React from 'react';
//files
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

export default class Ships extends React.Component<ShipProps>{    
    constructor(props){
        super(props);
        this.state={
            ships: props.ships
        }
    }
    render(){
        return(
            <h2>This will display the ships</h2>
        )
    }
}