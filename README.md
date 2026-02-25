![CI](https://github.com/Puchao64/1inch-mobile-e2e/actions/workflows/ci.yml/badge.svg)
# 1inch Mobile E2E — Login Playground (Appium + WebdriverIO)

End-to-end mobile automation tests for the provided Login Playground sample app.

Focus: **login flow validation** and basic CI-ready project structure.

---

## Tech Stack
- Node.js
- WebdriverIO
- Appium
- Mocha + expect (@wdio/globals)

---

## What is covered

Login scenarios (Chrome on Android emulator):

1. ✅ Valid username + valid password → success message  
2. ✅ Invalid username + valid password → username invalid message  
3. ✅ Valid username + invalid password → password invalid message 
4. ✅ Empty username + empty password → username invalid message  

---

## Project Structure

- `wdio.conf.js` — WebdriverIO + Appium configuration  
- `test/specs/test.e2e.js` — E2E test scenarios  
- `test/pageobjects/*` — Page Object Model  

---

## Prerequisites (Local Setup)

- Android Studio + Android Emulator (Google APIs)
- Node.js (LTS recommended)
- Appium v3

Install Appium:

```bash
npm install -g appium
```

Install driver:

```bash
appium driver install uiautomator2
```

Check ADB:

```bash
adb devices
```

---

## Setup

Install dependencies:

```bash
npm install
```

---

## Run Tests (Local)

### 1. Start Android Emulator

```bash
adb devices
```

### 2. Start Appium Server

```bash
appium --port 4723 --base-path /
```

### 3. Run Tests

```bash
npm test
```

---

## Notes

If emulator is not detected, update `udid` in `wdio.conf.js`:

```bash
adb devices
```

---

## CI

This project uses **GitHub Actions** for Continuous Integration.

On every push and pull request, the workflow automatically:

- Installs dependencies
- Runs basic project validation
- Executes `npm test`

You can also run the workflow manually from the **Actions** tab.
