import { create } from "zustand";

const round = (num) => Math.round(num * 1000) / 1000;

const useExchangeStore = create((set) => ({
  giveCurrency: "USDT",
  getCurrency: "RUB",
  giveAmount: 1,
  getAmount: 81,

  // курсы
  rates: {
    USDT: { RUB: 81, BTC: 0.000015 },
    RUB: { USDT: 1 / 81.0, BTC: 0.00000019 },
  },

  setGiveCurrency: (currency) =>
    set((state) => {
      const newGetCurrency =
        currency === state.getCurrency ? state.giveCurrency : state.getCurrency;
      const rate = state.rates[currency]?.[newGetCurrency] || 1;

      return {
        giveCurrency: currency,
        getCurrency: newGetCurrency,
        getAmount: round(state.giveAmount * rate),
      };
    }),

  setGetCurrency: (currency) =>
    set((state) => {
      const newGiveCurrency =
        currency === state.giveCurrency ? state.getCurrency : state.giveCurrency;
      const rate = state.rates[newGiveCurrency]?.[currency] || 1;

      return {
        getCurrency: currency,
        giveCurrency: newGiveCurrency,
        getAmount: round(state.giveAmount * rate),
      };
    }),

  setGiveAmount: (amount) =>
    set((state) => {
      const clean = Math.max(0, Number(amount) || 0);
      const rate = state.rates[state.giveCurrency]?.[state.getCurrency] || 1;
      return {
        giveAmount: round(clean),
        getAmount: round(clean * rate),
      };
    }),

  setGetAmount: (amount) =>
    set((state) => {
      const clean = Math.max(0, Number(amount) || 0);
      const rate = state.rates[state.giveCurrency]?.[state.getCurrency] || 1;
      return {
        getAmount: round(clean),
        giveAmount: rate !== 0 ? round(clean / rate) : 0,
      };
    }),
}));

export default useExchangeStore;
