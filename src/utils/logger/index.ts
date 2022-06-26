import Pino from 'pino';

const logger = Pino({
  name: 'serverless-boilerplate',
  level: 'debug',
});

export default logger;
