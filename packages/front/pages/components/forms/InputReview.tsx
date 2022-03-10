import React from 'react';
import { useReview } from '../../../lib/stores/useReview';
// eslint-disable-next-line object-curly-newline
import { Button, Comment, FlexDiv, FormInput, FormDiv } from '../style/Style';

const InputReview = () => {
  const [state, actions] = useReview();

  return (
    <FlexDiv>
      <FormDiv>
        <div>
          <FormInput value={state.review.userName} onChange={(e) => (actions.updateUsername(e.target.value))} required placeholder="Name" />
          <FormInput value={state.review.email} onChange={(e) => (actions.updateEmail(e.target.value))} required placeholder="Email" />
          <FormInput value={state.review.rate} type="number" onChange={(e) => (actions.updateRate(e.target.value))} required placeholder="Value" />
        </div>
        <Comment value={state.review.comment} onChange={(e) => (actions.updateComment(e.target.value))} required placeholder="Comment" />
      </FormDiv>
      <Button onClick={() => actions.sendReview()} type="button">Submit review</Button>
    </FlexDiv>
  );
};

export default InputReview;

/* Dejo esto aquí para el futuro

<FormInput>
  <input value={review.profilePic} />
</FormInput>
 */
