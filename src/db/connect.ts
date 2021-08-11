import mongoose from 'mongoose';
import config from 'config';
import appLogger from '../logger';

function connect() {
  const dbUri = config.get('dbUri') as string;

  return mongoose
    .connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then(() => {
      appLogger.info('Database connected');
    })
    .catch((err) => {
      appLogger.error('db error: ', err);
      process.exit(1);
    })
}

export default connect;