import { propertiesFileHasKey } from "../propertiesFileHasKey"
import { parsePropertiesFileToJson } from '../parsePropertiesFileToJson';
import { join } from 'path';

test("Properties file should have key", async() => {
    const key = 'view-distance';
    expect(propertiesFileHasKey(await parsePropertiesFileToJson(join(__dirname, "./test_data/server.properties")), key))
        .toBe(true)
})

test("Properties file should not have key", async() => {
    const key = 'keyNotContain';
    expect(propertiesFileHasKey(await parsePropertiesFileToJson(join(__dirname, "./test_data/server.properties")), key))
        .toBe(false)
})