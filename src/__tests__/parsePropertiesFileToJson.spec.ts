import { PropertiesFile } from "../types/PropertiesFile"
import { parsePropertiesFileToJson } from '../parsePropertiesFileToJson';
import { join } from 'path';

test("Parse proterties file json output should match", async () => {
    const expected: PropertiesFile = {
        "broadcast-rcon-to-ops": true,
        "view-distance": 10,
        "max-build-height":256
    }
    const parsedPropertiesFile = await parsePropertiesFileToJson(join(__dirname, "./test_data/server.properties"))
    expect(parsedPropertiesFile).toMatchObject(expected)
})

test("Parse proterties file json output should match with one null value", async () => {
    const expected: PropertiesFile = {
        "broadcast-rcon-to-ops": true,
        "view-distance": 10,
        "max-build-height": null
    }
    const parsedPropertiesFile = await parsePropertiesFileToJson(join(__dirname, "./test_data/withnullValue.properties"))
    expect(parsedPropertiesFile).toMatchObject(expected)
})