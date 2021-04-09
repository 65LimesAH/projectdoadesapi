import mongoose, { Schema, Document } from 'mongoose';

export interface InventoryInterface extends Document {
  inventoryListName: string;
  organizationID: string;
  organizationName: string;
  businessUnitID: string;
  businessUnitName: string;
  inventoryLocation: string;
  dateCreated: Date;
  dateModified: Date;
  inventoryItems: Array<InventoryItemsInterface>;
}

export interface InventoryItemsInterface {
  itemName: string;
  itemDescription: string;
  itemCategory: string;
  itemCost: number;
  itemSKU: string;
  itemVendor: string;
  itemManufacturer: string;
  itemQuantity: number;
}

const InventoryItemSchema: Schema = new Schema<InventoryInterface>({
  itemName: { type: String, required: true },
  itemDescription: { type: String, required: true },
  itemCategory: { type: String, required: true },
  itemCost: { type: String, required: true },
  itemSKU: { type: String, required: true },
  itemVendor: { type: String, required: true },
  itemManufacturer: { type: String, required: true },
  itemQuantity: { type: String, required: true },
});

const InventorySchema: Schema = new Schema({
  inventoryListName: { type: String, required: true },
  organizationID: { type: String, required: true },
  organizationName: { type: String, required: true },
  businessUnitID: { type: String, required: true },
  businessUnitName: { type: String, required: true },
  inventoryLocation: { type: String, required: true },
  dateCreated: { type: Date, required: true },
  dateModified: { type: Date, required: true },
  inventoryItems: [InventoryItemSchema],
});

export default mongoose.model<InventoryInterface>('Inventory', InventorySchema);
