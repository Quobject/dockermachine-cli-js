/* tslint:disable:no-shadowed-variable */
/* tslint:disable:no-unused-variable */
import test = require('blue-tape');
import { DockerMachine, AWSDriver } from './index';
const config = require('../my_config.json');

console.log('config', config);

test('dockermachine-cli-js', t => {
  //t.test('ls', t => {
  //  let dockerMachine = new DockerMachine();

  //  //dockerMachine.command('ls').then(function (data) {
  //  //  console.log(data);
  //  //});

  //  //dockerMachine.command('ls', function (err, data) {
  //  //  console.log('data = ', data);
  //  //});


  //  //dockerMachine.command('ls2').then(function (data) {
  //  //  console.log(data);
  //  //});

  //  t.end();
  //});

  //t.test('create machinename', t => {
  //  const awsDriver = new AWSDriver(
  //    /* accessKey    */ config.accessKeyId,
  //    /* secretKey    */ config.secretAccessKey,
  //    /* region       */ 'ap-southeast-2',
  //    /* vpcId        */ 'vpc-3413c051',
  //    /* ami          */ 'ami-b59ce48f',
  //    /* zone         */ 'a',
  //    /* instanceType */ 't2.micro',
  //    /* rootSize     */ '8');


  //  const dockerMachine = new DockerMachine({ driver: awsDriver });

  //  dockerMachine.command('create machinename').then(function (data) {
  //    console.log('data = ', data);
  //  });

  //  t.end();
  //});

  t.test('config', t => {
    let dockerMachine = new DockerMachine();

    //dockerMachine.command('config machinename').then(function (data) {
    //  console.log(data);
    //});

    dockerMachine.command('inspect machinename').then(function (data) {
      console.log(data);
    });

    t.end();
  });


});
