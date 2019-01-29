
export default function shoot(state = {},action){
    switch(action.type){
        case 'hit':
        var newState = {...state};
        newState.ships[action.ship].health--;
            return newState;
        default: 
            return state;
    }
}
