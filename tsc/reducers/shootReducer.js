"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function shoot(state = {}, action) {
    switch (action.type) {
        case 'hit':
            var newState = Object.assign({}, state);
            newState.ships[action.ship].health--;
            return newState;
        default:
            return state;
    }
}
exports.default = shoot;
//# sourceMappingURL=shootReducer.js.map