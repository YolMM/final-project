import React from 'react';
import Image from 'next/image';
import InputReview from './components/forms/InputReview';
import Menu from './components/Menu';

const IndexPage = () => (
  <div>
    <Menu />
    <div>
      <h2>JD Photography</h2>
      <Image src="/logo.jpg" alt="logo" width="64" height="64" />
    </div>
    <InputReview />
  </div>
);

export default IndexPage;
