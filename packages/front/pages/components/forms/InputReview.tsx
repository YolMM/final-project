/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import styled from 'styled-components';
import { useReview } from '../../../lib/useReview';

const FlexDiv = styled.div`
display:flex
`;

const FormInput = styled.div`
display:flex;
flex-flow: colum nowrap;
margin:10px;
`;

const InputReview = () => {
  const [state, actions] = useReview();
  return (
    <div>
      <FlexDiv>
        <FormInput>
          <input value={state.review.userName} onChange={(e) => (actions.updateUsername(e.target.value))} placeholder="Name" />
          <input value={state.review.email} onChange={(e) => (actions.updateEmail(e.target.value))} placeholder="Email" />
          <button onClick={() => actions.sendReview()} type="button">Submit review</button>
        </FormInput>
      </FlexDiv>
    </div>
  );
};

export default InputReview;

/* Dejo esto aquí para cuando me funcione el formulario sencillo

        <FormInput>
          <input value={email} placeholder="e-mail" />
        </FormInput>
<FormInput>
  <input value={review.profilePic} />
</FormInput>
<FormInput>
  <input value={review.rate} placeholder="Value" />
</FormInput>
<FormInput>
  <input value={review.comment} placeholder="Comment" />
</FormInput> */
