
// import { ShipProps } from '../ships'


export default function shoot(state=null,action){
    switch(action.type){
        case 'HIT':        
        var newState = {...state};
        newState.ships[action.ship].health--;
            return newState;
        default: 
            return state;
    }
}
