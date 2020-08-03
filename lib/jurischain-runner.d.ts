export interface JurischainConfiguration {
    seed: string
    difficulty: number
}

declare global {
    interface Window {
        jurischain: JurischainConfiguration
    }
}

export function jurischain (): void