import {readFileSync} from 'fs'
import {resolve} from 'path'
import { htmlReplacement } from './unsorted'

const {parse: $parse} = JSON

export type tPackage = Partial<
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

export type tWithFsName<T> = T & Partial<{"name4fs": string}>

export {
  getPackage,
  withName4Fs
}

function getPackage() {
  return $parse(
    readFileSync(resolve(process.cwd(), 'package.json')).toString()
  ) as tPackage
}

function withName4Fs<P extends tPackage>(packageData: P) : tWithFsName<P> {
  const {author} = packageData
  , name = author?.name
  , name4fs = htmlReplacement(name)

  return {
    ...packageData,
    name4fs
  }
}