/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import { CardsController } from './card.controller';

const router = express.Router();

router.post('/', CardsController.createCard);

router.get('/', CardsController.getAllCards);
router.get('/:title', CardsController.getSingleCard);

export const CardRoutes = router;
