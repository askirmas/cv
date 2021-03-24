import type {tOptions} from "./pdf-gen.config"
import puppeteer from "puppeteer"
import options from "./pdf-gen.config"
import { sync } from "globby"
import { basename, join} from "path"
export default pdfGen

const nextOut = "out"
, htmlExt = ".html"

if (module.parent === null) {
  const cwd = process.cwd()
  process.chdir(nextOut)
  pdfGen(options)
  .finally(() => process.chdir(cwd))
}
  
async function pdfGen({
  goto, launch, pdf, waitFor
}: tOptions = {}) {
  const cwd = process.cwd()
  , browser = await puppeteer.launch(launch)
  , page = await browser.newPage()  
  , {
    "npm_package_author_name": author
  } = process.env

  for (const outFile of sync(`*${htmlExt}`)) {
    if (outFile === "404")
      continue

    await page.goto(`file://${join(cwd, outFile)}`, goto)
    waitFor && await page.waitFor(waitFor)
    await page.pdf({
      "path": join(cwd, `${author}-${basename(outFile, htmlExt)}.pdf`),
      ...pdf
    })  
  }

  await page.close()
  await browser.close()
}
