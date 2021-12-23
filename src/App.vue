<template>
  <div>
    <router-view/>
    <hr />
  </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style lang="scss">
  @import "~@/assets/style/reset.scss";
   @import "~@/assets/style/helper.scss";
  #app {
  font-family: $font-hei;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  font-size: 16px;
  line-height: 1.5;
}

</style>
