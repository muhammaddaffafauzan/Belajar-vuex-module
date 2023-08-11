<template>
<div>
  <h2>Create User</h2>
  <form @submit.prevent="createUser">
  <label for="Email">Email:</label>
  <input type="email" v-model="newUser.email" required> <br>
  <label for="username">username:</label>
  <input type="text" v-model="newUser.username" required> <br>
  <label for="password">password:</label>
  <input type="password" v-model="newUser.password" required> <br>
  <label for="firstname">firstname:</label>
  <input type="text" v-model="newUser.name.firstname" required> <br>
  <label for="lastname">lastname:</label>
  <input type="text" v-model="newUser.name.lastname" required> <br>
  <label for="city">city:</label>
  <input type="text" v-model="newUser.address.city" required> <br>
  <label for="street">street:</label>
  <input type="text" v-model="newUser.address.street" required> <br>
  <label for="number">Number:</label>
  <input type="number" v-model="newUser.address.number" required> <br>
  <label for="zipcode">zipcode:</label>
  <input type="text" v-model="newUser.address.zipcode" required> <br>
  <label for="Latitude">Latitude:</label>
  <input type="text" v-model="newUser.address.geolocation.lat" required> <br>
  <label for="Longitude">Longitude:</label>
  <input type="text" v-model="newUser.address.geolocation.long" required> <br>
  <label for="phone">Phone:</label>
  <input type="text" v-model="newUser.phone" required> <br>
  <button type="submit" class="grid cursor-pointer select-none rounded-md border border-indigo-500 bg-indigo-500 py-2 px-5 text-center align-middle text-sm text-white shadow hover:border-indigo-600 hover:bg-indigo-600 hover:text-white focus:border-indigo-600 focus:text-white focus:shadow-none">Create User</button>
  </form>
</div>
</template>
<script>
import { mapActions, mapState } from 'vuex';

export default {
  data() {
    return {
      newUser: {
        email: "",
        username: "",
        password: "",
        name: {
          firstname: "",
          lastname: "",
        },
        address: {
          city: "",
          street: "",
          number: null,
          zipcode: "",
          geolocation: {
            lat: "",
            long: "",
          },
        },
        phone: "",
      },
    };
  },
  computed: {
    ...mapState("notification", ["notification"]),
  },
  methods: {
    ...mapActions("users" ["createUser", "setNotification"]),
    async createUser() {
      try{
        console.log("Data:", this.newUser);
        const newUser = await this.createUser(this.userData);
        this.$router.push({ name: "User" });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>