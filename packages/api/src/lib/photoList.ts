/* eslint-disable no-unused-vars */
import { Photos } from '../models/Photos.model';

export const photoLists = async () => {
  const weddingCollection = await Photos.create({
    name: 'Weddings',
    images: ['bgl2.jpg', 'bgb4.jpg', 'bgr1.jpg', 'bgb3.jpg', 'girl3.jpg', 'bgc1.jpg', 'arch.jpg', 'bbk1.jpg', 'bg1.jpg', 'bgb.jpg', 'bgb2.jpg', 'bgb5.jpg', 'gondola.jpg'],
  });
  const studioCollection = await Photos.create({
    name: 'Studio',
    images: ['photowork5.jpg', 'wp2.jpg', 'fam1.jpg', 'wp3.jpg', 'mp2.jpg', 'dog1.jpg', 'cp2.jpg', 'wp1.jpg', 'wp5.jpg', 'mp1.jpg', 'dog2.jpg', 'fam2.jpg', 'wp4.jpg'],
  });
  const otherCollection = await Photos.create({
    name: 'Others',
    images: ['girl1.jpg', 'bgl1.jpg', 'guitar.jpg', 'cp3.jpg', 'kids1.jpg', 'girl2.jpg', 'bee.jpg', 'fam3.jpg', 'kids2.jpg', 'cp1.jpg', 'girl4.jpg'],
  });
};
