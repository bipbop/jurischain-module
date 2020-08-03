import { jurischain, JurischainConfiguration } from '../lib/jurischain-runner'

const queue: Array<{
    configuration: JurischainConfiguration
    resolve: (resolve: string) => void
}> = []

document.addEventListener('jurischain', (e: Event) => {
    const customEvent = e as unknown as CustomEvent<string>
    const { resolve } = queue.shift()!
    resolve(customEvent.detail)
    if (queue.length) solveNext()
})

function solveNext() {
    const { configuration } = queue[0]
    window.jurischain = configuration
    jurischain()
}

export function solve(configuration: JurischainConfiguration) {
    return new Promise<string>((resolve) => {
        const nextSolve = !queue.length
        queue.push({ configuration, resolve })
        if (nextSolve) solveNext()
    })
}