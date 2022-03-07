/* eslint-disable no-unused-vars */
import { Photos } from '../../models/Photos.model';

export const photoLists = async () => {
  const weddingCollection = await Photos.create({
    name: 'Weddings',
    images: ['/weddings/bgl2.jpg', '/weddings/bgb4.jpg', '/weddings/bgr1.jpg', '/weddings/bgb3.jpg', '/weddings/girl3.jpg', '/weddings/bgc1.jpg', '/weddings/arch.jpg', '/weddings/bbk1.jpg', '/weddings/bg1.jpg', '/weddings/bgb.jpg', '/weddings/bgb2.jpg', '/weddings/bgb5.jpg', '/weddings/gondola.jpg'],
  });
  const studioCollection = await Photos.create({
    name: 'Studio',
    images: ['/studio/photowork5.jpg', '/studio/wp2.jpg', '/studio/fam1.jpg', '/studio/wp3.jpg', '/studio/mp2.jpg', '/studio/dog1.jpg', '/studio/cp2.jpg', '/studio/wp1.jpg', '/studio/wp5.jpg', '/studio/mp1.jpg', '/studio/dog2.jpg', '/studio/fam2.jpg', '/studio/wp4.jpg'],
  });
  const otherCollection = await Photos.create({
    name: 'Others',
    images: ['/others/girl1.jpg', '/others/bgl1.jpg', '/others/guitar.jpg', '/others/cp3.jpg', '/others/kids1.jpg', '/others/girl2.jpg', '/others/bee.jpg', '/others/fam3.jpg', '/others/kids2.jpg', '/others/cp1.jpg', '/others/girl4.jpg'],
  });
};
