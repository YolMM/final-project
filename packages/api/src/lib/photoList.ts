import { Photos } from "../models/Photos.model"

export const photoLists =  async () => {
  const weddingCollection = await Photos.create({
    name: 'Weddings',
    images: ['bgl2.jpg', 'bgb4.jpg', 'bgr1.jpg', 'bgb3.jpg', 'girl3.jpg', 'arch.jpg', 'bg1.jpg', 'bgb.jpg', 'bgb2.jpg', 'bgb5.jpg', 'gondola.jpg'],
  });

  const studioCollection = await Photos.create({
    name: 'Studio',
    images: ['photowork5.jpg', 'wp2.jpg', 'fam1.jpg', 'wp3.jpg', 'wp1.jpg', 'wp5.jpg', 'mp1.jpg', 'fam2.jpg', 'wp4.jpg'],
  });

  const otherCollection = await Photos.create({
    name: 'Others',
    images: ['girl1.jpg', 'bgl1.jpg', 'guitar.jpg', 'kids1.jpg', 'girl2.jpg', 'fam3.jpg', 'kids2.jpg', 'girl4.jpg'],
  });
}
