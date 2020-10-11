export class McPropertiesParserError extends Error {
    constructor(message: string) {
        super(`[mc-config-parser] Error: ${message}`)
    }
}