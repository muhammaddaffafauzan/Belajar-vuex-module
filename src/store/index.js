import { createStore } from "vuex";
import donatur from "./modules/donatur.js";
import clients from "./modules/clients.js";
import transaksi from "./modules/transaksi.js";
import users from "./modules/users.js"
import kai from "./modules/kai.js"
import product from "./modules/product.js"
import category from "./modules/category.js";
import auth from "./modules/auth.js";
const store = createStore({
  state: {
    isLoading: false,
  },
  modules: {
    donatur,
    clients,
    transaksi,
    users,
    kai,
    product,
    category,
    auth
  },
});

export default store;