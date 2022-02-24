import { FastifyPluginAsync } from 'fastify';
import fastifyCors from 'fastify-cors';
import { conectDB } from './lib/db';
import { appointmentRouter } from './routers/appointments_router';
import { mainRouter } from './routers/main_router';
import { photosRouter } from './routers/photos_routers';
import { pricesRouter } from './routers/prices_router';
import { reviewRouter } from './routers/reviews_router';

export const mainApp: FastifyPluginAsync = async (app) => {
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

  app.register(mainRouter);
  app.register(photosRouter, { prefix: '/photos' });
  app.register(appointmentRouter, { prefix: '/appointment' });
  app.register(pricesRouter, { prefix: '/prices' });
  app.register(reviewRouter, { prefix: '/reviews' });
};
