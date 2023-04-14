const path = require('path');

module.exports = {
  entery: {
    profile: './src/profile/index.js',
    dashboard: './src/dashboard/index.js',
  },
  output: {
    filename: '[path].js',
    path: path.join(__dirname, 'build'),
  },
};
