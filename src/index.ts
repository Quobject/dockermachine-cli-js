import * as _ from 'lodash';
import * as Promise from 'bluebird';
import * as child_process from 'child_process';
import * as os from 'os';
import { cliTable2Json } from 'cli-table-2-json';
const exec = child_process.exec;


const extractResult = function (result) {

  const extracterArray = [
    {
      re: / ls /,
      run: function (resultp) {
        const obj = JSON.parse(resultp.raw);
        const lines = obj.split(os.EOL);
        resultp.machineList = cliTable2Json(lines);
        return resultp;
      },
    },
    {
      re: / config /,
      run: function (resultp) {
        const obj = JSON.parse(resultp.raw);
        const str = obj;
        const config = str.split(os.EOL).join(' ');

        const extractValue = function (strp: string, name: string, rep?: RegExp) {
          const re = rep || new RegExp('--' + name + '="([\\S]*)"', 'i');
          const m = re.exec(strp);

          if (m !== null) {
            if (m.index === re.lastIndex) {
              re.lastIndex++;
            }
          }

          return (m && m[1]) ? m[1] : null;
        };

        resultp.machine = {
          config: config,
          host: extractValue(str, null, /-H=tcp:\/\/(.*):/),
          port: extractValue(str, null, /-H=tcp:\/\/.*:(\d*)/),
          tlscacert: extractValue(str, 'tlscacert'),
          tlscert: extractValue(str, 'tlscert'),
          tlskey: extractValue(str, 'tlskey'),
          tlsverify: function (strp) {
            const re = /--tlsverify/;
            const m = re.exec(strp);

            if (m !== null) {
              if (m.index === re.lastIndex) {
                re.lastIndex++;
              }
            }
            return (m && m[0] && m[0] === '--tlsverify') || false;
          } (str),
        };

        return resultp;
      },
    },
    {
      re: / inspect /,
      run: function (resultp) {
        try {
          let obj = JSON.parse(resultp.raw);
          resultp.machine = JSON.parse(obj);
        } catch (e) {
          // do nothing
        }

        return resultp;
      },
    },
  ];

  extracterArray.forEach(function (extracter) {
    const re = extracter.re;
    const str = result.command;
    const m = re.exec(str);

    if (m !== null) {
      if (m.index === re.lastIndex) {
        re.lastIndex++;
      }
      return extracter.run(result);
    }
  });

  return result;
};


export class DockerMachine {

  constructor(private options: Options = {
    currentWorkingDirectory: null,
    driver: new EmptyDriver(),
    }) { }

  public command(command: string, callback?: (err, data) => void) {
    let dockerMachine = this;
    let execCommand = 'docker-machine ' + command;

    return Promise.resolve().then(function () {
      // let params = this.options.driver.toParams()       
      // console.log('dockerMachine = ', dockerMachine)
      let params = dockerMachine.options.driver.toParams();
      //console.log('params = ', params);

      execCommand += ' ' + params;
      //console.log('execCommand =', execCommand);

      let execOptions = {
        cwd: dockerMachine.options.currentWorkingDirectory,
        env: {
          DEBUG: '',
          HOME: process.env.HOME,
          PATH: process.env.PATH,
        },
        maxBuffer: 200 * 1024 * 1024,
      };

      console.log('exec options =', execOptions);

      return new Promise(function (resolve, reject) {
        exec(execCommand, execOptions, (error, stdout, stderr) => {
          if (error) {
            const message = `error: '${error}' stdout = '${stdout}' stderr = '${stderr}'`;
            console.error(message);
            reject(message);
          }
          //console.log(`stdout: ${stdout}`);
          resolve(stdout);
        });
      });
    }).then(function (data) {

      let result = {
        command: execCommand,
        raw: JSON.stringify(data),
      };
      return extractResult(result);

    }).nodeify(callback);
  }
}

export interface Options {
  driver: Driver;
  currentWorkingDirectory?: string;
}

export interface Driver {
  toParams(): string;
}

export class EmptyDriver implements Driver {

  public toParams(): string {
    return '';
  }
}

export class AWSDriver implements Driver {

  public constructor(
    private accessKey: string,
    private secretKey: string,
    private region: string,
    private vpcId: string,
    private ami: string,
    private zone: string,
    private instanceType: string,
    private rootSize: string,
    private swarm: string,
    private swarmDiscovery: string,
    private swarmMaster: string
  ) { }


  public toParams(): string {
    const params = Object.keys(this).reduce((previousValue, key) => {
      const value = this[key];
      const awsKey = _.snakeCase(key).replace('_', '-');
      return `${previousValue} --amazonec2-${awsKey} ${value}`;
    }, '--driver amazonec2 ');

    return params;
  }
}
