var path = require('path');

var appRoot = 'app/';

module.exports = {
  root: appRoot,
  source: [appRoot + '../node_modules/typescript/bin/lib.es6.d.ts', appRoot + '../typings/**/*.d.ts', appRoot + '**/*.ts'],
  html: appRoot + '**/*.html',
  less: 'less/*.less',
  style: 'styles/**/*.css',
  output: 'wwwroot/',
  doc:'./doc',
  e2eSpecsSrc: 'test/e2e/src/*.js',
  e2eSpecsDist: 'test/e2e/dist/'
};
