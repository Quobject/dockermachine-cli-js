import test = require('blue-tape')
import {   } from './index'

const pkg = require('../package.json')

test('dockermachine-cli-js', t => {
  t.test('', t => {




    t.end()
  })
})




//test('cli-table-2-json', t => {
//  t.test('convert array of strings to array of objects', t => {

//    let lines = ['NAME      ACTIVE   DRIVER      STATE     URL                         SWARM',
//      'consul1   -        amazonec2   Running   tcp://54.175.200.212:2376   ',
//      'consul2   -        amazonec2   Running   tcp://52.23.236.38:2376     ',
//      'consul3   -        amazonec2   Running   tcp://54.85.111.241:2376    ',
//      '']


//    let expected = [{ active: '-', driver: 'amazonec2', name: 'consul1', state: 'Running', swarm: '', url: 'tcp://54.175.200.212:2376' }, { active: '-', driver: 'amazonec2', name: 'consul2', state: 'Running', swarm: '', url: 'tcp://52.23.236.38:2376' }, { active: '-', driver: 'amazonec2', name: 'consul3', state: 'Running', swarm: '', url: 'tcp://54.85.111.241:2376' }]

//    let result = cliTable2Json(lines)

//    //console.log('result', result)
//    //console.log('expected', expected)

//    t.equal(result.length, expected.length)
//    t.equal(result[0].name, expected[0].name)


//    t.end()
//  })
//})
