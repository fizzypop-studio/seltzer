#!/usr/bin/env node

import { Command } from 'commander';
const cli = new Command();

// Commands
import * as create from "./create.js";

export const renderCommands = () => {
    cli
        .command('create')
        .action(create)
}