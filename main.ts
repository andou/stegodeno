/**
 * deno-console/main.ts
 */

/** @constant {string} */
const okStyle = "color:green";

/** @constant {string} */
const koStyle = "color:red";

/**
 * Outputs a console log
 * 
 * @param m Message to output in console
 * @param s Style to use, void to default
 */
export function _l(m: string, s = ""): void {
  console.log("%c" + m, s);
}

/**
 * Outputs a success console log message
 * 
 * @param m 
 */
export function _ls(m: string): void {
  _l(m, okStyle);
}

/**
 * Outputs an error console log message
 * 
 * @param m 
 */
export function _le(m: string): void {
  _l(m, koStyle);
}
