# Playwright tests

Playwright tests Automated Tests for https://www.redmine.org/ with Playwright and Allure Reporting.

## Table of Contents
1. [Summary](#summary)
2. [Requirements](#requirements)
3. [Installation](#installation)
4. [Usage](#usage)

## Summary
This repository contains automated tests for https://www.redmine.org/ using the Playwright framework. The test results are reported using Allure reporting.

## Requirements
- Node.js (v14.17.3 or higher)
- Java (JRE 8 or higher)
- Playwright (v1.17.1 or higher)
- Allure Framework (v2.15.0 or higher)

Most of the dependencies can be downloaded throught using this command after cloning repository:
    ```
    npm install
    ```
But some of them including: Node.js, Java, Playwright browsers and their dependencies - can not.

Please make sure you have the necessary dependencies installed and the environment properly configured before running the tests. You can customize the tests in the [tests](tests) directory and configure the Playwright options in the [config](playwright.config.js) file as needed.

## Installation
### For Windows
1. Make sure Node.js is installed:
    - If you don't have Node.js installed, download and install it from the official [Node.js website](https://nodejs.org/en).
    - Choose next button after going throguht the link to download LTS version.
    - ![Node installation](node.jpg)
    - After download is finished run the installer.
    - After installation, verify that Node.js and npm (Node Package Manager) are correctly installed by running the following commands in your terminal:
     ```
     node -v
     npm -v
     ```
    - You should see version numbers displayed, indicating that Node.js and npm are installed.

2. Make sure Java is installed:
    - If you don't have Java installed, download and install it from the official [Java Download Page](https://www.java.com/en/download/ie_manual.jsp).
    - Choose next button after going throguht the link to download LTS version.
    - ![Java installation](java.jpg)
    - After download is finished run the installer.
    - Than add installation directory (by default "C:\Program Files (x86)\Java\jre-1.8\" on Windows) to the PATH variable.
    - In Search, search for and then select: System (Control Panel)
    - Click the Advanced system settings link.
    - Click Environment Variables. In the section System Variables find the PATH environment variable and select it. Click Edit. If the PATH environment variable does not exist, click New.
    - In the Edit System Variable (or New System Variable) window, specify the value of the PATH environment variable. Click OK. Close all remaining windows by clicking OK.
    - Reopen Command prompt window, and run your java code.
    - Next, verify that Java is correctly installed by running the following command in your terminal:
     ```
     java -version
     ```
    - You should see the installed Java version displayed.

3. Clone this repository to your local machine.
    ```
    git clone https://github.com/wasadar/testing-redmine-s-site-with-playwright-framework.git
    ```

4. Navigate to the project directory.
    ```
    cd testing-redmine-s-site-with-playwright-framework
    ```

5. Install the required dependencies.
    ```
    npm install
    ```

6. Install Playwright browsers for Windows:
    - To install the Playwright browsers for Windows, you can use the following command in the project directory:
    ```
    npx playwright install
    ```
    - This will install the necessary browsers (Chromium, Firefox, and WebKit) for your tests on Windows.
### For Linux
## Installation (for Linux)
1. Make sure Node.js is installed:
    - If you don't have Node.js installed, you can use the following commands to install it on Linux:
    ```
    curl -fsSL https://deb.nodesource.com/gpgkey/nodesource.gpg.key | sudo gpg --dearmor -o /usr/share/keyrings/nodesource-archive-keyring.gpg
    echo "deb [signed-by=/usr/share/keyrings/nodesource-archive-keyring.gpg] https://deb.nodesource.com/node_14.x focal main" | sudo tee /etc/apt/sources.list.d/nodesource.list
    sudo apt-get update
    sudo apt-get install -y nodejs
    ```
        - After installation, verify that Node.js and npm are correctly installed by running the following commands in your terminal:
    ```
    node -v
    npm -v
    ```
    - You should see version numbers displayed, indicating that Node.js and npm are installed.

2. Make sure Java is installed:
    - If you don't have Java installed, you can use the following commands to install it on Linux:
    ```
    sudo apt-get update
    sudo apt-get install -y default-jre
    ```
    - After installation, verify that Java is correctly installed by running the following command in your terminal:
    ```
    java -version
    ```
    - You should see the installed Java version displayed.

3. Clone this repository to your local machine.
    ```
    git clone https://github.com/wasadar/testing-redmine-s-site-with-playwright-framework.git
    ```

4. Navigate to the project directory.
    ```
    cd testing-redmine-s-site-with-playwright-framework
    ```

5. Install the required dependencies.
    ```
    npm install
    ```

6. Install Playwright browsers for Linux:
    - To install the Playwright browsers for Linux, you can use the following command in the project directory:
    ```
    npx playwright install
    ```
    - This will install the necessary browsers (Chromium, Firefox, and WebKit) for your tests on Linux.

7. Install Playwright browsers dependencies.
    ```
    sudo apt-get install -y libsoup2.4-1 libwoff2dec1 libvpx6 libevent-2.1-7 libopus0 libharfbuzz-icu0 libgstreamer-plugins-base1.0-0 libflite1 libx264-152 libgles2
    ```

## Usage
### Running Tests
To run the automated tests using Playwright, you can use the following npm scripts defined in the `package.json` file:

- Run the automated tests using Playwright (headless mode):
    ```
    npm test
    ```

- Run the automated tests using Playwright with a graphical user interface (UI):
    ```
    npm run test-with-ui
    ```

Choose the appropriate script based on your testing needs.

### Generating Reports
To generate and view reports, you can use the following npm scripts:

- Generate the Allure report:
    ```
    npm run generate-allure-report
    ```

- Open the Allure report in your default web browser:
    ```
    npm run open-allure-report
    ```

The test results will be saved in the "playwright-report" directory for Allure reporting. Make sure to configure your tests and reporting as needed in the project's configuration files and the Allure configuration.