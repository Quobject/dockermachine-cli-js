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
    'amazonec2-access-key': PUTVALUEHERE,
    'amazonec2-secret-key': abcdefPUTVALUEHERE,
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
//  { name: 'machinename5aaaaaaaaaaaaaaaaaaaaaaaaa',
//    active: '',
//    driver: 'amazonec2',
//    state: 'Running',
//    url: 'tcp://52.64.171.124:2376',
//    swarm: '' } ] }
