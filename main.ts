/**
 * deno-console/main.ts
 */

/**
 * General Console output features
 * 
 * @class
 * @classdesc General Console output features
 */
export class DenoConsole {
  private static okStyle = "color:green";
  private static koStyle = "color:red";

  /**
  * Outputs a console log
  * 
  * @param m Message to output in console
  * @param s Style to use, void to default
  */
  public static _l(m: string, s = ""): void {
    console.log("%c" + m, s);
  }

  /**
  * Outputs a success console log message
  * 
  * @param m 
  */
  public static _ls(m: string): void {
    DenoConsole._l(m, DenoConsole.okStyle);
  }

  /**
  * Outputs an error console log message
  * 
  * @param m 
  */
  public static _le(m: string): void {
    DenoConsole._l(m, DenoConsole.koStyle);
  }
}
