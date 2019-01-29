"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_redux_1 = require("react-redux");
const player_1 = require("./player");
const Game = (props) => {
    return (React.createElement("div", null,
        React.createElement("h1", null, "Battleship"),
        React.createElement(player_1.default, { player: props.players[0] }),
        React.createElement(player_1.default, { player: props.players[1] })));
};
const mapStateToProps = state => {
    return {
        players: state.players
    };
};
exports.default = react_redux_1.connect(mapStateToProps)(Game);
//# sourceMappingURL=board.js.map