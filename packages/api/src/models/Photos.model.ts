import mongoose, { Document, Schema } from 'mongoose';

export interface Photos extends Document {
    name: String,
    images: Array<String>,
}

const schema = new Schema({
    name: { type: String, require: true },
    images: { type: Array, require: true },
});

export const Photos = mongoose.model<Photos>('Photos', schema);
