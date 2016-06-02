/* tslint:disable:no-shadowed-variable */
/* tslint:disable:no-unused-variable */
import test = require('blue-tape');
import { DockerMachine, Options } from './index';
const config = require('../my_config.json');

console.log('config', config);

test('dockermachine-cli-js', t => {
  t.test('ls', t => {
    let dockerMachine = new DockerMachine();

    return dockerMachine.command('ls').then(function (data) {
      //console.log(data);
      t.ok(data);
    });
  });

  t.test('ls2 failing', t => {
    let dockerMachine = new DockerMachine();

    return t.shouldFail(dockerMachine.command('ls2'));
  });

  t.test('ls with callback', t => {
    let dockerMachine = new DockerMachine();

    return dockerMachine.command('ls', function (err, data) {
      //console.log('data = ', data);
      t.ok(data);
      t.end();
    });
  });

  t.test('ls with callback failing', t => {
    let dockerMachine = new DockerMachine();

    return dockerMachine.command('ls2', function (err, data) {
      //console.log('err = ', err);
      //console.log('data = ', data);
      t.ok(err);
      t.end();
    });
  });

  //t.test('create machinename', t => {
  //  const awsDriver = new Driver(


  //  //const options = new Options(
  //  //  /* driver         */ awsDriver,
  //  //  /* currentWorkingDirectory */ null,
  //  //  /* swarm          */ null,
  //  //  /* swarmDiscovery */ null,
  //  //  /* swarmMaster    */ null);


  //  const dockerMachine = new DockerMachine(options);

  //  dockerMachine.command('create machinename').then(function (data) {
  //    console.log('data = ', data);
  //  });

  //  t.end();
  //});

  //t.test('config', t => {
  //  let dockerMachine = new DockerMachine();

  //  //dockerMachine.command('config machinename').then(function (data) {
  //  //  console.log(data);
  //  //});

  //  dockerMachine.command('inspect machinename').then(function (data) {
  //    console.log(data);
  //  });

  //  t.end();
  //});


});
