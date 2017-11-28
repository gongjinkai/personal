var example = require('./module/example');
var jquery = require('./module/jquery-2.1.1.min');
exports.$ = jquery;
console.log(module);
console.log(example.x);
console.log(example.addX);