<template>
    <div>
        <label class="notes">
            <span class="name">备注</span>
            <input  type="text" 
                    v-model=value
                    placeholder="在这里输入备注">
        </label>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Watch } from 'vue-property-decorator';
    @Component
    export default class Notes extends Vue{
        value = '';  
        @Watch('value')
        onValueChanged(value:string){
            this.$emit('update:value', value)
        }
        
    }
</script>

<style lang="scss" scoped>
    .notes{
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
            height: 64px;
            padding-right: 16px;
        }
    }
</style>