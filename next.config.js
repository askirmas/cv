//@ts-nocheck

const jsonImporter = require('node-sass-json-importer')
const data = require("./cv-langs.json")

module.exports = {
  "assetPrefix": ".",
  "sassOptions": {
    "importer": jsonImporter()
  },
  "exportPathMap": () => {
    const page = "/"
    , pathMap = {"/": {page, query: data["en"]}}

    for (const key in data) {
      pathMap[`/${key}`] = {page, query: data[key]}
    }

    return pathMap
  }
}