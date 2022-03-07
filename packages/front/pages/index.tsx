import React from 'react';
import Image from 'next/image';
import InputReview from './components/forms/InputReview';
import Review from './components/Review';
import Photos from './components/Photos';

const IndexPage = () => (
  <div>
    <div>
      <h2>JD Photography</h2>
      <Image src="/logo.jpg" alt="logo" width="64" height="64" />
    </div>
    <div>
      <Photos />
    </div>
    <div>
      <Review />
    </div>
    <div>
      <InputReview />
    </div>
  </div>
);

export default IndexPage;
