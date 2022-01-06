<template>
    <div>
        <label class="formItem">
            <span class="name">{{this.fieldName}}</span>
            <input  type="text" 
                    v-model=value
                    :placeholder="this.placeholder">
        </label>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Prop, Watch } from 'vue-property-decorator';

    @Component
    export default class FormItem extends Vue{
        
        @Prop({default:''}) value!:string
        @Prop({required: true}) fieldName!: string;
        @Prop() placeholder?:string;
        
        @Watch('value')
        onValueChanged(value:string){
            this.$emit('update:value', value)
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