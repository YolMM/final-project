/* eslint-disable no-unused-vars */
import { Prices } from '../models/Prices.model';

export const pricesList = async () => {
  const carnetPack = await Prices.create({
    packName: 'Carnet pack',
    quantity: 8,
    price: 7.20,
    pricePerPhoto: 0.90,
    size: '3.5 x 4.5 cm',
    printed: true,
  });
  const regularPack = await Prices.create({
    packName: 'Regular pack',
    quantity: 15,
    price: 9.95,
    pricePerPhoto: 0.70,
    size: '11 x 14 cm',
    printed: true,
  });
  const economicPack = await Prices.create({
    packName: 'Economic pack',
    quantity: 15,
    price: 7.95,
    pricePerPhoto: 0.55,
    size: '11 x 14 cm',
    printed: false,
  });
  const largePack = await Prices.create({
    packName: 'Large pack',
    quantity: 15,
    price: 11.65,
    pricePerPhoto: 0.80,
    size: '12 x 15 cm',
    printed: true,
  });
  const familyPack = await Prices.create({
    packName: 'Family pack',
    quantity: 5,
    price: 3.50,
    pricePerPhoto: 0.70,
    size: '20 x 24 cm',
    printed: true,
  });
};

export const pricesPerPh = [
  { pricePerPhoto: 0.65, size: '4 x 6 cm', printed: true },
  { pricePerPhoto: 0.50, size: '4 x 6 cm', printed: false },
  { pricePerPhoto: 0.68, size: '5 x 7 cm', printed: true },
  { pricePerPhoto: 0.53, size: '5 x 7 cm', printed: false },
  { pricePerPhoto: 0.70, size: '6 x 8 cm', printed: true },
  { pricePerPhoto: 0.55, size: '6 x 8 cm', printed: false },
  { pricePerPhoto: 0.73, size: '8 x 8 cm', printed: true },
  { pricePerPhoto: 0.58, size: '8 x 8 cm', printed: false },
  { pricePerPhoto: 0.75, size: '5 x 10 cm', printed: true },
  { pricePerPhoto: 0.60, size: '5 x 10 cm', printed: false },
  { pricePerPhoto: 0.78, size: '8 x 10 cm', printed: true },
  { pricePerPhoto: 0.63, size: '8 x 10 cm', printed: false },
  { pricePerPhoto: 0.80, size: '10 x 12 cm', printed: true },
  { pricePerPhoto: 0.65, size: '10 x 12 cm', printed: false },
  { pricePerPhoto: 0.83, size: '11 x 14 cm', printed: true },
  { pricePerPhoto: 0.68, size: '11 x 14 cm', printed: false },
  { pricePerPhoto: 0.85, size: '12 x 15 cm', printed: true },
  { pricePerPhoto: 0.70, size: '12 x 15 cm', printed: false },
  { pricePerPhoto: 0.88, size: '16 x 20 cm', printed: true },
  { pricePerPhoto: 0.73, size: '16 x 20 cm', printed: false },
  { pricePerPhoto: 0.90, size: '20 x 24 cm', printed: true },
  { pricePerPhoto: 0.75, size: '20 x 24 cm', printed: false },
];
