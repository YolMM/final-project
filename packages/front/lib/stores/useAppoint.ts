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
    updateUser: (user: string) => ({ setState, getState }) => {
      const currentAppoint = getState().appointment;
      setState({
        appointment: { ...currentAppoint, user },
      });
    },
    updateEmail: (email: string) => ({ setState, getState }) => {
      const currentAppoint = getState().appointment;
      setState({
        appointment: { ...currentAppoint, email },
      });
    },
    updateDate: (date: string) => ({ setState, getState }) => {
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
