# Automation Lab - Movies List App

This repository contains an automation lab project for testing the Movies List App using Selenium WebDriver and Jest. The Movies List App is a web application that allows users to add, cross off, and delete movies from a list.

## Requirements

To run the tests and use this automation framework, you need to have the following installed on your system:

1. Node.js (with npm)
2. Chrome and Edge browsers (Latest versions)
3. Visual Studio Code (or any other code editor of your choice)

## Getting Started

Follow the steps below to get the project set up and run the tests:

1. Clone this repository to your local machine using the following command:

   ```bash
   git clone https://github.com/<your-username>/automation-lab.git
   ```

2. Navigate to the project directory:

   ```bash
   cd automation-lab
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

## Running Tests

To run the automated tests for the Movies List App, follow these steps:

1. Start the Movies List App server:

   ```bash
   npm start
   ```

   The Movies List App will be accessible at `http://localhost:3000`.

2. Open a new terminal and run the tests:

   ```bash
   npm test
   ```

   The tests will be executed using Jest and Selenium WebDriver, interacting with the Movies List App in Chrome and Edge browsers.

## Test Files

The test file for the Movies List App can be found at `public/movies.test.js`. This file contains test cases that cover various functionalities of the app, including adding a movie, crossing off a movie, and deleting a movie.

## Project Structure

The project structure is organized as follows:

```
automation-lab/
├── public/
│   ├── movies.html
│   └── movies.test.js
├── package.json
├── package-lock.json
├── node_modules/
└── README.md
```

The `public/` directory contains the Movies List App and the test file. The `package.json` file manages the project dependencies and scripts. The `node_modules/` directory holds the installed npm packages.

## Notes

- The Movies List App is served from the `public/` directory. Make sure that the server is running before executing the tests.
- If you encounter any issues while running the tests, check your browser versions and ensure that they are up-to-date.
- The test timeouts have been adjusted to handle potential delays in the test environment. However, if the tests still fail due to timeouts, consider further increasing the timeout values.
