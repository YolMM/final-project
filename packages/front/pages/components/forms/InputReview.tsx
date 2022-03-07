import React from 'react';
import styled from 'styled-components';
import { useReview } from '../../../lib/stores/useReview';

const FlexDiv = styled.div`
display:flex;
align-content: space-around;
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
        </FormInput>
        <FormInput>
          <input value={state.review.email} onChange={(e) => (actions.updateEmail(e.target.value))} placeholder="Email" />
        </FormInput>
        <FormInput>
          <input value={state.review.rate} onChange={(e) => (actions.updateRate(e.target.value))} placeholder="Value" />
        </FormInput>
        <FormInput>
          <input value={state.review.comment} onChange={(e) => (actions.updateComment(e.target.value))} placeholder="Comment" />
          <button onClick={() => actions.sendReview()} type="button">Submit review</button>
        </FormInput>
      </FlexDiv>
    </div>
  );
};

export default InputReview;

/* Dejo esto aquí para cuando ponga el Auth0

<FormInput>
  <input value={review.profilePic} />
</FormInput>
 */
