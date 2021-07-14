# typeorm-enum-as-column-type
Demonstrates inconsistent behavior between migrations and runtime when using an enum as a TypeORM column's type.

## Overview
Creating and running a migration with an entity whose column type is an enum containing integers creates the column with type `int`.

However, when running the app, an error occurs:

```
DataTypeNotSupportedError: Data type "Object" in "StaffMember.staffMemberType" is not supported by "mysql" database.
    at new DataTypeNotSupportedError (/Users/jared/IRCraziestTaxi/typeorm-enum-as-column-type/src/error/DataTypeNotSupportedError.ts:9:9)
    at /Users/jared/IRCraziestTaxi/typeorm-enum-as-column-type/src/metadata-builder/EntityMetadataValidator.ts:87:27
    at Array.forEach (<anonymous>)
    at EntityMetadataValidator.validate (/Users/jared/IRCraziestTaxi/typeorm-enum-as-column-type/src/metadata-builder/EntityMetadataValidator.ts:84:36)
    at /Users/jared/IRCraziestTaxi/typeorm-enum-as-column-type/src/metadata-builder/EntityMetadataValidator.ts:45:56
    at Array.forEach (<anonymous>)
    at EntityMetadataValidator.validateMany (/Users/jared/IRCraziestTaxi/typeorm-enum-as-column-type/src/metadata-builder/EntityMetadataValidator.ts:45:25)
    at Connection.buildMetadatas (/Users/jared/IRCraziestTaxi/typeorm-enum-as-column-type/src/connection/Connection.ts:527:33)
    at Connection.<anonymous> (/Users/jared/IRCraziestTaxi/typeorm-enum-as-column-type/src/connection/Connection.ts:193:18)
    at step (/Users/jared/IRCraziestTaxi/typeorm-enum-as-column-type/node_modules/tslib/tslib.js:143:27)
```

## Migrations
The Initial migration was created by running:

```
npm run mig:make -- -n Initial
```

Followed by:

```
npm run mig:run
```

You can see these scripts in `package.json` and view the generated migration in the `.typeorm/migrations` folder.

*Note that migrations use `ormconfig.json` while the TypeORM module uses `.env` at runtime.*

## Running the app
First, create a `.env` file using `.env.example` as an example. Change credentials as needed.

Next, run the app and observe the noted error by running:

```
npm run start:dev
```

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
