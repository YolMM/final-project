import mongoose, { Document, Schema } from 'mongoose';

export interface Appointment extends Document {
    day: Number,
    month: Number,
    year: Number,
    hour: Number,
    minutes: Number,
    user: String
}

const schema = new Schema({
    day: { type: Number, require: true },
    month: { type: Number, require: true },
    year: { type: Number, require: false },
    hour: { type: Number, require: true },
    minutes: { type: Number, require: true },
    user: { type: String, require: true },
});

export const Appointment = mongoose.model<Appointment>('Appointment', schema);
