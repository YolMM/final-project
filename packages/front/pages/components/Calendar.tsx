import React from 'react';
import useSWR from 'swr';

const Calendar = () => {
  const { data } = useSWR('/appointments');
  if (!data) {
    return <div>We couldn't find any appointment. Sorry :(</div>;
  }
  return (
    <div>
      <p>Data is here!</p>
      {data.map((appoints) => (
        <div key={appoints.id}>
          <p>{appoints.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Calendar;
