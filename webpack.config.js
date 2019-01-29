const path = require('path');

module.exports = {
  entry: ['./tsc/main.js'],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'game.js'
  }
};