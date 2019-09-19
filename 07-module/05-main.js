#!/usr/bin/node

const obj = require('./05-export-all.js'),
      log = console.log;

log(obj.pi);
log(obj.circle(10).area());

var c = new obj.Circle(20);
log(c.diameter());
