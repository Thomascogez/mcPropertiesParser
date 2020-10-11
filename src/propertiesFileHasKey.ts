import { PropertiesFile } from "./types/PropertiesFile";

export const propertiesFileHasKey = (propertiesFile: PropertiesFile, key: string): boolean => {
    return key in propertiesFile
}