import { createStore } from "vuex";
import donatur from "./modules/donatur.js";
import clients from "./modules/clients.js";
import transaksi from "./modules/transaksi.js";

const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
    donatur,
    clients,
    transaksi
  },
});

export default store;