/* tslint:disable:no-shadowed-variable */
/* tslint:disable:no-unused-variable */
import test = require('blue-tape');
import { DockerMachine, Options } from './index';
import * as util from 'util';
const config = require('../my_config.json');

console.log('config', config);

test('dockermachine-cli-js', t => {
  //t.test('ls', t => {
  //  let dockerMachine = new DockerMachine();

  //  return dockerMachine.command('ls').then(function (data) {
  //    //console.log(data);
  //    t.ok(data);
  //  });
  //});

  //t.test('ls2 failing', t => {
  //  let dockerMachine = new DockerMachine();

  //  return t.shouldFail(dockerMachine.command('ls2'));
  //});

  //t.test('ls with callback', t => {
  //  let dockerMachine = new DockerMachine();

  //  return dockerMachine.command('ls', function (err, data) {
  //    //console.log('data = ', data);
  //    t.ok(data);
  //    t.end();
  //  });
  //});

  //t.test('ls with callback failing', t => {
  //  let dockerMachine = new DockerMachine();

  //  return dockerMachine.command('ls2', function (err, data) {
  //    //console.log('err = ', err);
  //    //console.log('data = ', data);
  //    t.ok(err);
  //    t.end();
  //  });
  //});

  //t.test('create machinename', t => {
  //  const keyValueObject = {
  //    'driver': 'amazonec2',
  //    'amazonec2-access-key': config.accessKeyId,
  //    'amazonec2-secret-key': config.secretAccessKey,
  //    'amazonec2-ami': 'ami-b59ce48f',
  //    'amazonec2-region': 'ap-southeast-2',
  //    'amazonec2-zone': 'a',
  //    'amazonec2-instance-type': 't2.micro',
  //    'amazonec2-root-size': 8,
  //  };

  //  const options = new Options(
  //    /* keyValueObject */ keyValueObject,
  //    /* currentWorkingDirectory */ null
  //  );
  //  const dockerMachine = new DockerMachine(options);

  //  return dockerMachine.command('create machinename').then(function (data) {
  //    console.log(data);
  //    t.ok(data);
  //  });
  //});

  //t.test('ls', t => {
  //  let dockerMachine = new DockerMachine();

  //  return dockerMachine.command('ls').then(function (data) {
  //    console.log(data);
  //    t.ok(data);
  //  });
  //});

  t.test('inspect machinename', t => {
    let dockerMachine = new DockerMachine();

    return dockerMachine.command('inspect machinename').then(function (data) {
      console.log(util.inspect(data, {depth: 10}));
      t.ok(data);
    });
  });

});





