/**
 * stegodeno/src/DenoCmd.ts
 */
import { exec } from "./../deps.ts";
import { DenoLog } from "./DenoLog.ts";

export interface DenoCmdResult {
  output: string;
  result: boolean;
  code: number;
}

/**
 * General Console output features
 * 
 * @class
 * @classdesc General Console output features
 */
export class DenoCmd {
  private static ENVS = {
    LC_ALL: "en_gb",
  };

  private cwd = "./";

  /**
   * Class initializer
   * 
   * @returns DenoCmd
   */
  public static InitConsole(): DenoCmd {
    var cmd = new DenoCmd();
    return cmd;
  }

  /**
   * 
   * @param cwd string
   * @returns 
   */
  setCwd(cwd: string): DenoCmd {
    this.cwd = cwd;
    return this;
  }

  async run(cmd: Array<string>, out = true): Promise<DenoCmdResult> {
    return await exec({
      cmd: cmd,
      cwd: this.cwd,
      env: DenoCmd.ENVS,
    }).then(function (e) {
      if (out) {
        DenoLog.LS(e);
      }
      var result: DenoCmdResult = { output: e, result: true, code: 0 };
      return result;
    }).catch(function (e) {
      if (out) {
        DenoLog.LE(e.message);
      }
      var result: DenoCmdResult = {
        output: e.message,
        result: false,
        code: e.code,
      };
      return result;
    });
  }

  runSync(cmd: Array<string>, out = true): void {
    this.run(cmd, out);
  }
}
