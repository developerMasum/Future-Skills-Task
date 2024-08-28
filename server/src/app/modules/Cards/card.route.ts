/* eslint-disable @typescript-eslint/no-explicit-any */
import express from 'express';
import { CardsController } from './card.controller';

const router = express.Router();

router.post('/', CardsController.createCard);

router.get('/', CardsController.getAllCards);
router.get('/:id', CardsController.getSingleCard);

export const CardRoutes = router;
