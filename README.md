# Seltzer

Seltzer is a CLI built to make scaffolding React & Rails projects a bit easier.

# Installation

```shell
npm install -g seltzer-cli
```

# Getting started

After installation use `seltzer --help` for CLI commands.

To scaffold a new React & Rails project use:

```shell
seltzer create my-new-project
```

To pull down just the client you can use:

```shell
seltzer create my-new-project --client
```

To pull down just the API you can use:

```shell
seltzer create my-new-project --api
```

This will pull down the code for the React Client and Rails API and name them according to your given project name in the current directory you are in.

## Project Documentation

For more information on how to setup each project please take a look at the README documentation for each of the projects.

- [Seltzer React Client](https://github.com/fizzypop-studio/seltzer-app)
- [Seltzer Rails API](https://github.com/fizzypop-studio/seltzer-api)

# Future Goals for Seltzer

The goal of Seltzer is to develop a way to get started easier with popular technology and tools that are used by the industry by providing starter project with a CLI to help manage it. Your ideas on how to manage this better are always welcome!

- Client only option that doesn't rely on connection with API (in-progress)
- Image upload
- Vue Client Starter Project
- Django API Starter Project
- Parse API Starter Project
- More to come


Made with 🥤 by [Fizzy Pop Studio](http://fizzypopstudio.com/)