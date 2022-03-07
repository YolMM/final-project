/* eslint-disable no-unused-vars */
import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify';
import { pricesPerPh } from '../scripts/resources/priceList';
import { Prices } from '../models/Prices.model';

type Myrequest = FastifyRequest<{
    Body: {quantity: number, size: string, printed: boolean};
    Params: {id: string};
}>

export const pricesRouter: FastifyPluginAsync = async (app) => {
  // Get all packs of photos
  app.get('/', async () => {
    const packs = await Prices.find().lean();
    return packs;
  });
  // Details of a pack
  app.get('/:id', async (request: Myrequest, reply: FastifyReply) => {
    const { id } = request.params;
    const pack = await Prices.findById(id);
    return pack;
  });
  // Create a new pack
  app.post('/', async (request: Myrequest, reply: FastifyReply) => {
    const { quantity, size, printed } = request.body;
    let photoPrice: number = 0;
    for (let i = 0; i < pricesPerPh.length; i += 1) {
      if ((printed === pricesPerPh[i].printed) && (size === pricesPerPh[i].size)) {
        photoPrice = pricesPerPh[i].pricePerPhoto;
      }
    }
    const totalPrice = (photoPrice * quantity).toFixed(2);
    const pack = new Prices({
      packName: 'Customer\'s pack', quantity, size, printed, price: totalPrice, pricePerPhoto: photoPrice,
    });
    await pack.save();
    return pack;
  });
  // Update a selection
  app.post('/:id', async (request: Myrequest, reply: FastifyReply) => {
    const { id } = request.params;
    const pack = await Prices.findOneAndUpdate({ _id: id }, request.body, {
      new: true,
    });
    return pack;
  });
  // Delete packs
  app.delete('/:id', async (request: Myrequest, reply: FastifyReply) => {
    const { id } = request.params;
    await Prices.findByIdAndDelete(id);
    return { status: 'delete' };
  });
};
