"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ships_1 = require("./ships");
const grid_1 = require("./grid");
function Player(props) {
    return (React.createElement(React.Fragment, null,
        React.createElement(ships_1.default, { ships: props.player.ships }),
        React.createElement(grid_1.default, { player: props.player.id })));
}
exports.default = Player;
//# sourceMappingURL=player.js.map