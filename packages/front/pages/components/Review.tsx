import React from 'react';
import useSWR from 'swr';

const Review = () => {
  const { data } = useSWR('/reviews');
  if (!data) {
    return <div>We couldn't find any review. Sorry :(</div>;
  }
  return (
    <div>
      {data.map((reviews) => (
        <div key={reviews.id}>
          <img src={reviews.profilePic} alt="Profile pic" width="150px" />
          <div>
            <p>{reviews.userName}</p>
            <p>{reviews.comment}</p>
            <p>{reviews.rate}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review;
