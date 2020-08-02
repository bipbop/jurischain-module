"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.solve = void 0;
var jurischain_runner_1 = __importDefault(require("../lib/jurischain-runner"));
var queue = [];
document.addEventListener('jurischain', function (e) {
    var customEvent = e;
    var resolve = queue.shift().resolve;
    resolve(customEvent.detail);
    if (queue.length)
        solveNext();
});
function solveNext() {
    var configuration = queue[0].configuration;
    window.jurischain = configuration;
    jurischain_runner_1.default();
}
function solve(configuration) {
    return new Promise(function (resolve) {
        queue.push({ configuration: configuration, resolve: resolve });
        if (!queue.length)
            solveNext();
    });
}
exports.solve = solve;
