/**
 * stegodeno/src/DenoGit.ts
 */
import { DenoCmd, DenoCmdResult } from "./DenoCmd.ts";

/**
 * General Console output features
 * 
 * @class
 * @classdesc General Console output features
 */
export class DenoGit {
  private cmd: DenoCmd;

  constructor() {
    this.cmd = DenoCmd.InitConsole();
  }

  public static InitConsole(): DenoGit {
    var git = new DenoGit();
    return git;
  }

  async git(command: Array<string>, out = true): Promise<DenoCmdResult> {
    command.unshift("git");
    return await this.cmd.run(command, out);
  }

  gitSync(command: Array<string>, out = true): void {
    this.git(command, out);
  }

  async status(out = true): Promise<DenoCmdResult> {
    return await this.git([
      "status",
    ], out);
  }

  statusSync(out = true): void {
    this.status(out);
  }

  async fetch(out = true): Promise<DenoCmdResult> {
    return await this.git([
      "fetch",
      "-pv",
    ], out);
  }

  fetchSync(out = true): void {
    this.fetch(out);
  }

  async checkout(branch: string, out = true): Promise<DenoCmdResult> {
    return await this.git([
      "checkout",
      branch,
    ], out);
  }

  checkoutSync(branch: string, out = true): void {
    this.checkout(branch, out);
  }

  async pull(
    branch: string,
    remote = "origin",
    out = true,
  ): Promise<DenoCmdResult> {
    return await this.git([
      "pull",
      remote,
      branch,
    ], out);
  }

  pullSync(
    branch: string,
    remote = "origin",
    out = true,
  ): void {
    this.pull(branch, remote, out);
  }

  async remoteAdd(
    repositoryUrl: string,
    remote = "origin",
    out = true,
  ): Promise<DenoCmdResult> {
    return await this.git([
      "remote",
      "add",
      remote,
      repositoryUrl,
    ], out);
  }

  remoteAddSync(
    repositoryUrl: string,
    remote = "origin",
    out = true,
  ): void {
    this.remoteAdd(repositoryUrl, remote, out);
  }

  async init(out = true): Promise<DenoCmdResult> {
    return await this.git([
      "init",
    ], out);
  }

  initSync(
    out = true,
  ): void {
    this.init(out);
  }
}
