<template>
    <div class=" absolute right-0">
        Edit seyfesidi <br>
        <button @click="go(-1)" class=" border rounded-2xl font-bold text-blue-600 hover:text-blue-900 border-gray-800 hover:border-black  p-2">
            GO back
        </button>
    </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
function go(x){
    router.go(x)
}
</script>