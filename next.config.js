//@ts-nocheck

const {stringify: $stringify, parse: $parse} = JSON
, {readFileSync} = require('fs')
, jsonImporter = require('node-sass-json-importer')
, ajv = require("ajv").default
, {langRec} = require("./utils/lang")
, Ajv = new ajv({
  "strict": true,
  "strictTypes": false,
  "inlineRefs": true,
  "allErrors": true,  
  "allowUnionTypes": true
})

module.exports = {
  "assetPrefix": ".",
  "sassOptions": {
    "importer": jsonImporter()
  },
  "exportPathMap": (_, {dev}) => {
    const {homepage, author: {name}} = require("./package.json")
    , replacements = {
      name,
      homepage: dev ? "" : homepage
    }
    , schema = readJsonSync("./public/schema.json")
    , cv = readJsonSync("./public/cv.json", replacements)
    , {$schema, ...data} = cv
    , langs = {}
    
    validate(schema, data)

    for (const lang of schema.definitions.Langing.propertyNames.enum) {
      const langed = langRec(lang, cv)
      validate(schema, langed)
      langs[lang] = langed
    }
    

    const page = "/"
    , pathMap = {"/": {page, query: langs["en"]}}

    for (const key in langs) {
      pathMap[`/${key}`] = {page, query: langs[key]}
    }

    return pathMap
  }
}

function readJsonSync(jsonPath, {homepage, name} = {}) {
  return $parse(
    readFileSync(jsonPath),
    (k, v) => {
      if (typeof v !== "string")
        return v

      return eval("`"+ v.replace(/`/g, "\\`") + "`")
    }
  )
}

// Parameters<typeof Ajv.validate>
function validate(...args) {
  if (!Ajv.validate(...args)) {
    console.error($stringify(
      Ajv.errors,
      null,
      2
    ))
    process.exit(1)
  }  
}