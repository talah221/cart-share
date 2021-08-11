<template>
<section class="search-item-wrapper">

  <el-dropdown v-model="selectedRetailer" @command="(command)=>handleCommand(command, 'selectedRetailer')">

    <el-button type="primary">
    {{selectedRetailerText}}<i class="el-icon-arrow-down el-icon--right"></i>
  </el-button>
  <template #dropdown>
    <el-dropdown-menu>
      <el-dropdown-item command="amazon">Amazon</el-dropdown-item>
      <el-dropdown-item command="ebay">Ebay</el-dropdown-item>
      <el-dropdown-item command="shufersal">Shufersal</el-dropdown-item>

    </el-dropdown-menu>

  </template>
</el-dropdown>
<form @submit.prevent="onSearchItem">
     <el-input
    placeholder="Find a product by entering keywords"
    prefix-icon="el-icon-search"
    v-model="itemSearchStr">
  </el-input>
   <el-button native-type="submit" type="primary">Search</el-button>
   </form>
</section>

</template>

<script>
export default {
    name: "SearchItem",
    components: {},
    directives: {},
    data: () => ({
        selectedRetailer: null,
        itemSearchStr: "",
    }),
    created() {},
    mounted() {},
    methods: {
        onSearchItem() {
            this.$emit("searchItem", this.itemSearchStr);
        },
        handleCommand(command, selectedType) {
            this[selectedType] = command;
        },
    },
    computed: {
        selectedRetailerText() {
            let strToReturn = this.selectedRetailer
                ? this.selectedRetailer
                : "Select Retailer";
            return strToReturn.charAt(0).toUpperCase() + strToReturn.slice(1);
        },
    },
    watch: {},
    unmounted() {},
};
</script>

<style lang="scss" scoped>
.search-item-wrapper {
    display: flex;
    gap: 15px;
    form {
        display: flex;
        gap: 15px;
        width: 400px;
    }
}
</style>