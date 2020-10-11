import { writeFile } from "fs"
import { PropertiesFile } from "./types/PropertiesFile"
import { stringifyProperties } from "./utils/stringifyProperties"
import { McPropertiesParserError } from './utils/McPropertiesParserError';

export const writePropertiesFile = (properties: PropertiesFile, path: string): Promise<void> => {
    return new Promise((resolve) => {
        const stringifiedValue = stringifyProperties(properties)
        writeFile(path, stringifiedValue, (err) => {
            if (err) throw new McPropertiesParserError(`Can not write file at path: ${path}: ${err}`)
            resolve();
        })
    })
}