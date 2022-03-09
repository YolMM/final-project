import mongoose, { Document, Schema } from 'mongoose';
import { iPrices } from './Prices.model';

export interface iAppointment extends Document {
    user: String,
    email: String,
    date: Date,
    photoPack: iPrices['_id'],
}

const schema = new Schema({
  user: { type: String, require: true },
  email: { type: String, require: false },
  date: { type: Date, require: true, default: Date.now() },
  photoPack: { type: Schema.Types.ObjectId, ref: 'iPrices', require: false },
});

export const Appointment = mongoose.model<iAppointment>('Appointment', schema);
