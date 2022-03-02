import { appointsList } from './resources/appointList';
import { conectDB } from '../lib/db';
import { getReviews } from './resources/getReviews';
import { photoLists } from './resources/photoList';
import { pricesList } from './resources/priceList';
import { Appointment } from '../models/Appointment.model';
import { Photos } from '../models/Photos.model';
import { Prices } from '../models/Prices.model';
import { Reviews } from '../models/Reviews.model';

(async () => {
  const { close } = await conectDB();
  try {
    await Appointment.collection.drop();
    await Photos.collection.drop();
    await Prices.collection.drop();
    await Reviews.collection.drop();
  } catch (error) {
    console.log('There are nothing to drop from db');
  }

  await Promise.all([appointsList(), photoLists(), pricesList(), getReviews()])
    // eslint-disable-next-line no-unused-vars
    .then((e) => console.log('📷 Everything loaded successfully'))
    .catch((error) => console.log(error));

  await close();
})();
