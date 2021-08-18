<template>
  <section class="cart-list-container">
<cart-item  v-for="cartItem in cartItems"  :key="cartItem.id" :cartItem="cartItem"/>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import CartItem from "./CartItem.vue";
export default {
    name: "CartList",
    components: { CartItem },
    directives: {},
    data: () => ({}),
    created() {},
    mounted() {},
    methods: {},
    computed: {
        ...mapGetters({ cartItems: "getCartItems" }),
    },
    watch: {},
    unmounted() {},
};
</script>

<style lang="scss" scoped>
.cart-list-container {
}
</style>