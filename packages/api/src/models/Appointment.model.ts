import mongoose, { Document, Schema } from 'mongoose';

export interface Appointment extends Document {
    user: String,
    email: String,
    date: Date,
}

const schema = new Schema({
    user: { type: String, require: true },
    email: { type: String, require: false },
    date: { type: Date, require: true, default: Date.now },
});

export const Appointment = mongoose.model<Appointment>('Appointment', schema);
