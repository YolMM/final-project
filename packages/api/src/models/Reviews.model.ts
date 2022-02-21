import mongoose, { Document, Schema } from 'mongoose';

export interface Reviews extends Document {
    userName: String,
    email: String,
    profilePic: String,
    review: String,
}

const schema = new Schema({
    userName: { type: String, require: true },
    email: { type: String, require: false },
    profilePic: { type: String, require: false },
    review: { type: String, require: true },
});

export const Reviews = mongoose.model<Reviews>('Reviews', schema);
