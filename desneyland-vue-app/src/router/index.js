import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../App.vue';
import AttractionPage from '../Attraction.vue';

Vue.use(Router);

const routes=[
    {
        path:'/',
        name:'Home',
        component: HomePage,
    },
    {
        path: '/attraction/:1',
        name:'AttractionPage',
        component: AttractionPage,
    }
]

export default new Router({
    routes,
});

