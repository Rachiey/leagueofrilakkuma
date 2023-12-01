// router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import CustomsView from '../views/CustomsView.vue';
import AramsView from '../views/AramsView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/customs', component: CustomsView },
  { path: '/arams', component: AramsView },
  // Add more routes for other views
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;