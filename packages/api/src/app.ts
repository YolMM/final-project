import { FastifyPluginAsync } from 'fastify';
import fastifyCors from 'fastify-cors';
import fastifyAuth0 from 'fastify-auth0-verify';
import { conectDB } from './lib/db';
import { appointmentRouter } from './routers/appointments_router';
import { mainRouter } from './routers/main_router';
import { photosRouter } from './routers/photos_routers';
import { pricesRouter } from './routers/prices_router';
import { reviewRouter } from './routers/reviews_router';
import { AUTH0 } from './config';

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

  // Auth0
  await app.register(fastifyAuth0, {
    domain: AUTH0.DOMAIN,
    audience: AUTH0.AUDIENCE,
  });

  app.get('/verify', {
    handler(request, reply) {
      reply.send(request.user);
    },
    preValidation: app.authenticate,
  });

  // Plugins
  app.register(mainRouter);
  app.register(photosRouter, { prefix: '/photos' });
  app.register(appointmentRouter, { prefix: '/appointments' });
  app.register(pricesRouter, { prefix: '/prices' });
  app.register(reviewRouter, { prefix: '/reviews' });
};
