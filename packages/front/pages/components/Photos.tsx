import React from 'react';
import useSWR from 'swr';
import Image from 'next/image';

const Photos = () => {
  const { data } = useSWR('/photos');
  if (!data) {
    return <div>We couldn't find anything. Sorry :(</div>;
  }

  return (
    <div>
      {data.map((photos) => {
        const url = `/gallery?filter=${photos.name}`;
        return (
          <div>
            <Image src={photos.images[0]} alt="photo" width="300" height="200" />
            <div>{photos.name}</div>
            <div>
              <a href={url}><button type="button">See more</button></a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Photos;
