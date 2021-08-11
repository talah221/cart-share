<template>
  <section class="login-page">
      <img src="https://picsum.photos/150/150" alt="LOGO HERE" title="LOGO HERE">
      <div class="login-section">

      <header>
          <h1 >{{getMainTitle}}</h1>
          <h5 v-if="isLoginPage">Don't Have an account? <span @click="toggleSignIn">Sign Up</span>.</h5>
          <h5 v-else>Already Have an account? <span @click="toggleSignIn">Sign In</span>.</h5>
      </header>
      <main>
          <div class="signin">
 
              <form @submit.prevent="onSignIn">
                  <el-input v-model="loginCred.username" placeholder="Username" autofocus prefix-icon="el-icon-user-solid"  >
                  </el-input>
                  <el-input v-model="loginCred.password" placeholder="Password" prefix-icon="el-icon-lock" show-password  >
                  </el-input>
                  <el-button type="success" native-type="submit" >{{getMainTitle}}</el-button>
              </form>
          </div>
          <div class="oauth"></div>
      </main>
      </div>
  </section>
      <footer></footer>

</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: "Login",
    components: {},
    directives: {},
    data: () => ({
        isLoginPage: true,
        loginCred: { username: "", password: "" },
    }),
    created() {
        if (this.loggedInUser) this.$store.dispatch("onSetUser", {});
    },
    mounted() {},
    methods: {
        onSignIn() {
            this.$store.dispatch("onSetUser", this.loginCred);
        },
        toggleSignIn() {
            this.isLoginPage = !this.isLoginPage;
        },
    },
    computed: {
        ...mapGetters({ loggedInUser: "getLoggedUser" }),
        getMainTitle() {
            return this.isLoginPage ? "Sign In" : "Sign Up";
        },
        getSubtitle() {
            return !this.isLoginPage ? "Sign In" : "Sign Up";
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
    unmounted() {},
};
</script>

<style lang="scss" scoped>
.login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    img {
        border-radius: 50%;
        margin-bottom: 30px;
    }
    .login-section {
        background-color: white;
        padding: 20px;
        border-radius: 10px;
        width: 500px;
        header {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            span {
                color: blue;
                // color: $primary-color;
                cursor: pointer;
            }
        }
        main {
            .signin {
                form {
                    margin-top: 10px;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    width: 100%;
                }
            }
        }
    }
}
</style>