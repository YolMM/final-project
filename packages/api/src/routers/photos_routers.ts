import { FastifyPluginAsync } from "fastify";
import { Photos } from "../models/Photos.model";

export const photos_router: FastifyPluginAsync = async (app) => {
    // Get all photos
    app.get('/', async () => {
        const photos = await Photos.find().lean();
        return photos;
    });
}