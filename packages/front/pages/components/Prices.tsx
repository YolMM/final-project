import React from 'react';
import useSWR from 'swr';

const Prices = () => {
  const { data, error } = useSWR('/prices');

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>We couldn't find anything. Sorry :(</div>;

  return (
    <div>
      {data.map((prices) => (
        <tr>
          <td>{prices.packName}</td>
          <td>{prices.quantity}</td>
          <td>{prices.size}</td>
          <td>{prices.printed}</td>
          <td>{prices.price}</td>
          <td><button type="button" onClick={(e) => console.log(e)}>Select</button></td>
        </tr>
      ))}
    </div>
  );
};

export default Prices;
