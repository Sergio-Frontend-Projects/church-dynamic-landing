import LandingLayout from '@/layout/LandingLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'home',
      component: LandingLayout,
      children: [
        { path: 'home', name: 'home', component: () => import('@/views/HomePage.vue') },
        {
          path: 'anuncio/:id',
          name: 'announcement',
          props: true,
          component: () => import('@/views/AnnouncementPage.vue'),
        },
      ],
    },
  ],
});

export default router;
