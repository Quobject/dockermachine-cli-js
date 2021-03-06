import * as child_process from "child_process";
import { cliTable2Json } from "cli-table-2-json";
import nodeify from "nodeify-ts";
import * as os from "os";
const exec = child_process.exec;

const extractResult = function(result) {

  const extracterArray = [
    {
      re: / ls /,
      run(resultp) {
        const obj = JSON.parse(resultp.raw);
        const lines = obj.split(os.EOL);
        resultp.machineList = cliTable2Json(lines);
        return resultp;
      },
    },
    {
      re: / config /,
      run(resultp) {
        const obj = JSON.parse(resultp.raw);
        const str = obj;
        const config = str.split(os.EOL).join(" ");

        const extractValue = function(strp: string, name: string, rep?: RegExp) {
          const re = rep || new RegExp("--" + name + '="([\\S]*)"', "i");
          const m = re.exec(strp);

          if (m !== null) {
            if (m.index === re.lastIndex) {
              re.lastIndex++;
            }
          }

          return (m && m[1]) ? m[1] : null;
        };

        resultp.machine = {
          config,
          host: extractValue(str, null, /-H=tcp:\/\/(.*):/),
          port: extractValue(str, null, /-H=tcp:\/\/.*:(\d*)/),
          tlscacert: extractValue(str, "tlscacert"),
          tlscert: extractValue(str, "tlscert"),
          tlskey: extractValue(str, "tlskey"),
          tlsverify: function(strp) {
            const re = /--tlsverify/;
            const m = re.exec(strp);

            if (m !== null) {
              if (m.index === re.lastIndex) {
                re.lastIndex++;
              }
            }
            return (m && m[0] && m[0] === "--tlsverify") || false;
          } (str),
        };

        return resultp;
      },
    },
    {
      re: / inspect /,
      run(resultp) {
        try {
          const obj = JSON.parse(resultp.raw);
          resultp.machine = JSON.parse(obj);
        } catch (e) {
          // do nothing
        }

        return resultp;
      },
    },
  ];

  extracterArray.forEach(function(extracter) {
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

  constructor(private options = new Options()) { }

  public command(command: string, callback?: (err, data) => void): Promise<any> {
    const dockerMachine = this;
    let execCommand = "docker-machine " + command;

    const promise = Promise.resolve().then(function() {
      // let params = this.options.driver.toParams()
      // console.log('dockerMachine = ', dockerMachine)
      const params = dockerMachine.options.toParams();
      //console.log('params = ', params);

      execCommand += " " + params;
      //console.log('execCommand =', execCommand);

      const execOptions = {
        cwd: dockerMachine.options.currentWorkingDirectory,
        env: {
          DEBUG: "",
          HOME: process.env.HOME,
          PATH: process.env.PATH,
        },
        maxBuffer: 200 * 1024 * 1024,
      };

      //console.log('exec options =', execOptions);

      return new Promise(function(resolve, reject) {
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
    }).then(function(data) {

      const result = {
        command: execCommand,
        raw: JSON.stringify(data),
      };
      return extractResult(result);

      });

    return nodeify(promise, callback);
  }
}

export class Options {

  public constructor(
    private keyValueObject = {},
    public currentWorkingDirectory = null as string,
  ) { }

  public toParams(): string {
    const result = Object.keys(this.keyValueObject).reduce((previous, key) => {
      const value = this.keyValueObject[key];
      return `${previous} --${key} ${value}`;
    }, "");

    return result;
  }
}
