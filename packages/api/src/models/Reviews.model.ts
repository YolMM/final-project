import mongoose, { Document, Schema } from 'mongoose';

export interface Reviews extends Document {
    userName: String,
    email: String,
    profilePic: String,
    comment: String,
    rate: Number,
}

const schema = new Schema({
    userName: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    profilePic: { type: String, require: false },
    comment: { type: String, require: true },
    rate: { type: Number, require: true, enum: [1, 2, 3, 4, 5] },
});

export const Reviews = mongoose.model<Reviews>('Reviews', schema);
