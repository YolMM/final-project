import React from 'react';
import useSWR from 'swr';
import { useRouter } from 'next/router';
import {
  PagesSty,
  CenteredPh, GallerySty, H2, PhotoWork,
} from './components/style/Style';

const Gallery = () => {
  const { data } = useSWR('/photos');
  if (!data) {
    return <div>We couldn&apos;t find anything. Sorry :(</div>;
  }

  const { query } = useRouter();

  const filtered = data.filter((e: any) => e.name === query.filter);

  return (
    <div>
      {filtered.map((photos: any) => (
        <PagesSty>
          <div>
            <H2>{photos.name}</H2>
          </div>
          <GallerySty>
            {photos.images.map((ph: any) => (
              <CenteredPh>
                <PhotoWork src={ph} alt="photo" />
              </CenteredPh>
            ))}
          </GallerySty>
        </PagesSty>
      ))}
    </div>
  );
};

export default Gallery;
