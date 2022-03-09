import React from 'react';
import { useAppoint } from '../../../lib/stores/useAppoint';
import FlexDiv from '../style/FlexDiv';
import FormInput from '../style/FormInput';

const InputAppoint = () => {
  const [state, actions] = useAppoint();

  return (
    <div>
      <FlexDiv>
        <FormInput>
          <input value={state.appointment.user} onChange={(e) => (actions.updateUser(e.target.value))} required placeholder="Name" />
        </FormInput>
        <FormInput>
          <input value={state.appointment.email} onChange={(e) => (actions.updateEmail(e.target.value))} required placeholder="Email" />
        </FormInput>
        <FormInput>
          <input type="date" value={state.appointment.date} onChange={(e) => (actions.updateDate(e.target.value))} required />
          <button onClick={() => actions.sendAppoint()} type="button">Make appointment</button>
        </FormInput>
      </FlexDiv>
    </div>
  );
};

export default InputAppoint;
