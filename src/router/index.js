import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../layouts/DashboardLayout.vue"),
    children: [
      {
        path: "profile",
        name: "dashboardProfile",
        component: () => import("../views/dashboard/ProfileView")
      },
      {
        path: "orders",
        name: "dashboardOrders",
        component: () => import("../views/dashboard/OrdersView")
      },
    ],
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("../layouts/AuthLayout.vue"),
    children: [
      {
        path: "login",
        name: "login",
        component: () => import("../views/auth/LoginView")
      },
      {
        path: "register",
        name: "register",
        component: () => import("../views/auth/RegistrationView")
      }
    ],
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
