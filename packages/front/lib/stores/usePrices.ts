import { createHook, createStore } from 'react-sweet-state';
import { mutate } from '../swr-fetch';

const Store = createStore({
  initialState: {
    prices: {
      quantity: 0,
      size: '',
      printed: true,
    },
  },
  actions: {
    updateQuantity: (quant) => ({ setState, getState }) => {
      const currentphotoPack = getState().prices;
      const quantity = parseInt(quant, 10);
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
    updatePrinted: (print) => ({ setState, getState }) => {
      const currentphotoPack = getState().prices;
      const printed = (print === 'true');
      setState({
        prices: { ...currentphotoPack, printed },
      });
    },
    sendAppoint: () => ({ setState, getState }) => {
      const currentphotoPack = getState().prices;
      console.log(currentphotoPack);

      // Send info to DB
      mutate('/prices', currentphotoPack);

      // Empty inputs
      setState({
        prices: {
          quantity: 0,
          size: '',
          printed: true,
        },
      });
    },
  },
  name: 'photoPack',
});

export const usePrices = createHook(Store);
