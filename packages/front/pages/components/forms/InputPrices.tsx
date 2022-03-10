/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { usePrices } from '../../../lib/stores/usePrices';
import {
  Button, FlexDiv, FormDiv, FormInput, PricesInp,
} from '../style/Style';

const sizeArr = ['4 x 6 cm', '5 x 7 cm', '6 x 8 cm', '8 x 8 cm', '5 x 10 cm', '8 x 10 cm', '10 x 12 cm', '11 x 14 cm', '12 x 15 cm', '16 x 20 cm', '20 x 24 cm'];

const InputPrices = () => {
  const [state, actions] = usePrices();

  return (
    <div>
      <FlexDiv>
        <FormDiv>
          <label>How many photos do you want?</label>
          <FormInput type="number" value={state.prices.quantity} onChange={(e) => (actions.updateQuantity(e.target.value))} required placeholder="0" />
          <PricesInp>
            <label>Choose one:</label>
            <select
              value={state.prices.size}
              onChange={(e) => (actions.updateSize(e.target.value))}
            >
              {sizeArr.map((e) => <option value={e}>{e}</option>)}
            </select>
          </PricesInp>
          <PricesInp>
            <label>Do you want your photos printed?</label>
            <FormInput type="checkbox" onChange={() => (actions.updatePrinted())} placeholder="" />
          </PricesInp>
        </FormDiv>
        <Button onClick={() => actions.sendAppoint()} type="button">Create pack</Button>
      </FlexDiv>
    </div>
  );
};

export default InputPrices;
