import React from 'react';
import Prices from './components/Prices';

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
          <th></th>
        </tr>
        <Prices />
      </table>
    </div>
    <div>
      <p>Here you can choose one of these packs or create your own pack and make an appointment.</p>
      <button type="button" onClick={(e) => console.log('click', e)}>Make an appointment</button>
    </div>
  </div>
);

export default PricesPage;
