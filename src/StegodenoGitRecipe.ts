/**
 * stegodeno/src/StegodenoGitRecipe.ts
 */
import { StegodenoGit } from "./StegodenoGit.ts";
import { exists } from "../deps.ts";

/**
 * General Console output features
 * 
 * @class
 * @classdesc General Console output features
 */
export class StegodenoGitRecipe {
  private git: StegodenoGit;

  constructor() {
    this.git = StegodenoGit.InitConsole();
  }

  public static InitConsole(): StegodenoGitRecipe {
    var gitRecipe = new StegodenoGitRecipe();
    return gitRecipe;
  }

  async fetchFolder(
    pullDirectory: string,
    branch = "master",
    remote = "origin",
    flags = "pv",
    out = false,
  ): Promise<boolean> {
    pullDirectory = pullDirectory.replace(/\/+$/, "").concat("/");
    Deno.chdir(pullDirectory);
    await this.git.fetch(flags, out);
    await this.git.checkout(branch,out);
    await this.git.pull(branch,remote,out);
    return true;
  }

  async gitInitProjectFolder(
    pullDirectory: string,
    repositoryUrl: string,
    branch = "master",
    remote = "origin",
    out = false,
  ): Promise<boolean> {
    pullDirectory = pullDirectory.replace(/\/+$/, "").concat("/");
    return await exists(pullDirectory)
      .then(
        (result: boolean) => {
          if (!result) {
            Deno.mkdirSync(pullDirectory);
          }
          return exists(pullDirectory.concat(".git/")).then(
            (result: boolean) => {
              if (result) {
                return true;
              } else {
                return this.gitInitFolder(
                  pullDirectory,
                  repositoryUrl,
                  branch,
                  remote,
                  out,
                );
              }
            },
          );
        },
      );
  }

  async gitInitFolder(
    pullDirectory: string,
    repositoryUrl: string,
    branch = "master",
    remote = "origin",
    out = false,
  ): Promise<boolean> {
    Deno.chdir(pullDirectory);
    await this.git.init(out);
    await this.git.remoteAdd(repositoryUrl, remote, out);
    await this.git.pull(branch, remote, out);
    return true;
  }
}
