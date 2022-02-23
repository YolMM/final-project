import { FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify";
import { Reviews } from "../models/Reviews.model";

type Myrequest = FastifyRequest<{
    Body: {userName: string, email: string, comment: string, rate: number};
    Params: {id: string};
}>

export const review_router: FastifyPluginAsync = async (app) => {
    // Get all reviews
    app.get('/', async () => {
        const review = await Reviews.find().lean();
        return review;
    });
    // Create a new review
    app.post('/', async (request: Myrequest, reply: FastifyReply) => {
        const { userName, email, comment, rate } = request.body;
        const review = new Reviews({ userName, email, comment, rate });
        await review.save();
        return review;
    });
    // Delete reviews
    app.get('/:id/delete', async (request: Myrequest, reply: FastifyReply) => {
        const { id } = request.params;
        await Reviews.findByIdAndDelete(id);
        return { status: 'delete' };
    });
  };
