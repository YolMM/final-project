import mongoose, { Document, Schema } from 'mongoose';

export interface Prices extends Document {
    packName: String,
    quantity: Number,
    price: Number,
    pricePerPhoto: Number,
    size: String,
    printed: Boolean,
}

const schema = new Schema({
    packName: { type: String, require: true },
    quantity: { type: Number, require: true },
    price: { type: Number, require: true },
    pricePerPhoto: { type: Number, require: false },
    size: { type: String, require: true },
    printed: { type: Boolean, require: true },
});

export const Prices = mongoose.model<Prices>('Prices', schema);
