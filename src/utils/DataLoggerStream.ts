import { logger } from './WinstonDataLogger';

export const stream = {
  write: (message: any) => {
    logger.info(message);
  },
};
