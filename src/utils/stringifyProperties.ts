import { PropertiesFile } from "../types/PropertiesFile";

export const stringifyProperties = (properties: PropertiesFile): string => {
    return Object.keys(properties).map((key, i) => {
        const formatedValue = Object.values(properties)[i]+"".trim().replace("'","")
        return `${key}=${formatedValue}`
    }).join("\n");
}
