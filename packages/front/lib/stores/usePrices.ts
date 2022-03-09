import { createHook, createStore } from 'react-sweet-state';
import * as Yup from 'yup';
import { mutate } from '../swr-fetch';

const Store = createStore({
  initialState: {
    prices: {
      quantity: 1,
      size: '4 x 6 cm',
      printed: false,
    },
    errors: {
      quantity: false,
      size: false,
    },
  },
  actions: {
    updateQuantity: (quant) => ({ setState, getState }) => {
      const currentphotoPack = getState().prices;
      const currentErrors = getState().errors;

      const valid = Yup.number().min(1).isValidSync(quant);
      if (!valid) {
        setState({
          prices: { ...currentphotoPack },
        });
      } else {
        setState({
          prices: { ...currentphotoPack, quantity: quant as number },
          errors: { ...currentErrors, quantity: false },
        });
      }
    },
    updateSize: (size) => ({ setState, getState }) => {
      const currentphotoPack = getState().prices;
      const currentErrors = getState().errors;

      const valid = Yup.string().matches(/(\d|\d\d) x (\d|\d\d) cm/).isValidSync(size);
      if (!valid) {
        setState({
          prices: { ...currentphotoPack },
          errors: { ...currentErrors, size: true },
        });
      } else {
        setState({
          prices: { ...currentphotoPack, size: size as string },
          errors: { ...currentErrors, size: false },
        });
      }
    },
    updatePrinted: () => ({ setState, getState }) => {
      const currentphotoPack = getState().prices;
      const printed = !currentphotoPack.printed;
      setState({
        prices: { ...currentphotoPack, printed },
      });
    },
    sendAppoint: () => ({ setState, getState }) => {
      const currentphotoPack = getState().prices;
      const currentErrors = getState().errors;

      if (currentErrors.size) {
        return;
      }

      // Send info to DB
      mutate('/prices', currentphotoPack);

      // Empty inputs
      setState({
        prices: {
          quantity: 1,
          size: currentphotoPack.size,
          printed: currentphotoPack.printed,
        },
        errors: {
          quantity: false,
          size: false,
        },
      });
    },
  },
  name: 'photoPack',
});

export const usePrices = createHook(Store);
