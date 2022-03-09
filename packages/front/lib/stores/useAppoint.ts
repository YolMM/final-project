import { createHook, createStore } from 'react-sweet-state';
import * as Yup from 'yup';
import { mutate } from '../swr-fetch';

const Store = createStore({
  initialState: {
    appointment: {
      user: '',
      email: '',
      date: new Date(),
    },
    errors: {
      user: true,
      email: true,
      date: true,
    },
  },
  actions: {
    updateUser: (user) => ({ setState, getState }) => {
      const currentAppoint = getState().appointment;
      const currentErrors = getState().errors;

      const valid = Yup.string().required().isValidSync(user);
      if (!valid) {
        setState({
          appointment: { ...currentAppoint, user: user as string },
          errors: { ...currentErrors, user: true },
        });
      } else {
        setState({
          appointment: { ...currentAppoint, user: user as string },
          errors: { ...currentErrors, user: false },
        });
      }
    },
    updateEmail: (email) => ({ setState, getState }) => {
      const currentAppoint = getState().appointment;
      const currentErrors = getState().errors;

      const valid = Yup.string().email().isValidSync(email);
      if (!valid) {
        setState({
          appointment: { ...currentAppoint, email: email as string },
          errors: { ...currentErrors, email: true },
        });
      } else {
        setState({
          appointment: { ...currentAppoint, email: email as string },
          errors: { ...currentErrors, email: false },
        });
      }
    },
    updateDate: (date) => ({ setState, getState }) => {
      const currentAppoint = getState().appointment;
      const currentErrors = getState().errors;

      const valid = Yup.date().min(new Date(Date.now())).isValidSync(date);
      if (!valid) {
        setState({
          appointment: { ...currentAppoint },
          errors: { ...currentErrors, date: true },
        });
      } else {
        setState({
          appointment: { ...currentAppoint, date: date as Date },
          errors: { ...currentErrors, date: false },
        });
      }
    },
    sendAppoint: () => ({ setState, getState }) => {
      const currentAppoint = getState().appointment;
      const currentErrors = getState().errors;

      if (currentErrors.user || currentErrors.email || currentErrors.date) {
        return;
      }

      // Send info to DB
      mutate('/appointments', currentAppoint);

      // Empty inputs
      setState({
        appointment: {
          user: '',
          email: '',
          date: new Date(),
        },
        errors: {
          user: true,
          email: true,
          date: true,
        },
      });
    },
  },
  name: 'appointment',
});

export const useAppoint = createHook(Store);
