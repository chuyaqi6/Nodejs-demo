#!/usr/bin/node
/*
 * 02-export-var 模块
const p = require('./02-export-var');

console.dir(module);
console.log(p);
*/

/*
 * 02-export-function 模块
const circle = require('./02-export-function');
console.log('r = 10, circle area: %d',circle(10).area());
console.log('r = 10,circle circmference: %d',circle(10).circumference());
*/
/*
 * 02-export-object 模块
const circle = require('./02-export-object'),
      log = console.log;
log('r = 10,circle diameter:',circle.diameter(10));
log('r = 10,circle area:',circle.area(10));
log('r = 10,circle circumference:',circle.circumference(10));
*/

/*
 * 02-export-var 模块
 */
const circle = require('./02-export-object-v2'),
      log = console.log;
log('r = 10,circle area:',circle.area(10));
log('r = 10,circle diameter:',circle.diameter(10));
log('r = 10,circle circumference:',circle.circumference(10));


