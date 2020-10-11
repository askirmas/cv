import {toMatchImageSnapshot} from "jest-image-snapshot"
import puppeteer, {Browser, Page} from "puppeteer"
import { getPackage, withName4Fs } from "../utils/package"
import opts from "./pdf-gen.config"

expect.extend({toMatchImageSnapshot})

const {
  "name4fs": fileName
} = withName4Fs(getPackage())
, {
  launch,
  goto,
  waitFor,
  viewport,
  screenshot
} = opts
, cwd = process.cwd()
, baseName = `${cwd}/${fileName}`
, {env} = process

let browser: Browser, page :Page

beforeAll(async () => {
  browser = await puppeteer.launch(launch)
  page = await browser.newPage()  
})

it("web", async () => {
  await page.goto(`file://${baseName}.html`, goto)
  waitFor && await page.waitFor(waitFor)
  viewport && await page.setViewport(viewport)

  const screenshotData = await page.screenshot(screenshot)

  expect(screenshotData).toMatchImageSnapshot({
    "customSnapshotIdentifier": `${fileName}-web`,
    "dumpDiffToConsole": true,
    "failureThresholdType": "percent",
    "failureThreshold": +(env.npm_config_threshold ?? ''),
    "blur": +(env.npm_config_blur ?? '')
  })
})

it.skip("pdf https://bugs.chromium.org/p/chromium/issues/detail?id=761295", async () => {
  
  await page.goto(`file://${baseName}.pdf`, goto)

  const screenshotData = await page.screenshot(screenshot)

  expect(screenshotData).toMatchImageSnapshot( {
    "customSnapshotIdentifier": `${fileName}-pdf`
  })
})

afterAll(async () => await browser.close())
