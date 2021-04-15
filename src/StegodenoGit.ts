/**
 * stegodeno/src/StegodenoGit.ts
 */
import { StegodenoCmd, StegodenoCmdResult } from "./StegodenoCmd.ts";

/**
 * General Console output features
 * 
 * @class
 * @classdesc General Console output features
 */
export class StegodenoGit {
  private cmd: StegodenoCmd;

  constructor() {
    this.cmd = StegodenoCmd.InitConsole();
  }

  public static InitConsole(): StegodenoGit {
    var git = new StegodenoGit();
    return git;
  }

  async git(command: Array<string>, out = true): Promise<StegodenoCmdResult> {
    command.unshift("git");
    return await this.cmd.run(command, out);
  }

  gitSync(command: Array<string>, out = true): void {
    this.git(command, out);
  }

  async status(out = true): Promise<StegodenoCmdResult> {
    return await this.git([
      "status",
    ], out);
  }

  statusSync(out = true): void {
    this.status(out);
  }

  async fetch(flags = "pv", out = true): Promise<StegodenoCmdResult> {
    return await this.git([
      "fetch",
      `-${flags}`,
    ], out);
  }

  fetchSync(flags = "pv", out = true): void {
    this.fetch(flags, out);
  }

  async checkout(branch = "master", out = true): Promise<StegodenoCmdResult> {
    return await this.git([
      "checkout",
      branch,
    ], out);
  }

  checkoutSync(branch = "master", out = true): void {
    this.checkout(branch, out);
  }

  async pull(
    branch = "master",
    remote = "origin",
    out = true,
  ): Promise<StegodenoCmdResult> {
    return await this.git([
      "pull",
      remote,
      branch,
    ], out);
  }

  pullSync(
    branch = "master",
    remote = "origin",
    out = true,
  ): void {
    this.pull(branch, remote, out);
  }

  async remoteAdd(
    repositoryUrl: string,
    remote = "origin",
    out = true,
  ): Promise<StegodenoCmdResult> {
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

  async init(out = true): Promise<StegodenoCmdResult> {
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
