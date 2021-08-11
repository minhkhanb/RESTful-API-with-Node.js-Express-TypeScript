import logger from 'pino';
import dayjs from 'dayjs';

const appLogger = logger({
  prettyPrint: true,
  base: {
    pid: false,
  },
  timestamp: () => `,'time':'${dayjs().format()}'`
});

export default appLogger;