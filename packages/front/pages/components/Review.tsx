import React from 'react';
import useSWR from 'swr';
import InputReview from './forms/InputReview';
import {
  Card, H2, ProfPic, ReviewDiv, ReviewSty,
} from './style/Style';

const Review = () => {
  const { data } = useSWR('/reviews');
  if (!data) {
    return <div>We couldn&apos;t find any review. Sorry :(</div>;
  }
  return (
    <ReviewSty>
      <H2>Customers&apos; reviews</H2>
      <ReviewDiv>
        {data.map((reviews: any) => (
          <Card key={reviews.id}>
            <ProfPic src={reviews.profilePic} alt="Profile pic" />
            <div>
              <p>{reviews.userName}</p>
              <p>
                {'⭐'.repeat(reviews.rate)}
                {'★'.repeat(5 - reviews.rate)}
              </p>
              <p>{reviews.comment}</p>
            </div>
          </Card>
        ))}
      </ReviewDiv>
      <H2>Leave a review!</H2>
      <InputReview />
    </ReviewSty>
  );
};

export default Review;
