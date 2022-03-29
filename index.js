#!/usr/bin/env node

import { Command } from 'commander';
const cli = new Command();

// Commands
import hello from "./commands/hello.js";

cli.description("Build React and Adonis projects in no time");
cli.name("seltzer");
cli.usage("<command>");
cli.addHelpCommand(false);
cli.helpOption(false);

// Hello World Command
cli
  .command("hello")
  .option("-p, --pretty", "Pretty-print output.")
  .description(
    "Say Hello"
  )
  .action(hello);

cli.parse(process.argv);