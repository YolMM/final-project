import React from 'react';
import { useAppoint } from '../../../lib/stores/useAppoint';
import {
  Button, FlexDiv, FormDiv, FormInput,
} from '../style/Style';

const InputAppoint = () => {
  const [state, actions] = useAppoint();

  return (
    <div>
      <FlexDiv>
        <FormDiv>
          <FormInput value={state.appointment.user} onChange={(e) => (actions.updateUser(e.target.value))} required placeholder="Name" />
          <FormInput value={state.appointment.email} onChange={(e) => (actions.updateEmail(e.target.value))} required placeholder="Email" />
          <FormInput type="date" value={state.appointment.date} onChange={(e) => (actions.updateDate(e.target.value))} required />
        </FormDiv>
        <Button onClick={() => actions.sendAppoint()} type="button">Make appointment</Button>
      </FlexDiv>
    </div>
  );
};

export default InputAppoint;
