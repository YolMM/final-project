import React from 'react';
import useSWR from 'swr';
import { PricesTable, TableElem, TableTitle } from './style/Style';

const Prices = () => {
  const { data, error } = useSWR('/prices');

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>We couldn&apos;t find anything. Sorry :(</div>;

  return (
    <PricesTable>
      <tr>
        <TableTitle>Pack</TableTitle>
        <TableTitle>Photo&apos;s quantity</TableTitle>
        <TableTitle>Photos&apos; size</TableTitle>
        <TableTitle>Printed</TableTitle>
        <TableTitle>Price</TableTitle>
      </tr>
      {data.map((prices: any) => (
        <tr>
          <TableElem>{prices.packName}</TableElem>
          <TableElem>{prices.quantity}</TableElem>
          <TableElem>{prices.size}</TableElem>
          <TableElem>{(prices.printed) ? 'Yes' : 'No'}</TableElem>
          <TableElem>
            {prices.price}
            €
          </TableElem>
        </tr>
      ))}
    </PricesTable>
  );
};

export default Prices;
