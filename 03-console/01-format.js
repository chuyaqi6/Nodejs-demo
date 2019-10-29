#!/usr/bin/node

const log = console.log,
      error = console.error;

var cyq = {
  'Name':'褚雅琦',
  'QQ':'2484917266',
  'Age':21

};

log('Name:%s',cyq.Name);
log('Age:%d',cyq.Age);
log('Chuyaqi Info:%J',cyq);

log('Name:',cyq.Name);
log(`Age is ${cyq.Age}`);

error('Error:something is wrong!');

