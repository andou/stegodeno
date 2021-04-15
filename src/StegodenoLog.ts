/**
 * stegodeno/src/StegodenoLog.ts
 */
import { text } from "./../deps.ts";

/**
 * General Console output features
 * 
 * @class
 * @classdesc General Console output features
 */
export class StegodenoLog {
  private static okStyle = "color:green";
  private static koStyle = "color:red";
  private static warnStyle = "color:yellow";
  private static infoStyle = "color:white";

  /**
     * Class initializer
     * 
     * @returns StegodenoLog
     */
  public static InitConsole(): StegodenoLog {
    return new StegodenoLog();
  }

  //////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////// CONSOLE OUTPUT FLUENT WRAPPERS ///////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////

  /**
     * Fluent wrapper of static method
     * 
     */
  clear(): StegodenoLog {
    StegodenoLog.Clear();
    return this;
  }

  /**
     * Fluent wrapper of static method
     * 
     * @param m message to output in console
     * @param s Style to use
     * @returns The StegodenoLog class
     */
  l(m: string, s = ""): StegodenoLog {
    StegodenoLog.L(m, s);
    return this;
  }

  /**
     * Fluent wrapper of static method
     * 
     * @param m message to output in console
     * @returns The StegodenoLog class
     */
  ls(m: string): StegodenoLog {
    StegodenoLog.LS(m);
    return this;
  }

  /**
     * Fluent wrapper of static method
     * 
     * @param m message to output in console
     * @returns The StegodenoLog class
     */
  le(m: string): StegodenoLog {
    StegodenoLog.LE(m);
    return this;
  }

  /**
     * Fluent wrapper of static method
     * 
     * @param m message to output in console
     * @returns The StegodenoLog class
     */
  lw(m: string): StegodenoLog {
    StegodenoLog.LW(m);
    return this;
  }

  /**
     * Fluent wrapper of static method
     * 
     * @param m message to output in console
     * @returns The StegodenoLog class
     */
  li(m: string): StegodenoLog {
    StegodenoLog.LI(m);
    return this;
  }

  //////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////// STATIC OUTPUT METHODS //////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////

  /**
     * Clears out the output console
     */
  public static Clear() {
    console.clear();
  }

  /**
    * Outputs a console log
    * 
    * @param m Message to output in console
    * @param s Style to use, void to default
    */
  public static L(m: string, s = ""): void {
    console.log("%c" + m, s);
  }

  /**
    * Outputs a success console log message
    * 
    * @param m 
    */
  public static LS(m: string): void {
    StegodenoLog.L(m, StegodenoLog.okStyle);
  }

  /**
    * Outputs an error console log message
    * 
    * @param m 
    */
  public static LE(m: string): void {
    StegodenoLog.L(m, StegodenoLog.koStyle);
  }

  /**
    * Outputs a warning console log message
    * 
    * @param m 
    */
  public static LW(m: string): void {
    StegodenoLog.L(m, StegodenoLog.warnStyle);
  }

  /**
    * Outputs an info console log message
    * 
    * @param m 
    */
  public static LI(m: string): void {
    StegodenoLog.L(m, StegodenoLog.infoStyle);
  }

  //////////////////////////////////////////////////////////////////////////////////////////////
  ////////////////////////////// FIGLET NON-STATIC METHODS /////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * Returns a message with a figlet font
   * 
   * @param message The message to display 
   * @param font The font for the message
   * @param out Whether output the figlet or not
   * @param outStyle The output style
   * @returns 
   */
  async text(
    message: string,
    font = "slant",
    out = true,
    outStyle = "",
  ): Promise<string> {
    var res = await StegodenoLog.Text(message, font);
    if (out) {
      this.l(res, outStyle);
    }
    return res;
  }

  //////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////// FIGLET STATIC METHODS //////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////

  /**
   * Returns a message with a figlet font
   * 
   * @param message The message to display 
   * @param font The font for the message
   * @returns 
   */
  public static async Text(message: string, font = "slant"): Promise<string> {
    return await text(message, font);
  }
}
