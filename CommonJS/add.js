var example = require('./module/example');
var a = require('./module/emitter');
var example1 = require('./module/example1');
example1
a.on('ready', function() {
    console.log('module a is ready');
});
console.log(module);
console.log(example.x);
console.log(example.addX);