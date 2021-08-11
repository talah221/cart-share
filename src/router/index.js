import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login"
import ShoppingCart from "../views/ShoppingCart"
import firebase from 'firebase';
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

router.beforeEach((to, from, next) => {

  if (to.matched.find(route => route.meta.auth)) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) return next();
      else next({ path: "/login" })
    })
  }



  // if (to.matched.some(record => record.meta.auth)) {
  //   firebase.auth().onAuthStateChanged(user => {
  //     if (user) {
  //       next()
  //     } else {
  //       next({
  //         path: "/login",
  //       })
  //     }
  //   })
  // } else {
  //   next()
  // }
})

export default router;
