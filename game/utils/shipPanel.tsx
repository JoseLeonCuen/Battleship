
// dependencies
import * as React from 'react';

function displayShip(health){
    return (
        <span className="ship"> Ship: {health} </span>
    )
}
export default function listShips(ships){
    return ships.map((ship)=> this.displayShip(ship.health));
}