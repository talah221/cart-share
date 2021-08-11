<template>
  <section class="container">
<header>
  <h1>Create a list!</h1>
  <h5>
Share with friends, enemies, and coworkers. Search for a product to get started. <router-link to="/guide">Help me!</router-link></h5>
</header>
<main> 

  <SearchItem v-loading="isLoading"
    element-loading-text="Loading Products" @search-item="searchItem"/>
  <p 
     v-if="currentSearch">Search results for {{currentSearch}}</p>
     <ProductsList v-if="resultProducts" :products="resultProducts" />
</main>
  </section>
</template>

<script>
import ProductsList from "../components/Products/ProductsList.vue";
import SearchItem from "../components/SearchItem.vue";
export default {
    name: "ShoppingCart",
    components: { SearchItem, ProductsList },
    directives: {},
    data: () => ({
        cartItems: [],
        currentSearch: "",
        isLoading: false,
        resultProducts: [],
    }),
    created() {},
    mounted() {},
    methods: {
        searchItem(itemStr) {
            this.isLoading = true;
            setTimeout(() => {
                this.isLoading = false;
                this.currentSearch = itemStr;
                this.resultProducts = [
                    {
                        id: Math.random() * 100,
                        imgUrl: "https://picsum.photos/100/100?v=1",
                        description: this.currentSearch,
                    },
                    {
                        id: Math.random() * 100,
                        imgUrl: "https://picsum.photos/100/100?v=2",
                        description: this.currentSearch,
                    },
                    {
                        id: Math.random() * 100,
                        imgUrl: "https://picsum.photos/100/100?v=3",
                        description: this.currentSearch,
                    },
                ];
            }, 2000);
        },
    },
    computed: {},
    watch: {},
    unmounted() {},
};
</script>

<style lang="scss" scoped>
.container {
}
</style>