#!/usr/bin/env node

const os = require('os')
, childProcess = require('child_process')

let cmd = "nohup xdg-open index.html >/dev/null 2>&1 &"

switch (os.platform()) {
  case "win32":
  case "cygwin":
    cmd = 'start "" index.html'
    break
  case "darwin":
    cmd = "open index.html"
    break
}

childProcess.execSync(cmd)
