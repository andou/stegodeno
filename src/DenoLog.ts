/**
 * stegodeno/src/DenoLog.ts
 */

/**
 * General Console output features
 * 
 * @class
 * @classdesc General Console output features
 */
 export class DenoLog {
   
    private static okStyle = "color:green";
    private static koStyle = "color:red";
    private static warnStyle = "color:yellow";
    private static infoStyle = "color:white";
  
    /**
     * Class initializer
     * 
     * @returns DenoLog
     */
    public static InitConsole(): DenoLog {
      return new DenoLog();
    }
  
    //////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////// CONSOLE OUTPUT FLUENT WRAPPERS ///////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////

    /**
     * Fluent wrapper of static method
     * 
     */
     clear(): DenoLog {
      DenoLog.Clear();
      return this;
    }

    /**
     * Fluent wrapper of static method
     * 
     * @param m message to output in console
     * @param s Style to use
     * @returns The DenoLog class
     */
    l(m: string, s = ""): DenoLog {
      DenoLog.L(m, s);
      return this;
    }
  
    /**
     * Fluent wrapper of static method
     * 
     * @param m message to output in console
     * @returns The DenoLog class
     */
    ls(m: string): DenoLog {
      DenoLog.LS(m);
      return this;
    }
  
    /**
     * Fluent wrapper of static method
     * 
     * @param m message to output in console
     * @returns The DenoLog class
     */
     le(m: string): DenoLog {
      DenoLog.LE(m);
      return this;
    }  

    /**
     * Fluent wrapper of static method
     * 
     * @param m message to output in console
     * @returns The DenoLog class
     */
    lw(m: string): DenoLog {
      DenoLog.LW(m);
      return this;
    }  

    /**
     * Fluent wrapper of static method
     * 
     * @param m message to output in console
     * @returns The DenoLog class
     */
    li(m: string): DenoLog {
      DenoLog.LI(m);
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
      DenoLog.L(m, DenoLog.okStyle);
    }
  
    /**
    * Outputs an error console log message
    * 
    * @param m 
    */
    public static LE(m: string): void {
      DenoLog.L(m, DenoLog.koStyle);
    }   
    
    /**
    * Outputs a warning console log message
    * 
    * @param m 
    */
     public static LW(m: string): void {
      DenoLog.L(m, DenoLog.warnStyle);
    }    
    
    /**
    * Outputs an info console log message
    * 
    * @param m 
    */
    public static LI(m: string): void {
      DenoLog.L(m, DenoLog.infoStyle);
    }
  }
  