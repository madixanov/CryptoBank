import { create } from "zustand";

const useBidStore = create((set) => ({
  giveBidCurrency: "",
  getBidAmount: 0,
  fullName: "",
  email: "",
  phoneNumber: "",
  cardPhone: "",
  card: "",
  cardFullName: "",
  telegram: "",
  discount: "",
  isAgree1: false,
  isAgree2: false,
  isAgree3: false,
  bidId: "",
  bidStatus: "Отправка средств пользователю",

  // ✅ Универсальный метод для обновления полей
  setField: (field, value) =>
    set(() => {
      console.log(`✅ [Zustand] ${field} →`, value);
      return { [field]: value };
    }),

  setBidId: (id) => set(() => ({ bidId: id })),

  // 🔹 Сброс всех данных
  resetBidStore: () =>
    set({
      giveBidCurrency: "",
      getBidAmount: 0,
      fullName: "",
      email: "",
      phoneNumber: "",
      cardPhone: "",
      card: "",
      cardFullName: "",
      telegram: "",
      discount: "",
      isAgree1: false,
      isAgree2: false,
      isAgree3: false,
      bidId: "",
    }),
}));

export default useBidStore;
