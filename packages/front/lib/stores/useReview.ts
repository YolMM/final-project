import { createHook, createStore } from 'react-sweet-state';
import * as Yup from 'yup';
import { mutate } from '../swr-fetch';

const Store = createStore({
  initialState: {
    review: {
      userName: '',
      email: '',
      rate: 1,
      comment: '',
    },
    errors: {
      userName: true,
      email: true,
      rate: false,
      comment: true,
    },
  },
  actions: {
    updateUsername: (userName) => ({ setState, getState }) => {
      const currentReview = getState().review;
      const currentErrors = getState().errors;

      const valid = Yup.string().required().isValidSync(userName);
      if (!valid) {
        setState({
          review: { ...currentReview, userName: userName as string },
          errors: { ...currentErrors, userName: true },
        });
      } else {
        setState({
          review: { ...currentReview, userName: userName as string },
          errors: { ...currentErrors, userName: false },
        });
      }
    },
    updateEmail: (email) => ({ setState, getState }) => {
      const currentReview = getState().review;
      const currentErrors = getState().errors;

      const valid = Yup.string().email().isValidSync(email);
      if (!valid) {
        setState({
          review: { ...currentReview, email: email as string },
          errors: { ...currentErrors, email: true },
        });
      } else {
        setState({
          review: { ...currentReview, email: email as string },
          errors: { ...currentErrors, email: false },
        });
      }
    },
    updateRate: (rate) => ({ setState, getState }) => {
      const currentReview = getState().review;
      const currentErrors = getState().errors;

      const valid = Yup.number().min(1).max(5).isValidSync(rate);
      if (!valid) {
        setState({
          review: { ...currentReview },
        });
      } else {
        setState({
          review: { ...currentReview, rate: rate as number },
          errors: { ...currentErrors, rate: false },
        });
      }
    },
    updateComment: (comment) => ({ setState, getState }) => {
      const currentReview = getState().review;
      const currentErrors = getState().errors;

      const valid = Yup.string().required().isValidSync(comment);
      if (!valid) {
        setState({
          review: { ...currentReview, comment: comment as string },
          errors: { ...currentErrors, comment: true },
        });
      } else {
        setState({
          review: { ...currentReview, comment: comment as string },
          errors: { ...currentErrors, comment: false },
        });
      }
    },
    sendReview: () => ({ setState, getState }) => {
      const currentReview = getState().review;
      const currentErrors = getState().errors;

      // eslint-disable-next-line max-len
      if (currentErrors.userName || currentErrors.email || currentErrors.rate || currentErrors.comment) {
        return;
      }

      // Send info to DB
      mutate('/reviews', currentReview);

      // Empty inputs
      setState({
        review: {
          userName: '',
          email: '',
          rate: 1,
          comment: '',
        },
        errors: {
          userName: true,
          email: true,
          rate: true,
          comment: true,
        },
      });
    },
  },
  name: 'review',
});

export const useReview = createHook(Store);
