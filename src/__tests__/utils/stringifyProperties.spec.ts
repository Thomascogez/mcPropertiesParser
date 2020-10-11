import { parsePropertiesFileToJson } from '../../parsePropertiesFileToJson';
import { join } from 'path';
import { stringifyProperties } from '../../utils/stringifyProperties';

test("Stringified properties file should match", async () => {
    const expected = `broadcast-rcon-to-ops=true\nview-distance=10\nmax-build-height=256`;
    const properties = await parsePropertiesFileToJson(join(__dirname, "./../test_data/server.properties")); 
    expect(stringifyProperties(properties)).toEqual(expected)
})
