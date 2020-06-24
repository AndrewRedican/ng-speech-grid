# Ng-Speech-Grid

## Overview

This is a demo of AG-Grid Community version implementation on an Angular Application (version 9.1.9) with speech recognition commands, displaying data from the [Irish Rail API](http://api.irishrail.ie/realtime/index.htm?realtime_irishrail).

## Run Demo Locally

1. On Windows, open chrome with security disabled.
```
  "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp
```

2. Go to root directory of project an run
```
  npm run start
```

3. Go to `http://localhost:4200/` on security-disabled chrome.

## Voice Commands

At the moment, it understands `reload` and `refresh` to call api again to get the latest information.
