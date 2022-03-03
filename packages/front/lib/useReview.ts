import { createHook, createStore } from 'react-sweet-state';

const Store = createStore({
  initialState: {
    review: { userName: '', email: '' },
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
    sendReview: () => ({ setState, getState }) => {
      const currentReview = getState().review;
      console.log(currentReview.email);
      console.log(currentReview.userName);

      // Back calling
      
      
      setState({
        review: { userName: '', email: '' },
      });
    },
  },
  name: 'review',
});

export const useReview = createHook(Store);
