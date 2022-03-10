import React from 'react';
import InputPrices from './components/forms/InputPrices';
import Prices from './components/Prices';
import {
  ALink, Button, H2, PagesSty, PricesInp,
} from './components/style/Style';

const PricesPage = () => (
  <PagesSty>
    <H2>Prices</H2>
    <div>
      <Prices />
    </div>
    <PricesInp>
      <p>Those are some generic prices that I have.</p>
      <p>Here you can create your own pack and make an appointment ↓</p>
      <InputPrices />
    </PricesInp>
    <ALink href="/appointments"><Button type="button">Make an appointment</Button></ALink>
  </PagesSty>
);

export default PricesPage;
