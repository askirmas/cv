import {writeFileSync} from 'fs'
import {renderToStaticMarkup} from 'react-dom/server';
import {createElement} from 'react'
import Page from "../page"
import {getPackage, withName4Fs} from '../utils/package'

const packageData = getPackage()
, {
  author = {},
  repository,
  "name": packageName,
  "name4fs": fileName
} = withName4Fs(packageData)

writeFileSync(`${fileName}.html`, [
  '<!doctype html>',
  renderToStaticMarkup(
    createElement(Page, {
      ...packageData,
      fileName,
      "repositoryUrl": repository?.https,
      packageName,
      ...author
    })
  )  
].join(''))
