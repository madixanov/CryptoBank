import { create } from "zustand";

const useLoginStore = create((set) => ({
  loggedIn: false,
  login: "",
  setLoginName: (name) => set({login: name}),
  setLoggedIn: (value) => set({loggedIn: value})
}));

export default useLoginStore;