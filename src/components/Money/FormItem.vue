<template>
    <div>
        <label class="formItem">
            <span class="name">{{this.fieldName}}</span>
            <template v-if="type === 'datetime-local'">
                <input :type="type" 
                   :value="format(value)"
                   @input="onValueChanged($event.target.value)"
                   :placeholder="placeholder">
            </template>
            <template v-else >
                <input :type="type" 
                       :value="value"
                       @input="onValueChanged($event.target.value)"
                       :placeholder="placeholder">
            </template>
        </label>
    </div>
</template> 

<script lang="ts">
    import Vue from 'vue';
    import { Component, Prop} from 'vue-property-decorator';
    import dayjs from 'dayjs';
   

    @Component
    export default class FormItem extends Vue{
        
        @Prop({default:''}) readonly value!:string
        @Prop({required: true}) fieldName!: string;
        @Prop() placeholder?:string;
        @Prop() type?:string;
        
        
        onValueChanged(value:string){
            this.$emit('update:value', value)
        }
        format(isoString:string){
            return dayjs(isoString).format('YYYY-MM-DD')
        }
        
    }
</script>

<style lang="scss" scoped>
    .formItem{
        font-size: 14px;
        background: #f5f5f5;
        padding-left: 16px;
        display: flex;
        align-items: center;
        .name{
            padding-right: 16px;
            color: rgb(26, 75, 88);
        }
        input{
            background: transparent;
            border:none;
            flex-grow: 1;
            height: 52px;
            padding-right: 16px;
        }

    }
</style>