/* eslint-disable no-unused-vars */
import axios from 'axios';
import _ from 'lodash';
import { Reviews } from '../models/Reviews.model';
import { reviewsList } from './reviewsList';

const getUser = async () => {
  const responseName = await axios.get('https://random-names-api.herokuapp.com/random');
  const userName: string = responseName.data.body.name;
  const userGenre: string = responseName.data.body.genre;
  let userPic: string;
  if (userGenre === 'F') {
    userPic = `https://joeschmoe.io/api/v1/female/${userName}`;
  } else {
    userPic = `https://joeschmoe.io/api/v1/male/${userName}`;
  }
  const user = { name: userName, genre: userGenre, pic: userPic };
  return user;
};

export const getReviews = async () => {
  const users = await Promise.all(
    _.range(0, reviewsList.length).map((e) => getUser()),
  );

  for (let i = 0; i < reviewsList.length; i += 1) {
    // eslint-disable-next-line no-await-in-loop
    const reviews = await Reviews.create({
      userName: users[i].name,
      profilePic: users[i].pic,
      email: reviewsList[i].email,
      comment: reviewsList[i].comment,
      rate: reviewsList[i].rate,
    });
  }
};
