import React from 'react';
import Calendar from './components/Calendar';
import InputAppoint from './components/forms/InputAppoint';

const AppointmentPage = () => (
  <div>
    <div>
      <InputAppoint />
    </div>
    <div>
      <Calendar />
    </div>
  </div>
);

export default AppointmentPage;
