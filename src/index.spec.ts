/* tslint:disable:no-shadowed-variable */
import test = require('blue-tape');
import { DockerMachine } from './index';
const config = require('../my_config.json');

console.log('config', config);

test('dockermachine-cli-js', t => {
  //t.test('ls', t => {
  //  let dockerMachine = new DockerMachine();

  //  //dockerMachine.command('ls').then(function (data) {
  //  //  console.log(data);
  //  //});

  //  //dockerMachine.command('ls2').then(function (data) {
  //  //  console.log(data);
  //  //});

  //  t.end();
  //});

  t.test('create machinename', t => {
    let dockerMachine = new DockerMachine();

    dockerMachine.command('ls').then(function (data) {
      console.log('data = ', data);
    });

    t.end();
  });


});
