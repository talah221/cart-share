<template>
<product-item v-for="product in products" :product="product" :key="product.id"/>
<!-- <product-item v-for="product in products" :product="product" :key="product.id"/> -->
</template>

<script>
import ProductItem from "./ProductItem.vue";
export default {
    name: "ProductsList",
    components: { ProductItem },
    props: {
        products: {
            type: Array,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
</style>ProductItemProductItem