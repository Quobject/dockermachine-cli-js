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
     machinename: 'aws_machine01',
     cwd: 'nginx'
   });

   dockerMachine.command(' to do').then(function (data) {
    console.log('data = ', data);
   })


```

With callback:

```js
   var docker = new Docker({
     cwd: 'nginx'
   });

  dockerMachine.command('to do', function (err, data) {
    console.log('data = ', data);
  });



```
