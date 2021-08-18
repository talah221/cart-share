<template>
  <section class="container">
<header>
  <h1>Create a list!</h1>
  <h5>
Share with friends, enemies, and coworkers. Search for a product to get started. <router-link to="/guide">Help me!</router-link></h5>
</header>
<main> 

  <SearchItem 
     @search-item="searchItem"/>
  <p 
     v-if="currentSearch">Search results for {{currentSearch}}</p>
     <ProductsList v-if="resultProducts" :products="resultProducts"
     v-loading="isLoading"
     element-loading-text="Loading Products"
      />
      <CartList v-if="cartItems.length"/>
</main>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
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
                        id: 1,
                        imgUrl: "https://picsum.photos/100/100?v=1",
                        description:
                            "Item bla bla bla free shipping limited edition",
                        price: "$42",
                    },
                    {
                        id: 2,
                        imgUrl: "https://picsum.photos/100/100?v=2",
                        description: "Iphone 12 pro max 256GB White 3 Cameras",
                        price: "$780",
                    },
                    {
                        id: 3,
                        imgUrl: "https://picsum.photos/100/100?v=3",
                        description:
                            "Sony Playstation 5 1024GB White 2 Controllers",
                        price: "$320",
                    },
                ];
            }, 2000);
        },
    },
    computed: {
        ...mapGetters({ cartItems: "getCartItems" }),
    },
    watch: {},
    unmounted() {},
};
</script>

<style lang="scss" scoped>
.container {
}
</style>