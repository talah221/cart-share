import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBTX8P5SuKPl9YHvvkGSM7IY_Q0DGNitOQ",
    authDomain: "reciper-52275.firebaseapp.com",
    projectId: "reciper-52275",
    storageBucket: "reciper-52275.appspot.com",
    messagingSenderId: "664755886776",
    appId: "1:664755886776:web:3827a71558d656a87b724d",
    measurementId: "G-J7ECYWK763"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

import ElementPlus from "element-plus";
// import "element-plus/lib/theme-chalk/index.css";
import 'element-plus/packages/theme-chalk/src/index.scss';

import "./assets/global.scss"
createApp(App).use(store).use(router).use(ElementPlus).mount("#app");
