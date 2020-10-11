
import { writePropertiesFile } from './../writePropertiesFile';
import { join } from 'path';
import { parsePropertiesFileToJson } from '../parsePropertiesFileToJson';

test("File output should be equals to initial object", async () => {
    const outputPath = join(__dirname, "./test_data/output/server.properties");
    const propeties = await parsePropertiesFileToJson(join(__dirname, "./test_data/server.properties"));
    await writePropertiesFile(propeties, outputPath);

    const ouputResult = await parsePropertiesFileToJson(outputPath);
    expect(propeties).toMatchObject(ouputResult);
})