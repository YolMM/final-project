import React from 'react';
import InputPrices from './components/forms/InputPrices';
import Prices from './components/Prices';
import { Button } from './components/style/Style';

const PricesPage = () => (
  <div>
    <h2>Prices</h2>
    <div>
      <p>Those are some generic prices that I have.</p>
    </div>
    <div>
      <table>
        <tr>
          <th>Pack</th>
          <th>Photo's quantity</th>
          <th>Photos' size</th>
          <th>Printed</th>
          <th>Price</th>
        </tr>
        <Prices />
      </table>
    </div>
    <div>
      <p>Here you can choose one of these packs or create your own pack and make an appointment.</p>
      <InputPrices />
      <a href="/appointments"><Button type="button">Make an appointment</Button></a>
    </div>
  </div>
);

export default PricesPage;
