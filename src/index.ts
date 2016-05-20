/// <reference path="./../typings/index.d.ts" />
import * as _ from 'lodash'

class DockerMachine {

  constructor(private options: Options) {

  }

  command(command: string, callback: () => void ) {

  }  



}


interface Options {
  driver: Driver;
}

interface Driver {

}

class AWSDriver implements Driver {
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
