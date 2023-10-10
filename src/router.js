import {createRouter, createWebHistory} from 'vue-router'
import Home from "./views/HomeView.vue"
import PostList from "./views/PostListsView.vue"
import PostDetail from "./views/PostDetail/_id.vue"
import UsersView from "./views/UsersView.vue"
import UserEdit from "./views/UserEditView.vue"
import UserDetails from "./views/UserDetailsView.vue"

const routes=[
    {
        path:"/",
        name:"Home",
        component:Home
    },
    {
        path:"/postlist",
        name:"postlist",
        component:PostList
    },
    {
        path:"/postdetail/:id",
        name:"postdetail",
        component:PostDetail
    },
    {
        path:"/users",
        name:"Users",
        component:UsersView,
        children:[
        {
            path:"useredit",
            component:UserEdit
        },
        {
            path:"userdetails",
            component:UserDetails
        },
    ]
    },

]

const router = createRouter({
    routes,
    history:createWebHistory()
})

export default router