import mongoose, { Document, Schema } from 'mongoose';

export interface Prices extends Document {
    packName: String,
    quantity: Number,
    price: Number
}

const schema = new Schema({
    packName: { type: String, require: true },
    quantity: { type: Number, require: true },
    price: { type: String, require: true },
});

export const Prices = mongoose.model<Prices>('Prices', schema);
