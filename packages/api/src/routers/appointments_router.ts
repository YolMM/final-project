/* eslint-disable no-unused-vars */
import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import { hasUser } from '../aux/hasUser';
import { Appointment } from '../models/Appointment.model';

type Myrequest = FastifyRequest<{
    Body: {user: string, email: string, date: number};
    Params: {id: string};
}>

export const appointmentRouter: FastifyPluginAsync = async (app) => {
  // Get all appointments
  app.get('/', async (req) => {
    const user = await hasUser(req);
    if (user) {
      const appointment = await Appointment.find().lean();
      return appointment;
    }
    return [];
  });
  // Details of an appointment
  app.get('/:id', async (request: Myrequest, reply: FastifyReply) => {
    const { id } = request.params;
    const appointment = await Appointment.findById(id);
    return appointment;
  });
  // Create a new appointment
  app.post('/', async (request: Myrequest, reply: FastifyReply) => {
    const { user, email, date } = request.body;
    const appointment = new Appointment({ user, email, date });
    await appointment.save();
    return appointment;
  });
  // Update an appointment
  app.post('/:id', async (request: Myrequest, reply: FastifyReply) => {
    const { id } = request.params;
    const appointment = await Appointment.findOneAndUpdate({ _id: id }, request.body, {
      new: true,
    });
    return appointment;
  });
  // Delete an appointment
  app.delete('/:id', async (request: Myrequest, reply: FastifyReply) => {
    const { id } = request.params;
    await Appointment.findByIdAndDelete(id);
    return { status: 'delete' };
  });
};
