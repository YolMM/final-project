import mongoose, { Document, Schema } from 'mongoose';

export interface iAppointment extends Document {
    user: String,
    email: String,
    date: Date,
    photoPack: Array<Object>,
}

const schema = new Schema({
  user: { type: String, require: true },
  email: { type: String, require: false },
  date: { type: Date, require: true, default: Date.now },
  photoPack: { type: Array, require: false },
});

export const Appointment = mongoose.model<iAppointment>('Appointment', schema);
