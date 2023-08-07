const transaksi = {
  namespaced: true,
  state: {
    listTransaksi: [
      {
        id: "TRX1P1",
        donatur: "Asep gembok",
        bantuan: "gempa Lombok",
        jumlah: 100000,
      },
      {
        id: "TRX1P2",
        donatur: "dadang throttlebody",
        bantuan: "Beasiswa Pendidikan",
        jumlah: 150000,
      },
      {
        id: "TRX1P3",
        donatur: "uus kopling",
        bantuan: "Banjir Bandung",
        jumlah: 200000,
      },
      {
        id: "TRX1P4",
        donatur: "jajang seher",
        bantuan: "Tanggungan kesehatan",
        jumlah: 300000,
      },
    ],
  },
  mutations: {
    ADD_DONASI: (state, payload) => {
      state.listTransaksi.push(payload);
    },
  },
  actions: {
    save_donasi({ commit, rootState }, payload) {
      rootState.isLoading = true;
      setTimeout(() => {
        commit("ADD_DONASI", payload);
        rootState.isLoading = false;
      }, 1000)
    },
  },
};
export default transaksi;