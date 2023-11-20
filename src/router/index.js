import {createRouter, createWebHistory} from 'vue-router'

import Main from "../pages/Main.vue";
import Index from "../pages/car/Index.vue";
import Show from "../pages/car/Show.vue";
import Create from "../pages/car/Create.vue";
import Edit from "../pages/car/Edit.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: Main,
            name: 'main'
        },
        {
            path: '/cars',
            component: Index,
            name: 'cars.index'
        },
        {
            path: '/cars/show/:id',
            component: Show,
            name: 'cars.show'
        },
        {
            path: '/cars/edit/:id',
            component: Edit,
            name: 'cars.edit'
        },
        {
            path: '/cars/create',
            component: Create,
            name: 'cars.create'
        }
    ]
})

export default  router