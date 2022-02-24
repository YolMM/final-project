import { appointsList } from '../lib/appointList';
import { conectDB } from '../lib/db';
import { getReviews } from '../lib/getReviews';
import { photoLists } from '../lib/photoList';
import { pricesList } from '../lib/priceList';
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
  .then(e => console.log(`${e} loaded successfully`))
  .catch(error => console.log(error));

  await close();
})();
