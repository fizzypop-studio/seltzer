#!/usr/bin/env node

import { Command } from 'commander';
const cli = new Command();

// Commands
import { renderCommands } from './commands/index.js';

cli.description("Build React and Adonis projects in no time");
cli.name("seltzer");
cli.usage("<command>");
cli.version(process.env.npm_package_version)

// Render Commands
renderCommands()
