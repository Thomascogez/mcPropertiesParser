import { readPropertiesFile } from '../../utils/readPropertiesFile';
import { join } from "path" 
test("Except properties file content to match", async () => {
    const exceptedResult = ["broadcast-rcon-to-ops=true", "view-distance=10", "max-build-height=256"];
    const configFileToArray = await readPropertiesFile(join(__dirname, "./../test_data/server.properties"))
    expect(configFileToArray).toEqual(exceptedResult);
})
