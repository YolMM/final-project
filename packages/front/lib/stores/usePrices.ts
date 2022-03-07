import { createHook, createStore } from 'react-sweet-state';
import { mutate } from '../swr-fetch';

const Store = createStore({
  initialState: {
    prices: {
      quantity: '',
      size: '',
      printed: '',
    },
  },
  actions: {
    updateQuantity: (quantity) => ({ setState, getState }) => {
      const currentphotoPack = getState().prices;
      setState({
        prices: { ...currentphotoPack, quantity },
      });
    },
    updateSize: (size) => ({ setState, getState }) => {
      const currentphotoPack = getState().prices;
      setState({
        prices: { ...currentphotoPack, size },
      });
    },
    updatePrinted: (printed) => ({ setState, getState }) => {
      const currentphotoPack = getState().prices;
      setState({
        prices: { ...currentphotoPack, printed },
      });
    },
    sendAppoint: () => ({ setState, getState }) => {
      const currentphotoPack = getState().prices;

      // Send info to DB
      mutate('/prices', currentphotoPack);

      // Empty inputs
      setState({
        prices: {
          quantity: '',
          size: '',
          printed: '',
        },
      });
    },
  },
  name: 'photoPack',
});

export const usePrices = createHook(Store);
