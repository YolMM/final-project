import { createHook, createStore } from 'react-sweet-state';
import { mutate } from '../swr-fetch';

const Store = createStore({
  initialState: {
    appointment: {
      user: '',
      email: '',
      date: '',
    },
  },
  actions: {
    updateUser: (user) => ({ setState, getState }) => {
      const currentAppoint = getState().appointment;
      setState({
        appointment: { ...currentAppoint, user },
      });
    },
    updateEmail: (email) => ({ setState, getState }) => {
      const currentAppoint = getState().appointment;
      setState({
        appointment: { ...currentAppoint, email },
      });
    },
    updateDate: (date) => ({ setState, getState }) => {
      const currentAppoint = getState().appointment;
      setState({
        appointment: { ...currentAppoint, date },
      });
    },
    sendAppoint: () => ({ setState, getState }) => {
      const currentAppoint = getState().appointment;

      // Send info to DB
      mutate('/appointments', currentAppoint);

      // Empty inputs
      setState({
        appointment: {
          user: '',
          email: '',
          date: '',
        },
      });
    },
  },
  name: 'appointment',
});

export const useAppoint = createHook(Store);
