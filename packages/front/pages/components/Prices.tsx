import React from 'react';
import useSWR from 'swr';
import { PricesTable, TableElem, TableTitle } from './style/Style';

const Prices = () => {
  const { data, error } = useSWR('/prices');

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>We couldn't find anything. Sorry :(</div>;

  return (
    <PricesTable>
      <tr>
        <TableTitle>Pack</TableTitle>
        <TableTitle>Photo's quantity</TableTitle>
        <TableTitle>Photos' size</TableTitle>
        <TableTitle>Printed</TableTitle>
        <TableTitle>Price</TableTitle>
      </tr>
      {data.map((prices) => (
        <tr>
          <TableElem>{prices.packName}</TableElem>
          <TableElem>{prices.quantity}</TableElem>
          <TableElem>{prices.size}</TableElem>
          <TableElem>{(prices.printed) ? 'Yes' : 'No'}</TableElem>
          <TableElem>{prices.price} €</TableElem>
        </tr>
      ))}
    </PricesTable>
  );
};

export default Prices;
