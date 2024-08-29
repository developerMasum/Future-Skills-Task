import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { CardsServices } from './card.service';

const createCard = catchAsync(async (req, res) => {
  const result = await CardsServices.createCard(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Card is created successfully',
    data: result,
  });
});

const getAllCards = catchAsync(async (req, res) => {
  const result = await CardsServices.getAllCards(req);
  console.log(result);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Cards are fetched successfully',
    data: result,
  });
});

const getSingleCard = catchAsync(async (req, res) => {
  const title = req.params.title as string;
  const result = await CardsServices.getSingleCard(title);
  console.log(result);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Card is retrieved successfully',
    data: result,
  });
});

export const CardsController = {
  createCard,
  getAllCards,
  getSingleCard,
};
