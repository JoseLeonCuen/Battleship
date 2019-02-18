"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const cell_1 = require("./cell");
class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player: this.props.player,
            grid: []
        };
    }
    generateGrid() {
    }
    render() {
        return (React.createElement(cell_1.default, null));
    }
}
exports.default = Grid;
//# sourceMappingURL=grid.js.map