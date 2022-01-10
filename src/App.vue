<template>
  <div>
    <router-view/>   
  </div>
</template>


<script lang="ts">
    import store from '@/store/indexStore';
    export default {
        data(){
          return{
            store: store
          }
        }
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
