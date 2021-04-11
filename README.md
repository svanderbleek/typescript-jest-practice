# controller

typescript and jest demo project

## setup

the project was setup using the following commands

```
npm init -y
npm install -D typescript jest ts-jest @types/jest
npx tsc --init
npx ts-jest config:init
```

allowing for subsequent setup by

```
npm install
```

## build

```
npm run build
```

## test

```
npm test
```

## repl

```
ts-node --files
> import { Controller } from "./src/chart"
```

## criteria

The core of the problem is storing datapoints and calculating peroids to render. I approached this in a test first manner by translating the examples into jest mock expectations and using the specifications of resolution to test a function that is responsible for that.

Due to time contraints I chose to use TypeScript and leverage the provided code. Once I was able to setup a test environment using generated configs I proceeded to develop a minimal solution satisfying the tests.