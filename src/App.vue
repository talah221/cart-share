<template>
<el-container>
  <el-header>
      <h3 class="home">
        <router-link to="/"> Home </router-link>
      </h3>
      <h3 v-if="!loggedInUser" class="login" @click="toggleLogin">
        <router-link to="/login">{{loginLogoutText}}</router-link>
      </h3>

      <h3 class="about"> <router-link to="/shopping-cart">Shopping Cart</router-link>
      </h3>
  </el-header>
  <el-main>
  <router-view  />
  </el-main>
  </el-container>/
</template>

<script>
import firebase from "firebase";
import { mapGetters } from "vuex";

export default {
    name: "App",
    data: () => ({}),
    created() {
        if (this.loggedInUser) this.$router.push("/shopping-cart");
    },
    computed: {
        ...mapGetters({ loggedInUser: "getLoggedUser" }),
        loginLogoutText() {
            return "Login";
        },
    },
    methods: {
        toggleLogin() {
            if (!this.loggedInUser) return;
            else {
                console.log("logging out.");
                firebase.auth().signOut;
                this.$store.dispatch("onSetUser", null);
            }
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
<style lang="scss" >
@import "./assets/variables.scss";
.el-header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 10px;
    h3 {
        cursor: pointer;
        &.home {
            margin-right: auto;
        }
    }
    a {
        text-decoration: none;
        color: initial;

        &.router-link-active {
            color: $primary_color;
        }
    }
}
</style>
