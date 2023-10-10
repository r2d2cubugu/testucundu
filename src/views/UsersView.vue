<template>
    <div>
        BU bir users listidi <br>
        <RouterLink to="/users/useredit">Edite get</RouterLink> <br>
        <RouterLink to="/users/userdetails">Detailse get</RouterLink> <br> <br> <br> <br>
        <RouterView></RouterView>
        <div v-if="users" class=" grid grid-cols-3 gap-4">
            <div v-for="user in users" :key="user.id" class=" border-2 rounded-xl p-4">
                <h3 class=" text-blue-600 font-bold"> <span class=" text-red-900">User's id:</span>{{ user.id }}</h3>
                <h3 class=" text-blue-600 font-bold"> <span class=" text-red-900">User's title:</span>{{ user.title }}</h3>
                <h3 class=" text-blue-600 font-bold"> <span class=" text-red-900">User's status:</span>
                <div v-if="user.completed">
                    <img width="10" src="https://imgs.search.brave.com/GIUSecf8yagNNCYNt9nh1FUCF75Amw3DviE2YEbkVa4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS8xNDQt/MTQ0OTM5Ml90cnVl/LWZhbHNlLWljb24t/cG5nLXRyYW5zcGFy/ZW50LXBuZy5wbmc" alt="">
                </div>
                <div v-else>
                    X
                </div>
                </h3>

            </div>
        </div>
        <div v-else class=" grid grid-cols-3 gap-4">
            <div v-for="index in 6" >
                <div role="status" class="max-w-sm animate-pulse border-2 rounded-xl p-4">
    <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
    <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
    <span class="sr-only">Loading...</span>
</div>
            </div>

        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
let users = ref(null)
fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(json =>{
      users.value = json
      }
      )
</script>