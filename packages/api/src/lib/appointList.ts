import { Appointment } from "../models/Appointment.model";

export const AppointsList =  async () => {
    const weddingCollection = await Appointment.create({
        user: 'unknown',
        date: Date,
    });
}
