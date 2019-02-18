

// files
import initializeState  from '../startGame';

export default function initialize(state={},action){
    switch(action.type){
        case 'INITIALIZE':     
        
            return initializeState();
        default: 
            return state;
    }
}
