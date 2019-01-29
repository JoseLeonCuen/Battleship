"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_dom_1 = require("react-dom");
const redux_1 = require("redux");
const react_redux_1 = require("react-redux");
const index_1 = require("./reducers/index");
const board_1 = require("./board");
const root = document.getElementById('game');
var store = redux_1.createStore(index_1.default);
react_dom_1.render(React.createElement(react_redux_1.Provider, { store: store },
    React.createElement(board_1.default, { text: "Here will be the board!" })), root);
//# sourceMappingURL=main.js.map