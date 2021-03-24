//@ts-nocheck

const jsonImporter = require('node-sass-json-importer')
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
  "exportPathMap": () => {
    const schema = require("./schema.json")
    , cv = require("./cv.json")
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

// Parameters<typeof Ajv.validate>
function validate(...args) {
  if (!Ajv.validate(...args)) {
    console.error($stringify(Ajv.errors))
    process.exit(1)
  }  
}