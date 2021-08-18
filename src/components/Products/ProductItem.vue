<template>
<section :class="['product',isProductSelected?'active':'']" @click.prevent="selectProduct">
  <el-checkbox  v-model="isProductSelected"></el-checkbox>
<img :src="product.imgUrl" :alt="product.description">
<p>{{product.description}}</p>
<p class="price"> Price USD: {{product.price}}</p>
<el-button @click.stop="addToCart" class="wishlist-btn" plain type="success"  rounded icon="el-icon-circle-plus-outline">

      {{addRemoveFromCart}}
</el-button>
</section>
</template>

<script>
export default {
    name: "ProductItem",
    data: () => ({
        isProductSelected: false,
    }),
    props: {
        product: {
            type: Object,
            required: true,
        },
    },
    methods: {
        selectProduct() {
            this.isProductSelected = !this.isProductSelected;
        },
        addToCart() {
            console.log(this.product.id);
        },
    },
    computed: {
        addRemoveFromCart() {
            return "Add To Cart";
        },
    },
    watch: {
        isProductSelected(currState) {
            if (currState) this.$emit("addToSelected", this.product.id);
            else this.$emit("removeSelected", this.product.id);
        },
    },
};
</script>

<style lang="scss" scoped>
.product {
    display: grid;
    align-items: center;
    grid-template-columns: 5% 15% 40% 25% 10%;
    padding: 15px;
    gap: 5px;
    background: rgb(243, 243, 243);
    margin-bottom: 15px;
    transition: 0.4s;
    border-radius: 12px;
    cursor: pointer;
    &:hover,
    &.active {
        background: lightblue;
        transform: scale(1.02);
    }
    .wishlist-btn {
        transition: 0.4s;
        // display: flex;
        // gap: 10px;
        // flex-direction: column;
        // justify-content: center;
        // align-items: center;
        // padding: 0;
    }
}
</style>