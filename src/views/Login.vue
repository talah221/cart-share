<template>
<section id="firebaseui-auth-container">
    <h1>ads</h1>
</section>
</template>

<script>
import firebase from "firebase";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
export default {
    name: "",
    components: {},
    directives: {},
    data: () => ({}),
    created() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) this.$store.dispatch("onSetUser", user);
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
