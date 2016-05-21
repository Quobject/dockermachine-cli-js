import test = require('blue-tape')
import { DockerMachine } from './index'

// const pkg = require('../package.json')

test('dockermachine-cli-js', t => {
  t.test('', t => {
    let dockerMachine = new DockerMachine()

    dockerMachine.command('ls').then(function (data) {
      // todo
      console.log(data)
    })

    t.end()
  })
})
