import { createRouter, createWebHistory } from "vue-router";
const routes = [
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // Sayfa geçmişi varsa, o konuma kaydır
      return savedPosition;
    } else {
      // Sayfa geçmişi yoksa, yukarıya doğru kaydır
      return { top: 0 };
    }
  },
});
export default router;