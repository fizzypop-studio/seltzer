#!/usr/bin/env node

import { Command } from 'commander';
import ora from 'ora';
import download from 'download-git-repo';
import symbols from 'log-symbols';
import chalk from 'chalk';

const cli = new Command();
chalk.level = 1
const seltzerChalkColor = chalk.hex('#fc0362');
const seltzerASCII = seltzerChalkColor(` ________  _______   ___   _________  ________  _______   ________\r\n|\\   ____\\|\\  ___ \\ |\\  \\ |\\___   ___\\\\_____  \\|\\  ___ \\ |\\   __  \\\r\n\\ \\  \\___|\\ \\   __\/|\\ \\  \\\\|___ \\  \\_|\\|___\/  \/\\ \\   __\/|\\ \\  \\|\\  \\\r\n \\ \\_____  \\ \\  \\_|\/_\\ \\  \\    \\ \\  \\     \/  \/ \/\\ \\  \\_|\/_\\ \\   _  _\\\r\n  \\|____|\\  \\ \\  \\_|\\ \\ \\  \\____\\ \\  \\   \/  \/_\/__\\ \\  \\_|\\ \\ \\  \\\\  \\|\r\n    ____\\_\\  \\ \\_______\\ \\_______\\ \\__\\ |\\________\\ \\_______\\ \\__\\\\ _\\\r\n   |\\_________\\|_______|\\|_______|\\|__|  \\|_______|\\|_______|\\|__|\\|__|\r\n   \\|_________|`);
const appURL = 'https://github.com/fizzypop-studio/seltzer-app.git#main';
const apiURL = 'https://github.com/fizzypop-studio/seltzer-api.git#main';
const clientURL = 'https://github.com/fizzypop-studio/seltzer-client.git#main';

cli.name("seltzer")
    .description(chalk.cyan("Build React and Rails projects in no time"))
    .option("--client", "Frontend React Client Only")
    .option("--api", "Rails API Only")
    .addHelpCommand(false)
    .version('1.1.0');

cli.command('create')
    .description('scaffold separate projects for a React client and Rails API')
    .action(() => {
        //Give a prompt when no parameters are entered
        if (cli.args.length < 1) {
            cli.help()
        }

        // The first param is project name
        const projectName = cli.args[1]
        const options = cli.opts();
        const isOptionsEmpty = Object.keys(options).length === 0;

        if (!projectName) {
            cli.error(chalk.red('\n Project name should not be empty! \n '));
        }

        console.log(seltzerASCII);

        const downloadApp = () => {
            console.log(chalk.green('\n Start generating React client...'))
            
            //The load icon appears
            const spinner = ora(`Downloading from ${appURL}`)
            spinner.start()

            download(`direct:${appURL}`, `./${projectName}-app`, { clone: true }, (err) => {
                if (err) {
                    spinner.fail()
                    console.log(chalk.red(symbols.error), chalk.red(`React Project Generation failed. ${err}`))
                    return
                }
                // End loading Icon
                spinner.succeed()
                console.log(chalk.green(symbols.success), chalk.green('React Project Generation completed!'))
                console.log('\n To get started with your React Client Project')
                console.log(chalk.cyan(`\n    1. cd ${projectName}-app`))
                console.log(chalk.cyan(`\n    2. yarn install`))
                console.log(chalk.cyan(`\n    3. yarn start \n`))

                if(isOptionsEmpty) {
                    downloadAPI();
                }
            })
        }

        const downloadAPI = () => {
            console.log(chalk.green('\n Start generating Rails API...'))

            //The load icon appears
            const spinner = ora(`Downloading from ${apiURL}`)
            spinner.start()

            download(`direct:${appURL}`, `./${projectName}-api`, { clone: true }, (err) => {
                if (err) {
                    spinner.fail()
                    console.log(chalk.red(symbols.error), chalk.red(`Rails Project Generation failed. ${err}`))
                return
                }
                // End loading Icon
                spinner.succeed()
                console.log(chalk.green(symbols.success), chalk.green('Rails Project Generation completed!'))
                console.log('\n To get started with your Rails API Project')
                console.log(chalk.cyan(`\n    1. cd ${projectName}-api`))
                console.log(chalk.cyan(`\n    2. bundle install`))
                console.log(chalk.cyan(`\n    3. rails db:setup`))
                console.log(chalk.cyan(`\n    4. rails s`))
                console.log(chalk.cyan(`\n    5. For detailed start-up instructions please take a look at the README \n`))
            })
        }

        const downloadClientOnly = () => {
            console.log(chalk.green('\n Start generating React client...'))
            
            //The load icon appears
            const spinner = ora(`Downloading from ${clientURL}`)
            spinner.start()

            download(`direct:${clientURL}`, `./${projectName}-app`, { clone: true }, (err) => {
                if (err) {
                    spinner.fail()
                    console.log(chalk.red(symbols.error), chalk.red(`React Project Generation failed. ${err}`))
                    return
                }
                // End loading Icon
                spinner.succeed()
                console.log(chalk.green(symbols.success), chalk.green('React Project Generation completed!'))
                console.log('\n To get started with your React Client Project')
                console.log(chalk.cyan(`\n    1. cd ${projectName}-app`))
                console.log(chalk.cyan(`\n    2. yarn install`))
                console.log(chalk.cyan(`\n    3. yarn start \n`))
            })
        }

        if(isOptionsEmpty) {
            downloadApp()
        }

        if(options.api) {
            downloadAPI();
        }

        if(options.client) {
            downloadClientOnly();
        }
    });

cli.addHelpText('after', `
Example call:
    ${chalk.green('seltzer create my-new-project')}`
);

cli.parse(process.argv)
