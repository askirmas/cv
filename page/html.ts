import {writeFileSync} from 'fs'
import {renderToStaticMarkup} from 'react-dom/server';
import {createElement} from 'react'
import Page from "."

export {}

const {env} = process
, {npm_package_author_name: name = ""} = env 
, fileName = name.replace(" ", "_")

writeFileSync(`../${fileName}.html`, [
  '<!doctype html>',
  renderToStaticMarkup(
    createElement(Page, {
      name,
      fileName,
      email: env.npm_package_author_email,
      phone: "+972-54-351-0754",
    })
  )  
].join(''))