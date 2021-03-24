import type {
  PDFOptions,
  WaitForOptions,
  LaunchOptions,
  // Viewport
} from "puppeteer"
import config from "./pdf-gen.config.json"

export type tOptions = Partial<{
  "launch": LaunchOptions
  "goto": WaitForOptions
  // "viewport": Viewport
  "pdf": PDFOptions
  "waitFor": number
}>

const typed = config as tOptions
export default typed