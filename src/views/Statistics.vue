
<template>
    <Layout>
       <Tabs class-prefix="type" :data-source="typeList" :value.sync="type"/>
       <Tabs class-prefix="interval"  :data-source="intervalList" :value.sync="interval"/>
       <div>
           type:{{type}}
           <br/>
           interval:{{interval}}
       </div>
    </Layout>

</template>

<script lang="ts">   
    import Vue from 'vue';
    import Types from '@/components/Money/Types.vue';
    import Tabs from '@/components/Money/Tabs.vue';
    import intervalList from '@/constants/intervalList'; 
    import recordTypeList from '@/constants/recordTypeList';

    import { Component } from 'vue-property-decorator';

    @Component({
        components: {Types, Tabs}
    })
    export default class Statistics extends Vue{
        type = '-';
        interval = 'day';
        intervalList = intervalList;
        recordTypeList = recordTypeList;
    }
</script>
<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    ::v-deep .type-tabs-item {
     &.selected{
         background: $highColor;
         &::after{
             display: none;
         }
     }
 }

</style> 