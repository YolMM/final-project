import { FastifyPluginAsync } from 'fastify';
import fastifyCors from 'fastify-cors';
import { conectDB } from './lib/db';
import { appointment_router } from './routers/appointments_router';
import { main_router } from './routers/main_router';
import { photos_router } from './routers/photos_routers';
import { prices_router } from './routers/prices_router';
import { review_router } from './routers/reviews_router';

export const main_app: FastifyPluginAsync = async (app) => {
  conectDB();

  app.register(fastifyCors, {
    origin: (origin, cb) => {
      if (/localhost/.test(origin)) {
        //  Request from localhost will pass
        cb(null, true);
        return;
      }
      // Generate an error on other origins, disabling access
      cb(null, false);
    },
  });

  app.register(main_router);
  app.register(photos_router, { prefix: '/photos' });
  app.register(appointment_router, { prefix: '/appointment' });
  app.register(prices_router, { prefix: '/prices' });
  app.register(review_router, { prefix: '/reviews' });
};
