import React from 'react';
import useSWR from 'swr';
import { privateFetcher } from '../../lib/swr-fetch';
import InputAppoint from './forms/InputAppoint';

const Calendar = () => {
  const { data } = useSWR('api/appointments', privateFetcher);

  if (!data) {
    return <div>Please, log in to make an appointment.</div>;
  }

  return (
    <div>
      <div>
        <InputAppoint />
      </div>
      <div>
        {data.map((appoints) => (
          <div key={appoints.id}>
            <p>{appoints.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
