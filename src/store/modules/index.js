/**
 * Created by Akhtar on  26/04/2019.
 */

import camelCase from 'lodash/camelCase';

// extract js files inside modules folder
const requireModule = require.context('.', false, /\.js$/);
const modules = {};

requireModule.keys().forEach(fileName => {
  if (fileName === './index.js') return;
  const moduleName = camelCase(fileName.replace(/(\.\/|\.js)/g, ''));
  modules[moduleName] = requireModule(fileName).default;
});

export default modules;
