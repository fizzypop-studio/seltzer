#!/usr/bin/env node

import { Command } from 'commander';
const cli = new Command();

// Commands
import { renderCommands } from './commands/index.js';

cli.description("Build React and Adonis projects in no time");
cli.name("seltzer");
cli.usage("<command>");
cli.addHelpCommand(false);
cli.helpOption(false);

// Render Commands
renderCommands()
