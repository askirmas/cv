import {writeFileSync, readFileSync} from 'fs'
import {resolve} from 'path'
import {renderToStaticMarkup} from 'react-dom/server';
import {createElement} from 'react'
import Page from "."

export {}

const packageData = JSON.parse(readFileSync(resolve(process.cwd(), 'package.json')).toString()) as tPackage
, {author} = packageData 
, {name} = author ?? {}
, fileName = name?.replace(" ", "_")

writeFileSync(`${fileName}.html`, [
  '<!doctype html>',
  renderToStaticMarkup(
    createElement(Page, {
      ...packageData,
      fileName,
      repositoryUrl: packageData.repository?.https,
      packageName: packageData.name,
      ...author
    })
  )  
].join(''))

type tPackage = Partial<
  Record<"name"|"description"|"homepage", string>
  & {
    "author": Partial<
      Record<"name"|"email"|"url"|"github"|"linkedIn"|"phex", string>
    >
    "repository": Partial<{
      "type": string
      "url": string
      "https": string
    }>
  }
>