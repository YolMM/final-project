import React from 'react';
import useSWR from 'swr';
import { Card, H2, ProfPic, ReviewDiv, ReviewSty } from './style/Style';

const Review = () => {
  const { data } = useSWR('/reviews');
  if (!data) {
    return <div>We couldn't find any review. Sorry :(</div>;
  }
  return (
    <ReviewSty>
      <H2>Customers' reviews</H2>
      <ReviewDiv>
        {data.map((reviews) => (
          <Card key={reviews.id}>
            <ProfPic src={reviews.profilePic} alt="Profile pic" />
            <div>
              <p>{reviews.userName}</p>
              <p>{'⭐'.repeat(reviews.rate)}{'★'.repeat(5 - reviews.rate)}</p>
              <p>{reviews.comment}</p>
            </div>
          </Card>
        ))}
      </ReviewDiv>
    </ReviewSty>
  );
};

export default Review;
