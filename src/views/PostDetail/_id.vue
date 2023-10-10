<template>
    <div class="">
    <!-- {{ $route.params.id }} -->
    <h3><span class=" text-red-700">Post's id:</span>{{userStore.post.id }}</h3>
    <h3><span class=" text-red-700">Post's owner id::</span>{{userStore.post.userId }}</h3>
    <h3><span class=" text-red-700">Post's title:</span>{{userStore.post.title }}</h3>
    <h3><span class=" text-red-700">Post's description:</span>{{userStore.post.body }}</h3>


    </div>

</template>

<script setup>
import { useUserStore } from '../../stores/userStore';
import {useRoute} from "vue-router";

let route = useRoute()
let userStore = useUserStore()
getData()
// let post = userStore.posts.filter(post => post.id == id)
const id = route.params.id
function getData(){
    userStore.getPostinfo(id)
}
</script>