"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const shootReducer_1 = require("./shootReducer");
exports.default = redux_1.combineReducers({
    shoot: shootReducer_1.default
});
//# sourceMappingURL=index.js.map