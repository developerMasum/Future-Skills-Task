import { Router } from 'express';

import { CardRoutes } from '../modules/Cards/card.route';

const router = Router();

const moduleRoutes = [
  {
    path: '/cards',
    route: CardRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
