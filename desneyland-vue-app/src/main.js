import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import AboutPage from './pages/AboutPage.vue';
import AttractionsList from './pages/AttractionsList.vue';
import HotelsList from './pages/HotelsList.vue';
import LoginPage from './pages/LoginPage.vue';
import RestaurantsList from './pages/RestaurantsList.vue';
import TicketInfos from './pages/TicketInfos.vue';
import HomePage from './pages/HomePage.vue';
import TicketsOwned from './pages/TicketsOwned.vue';
import BuyTickets from './pages/BuyTickets.vue';

// Define the router with routes and scrollBehavior
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: HomePage },
        { path: '/aboutpage', component: AboutPage },
        { path: '/attractionslist', component: AttractionsList },
        { path: '/hotelslist', component: HotelsList },
        { path: '/loginpage', component: LoginPage },
        { path: '/restaurantslist', component: RestaurantsList },
        { path: '/ticketinfos', component: TicketInfos },
        { path: '/ticketsowned', component: TicketsOwned },
        { path: '/buytickets', component: BuyTickets },
    ],
    // Disable ESLint "no-unused-vars" for this function
    // eslint-disable-next-line no-unused-vars
    scrollBehavior(to, from, savedPosition) {
        // Always scroll to the top of the page
        return { top: 0, behavior: 'smooth' };
    },
});

// Create and mount the Vue app
const app = createApp(App);

app.use(router);

app.mount('#app');
