"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solve = void 0;
const jurischain_runner_1 = require("../lib/jurischain-runner");
const queue = [];
document.addEventListener('jurischain', (e) => {
    const customEvent = e;
    const { resolve } = queue.shift();
    resolve(customEvent.detail);
    if (queue.length)
        solveNext();
});
function solveNext() {
    const { configuration } = queue[0];
    window.jurischain = configuration;
    jurischain_runner_1.jurischain();
}
function solve(configuration) {
    return new Promise((resolve) => {
        const nextSolve = !queue.length;
        queue.push({ configuration, resolve });
        if (nextSolve)
            solveNext();
    });
}
exports.solve = solve;
