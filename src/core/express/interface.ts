import { Application } from 'express';

export interface ExpressInterface {
  app: Application;
  start: () => void;
}
