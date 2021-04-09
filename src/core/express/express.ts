import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import { logger, stream } from '../../utils';
import { ExpressInterface } from './interface';
import { PORT } from '../.././config/env';

class Express implements ExpressInterface {
  public readonly app: express.Application;
  constructor() {
    this.app = express();
    this.useMiddlewares();
  }
  public start = (): void => {
    this.app.listen(PORT, () => {
      logger.info(`Express Server Listening on port ${PORT}`);
    });
  };
  private useMiddlewares = (): void => {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cors());
    this.app.use(morgan('combined', { stream }));
  };
}
export default new Express();
