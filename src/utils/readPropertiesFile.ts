import { readFile } from "fs";
import { McPropertiesParserError } from './McPropertiesParserError';
import { extname } from "path"
export const readPropertiesFile = (configPath: string): Promise<Array<string>> => {
    return new Promise((resolve) => {
        readFile(configPath, (err, data) => {
            if(err) 
                throw new McPropertiesParserError(`Can not read properties file at path: ${configPath}`);
            if(extname(configPath) !== ".properties") 
                throw new McPropertiesParserError(`Can not parse properties file with extension : ${extname(configPath)}, please provide a .properties file`);
            resolve(data.toString().split(/\r?\n/))
        })
    })
}