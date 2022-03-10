import React from 'react';
import Image from 'next/image';
import Review from './components/Review';
import Photos from './components/Photos';
import {
  H1, Header, Title, WelcomeImg,
} from './components/style/Style';

const IndexPage = () => (
  <div>
    <Header>
      <Title>
        <Image src="/logo.png" alt="logo" width="120" height="90" />
        <H1>JD Photography</H1>
      </Title>
      <WelcomeImg>
        <Image src="/welcome.jpg" alt="wlcm-img" width="1350" height="700" />
      </WelcomeImg>
    </Header>
    <div>
      <Photos />
    </div>
    <div>
      <Review />
    </div>
  </div>
);

export default IndexPage;
