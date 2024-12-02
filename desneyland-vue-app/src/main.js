import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import HotelsList from './HotelsList.vue'
import AttractionsList from './AttractionsList.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/attractionslist', component: AttractionsList },
        { path: '/hotelslist', component: HotelsList },
    ]
});

const app = createApp(App)

app.use(router);

app.mount('#app')