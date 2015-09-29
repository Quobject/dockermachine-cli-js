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


describe('docker', function () {

  //it('should merge opts', function () {
  //  var dockerMachine = new DockerMachine({ a: 'a' });
  //  assert.isNotNull(dockerMachine);
  //  assert.equal(dockerMachine.a, 'a');
  //  //console.log('dockerMachine', dockerMachine);
  //});


  it('command ls should pass', function (done) {
    var dockerMachine = new DockerMachine();

    assert.isNotNull(dockerMachine);
    var failed = false;
    var err = null;
    dockerMachine.command('ls').then(function (data) {
      console.log('data = ', data);
      assert.isNotNull(data);
    }).finally(function () {
      //console.log('finally ');
      assert.isFalse(failed);
      assert.isNull(err);
      done();
    });
  });


  it('command ls2 should fail', function (done) {
    var dockerMachine = new DockerMachine();
    assert.isNotNull(dockerMachine);
    var failed = false;
    var err = null;
    dockerMachine.command('ls2').then(function (data) {
      //console.log('data = ', data);
      assert.isNotNull(data);
    }).catch(function (error) {
      assert.isNotNull(error);
      err = error;
      failed = true;
      //console.log('error = ', error);
    }).finally(function () {
      //console.log('finally ');
      assert.isTrue(failed);
      assert.isNotNull(err);
      done();
    });
  });


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

  it('command inspect should pass', function (done) {
    var dockerMachine = new DockerMachine();

    assert.isNotNull(dockerMachine);
    var failed = false;
    var err = null;
    dockerMachine.command('inspect machinename').then(function (data) {
      console.log('data = ', data);
      assert.isNotNull(data);
    }).finally(function () {
      //console.log('finally ');
      assert.isFalse(failed);
      assert.isNull(err);
      done();
    });
  });

  it('command config should pass', function (done) {
    this.timeout(1 * 60 * 1000);//1 minute
    var dockerMachine = new DockerMachine();

    assert.isNotNull(dockerMachine);
    var failed = false;
    var err = null;
    dockerMachine.command('config machinename').then(function (data) {
      console.log('data = ', data);
      assert.isNotNull(data);
    }).finally(function () {
      //console.log('finally ');
      assert.isFalse(failed);
      assert.isNull(err);
      done();
    });
  });


});




