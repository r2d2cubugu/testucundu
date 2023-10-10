import { defineStore } from "pinia"
import axios from "axios"

export const useUserStore = defineStore({
    id:"userStore",
    state:()=>({
        name:"Hesen",
        posts:[],
        post:{}
    }),
    actions:{
        getPostsinfo(){
            axios.get("https://jsonplaceholder.typicode.com/posts").then(resp =>{
                this.posts = resp.data
            })
        },
        getPostinfo(id){
            const apiURL = `https://jsonplaceholder.typicode.com/posts/${id}`
            axios.get(apiURL).then(resp =>{
                this.post = resp.data
            })
        },
    }
})