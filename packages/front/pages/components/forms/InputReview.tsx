import React from 'react';
import { useReview } from '../../../lib/stores/useReview';
import FlexDiv from '../style/FlexDiv';
import FormInput from '../style/FormInput';

const InputReview = () => {
  const [state, actions] = useReview();

  return (
    <div>
      <FlexDiv>
        <FormInput>
          <input value={state.review.userName} onChange={(e) => (actions.updateUsername(e.target.value))} required placeholder="Name" />
        </FormInput>
        <FormInput>
          <input value={state.review.email} onChange={(e) => (actions.updateEmail(e.target.value))} required placeholder="Email" />
        </FormInput>
        <FormInput>
          <input value={state.review.rate} onChange={(e) => (actions.updateRate(e.target.value))} required placeholder="Value" />
        </FormInput>
        <FormInput>
          <input value={state.review.comment} onChange={(e) => (actions.updateComment(e.target.value))} required placeholder="Comment" />
          <button onClick={() => actions.sendReview()} type="button">Submit review</button>
        </FormInput>
      </FlexDiv>
    </div>
  );
};

export default InputReview;

/* Dejo esto aquí para cuando Auth0 funcione bien

<FormInput>
  <input value={review.profilePic} />
</FormInput>
 */
