import type {tOptions} from "./pdf-gen.config"
import puppeteer from "puppeteer"
import { getPackage, withName4Fs } from "../utils/package"

export default pdfGen

if (module.parent === null) {
  const cwd = process.cwd()
  , {name4fs} = withName4Fs(getPackage())
  , options = require("./pdf-gen.config")
  pdfGen(`${cwd}/${name4fs}`, options)
}
  

async function pdfGen(
  baseName: string,
  {goto, launch, pdf, waitFor}: Pick<tOptions, "goto"|"launch"|"pdf"|"waitFor"> = {}
) {
  const browser = await puppeteer.launch(launch)
  , page = await browser.newPage()  

  await page.goto(`file://${baseName}.html`, goto)
  waitFor && await page.waitFor(waitFor)
  await page.pdf({
    "path": `${baseName}.pdf`,
    ...pdf
  })
  await browser.close()
}
