import type {
  PDFOptions,
  WaitForOptions,
  LaunchOptions,
  ScreenshotOptions,
  Viewport
} from "puppeteer"
import config from "./pdf-gen.config.json"

export type tOptions = Partial<{
  "launch": LaunchOptions
  "goto": WaitForOptions
  "viewport": Viewport
  "pdf": PDFOptions
  "waitFor": number
  "screenshot": ScreenshotOptions
  "outFolder":string
  "ext": string
}>

const typed = config as tOptions
export default typed