import React from 'react';
import useSWR from 'swr';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Gallery = () => {
  const { data } = useSWR('/photos');
  if (!data) {
    return <div>We couldn't find anything. Sorry :(</div>;
  }

  const { query } = useRouter();

  const filtered = data.filter((e) => e.name === query.filter);

  return (
    <div>
      {filtered.map((photos) => (
        <div>
          <div>
            <h3>{photos.name}</h3>
          </div>
          <div>
            {photos.images.map((ph) => (
              <div>
                <Image src={ph} alt="photo" width="300" height="200" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;
