<template>
  <el-header>
      <h3 class="home">
        <router-link to="/"> Home. </router-link>
      </h3>
      <h3  class="login" @click="toggleLogin">
        <router-link to="/login">{{loginLogoutText}}</router-link>
      </h3>
      <h3 class="shopping-cart"> <router-link to="/shopping-cart">Shopping Cart</router-link>
      </h3>
  </el-header>
</template>

<script>
import { mapGetters } from "vuex";
import firebase from "firebase";

export default {
    name: "Header",
    created() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) this.$store.dispatch("onSetUser", user);
        });
    },
    methods: {
        toggleLogin() {
            if (!this.loggedInUser) return;
            else {
                firebase.auth().signOut;
                this.$store.dispatch("onSetUser", null);
            }
        },
    },
    computed: {
        ...mapGetters({ loggedInUser: "getLoggedUser" }),
        loginLogoutText() {
            return this.loggedInUser ? "Sign out" : "Sign in";
        },
    },
    watch: {
        loggedInUser: {
            immediate: true,
            handler() {
                if (this.loggedInUser) this.$router.push("/shopping-cart");
            },
        },
    },
};
</script>

<style lang="scss" scoped>
.el-header {
}
</style>