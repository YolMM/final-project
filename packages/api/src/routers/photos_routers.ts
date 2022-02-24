import { FastifyPluginAsync } from 'fastify';
import { Photos } from '../models/Photos.model';

export const photosRouter: FastifyPluginAsync = async (app) => {
  // Get all photos
  app.get('/', async () => {
    const photos = await Photos.find().lean();
    return photos;
  });
};
