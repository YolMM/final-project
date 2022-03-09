import React from 'react';
import useSWR from 'swr';
import { Card, ProfPic, ReviewSty } from './style/Style';

const Review = () => {
  const { data } = useSWR('/reviews');
  if (!data) {
    return <div>We couldn't find any review. Sorry :(</div>;
  }
  return (
    <ReviewSty>
      {data.map((reviews) => (
        <Card key={reviews.id}>
          <ProfPic src={reviews.profilePic} alt="Profile pic" />
          <div>
            <p>{reviews.userName}</p>
            <p>{reviews.rate}</p>
            <p>{reviews.comment}</p>
          </div>
        </Card>
      ))}
    </ReviewSty>
  );
};

export default Review;
