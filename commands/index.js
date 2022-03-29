import { Command } from 'commander';
const cli = new Command();

// Commands
import hello from "./hello.js";

export const renderCommands = () => {
    cli
        .command("hello")
        .option("-p, --pretty", "Pretty-print output.")
        .description(
            "Say Hello"
        )
        .action(hello);

    cli.parse(process.argv);
}