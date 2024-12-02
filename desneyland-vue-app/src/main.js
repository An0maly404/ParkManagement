import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import AboutPage from './pages/AboutPage.vue'
import AttractionsList from './pages/AttractionsList.vue'
import HotelsList from './pages/HotelsList.vue'
import LoginPage from './pages/LoginPage.vue'
import RestaurantsList from './pages/RestaurantsList.vue'
import TicketInfos from './pages/TicketInfos.vue'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/aboutpage', component: AboutPage },
        { path: '/attractionslist', component: AttractionsList },
        { path: '/hotelslist', component: HotelsList },
        { path: '/loginpage', component: LoginPage },
        { path: '/restaurantsList', component: RestaurantsList },
        { path: '/ticketinfos', component: TicketInfos },
    ]
});

const app = createApp(App)

app.use(router);

app.mount('#app')