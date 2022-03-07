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
      {data.map((photos) => (
        <div>
          <Image src={photos.images[0]} alt="photo" width="300" height="200" />
          <div>{photos.name}</div>
          <div>
            <button type="button" onClick={(e) => console.log(e)}>See more</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Photos;
