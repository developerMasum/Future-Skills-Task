import { Schema, model } from 'mongoose';

// Define the TCard interface to include MongoDB document properties
export type TCard = {
  title: string;
  description: string;
  link: string;
};

// Define the cardSchema with ObjectId as the unique identifier
const cardSchema = new Schema<TCard>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// Create the model with a proper type definition
export const Card = model<TCard>('Card', cardSchema);
