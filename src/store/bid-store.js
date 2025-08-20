// src/store/bid-store.js
import { create } from "zustand";

const useBidStore = create((set) => ({
  // Временные значения
  giveBidCurrency: "",
  getBidCurrency: "",
  getBidAmount: 0,
  bidStatus: "Отправка средств пользователю",

  // Методы изменения временных значений
  setGiveBidCurrency: (value) => set({ giveBidCurrency: value }),
  setGetBidCurrency: (value) => set({ getBidCurrency: value }),
  setGetBidAmount: (value) => set({ getBidAmount: value }),
  setBidId: (value) => set({bidId: value})
}));

export default useBidStore;
