import {toMatchImageSnapshot} from "jest-image-snapshot"
import puppeteer, {Browser, Page} from "puppeteer"

expect.extend({toMatchImageSnapshot})

const fileName = 'Andrii_Kirmas'
, cwd = process.cwd()

let browser: Browser, page :Page

beforeAll(async () => {
  browser = await puppeteer.launch({
    "args": ["--allow-file-access-from-files", "--enable-local-file-accesses "]
  })
  page = await browser.newPage()  
})

it("web", async () => {
  await page.goto(`file://${cwd}/index.html`, {
    "waitUntil": "networkidle2"
  })
   await page.setViewport({ width: 1800, height: 980 })

  const screenshot = await page.screenshot({
    "fullPage": true,
    "type": "png"
  })

  expect(screenshot).toMatchImageSnapshot( {
    "customSnapshotIdentifier": `${fileName}-web`,
    "dumpDiffToConsole": true
  })

  if (process.env.npm_config_pdf_gen)
    await page.pdf({
      "path": `${cwd}/${fileName}.pdf`,
      "format": "A4",
      "printBackground": true,
      "pageRanges": '1',
      "scale": 0.70
    })
})

it.skip("pdf https://bugs.chromium.org/p/chromium/issues/detail?id=761295", async () => {
  
  await page.goto(`file://${cwd}/${fileName}.pdf`, {
    "waitUntil": "networkidle2"
  })

  const screenshot = await page.screenshot({
    "fullPage": true,
    "type": "png"
  })

  expect(screenshot).toMatchImageSnapshot( {
    "customSnapshotIdentifier": `${fileName}-pdf`
  })
})


afterAll(async () => await browser.close())
