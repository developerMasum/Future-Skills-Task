// card.service.ts

import { Card, TCard } from './card.model';
import { Request } from 'express';

const createCard = async (payload: TCard) => {
  const result = await Card.create(payload);
  return result;
};

const getAllCards = async (req: Request) => {
  const { title } = req.query as { title?: string };
  const query = title ? { title } : {};

  const cards = await Card.find(query);
  return cards;
};

const getSingleCard = async (title: string) => {
  const result = await Card.findOne({ title });
  return result;
};

export const CardsServices = {
  createCard,
  getAllCards,
  getSingleCard,
};
