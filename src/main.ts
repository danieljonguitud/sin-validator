import {sinValidator} from "./sin-validator";
import * as readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Please enter a SIN: ', (sin) => {
    sinValidator(sin);
    rl.close();
})
