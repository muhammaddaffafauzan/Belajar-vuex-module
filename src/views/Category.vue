<template>
  <div class="grid grid-cols-4 gap-4">
   
<div v-for="category in getCategory" class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg"  :src="'src/assets/img/' + category + '.png'" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 dark:text-white">{{ category }}</h5>
        </a>
    </div>
</div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    computed: {
        ...mapGetters('category', ['getCategory']),
    },
    methods: {
        ...mapActions('category', ['fetchCategory']),
        // getImage(imageURL) {
        //     return {
        //         'src': `${imageURL}`,
        //         'background-size': 'cover',
        //         'background-position': 'center',
        //     };
        // },
    },
    created() {
        this.fetchCategory();
    },
}
</script>