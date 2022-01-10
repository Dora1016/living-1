<template>
    <Layout class-prefix="layout">
        <!-- {{recordList}} -->
        <NumberPad :value.sync="record.amount" @submit="saveRecord"/>
        
        <Types :value.sync='record.type'/>
        
        <div class="notes">
          <FormItem  
          field-name="备注" 
          placeholder="请在这里输入备注"
          @update:value="onUpdateNotes"/>
        </div>
        
        <Tags/>
   
    </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';

  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import FormItem from '@/components/Money/FormItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import store from '@/store/indexStore';

  import {Component} from 'vue-property-decorator';

  @Component({
    components: {Tags, FormItem , Types, NumberPad },
  
    computed: {
      recordList(){
        return store.recordList;
      } 
    }
    
  })

  export default class Money extends Vue {          
    record: RecordItem = {
      tags:[], notes:'', type:'-', amount: 0
    }
    onUpdateNotes(value:string){
      this.record.notes = value;
    }
    saveRecord(){
       store.createRecord(this.record)
    }
  };
</script>

<style lang="scss">
    .layout-content {
    display: flex;
    flex-direction: column-reverse;
    }
  
</style>