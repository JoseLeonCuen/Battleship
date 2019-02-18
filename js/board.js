"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const player_1 = require("./player");
const Game = (props) => {
    var turn = 0;
    return (React.createElement("div", null,
        React.createElement("h1", null, "Battleship"),
        React.createElement(player_1.default, { player: props.player[1] }),
        React.createElement(player_1.default, { player: props.player[2] })));
};
const mapStateToProps = state => {
    return {
        player: state.player
    };
};
exports.default = react_redux_1.connect(mapStateToProps)(Game);
//# sourceMappingURL=board.js.map