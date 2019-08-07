## SMS-App

[![CircleCI](https://circleci.com/gh/cosmas28/sms-api.svg?style=svg)](https://circleci.com/gh/cosmas28/sms-api)
[![Maintainability](https://api.codeclimate.com/v1/badges/b91eb0b78f7cbee4c37e/maintainability)](https://codeclimate.com/github/cosmas28/sms-api/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/b91eb0b78f7cbee4c37e/test_coverage)](https://codeclimate.com/github/cosmas28/sms-api/test_coverage)
A messsage management system
<br />
<br />

## Description

The **sms-api** is the backbone of an application for managing sms of people. The projects enables contact registration, sendinh messages, receiving messages, reading messages, editing, deleting messages and reading a message status.

The API documentation [Doc](#url)
<br />

# Table of Contents

- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Testing](#testing)
- [API documentation](#api-documentation)
- [FAQ](#faqs)

## Technology Stack

- Typescript, NodeJS, JavaScript, Babel, Prettier - core platform and development tools
- Express, Passportjs, session, flash, cors - common HTTP-server features
- Mocha, Chai, NYC - unit and snapshot testing
- Sequalize, PostgreSQL, Pg - SQL, document, key/value data store; data acess and migrations

## Installation

1. Install [`Node JS`](https://nodejs.org/en/).
2. To clone, run `git clone https://github.com/cosmas28/sms-api.git`.
3. `cd` into the root of the **project directory**.
4. Install [`npm`](https://docs.npmjs.com/).
5. Run `npm install` on the terminal to install dependecies.
6. Create a `.env` file in the root directory of the application. Example of the content of a `.env` file is shown in the `.env.example`
7. Setup local development server.
8. To start the application run `npm start:dev`

## Testing

**Unit tests** - Run `test:unit` on the terminal while within the **project root directory**.

### API Documentation

Find the link to the API documentation [here](#link).
