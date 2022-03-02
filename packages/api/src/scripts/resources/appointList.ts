/* eslint-disable no-unused-vars */
import { Appointment } from '../../models/Appointment.model';

export const appointsList = async () => {
  const firstDate = await Appointment.create({
    user: 'unknown',
    date: '2022-03-17',
  });
  const secondDate = await Appointment.create({
    user: 'unknown',
    date: '2022-04-14',
  });
  const fourthDate = await Appointment.create({
    user: 'unknown',
    date: '2022-05-01',
  });
  const fifthDate = await Appointment.create({
    user: 'unknown',
    date: '2022-03-26',
  });
  const sixthDate = await Appointment.create({
    user: 'unknown',
    date: '2022-04-07',
  });
};
