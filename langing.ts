#!/usr/bin/env ts-node-script
import {writeFileSync} from "fs"
import ajv from "ajv"
import schema from "./schema.json"
import cv from "./cv.json"

import { langRec } from "./utils/lang"
import type { Langs } from "./types"

const Ajv = new ajv({
  "strict": true,
  "strictTypes": false,
  "inlineRefs": true,
  "allErrors": true,  
  "allowUnionTypes": true
})
, {$schema, ...data} = cv
, langs = {} as Record<string, unknown>

validate(schema, data)

for (const lang of schema.definitions.Langing.propertyNames.enum) {
  const langed = langRec(lang as Langs, cv)
  validate(schema, langed)
  langs[lang] = langed
}

writeFileSync("cv-langs.json", $stringify(langs))

function $stringify(source: any) {
  return JSON.stringify(source, null, 2)
}

function validate(...args: Parameters<typeof Ajv.validate>) {
  if (!Ajv.validate(...args)) {
    console.error($stringify(Ajv.errors))
    process.exit(1)
  }  
}