import type {PDFOptions, DirectNavigationOptions, LaunchOptions, Base64ScreenShotOptions, Viewport} from "puppeteer"
import config from "./pdf-gen.config.json"

export type tOptions = Partial<{
  "launch": LaunchOptions
  "goto": DirectNavigationOptions
  "viewport": Viewport
  "pdf": PDFOptions
  "waitFor": number
  "screenshot": Base64ScreenShotOptions
}>

const typed = config as unknown as tOptions
export default typed