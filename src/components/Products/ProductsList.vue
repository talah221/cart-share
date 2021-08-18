<template>
<section class="list-container">
    <transition name="el-zoom-in-top">
<el-button  type="success"  class="add-selected-btn" v-show="selectedProducts.length">Add Selected ({{selectedProducts.length}}) </el-button>

    </transition>
<product-item @addToSelected="addToSelected" @removeSelected="removeSelected" v-for="product in products" :product="product" :key="product.id"/>
</section>
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
    data: () => ({
        selectedProducts: [],
    }),
    methods: {
        addToSelected(selectedProductId) {
            const productToAdd = this.products.find(
                (p) => p.id === selectedProductId
            );
            this.selectedProducts = [...this.selectedProducts, productToAdd];
        },
        removeSelected(selectedProductId) {
            const productToRemoveIdx = this.products.findIndex(
                (p) => p.id === selectedProductId
            );
            this.selectedProducts.splice(productToRemoveIdx, 1);
        },
    },
};
</script>

<style lang="scss" scoped>
.list-container {
    width: 96%;
    margin: 20px auto;
    padding: 15px;
    .add-selected-btn {
        display: flex;
        margin-left: auto;
        margin-bottom: 15px;
    }
}
</style>