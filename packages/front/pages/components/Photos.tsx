import React from 'react';
import useSWR from 'swr';
import { Button, H2, PhotoName, PhotosDiv, PhotosSty, Pic } from './style/Style';

const Photos = () => {
  const { data } = useSWR('/photos');
  if (!data) {
    return <div>We couldn't find anything. Sorry :(</div>;
  }

  return (
    <PhotosSty>
      <H2>See some of my work ↓</H2>
      <PhotosDiv>
        {data.map((photos) => {
          const url = `/gallery?filter=${photos.name}`;
          return (
            <div>
              <Pic src={photos.images[0]} alt="photo" />
              <PhotoName>
                <div>{photos.name}</div>
                <a href={url}><Button type="button">See more</Button></a>
              </PhotoName>
            </div>
          );
        })}
      </PhotosDiv>
    </PhotosSty>
  );
};

export default Photos;
