/* eslint-disable no-unused-vars */
import axios from 'axios';
import _ from 'lodash';
import { Reviews } from '../models/Reviews.model';
import { reviewsList } from './reviewsList';

const getUser = async () => {
  const responseName = await axios.get('https://random-names-api.herokuapp.com/random');
  const userName: string = responseName.data.body.name;
  const userGenre: string = responseName.data.body.genre;
  return [userName, userGenre];
};

const getUserPic = async (userName: string, userGenre: string) => {
  let genre: string;
  if (userGenre === 'F') {
    genre = 'female';
  } else {
    genre = 'male';
  }
  const urlPic = `https://joeschmoe.io/api/v1/${genre}/${userName}`;
  const userPic = await axios.get(urlPic);
  return userPic;
};

export const getReviews = async () => {
  const users = await Promise.all(
    _.range(0, reviewsList.length).map((e) => getUser()),
  );

  if (users !== undefined) {
    const usersPic = await Promise.all(
      _.range(0, reviewsList.length).map((e) => getUserPic(users[0][e], users[1][e])),
    );

    for (let i = 0; i < reviewsList.length; i += 1) {
      const review = new Reviews({
        userName: users[0][i],
        profilePic: usersPic[i],
        comment: reviewsList[i].comment,
        rate: reviewsList[i].rate,
      });
    }
  }
};
