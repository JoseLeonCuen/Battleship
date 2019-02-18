

// files
import { PositionType } from './ships'

function generateShip(length: number, begin: PositionType, end: PositionType){
    var between=[];
    if(length > 2){
        let orientation = begin.y == end.y ? 'hor' : 'ver',
            x= begin.x,
            y= begin.y;
        for(let e = 1; e <= length-2; e++){
            if(orientation=='hor'){
                between.push({x: x+e, y});
            }
            else{
                between.push({x, y: y+e});
            }
        }        
    }

    return {
        position: [begin, ...between ,end],
        health:length
    }
}

function generateState(){
    var player = {}
    for(let i = 1; i < 3; i++){
        player[i].ships=[
            generateShip(2,{x:3,y:3}, {x:3,y:4}),
            generateShip(3,{x:1,y:1}, {x:1,y:3}),
            generateShip(4,{x:7,y:6}, {x:10,y:6}),
            generateShip(5,{x:6,y:1}, {x:6,y:5})
        ]
    }
    return {
        turn: 1,
        player
    }
}

export default generateState();