<template>
<section class="product">
  <el-checkbox v-model="isProductSelected"></el-checkbox>
<img :src="product.imgUrl" :alt="product.description">
<p>{{product.description}}</p>
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
};
</script>

<style lang="scss" scoped>
.product {
    display: flex;
    align-items: center;
    padding: 15px;
    gap: 35px;
    background: rgb(240, 240, 240);
    margin-bottom: 15px;
}
</style>