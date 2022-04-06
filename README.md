# Serverless Typescript Boilerplate

Minimalist project template to jump start a Serverless application in TypeScript.

## Keys features

The current Serverless Starter Kit adds a light layer on top of the Serverless framework with modern JavaScript tools:

- **Webpack** Support so you can use the Modern ESNext features.
- **TypeScript** Support.
- Unit testing with **Jest** and code coverage
- **Offline** mode
- Formatting with Prettier to enforce a consistent code style.

## Services

Currently, the boilerplate is built and tested on AWS using the following services.

- AWS Lambda

## Quick start

```
npm install
npm run offline
```

## Testing

### Jest Unit Testing

```bash
npm run test:unit
```

### Deployment

Make sure you have AWS Cli configured

```bash
npm run deploy
```

## Serverless plugins

- [serverless-prune-plugin](https://www.npmjs.com/package/serverless-prune-plugin): Allows pruning of all but the most recent version(s) of managed functions from AWS
- [serverless-offline](https://github.com/dherault/serverless-offline): run your services offline for e.g. testing
- [serverless-webpack](https://github.com/elastic-coders/serverless-webpack): optimize package size with webpack
- [serverless-iam-roles-per-function](https://www.npmjs.com/package/serverless-iam-roles-per-function): Enable setting roles on a per function basis
