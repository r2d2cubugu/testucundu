<template>
    <div>
        <!-- <RouterLink to="/postdetail/3">GO</RouterLink>
        <RouterView></RouterView> -->
        <div class=" grid grid-cols-3 gap-4">
        <div v-for="kom in userStore.posts" :key="kom.id" class=" w-50 border-gray-950 border-4 rounded-xl p-4 flex flex-col align-middle justify-center">
            <h3 class=" text-violet-500 font-bold"><span class=" text-red-700">Post's owner id:</span>{{ kom.userId }}</h3>
            <h3 class=" text-violet-500 font-bold"><span class=" text-red-700">Post's title:</span>{{ kom.title }}</h3>
            <h3 class=" text-green-500 font-bold"><span class=" text-red-700">Post's description:</span><Router-Link class=" hover:text-green-800" :to="`postdetail/${kom.id}`">Comment</Router-Link></h3>
            <RouterView></RouterView>
        </div>
    </div>
    </div>
</template>

<script setup>
import { useUserStore } from '../stores/userStore';
let userStore = useUserStore()
// console.log(userStore.posts);
getData()
function getData(){
    userStore.getPostsinfo()
}
</script>