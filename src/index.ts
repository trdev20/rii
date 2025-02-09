import { Command } from "commander";
import fs from "fs";
import pkgJson from "../package.json";

const program = new Command("rii");

program
  .description("A simple CLI to remove files and folders recursively, forcefully and permanently.")
  .version(pkgJson.version, "-v, --version");

program.argument("<path>", "Path to remove").action((path) => {
  if (fs.existsSync(path)) {
    fs.rmSync(path, { recursive: true, force: true });
    console.log("🎉 Path removed.");
  } else {
    console.log("❌ Path does not exist.");
  }
});

program.parse(process.argv);
