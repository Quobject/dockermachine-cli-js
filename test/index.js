/**
* Copyright 2015 Matthias Ludwig
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
**/

/*global describe, it, before */
var DockerMachine = require('../lib/index.js');
var path = require('path');
var should = require('chai').should();
var assert = require('chai').assert;


var config = require('../my_config.json');


describe('DockerMachine', function () {

  //it('should merge opts', function () {
  //  var dockerMachine = new DockerMachine({ a: 'a' });
  //  assert.isNotNull(dockerMachine);
  //  assert.equal(dockerMachine.a, 'a');
  //  //console.log('dockerMachine', dockerMachine);
  //});


  //it('command ls should pass', function (done) {
  //  var dockerMachine = new DockerMachine();

  //  assert.isNotNull(dockerMachine);
  //  var failed = false;
  //  var err = null;
  //  dockerMachine.command('ls').then(function (data) {
  //    console.log('data = ', data);
  //    assert.isNotNull(data);
  //  }).finally(function () {
  //    //console.log('finally ');
  //    assert.isFalse(failed);
  //    assert.isNull(err);
  //    done();
  //  });
  //});


  //it('command ls2 should fail', function (done) {
  //  var dockerMachine = new DockerMachine();
  //  assert.isNotNull(dockerMachine);
  //  var failed = false;
  //  var err = null;
  //  dockerMachine.command('ls2').then(function (data) {
  //    //console.log('data = ', data);
  //    assert.isNotNull(data);
  //  }).catch(function (error) {
  //    assert.isNotNull(error);
  //    err = error;
  //    failed = true;
  //    //console.log('error = ', error);
  //  }).finally(function () {
  //    //console.log('finally ');
  //    assert.isTrue(failed);
  //    assert.isNotNull(err);
  //    done();
  //  });
  //});


  //it('command create should pass', function (done) {
  //  this.timeout(10*60*1000);//10 minutes
  //  var dockerMachine = new DockerMachine({
  //    driver: {
  //      'driver': 'amazonec2',
  //      'amazonec2-access-key': config.aws.accessKeyId,
  //      'amazonec2-secret-key': config.aws.secretAccessKey,
  //      'amazonec2-region': 'ap-southeast-2',
  //      'amazonec2-vpc-id': 'vpc-3413c051',
  //      'amazonec2-ami': 'ami-b59ce48f',
  //      'amazonec2-zone': 'a',
  //      'amazonec2-instance-type': 't2.micro',
  //      'amazonec2-root-size': '8'
  //    }
  //  });

  //  assert.isNotNull(dockerMachine);
  //  var failed = false;
  //  var err = null;
  //  dockerMachine.command('create machinename').then(function (data) {
  //    console.log('data = ', data);
  //    assert.isNotNull(data);
  //  }).finally(function () {
  //    //console.log('finally ');
  //    assert.isFalse(failed);
  //    assert.isNull(err);
  //    done();
  //  });
  //});

  //it('command ssh should pass', function (done) {
  //  this.timeout(10 * 60 * 1000);//10 minutes
  //  var dockerMachine = new DockerMachine();

  //  assert.isNotNull(dockerMachine);
  //  var failed = false;
  //  var err = null;
  //  dockerMachine.command('ssh machinename \'echo A file created remotely! >foo.txt\'').then(function (data) {
  //    console.log('data = ', data);
  //    assert.isNotNull(data);
  //  }).finally(function () {
  //    //console.log('finally ');
  //    assert.isFalse(failed);
  //    assert.isNull(err);
  //    done();
  //  });
  //});

  //it('command inspect should pass', function (done) {
  //  var dockerMachine = new DockerMachine();

  //  assert.isNotNull(dockerMachine);
  //  var failed = false;
  //  var err = null;
  //  dockerMachine.command('inspect consul1').then(function (data) {
  //    console.log('data = ', data);
  //    assert.isNotNull(data);
  //  }).finally(function () {
  //    //console.log('finally ');
  //    assert.isFalse(failed);
  //    assert.isNull(err);
  //    done();
  //  });
  //});

  //it('command inspect with format should pass', function (done) {
  //  var dockerMachine = new DockerMachine();

  //  assert.isNotNull(dockerMachine);
  //  var failed = false;
  //  var err = null;
  //  dockerMachine.command('inspect consul2 --format \'{{ .Driver.PrivateIPAddress }}\'').then(function (data) {
  //    console.log('data = ', data);
  //    assert.isNotNull(data);
  //  }).finally(function () {
  //    //console.log('finally ');
  //    assert.isFalse(failed);
  //    assert.isNull(err);
  //    done();
  //  });
  //});

  it('command config should pass', function (done) {
    this.timeout(1 * 60 * 1000);//1 minute
    var dockerMachine = new DockerMachine();

    assert.isNotNull(dockerMachine);
    var failed = false;
    var err = null;
    dockerMachine.command('config consul-1-development.quobject.io').then(function (data) {
      console.log('data = ', data);
      assert.isNotNull(data);
    }).finally(function () {
      //console.log('finally ');
      assert.isFalse(failed);
      assert.isNull(err);
      done();
    });
  });


  //it('command ip should pass', function (done) {
  //  this.timeout(1 * 60 * 1000);//1 minute
  //  var dockerMachine = new DockerMachine();

  //  assert.isNotNull(dockerMachine);
  //  var failed = false;
  //  var err = null;
  //  dockerMachine.command('ip machinename').then(function (data) {
  //    console.log('data = ', data);
  //    assert.isNotNull(data);
  //  }).finally(function () {
  //    //console.log('finally ');
  //    assert.isFalse(failed);
  //    assert.isNull(err);
  //    done();
  //  });
  //});

});


