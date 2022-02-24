import { FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify";
import { Appointment } from "../models/Appointment.model";

type Myrequest = FastifyRequest<{
    Body: {user: string, email: string, date: number};
    Params: {id: string};
}>

export const appointment_router: FastifyPluginAsync = async (app) => {
    // Get all appointments
    app.get('/', async () => {
        const appointment = await Appointment.find().lean();
        return appointment;
    });
    // Details of a appointment
    app.get('/:id', async (request: Myrequest, reply: FastifyReply) => {
        const { id } = request.params;
        await Appointment.findById(id);
        return { status: 'detail' };
    });
    // Create a new appointment
    app.post('/', async (request: Myrequest, reply: FastifyReply) => {
        const { user, email, date } = request.body;
        const appointment = new Appointment({ user, email, date });
        await appointment.save();
        return appointment;
    });
    // Update a appointment
    app.get('/:id', async (request: Myrequest, reply: FastifyReply) => {
        const { id } = request.params;
        await Appointment.findByIdAndUpdate(id);
        return { status: 'update' };
    });
    // Delete a appointment
    app.get('/:id/delete', async (request: Myrequest, reply: FastifyReply) => {
        const { id } = request.params;
        await Appointment.findByIdAndDelete(id);
        return { status: 'delete' };
    });
};
