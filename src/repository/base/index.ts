import * as mongoose from 'mongoose';
import { IRead, IWrite } from '../../core/mongoose/';
import { CallbackError, DocumentDefinition, SaveOptions } from 'mongoose';

export class RepositoryBase<T extends mongoose.Document>{
  private _model: mongoose.Model<T>;

  constructor(schemaModel: mongoose.Model<T>) {
    this._model = schemaModel;
  }
  create(item: mongoose.CreateQuery<T>, callback?: (err: any, res: T[]) => void): Promise<T> {
    return this._model.create(item, callback);
  }
}
