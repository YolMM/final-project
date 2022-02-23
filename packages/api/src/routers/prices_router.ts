import { FastifyPluginAsync, FastifyReply, FastifyRequest } from "fastify";
import { pricesPerPh } from "../lib/priceList";
import { Prices } from "../models/Prices.model";

type Myrequest = FastifyRequest<{
    Body: {quantity: number, size: string, printed: boolean,};
    Params: {id: string};
}>

export const prices_router: FastifyPluginAsync = async (app) => {
    // Get all packs of photos
    app.get('/', async () => {
        const packs = await Prices.find().lean();
        return packs;
    });
    // Create a new pack
    app.post('/', async (request: Myrequest, reply: FastifyReply) => {
        const { quantity, size, printed } = request.body;
        let photoPrice: number;
        for (let i = 0; i < pricesPerPh.length; i++) {
          if ((printed === pricesPerPh[i]['printed']) && (size === pricesPerPh[i]['size'])) {
                photoPrice = pricesPerPh[i]['pricePerPhoto'];
          }
        }
        let totalPrice = (photoPrice*quantity).toFixed(2);
        const pack = new Prices({ name: `Customer's pack`, quantity, size, printed, price: {totalPrice}, pricePerPhoto: {photoPrice} });
        await pack.save();
        return pack;
    });
    // Delete packs
    app.get('/:id/delete', async (request: Myrequest, reply: FastifyReply) => {
        const { id } = request.params;
        await Prices.findByIdAndDelete(id);
        return { status: 'delete' };
    });
  };