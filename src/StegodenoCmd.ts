/**
 * stegodeno/src/StegodenoCmd.ts
 */
import { exec } from "./../deps.ts";
import { StegodenoLog } from "./StegodenoLog.ts";

export interface StegodenoCmdResult {
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
export class StegodenoCmd {
  private static ENVS = {
    LC_ALL: "en_gb",
  };

  private cwd = "./";

  /**
   * Class initializer
   * 
   * @returns StegodenoCmd
   */
  public static InitConsole(): StegodenoCmd {
    var cmd = new StegodenoCmd();
    return cmd;
  }

  /**
   * 
   * @param cwd string
   * @returns 
   */
  setCwd(cwd: string): StegodenoCmd {
    this.cwd = cwd;
    return this;
  }

  async run(cmd: Array<string>, out = true): Promise<StegodenoCmdResult> {
    return await exec({
      cmd: cmd,
      cwd: this.cwd,
      env: StegodenoCmd.ENVS,
    }).then(function (e) {
      if (out) {
        StegodenoLog.LS(e);
      }
      var result: StegodenoCmdResult = { output: e, result: true, code: 0 };
      return result;
    }).catch(function (e) {
      if (out) {
        StegodenoLog.LE(e.message);
      }
      var result: StegodenoCmdResult = {
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
