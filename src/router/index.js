import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
// import AboutView from "../views/About.vue";
// import ContactView from "../views/Contact.vue";
// import ServiceView from "../views/Service.vue";
// import BreedsView from "../views/Breeds.vue";
// import ReminderView from "../views/Reminder.vue";
// import RegisterView from "../views/Register.vue";
// import LoginView from "../views/Login.vue";
// import NotFoundView from "../views/NotFound.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "Home | GREON",
    },
  },
  {
    path: "/about",
    name: "about",
    meta: {
      title: "About | GREON",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/contact",
    name: "contact",
    meta: {
      title: "Contact | GREON",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue"),
  },
  {
    path: "/service",
    name: "service",
    meta: {
      title: "Service | GREON",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Service.vue"),
  },
  {
    path: "/breeds",
    name: "breeds",
    meta: {
      title: "Breeds | GREON",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Breeds.vue"),
  },
  {
    path: "/reminder",
    name: "reminder",
    meta: {
      title: "Reminder | GREON",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Reminder.vue"),
  },
  {
    path: "/register",
    name: "register",
    meta: {
      title: "Register | GREON",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "Login | GREON",
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    name: "NotFoundView",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
