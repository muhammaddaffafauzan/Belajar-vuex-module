<template>
  <div>
    <div class="form-grup">
      <label for="">Donatur</label>
      <select @change="$emit('selectedDonatur', $event.target.value)" class="form-control block appearance-none w-full py-1 px-2 mb-1 text base leadng-normal bg-white text-dark-200 rounded">
      <option value="">Pilih Donatur</option>
      <option v-for="donatur in listDonatur" :key="donatur.name" :value="donatur.name">
       {{ donatur.name }}
      </option>
      </select>
    </div>
  </div>
</template>
<script>
export default {
  computed:{
    listDonatur() {
      return this.$store.state.donatur.listDonatur;
    }
  }
}
</script>