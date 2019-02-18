
// dependencies
import * as React from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux';
import { Provider} from 'react-redux';
//files
import reducers from './reducers/index';
import Game from './board';

const root = document.getElementById('game');
var store = createStore(reducers);
render(
    <Provider store={store}>
        <Game/>
    </Provider>,root);


// --- STATE PLAN --- //
// var state={
//     turn:0,
//     player:{
//         1:{
//             ships: [
//                 {
//                     position:[
//                         {x:2,y:2},
//                         {x:2,y:3}
//                     ],
//                     health:2
//                 },
//                 {
//                     position:[
//                         {x:0,y:0},
//                         {x:0,y:1},
//                         {x:0,y:2}
//                     ],
//                     health:3
//                 },
//                 {
//                     position:[
//                         {x:2,y:9},
//                         {x:3,y:9},
//                         {x:4,y:9}
//                     ],
//                     health:3
//                 },
//                 {
//                     position:[
//                         {x:6,y:5},
//                         {x:7,y:5},
//                         {x:8,y:5},
//                         {x:9,y:5}
//                     ],
//                     health:4
//                 },
//                 {
//                     position:[
//                         {x:5,y:0},
//                         {x:5,y:1},
//                         {x:5,y:2},
//                         {x:5,y:3},
//                         {x:5,y:4}
//                     ],
//                     health:5
//                 }
//             ]
//         }
//     }
// }