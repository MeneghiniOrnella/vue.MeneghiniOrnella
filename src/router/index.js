import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import('../views/Resume.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/Contact.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
