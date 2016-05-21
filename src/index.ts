// import * as _ from 'lodash'
import * as Promise from 'bluebird'

export class DockerMachine {

  constructor(private options?: Options) {

  }

  command(command: string, callback?: () => void) {
    return Promise.resolve().then(function () {
      console.log('test')
    })
  }
}

export interface Options {
  driver: Driver
}

export interface Driver {

}

export class AWSDriver implements Driver {
  driver: string = 'amazonec2'
  'amazonec2-access-key': string
  'amazonec2-secret-key': string
  'amazonec2-region': string
  'amazonec2-vpc-id': string
  'amazonec2-ami': string
  'amazonec2-zone': string
  'amazonec2-instance-type': string
  'amazonec2-root-size': string
}
