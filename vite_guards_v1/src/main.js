import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Profile from './components/Profile.vue'

const router = createRouter({ 
    routes: [
        {path:"/", component:Home },
        {path: "/login", component:Login },
        {path: "/profile", component:Profile  },
    ],
    history:createWebHistory()
 })
 
 document.isAuthenticated = false;

 router.beforeEach((to, from) => {
    if (to.path == '/profile' && document.isAuthenticated == false ) {
            return "/login";
    }
 })

createApp(App).use(router).mount('#app')
