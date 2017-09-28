const camelcase = require('camelcase');

module.exports = function(name) {
  return `Hey, ${name}! Camel case looks like this: ${camelcase('--foo.bar')}`;
};
