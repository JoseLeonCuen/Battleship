"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
class Ships extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            ships: props.ships
        };
    }
    render() {
        return (React.createElement("h2", null, "This will display the ships"));
    }
}
exports.default = Ships;
//# sourceMappingURL=ships.js.map