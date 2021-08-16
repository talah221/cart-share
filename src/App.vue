<template>
<el-container direction="vertical">
<Header/>
  <el-main>
  <router-view  />
  </el-main>
  </el-container>/
</template>

<script>
import Header from "./components/Header/Header.vue";

export default {
    components: { Header },
    name: "App",
    data: () => ({}),
};
</script>
<style lang="scss" >
@import "./assets/variables.scss";
.el-container {
    flex-direction: column;
    .el-header {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 10px;
        h3 {
            cursor: pointer;
            &.home {
                margin-right: auto;
            }
        }
        a {
            text-decoration: none;
            color: initial;

            &.router-link-active {
                color: $primary_color;
            }
        }
    }
}
</style>
