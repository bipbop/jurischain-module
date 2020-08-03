import { jurischain } from '../lib/jurischain-runner';
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
    jurischain();
}
export function solve(configuration) {
    return new Promise((resolve) => {
        const nextSolve = !queue.length;
        queue.push({ configuration, resolve });
        if (nextSolve)
            solveNext();
    });
}
