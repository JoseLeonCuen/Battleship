const path = require('path');

module.exports = {
  entry: ['./game/game.tsx'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'game.js'
  }
};