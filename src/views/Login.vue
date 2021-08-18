<template>
<section id="firebaseui-auth-container">
</section>
</template>

<script>
import firebase from "firebase";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import { APIService } from "../services/APIService";
export default {
    name: "",
    components: {},
    directives: {},
    data: () => ({}),
    created() {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {
                console.log("user", user);
                const firebaseToken = await firebase
                    .auth()
                    .currentUser.getIdToken(false);
                const accessToken = await APIService.login(
                    "firebase",
                    firebaseToken
                );
                this.$store.commit("setAccessToken", accessToken);
                const userInfo = await APIService.getUserInfo();
                this.$store.dispatch("onSetUser", userInfo);
            }
        });
    },
    mounted() {
        let ui = firebaseui.auth.AuthUI.getInstance();
        if (!ui) {
            ui = new firebaseui.auth.AuthUI(firebase.auth());
        }
        const uiConfig = {
            signInSuccessUrl: "/shopping-cart",
            signInOptions: [
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
            ],
            signInFlow: "popup",
        };
        ui.start("#firebaseui-auth-container", uiConfig);
    },
    methods: {},
    computed: {},
    watch: {},
    unmounted() {},
};
</script>

<style lang="scss" scoped>
.container {
}
</style>
