# Ann Kilzer Home Page

![Website](https://img.shields.io/website?down_message=oh%20no&up_message=online&url=https%3A%2F%2Fannkilzer.net)
[![Netlify Status](https://api.netlify.com/api/v1/badges/63e0a5d5-f7b2-4ec6-874b-5e9702ec04bc/deploy-status)](https://app.netlify.com/sites/fluffy-pithivier-9c5fb6/deploys)
![W3C Validation](https://img.shields.io/w3c-validation/default?targetUrl=https%3A%2F%2Fannkilzer.net)
![GitHub language count](https://img.shields.io/github/languages/count/ann-kilzer/annkilzer.net.3)
[![Push Checks](https://github.com/ann-kilzer/annkilzer.net.3/actions/workflows/push-checks.yml/badge.svg?branch=main)](https://github.com/ann-kilzer/annkilzer.net.3/actions/workflows/push-checks.yml)
[![Playwright Tests](https://github.com/ann-kilzer/annkilzer.net.3/actions/workflows/playwright.yml/badge.svg)](https://github.com/ann-kilzer/annkilzer.net.3/actions/workflows/playwright.yml)


## How to run it locally

Install dependencies (and set up Husky)
```sh
npm i
```

Set up env vars:
```sh
cp .env.sample .env
```

Run in dev mode
```sh
npm run dev
```

Build
```sh
npm run build
```

## Quality

Run unit tests
```sh
npm test
```

Run E2E tests
```sh
npm run e2e
npm run e2e:ui
```
