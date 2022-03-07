import React from 'react';
import styled from 'styled-components';
import { useAppoint } from '../../../lib/stores/useAppoint';

const FlexDiv = styled.div`
display:flex;
margin: 10px;
`;

const FormInput = styled.div`
display:flex;
flex-flow: raw nowrap;
margin:10px;
`;

const InputAppoint = () => {
  const [state, actions] = useAppoint();

  return (
    <div>
      <FlexDiv>
        <FormInput>
          <input value={state.appointment.user} onChange={(e) => (actions.updateUser(e.target.value))} placeholder="Name" />
        </FormInput>
        <FormInput>
          <input value={state.appointment.email} onChange={(e) => (actions.updateEmail(e.target.value))} placeholder="Email" />
        </FormInput>
        <FormInput>
          <input value={state.appointment.date} onChange={(e) => (actions.updateDate(e.target.value))} placeholder="Date" />
          <button onClick={() => actions.sendAppoint()} type="button">Make appointment</button>
        </FormInput>
      </FlexDiv>
    </div>
  );
};

export default InputAppoint;
