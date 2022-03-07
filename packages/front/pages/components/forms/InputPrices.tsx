import React from 'react';
import styled from 'styled-components';
import { usePrices } from '../../../lib/stores/usePrices';

const FlexDiv = styled.div`
display:flex;
margin: 10px;
`;

const FormInput = styled.div`
display:flex;
flex-flow: raw nowrap;
margin:10px;
`;

const InputPrices = () => {
  const [state, actions] = usePrices();

  return (
    <div>
      <FlexDiv>
        <FormInput>
          <input value={state.prices.quantity} onChange={(e) => (actions.updateQuantity(e.target.value))} placeholder="0" />
        </FormInput>
        <FormInput>
          <p>Choose one</p>
          <input value={state.prices.size} onChange={(e) => (actions.updateSize(e.target.value))} placeholder="Size" />
        </FormInput>
        <FormInput>
          <p>Do you want photos printed?</p>
          <input value={state.prices.printed} onChange={(e) => (actions.updatePrinted(e.target.value))} placeholder="" />
          <button onClick={() => actions.sendAppoint()} type="button">Create pack</button>
        </FormInput>
      </FlexDiv>
    </div>
  );
};

export default InputPrices;