//data =  { command: 'docker-machine inspect machinename ',                                                                      
//  raw: '["{\\n    \\"ConfigVersion\\": 1,\\n    \\"Driver\\": {\\n        \\"IPAddress\\": \\"52.64.186.82\\",\\n        \\"SSH
//User\\": \\"ubuntu\\",\\n        \\"SSHPort\\": 22,\\n        \\"MachineName\\": \\"machinename\\",\\n        \\"CaCertPath\\":
// \\"/home/ubuntu/.docker/machine/certs/ca.pem\\",\\n        \\"PrivateKeyPath\\": \\"/home/ubuntu/.docker/machine/certs/ca-key.
//pem\\",\\n        \\"SwarmMaster\\": false,\\n        \\"SwarmHost\\": \\"tcp://0.0.0.0:3376\\",\\n        \\"SwarmDiscovery\\"
//: \\"\\",\\n        \\"Id\\": \\"3b185955ffdb942797c64c78af725cb5\\",\\n        \\"AccessKey\\": \\"PUTVALUEHERE\\",\\n
//        \\"SecretKey\\": \\"abcdefPUTVALUEHERE\\",\\n        \\"SessionToken\\": \\"\\",\\n        \\"Reg
//ion\\": \\"ap-southeast-2\\",\\n        \\"AMI\\": \\"ami-b59ce48f\\",\\n        \\"SSHKeyID\\": 0,\\n        \\"KeyName\\": \\
//"machinename\\",\\n        \\"InstanceId\\": \\"i-d7c21808\\",\\n        \\"InstanceType\\": \\"t2.micro\\",\\n        \\"Priva
//teIPAddress\\": \\"172.31.10.244\\",\\n        \\"SecurityGroupId\\": \\"sg-7db92718\\",\\n        \\"SecurityGroupName\\": \\"
//docker-machine\\",\\n        \\"ReservationId\\": \\"\\",\\n        \\"RootSize\\": 8,\\n        \\"IamInstanceProfile\\": \\"\
//\",\\n        \\"VpcId\\": \\"vpc-3413c051\\",\\n        \\"SubnetId\\": \\"subnet-5e44f13b\\",\\n        \\"Zone\\": \\"a\\",\
//\n        \\"RequestSpotInstance\\": false,\\n        \\"SpotPrice\\": \\"0.50\\",\\n        \\"PrivateIPOnly\\": false,\\n    
//    \\"Monitoring\\": false\\n    },\\n    \\"DriverName\\": \\"amazonec2\\",\\n    \\"HostOptions\\": {\\n        \\"Driver\\"
//: \\"\\",\\n        \\"Memory\\": 0,\\n        \\"Disk\\": 0,\\n        \\"EngineOptions\\": {\\n            \\"ArbitraryFlags\
//\": [],\\n            \\"Dns\\": null,\\n            \\"GraphDir\\": \\"\\",\\n            \\"Env\\": [],\\n            \\"Ipv6
//\\": false,\\n            \\"InsecureRegistry\\": [],\\n            \\"Labels\\": [],\\n            \\"LogLevel\\": \\"\\",\\n 
//           \\"StorageDriver\\": \\"\\",\\n            \\"SelinuxEnabled\\": false,\\n            \\"TlsCaCert\\": \\"\\",\\n   
//         \\"TlsCert\\": \\"\\",\\n            \\"TlsKey\\": \\"\\",\\n            \\"TlsVerify\\": true,\\n            \\"Regis
//  tryMirror\\": [],\\n            \\"InstallURL\\": \\"https://get.docker.com\\"\\n        },\\n        \\"SwarmOptions\\": {\\n 
//           \\"IsSwarm\\": false,\\n            \\"Address\\": \\"\\",\\n            \\"Discovery\\": \\"\\",\\n            \\"M
//  aster\\": false,\\n            \\"Host\\": \\"tcp://0.0.0.0:3376\\",\\n            \\"Image\\": \\"swarm:latest\\",\\n         
//   \\"Strategy\\": \\"spread\\",\\n            \\"Heartbeat\\": 0,\\n            \\"Overcommit\\": 0,\\n            \\"TlsCaCer
//  t\\": \\"\\",\\n            \\"TlsCert\\": \\"\\",\\n            \\"TlsKey\\": \\"\\",\\n            \\"TlsVerify\\": false,\\n
//            \\"ArbitraryFlags\\": []\\n        },\\n        \\"AuthOptions\\": {\\n            \\"StorePath\\": \\"\\",\\n     
//       \\"CaCertPath\\": \\"/home/ubuntu/.docker/machine/certs/ca.pem\\",\\n            \\"CaCertRemotePath\\": \\"\\",\\n     
//       \\"ServerCertPath\\": \\"/home/ubuntu/.docker/machine/machines/machinename/server.pem\\",\\n            \\"ServerKeyPath
//\\": \\"/home/ubuntu/.docker/machine/machines/machinename/server-key.pem\\",\\n            \\"ClientKeyPath\\": \\"/home/ubuntu
///.docker/machine/certs/key.pem\\",\\n            \\"ServerCertRemotePath\\": \\"\\",\\n            \\"ServerKeyRemotePath\\": \
//\"\\",\\n            \\"PrivateKeyPath\\": \\"/home/ubuntu/.docker/machine/certs/ca-key.pem\\",\\n            \\"ClientCertPath
//\\": \\"/home/ubuntu/.docker/machine/certs/cert.pem\\"\\n        }\\n    },\\n    \\"StorePath\\": \\"/home/ubuntu/.docker/mach
//              ine/machines/machinename\\"\\n}\\n",""]',                                                                                      
//              machine:                                                                                                                     
//                { ConfigVersion: 1,                                                                                                         
//                  Driver:                                                                                                                   
//                  { IPAddress: '52.64.186.82',                                                                                             
//                    SSHUser: 'ubuntu',                                                                                                     
//                    SSHPort: 22,                                                                                                           
//                    MachineName: 'machinename',                                                                                            
//                    CaCertPath: '/home/ubuntu/.docker/machine/certs/ca.pem',                                                               
//                    PrivateKeyPath: '/home/ubuntu/.docker/machine/certs/ca-key.pem',                                                       
//                    SwarmMaster: false,                                                                                                    
//                    SwarmHost: 'tcp://0.0.0.0:3376',                                                                                       
//                    SwarmDiscovery: '',                                                                                                    
//                    Id: '3b185955ffdb942797c64c78af725caa',                                                                                
//                    AccessKey: 'PUTVALUEHERE',                                                                                     
//                    SecretKey: 'abcdefPUTVALUEHERE',                                                                 
//                    SessionToken: '',                                                                                                      
//                    Region: 'ap-southeast-2',                                                                                              
//                    AMI: 'ami-b59ce48f',                                                                                                   
//                    SSHKeyID: 0,                                                                                                           
//                    KeyName: 'machinename',                                                                                                
//                    InstanceId: 'i-d7c21808',                                                                                              
//                    InstanceType: 't2.micro',                                                                                              
//                    PrivateIPAddress: '172.31.10.211',                                                                                     
//                    SecurityGroupId: 'sg-7db927aa',                                                                                        
//                    SecurityGroupName: 'docker-machine',                                                                                   
//                    ReservationId: '',                                                                                                     
//                    RootSize: 8,                                                                                                           
//                    IamInstanceProfile: '',                                                                                                
//                    VpcId: 'vpc-3413c0aa',                                                                                                 
//                    SubnetId: 'subnet-5e44f1aa',                                                                                           
//                    Zone: 'a',                                                                                                             
//                    RequestSpotInstance: false,                                                                                            
//                    SpotPrice: '0.50',                                                                                                     
//                    PrivateIPOnly: false,                                                                                                  
//                    Monitoring: false },                                                                                                   
//                  DriverName: 'amazonec2',                                                                                                  
//                  HostOptions:                                                                                                              
//                  { Driver: '',                                                                                                            
//                    Memory: 0,                                                                                                             
//                    Disk: 0,                                                                                                               
//                    EngineOptions: [Object],                                                                                               
//                    SwarmOptions: [Object],                                                                                                
//                    AuthOptions: [Object] },                                                                                               
//                  StorePath: '/home/ubuntu/.docker/machine/machines/machinename' } }                                                        