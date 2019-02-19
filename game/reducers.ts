// files
import initializeState  from './utils/startGame';


var defaultState = initializeState();

export default function initialize(state=defaultState,action){
    switch(action.type){
        case 'INITIALIZE':
            return state;
        case 'HIT':        
            var newState = {...state};
            newState[action.player].ships[action.ship].health--;
            return newState;
        default: 
            return state;
    }
}
