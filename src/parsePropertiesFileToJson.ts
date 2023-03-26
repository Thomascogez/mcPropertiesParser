import { PropertiesFile } from './types/PropertiesFile';
import { readPropertiesFile } from './utils/readPropertiesFile';
export const parsePropertiesFileToJson = async (propertiesPath: string): Promise<PropertiesFile> => {
    const parsedConfigToArray = await readPropertiesFile(propertiesPath);
    const parsedConfigToJson: PropertiesFile  = {}
    parsedConfigToArray.forEach((line: string) => {
        const parsedLine = line.split("=");
        parsedLine[0] && Object.assign(parsedConfigToJson, {[parsedLine[0]]: convertStringToActualType(parsedLine[1]) })
    });
    return parsedConfigToJson;
}

const convertStringToActualType = (value: string): boolean | string | number | null | undefined => {
    
    if(!value) return null;

    const trimedValue = value.trim()
    // if string match with boolean
    if (["true", "false"].includes(trimedValue)) {
        return value === "true"
    }
    //if string can be converted to int 
    if(!isNaN(parseInt(trimedValue))) {
        return parseInt(trimedValue)
    }
    // if no match return value
    return value;

}
