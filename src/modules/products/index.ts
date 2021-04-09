import * as mongoose from 'mongoose';

export const Schema = mongoose.Schema;
export const ObjectId = mongoose.Schema.Types.ObjectId;
export const Mixed = mongoose.Schema.Types.Mixed;

export interface ProductInterface extends mongoose.Document {
  name: string;
  createdAt: Date;
  modifiedAt: Date;
}

const schema = new Schema<ProductInterface>({
  name: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: false,
  },
  modifiedAt: {
    type: Date,
    required: false,
  },
}).pre<ProductInterface>('save', function (next) {
  if (this.isNew) {
    this.createdAt = new Date();
  } else {
    this.modifiedAt = new Date();
  }
  next();
});

export const ProductSchema = mongoose.model<ProductInterface>('product', schema, 'products', true);

export class ProductModel {
  private _productModel: ProductInterface;
  constructor(_productModel: ProductInterface) {
    this._productModel = _productModel;
  }
  get name(): string {
    return this._productModel.name;
  }
}
