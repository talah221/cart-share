import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login"
import ShoppingCart from "../views/ShoppingCart"
// import firebase from 'firebase';
import $store from '../store';
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,

  },
  {
    path: "/shopping-cart",
    name: "ShoppingCart",
    component: ShoppingCart,
    meta: {
      auth: true
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from, next) => {

//   if (to.matched.find(route => route.meta.auth)) {
//     firebase.auth().onAuthStateChanged(user => {
//       if (user) return next();
//       else next({ path: "/login" })
//     })
//   }

// })

router.beforeEach((to, from, next) => {
  if (to.matched.find(route => route.meta.auth) && !$store.getters.getLoggedUser) {
    return next({ path: "/login" });
  }
  return next()
})

export default router;
