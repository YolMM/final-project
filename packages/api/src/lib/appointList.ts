/* eslint-disable no-unused-vars */
import { Appointment } from '../models/Appointment.model';

export const appointsList = async () => {
  const firstDate = await Appointment.create({
    user: 'unknown',
    date: '17-03-2022',
  });
  const secondDate = await Appointment.create({
    user: 'unknown',
    date: '14-04-2022',
  });
  const fourthDate = await Appointment.create({
    user: 'unknown',
    date: '01-05-2022',
  });
  const fifthDate = await Appointment.create({
    user: 'unknown',
    date: '26-03-2022',
  });
  const sixthDate = await Appointment.create({
    user: 'unknown',
    date: '07-04-2022',
  });
};
