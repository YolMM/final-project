/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import { Reviews } from '../models/Reviews.model';

type Myrequest = FastifyRequest<{
    Body: {userName: string, email: string, comment: string, rate: number};
    Params: {id: string};
}>

export const reviewRouter: FastifyPluginAsync = async (app) => {
  // Get all reviews
  app.get('/', async () => {
    const review = await Reviews.find().lean();
    return review;
  });
  // Details of a review
  app.get('/:id', async (request: Myrequest, reply: FastifyReply) => {
    const { id } = request.params;
    await Reviews.findById(id);
    return { status: 'detail' };
  });
  // Create a new review
  app.post('/', async (request: Myrequest, reply: FastifyReply) => {
    const { userName, email, comment, rate } = request.body;
    const review = new Reviews({ userName, email, comment, rate });
    await review.save();
    return review;
  });
  // Update a review
  app.get('/:id', async (request: Myrequest, reply: FastifyReply) => {
    const { id } = request.params;
    await Reviews.findByIdAndUpdate(id);
    return { status: 'update' };
  });
  // Delete a review
  app.get('/:id/delete', async (request: Myrequest, reply: FastifyReply) => {
    const { id } = request.params;
    await Reviews.findByIdAndDelete(id);
    return { status: 'delete' };
  });
};
