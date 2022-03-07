import { createHook, createStore } from 'react-sweet-state';
import { mutate } from '../swr-fetch';

const Store = createStore({
  initialState: {
    review: {
      userName: '',
      email: '',
      rate: 1,
      comment: '',
    },
  },
  actions: {
    updateUsername: (userName) => ({ setState, getState }) => {
      const currentReview = getState().review;
      setState({
        review: { ...currentReview, userName },
      });
    },
    updateEmail: (email) => ({ setState, getState }) => {
      const currentReview = getState().review;
      setState({
        review: { ...currentReview, email },
      });
    },
    updateRate: (rate) => ({ setState, getState }) => {
      const currentReview = getState().review;
      setState({
        review: { ...currentReview, rate },
      });
    },
    updateComment: (comment) => ({ setState, getState }) => {
      const currentReview = getState().review;
      setState({
        review: { ...currentReview, comment },
      });
    },
    sendReview: () => ({ setState, getState }) => {
      const currentReview = getState().review;

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
      });
    },
  },
  name: 'review',
});

export const useReview = createHook(Store);
