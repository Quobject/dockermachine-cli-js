# dockermachine-cli-js
A node.js wrapper for the docker-machine command line tool

[![NPM](https://nodei.co/npm/dockermachine-cli-js.png?downloads=true&downloadRank=true)](https://nodei.co/npm/dockermachine-cli-js/)
[![NPM](https://nodei.co/npm-dl/dockermachine-cli-js.png?months=6&height=3)](https://nodei.co/npm/dockermachine-cli-js/)

## Installation

### Step 1: Prerequisites

The docker-machine command line tool must be installed and accessible in the path

### Step 2: Installation
    
    npm install dockermachine-cli-js
    
Then:

```js
var DockerMachine = require('dockermachine-cli-js');
```

## Usage

With promise

```js
var dockerMachine = new DockerMachine({
  driver: {
    'driver': 'amazonec2',
    'amazonec2-access-key': 'PUTVALUEHERE',
    'amazonec2-secret-key': 'abcdefPUTVALUEHERE',
    'amazonec2-region': 'ap-southeast-2',
    'amazonec2-vpc-id': 'vpc-1234567',
    'amazonec2-ami': 'ami-b59ce48f',
    'amazonec2-zone': 'a',
    'amazonec2-instance-type': 't2.micro',
    'amazonec2-root-size': '8'
  }
});

dockerMachine.command('create machinename').then(function (data) {
  console.log('data = ', data); 
});

//data = {
//  command: 'docker-machine create machinename --driver amazonec2 --amazonec2-access-key PUTVALUEHERE --amazonec2-secret-key abcdefPUTVALUEHERE --amazonec2-region ap-southeast-2 --amazonec2-vpc-id vpc-1234567 --amazonec2-ami ami-b59ce48f --amazonec2-zone a --amazonec2-instance-type t2.micro --amazonec2-root-size 8 ',
//  raw: '["Launching instance...\\nTo see how to connect Docker to this machine, run: docker-machine env machinename\\n",""]'
//}

```

With callback:

```js

dockerMachine.command('create machinename', function (err, data) {
  console.log('data = ', data);
});

```

* ls

```js
dockerMachine.command('ls').then(function (data) {
  console.log('data = ', data); 
});

//data =  { command: 'docker-machine ls ',
//  raw: '["NAME                                    ACTIVE   DRIVER      STATE     URL                        SWARM\\nmachinename5                                     amazonec2   Running   tcp://52.64.159.14:2376     \\nmachinename5
//            amazonec2   Running   tcp://52.64.171.124:2376   \\n",""]',
//machineList:
//[ { name: 'machinename5',
//  active: '',
//  driver: 'amazonec2',
//  state: 'Running',
//  url: 'tcp://52.64.159.14:2376',
//  swarm: '' },
//  { name: 'machinename5',
//    active: '',
//    driver: 'amazonec2',
//    state: 'Running',
//    url: 'tcp://52.64.171.124:2376',
//    swarm: '' } ] }
```


* inspect

```js
dockerMachine.command('inspect machinename').then(function (data) {
  console.log('data = ', data); 
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
```


* config

```js
dockerMachine.command('config machinename').then(function (data) {
  console.log('data = ', data); 
});

//data = {
//  command: 'docker-machine config machinename ',
//  raw: '["--tlsverify --tlscacert=\\"/home/ubuntu/.docker/machine/machines/machinename/ca.pem\\" --tlscert=\\"/home/ubuntu/.docker/machine/machines/machinename/cert.pem\\" --tlskey=\\"/home/ubuntu/.docker/machine/machines/machinename/key.pem\\" -H=tcp://52.64.186.82:2376",""]',
//  machine:
//   {
//     tlsverify: true,
//     tlscacert: '/home/ubuntu/.docker/machine/machines/machinename/ca.pem',
//     tlscert: '/home/ubuntu/.docker/machine/machines/machinename/cert.pem',
//     tlskey: '/home/ubuntu/.docker/machine/machines/machinename/key.pem',
//     host: '52.64.186.89',
//     port: '2376'
//   }
//}