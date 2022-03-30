#!/usr/bin/env node

import { program as cli } from 'commander';
import ora from 'ora';
import download from 'download-git-repo';
import symbols from 'log-symbols';
import chalk from 'chalk';
chalk.level = 1

cli
  .usage('[project-name]')
  .option("--client", "Frontend React Client Only")
  .option("--api", "Adonis 5 API Only")
  .description('Scaffold separate projects for a React client and Adonis API')

cli.parse(process.argv)

//Give a prompt when no parameters are entered
if (cli.args.length < 1) {
    cli.help()
}

// The first param is project name
const projectName = cli.args[1]
const options = cli.opts();
const isOptionsEmpty = Object.keys(options).length === 0;


if (!projectName) {
  console.log(chalk.red('\n Project should not be empty! \n '))
  cli.error('\n Project should not be empty! \n ');
}

let appURL = 'https://github.com/fizzypop-studio/seltzer-app.git#main';
let apiURL = 'https://github.com/fizzypop-studio/seltzer-api.git#main';

if(options.client || isOptionsEmpty) {
  console.log(appURL)
}

if(cli.options.api || isOptionsEmpty) {
  console.log(apiURL)
}

if(cli.options.client || isOptionsEmpty) {
  console.log(chalk.green('\n Start generating React client... \n'))
  //The load icon appears
  const spinner = ora('Downloading...')
  spinner.start()

  download(`direct:${appURL}`, `./${projectName}-app`, { clone: true }, (err) => {
    if (err) {
      spinner.fail()
      console.log(chalk.red(symbols.error), chalk.red(`React Project Generation failed. ${err}`))
      return
    }
    //End loading Icon
    spinner.succeed()
    console.log(chalk.green(symbols.success), chalk.green('React Project Generation completed!'))
    console.log('\n To get started with your React Client Project')
    console.log(chalk.cyan(`\n    1. cd ${projectName}-app \n`))
    console.log(chalk.cyan(`\n    2. yarn install \n`))
    console.log(chalk.cyan(`\n    3. yarn start \n`))
  })
}

if(cli.options.api || isOptionsEmpty) {
  console.log(chalk.green('\n Start generating Adonis 5 API... \n'))
  //The load icon appears
  const spinner = ora('Downloading...')
  spinner.start()

  download(`direct:${appURL}`, `./${projectName}-api`, { clone: true }, (err) => {
    if (err) {
      spinner.fail()
      console.log(chalk.red(symbols.error), chalk.red(`Adonis 5 Project Generation failed. ${err}`))
      return
    }
    //End loading Icon
    spinner.succeed()
    console.log(chalk.green(symbols.success), chalk.green('Adonis 5 Project Generation completed!'))
    console.log('\n To get started with your Adonis 5 API Project')
    console.log(chalk.cyan(`\n    1. cd ${projectName}-api \n`))
    console.log(chalk.cyan(`\n    2. yarn install \n`))
    console.log(chalk.cyan(`\n    3. node ace serve --watch \n`))
  })
}