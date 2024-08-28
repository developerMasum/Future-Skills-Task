// card.service.ts

import { Card, TCard } from './card.model';
import { Request } from 'express';

const createCard = async (payload: TCard) => {
  const result = await Card.create(payload);
  return result;
};

const getAllCards = async (req: Request) => {
  const { title } = req.query as { title?: string };
  const query = title ? { title } : {}; // Modify the query if title is present

  const cards = await Card.find(query);
  return cards;
};

const getSingleCard = async (id: string) => {
  const result = await Card.findById(id);
  return result;
};

export const CardsServices = {
  createCard,
  getAllCards,
  getSingleCard,
};
