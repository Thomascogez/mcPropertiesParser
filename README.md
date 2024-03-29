# mcPropertiesParser

> mcPropertiesParser is a lightweight and typesafe set of utilies to parse and modify .properties file of mc servers



## Install

```shell
npm install mcpropertiesparser
# or
yarn add mcpropertiesparser
```



## Docs

### parsePropertiesFileToJson

| Name                      | Return                  | Description                                                  |
| ------------------------- | ----------------------- | ------------------------------------------------------------ |
| parsePropertiesFileToJson | Promise<PropertiesFile> | parsePropertiesFileToJson allow you to get the json conversion of a .properties file |

#### args

| Parameter      | Type   | Description                           | Required |
| -------------- | ------ | ------------------------------------- | -------- |
| propertiesPath | string | path of the .properties file to parse | True     |

#### example

```typescript
import {parsedPropertiesFile} from "mcpropertiesparser"
const parsedPropertiesFile = await parsePropertiesFileToJson(path)

```



### propertiesFileHasKey

| Name                 | Return  | Description                                       |
| -------------------- | ------- | ------------------------------------------------- |
| propertiesFileHasKey | Boolean | Check if a properties file contain a specific key |

#### args

| Parameter      | Type           | Description                     | Required |
| -------------- | -------------- | ------------------------------- | -------- |
| propertiesFile | PropertiesFile | properties file object to check | True     |
| key            | string         | key to check if exist           | True     |

#### example

```typescript
import {propertiesFileHasKey} from "mcpropertiesparser"
propertiesFileHasKey(propertiesFile, key)

```



### writePropertiesFile

| Name                | Return        | Description                                          |
| ------------------- | ------------- | ---------------------------------------------------- |
| writePropertiesFile | Promise<void> | Write a properties file object as a .properties file |

#### args

| Parameter    | Type           | Description                         | Required |
| ------------ | -------------- | ----------------------------------- | -------- |
| *properties* | PropertiesFile | properties file object to check     | True     |
| path         | string         | path where the file will be written | True     |

#### example

```typescript
import {writePropertiesFile} from "mcpropertiesparser"
// it can be the same path from the actual edited file and will replace the old with the new changes
await writePropertiesFile(properties, path)

```

