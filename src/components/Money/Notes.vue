<template>
    <div>
        <label class="notes">
            {{value}}
            <span class="name">备注</span>
            <input  type="text" 
                    :value="value"
                    @input="Oninput"
                    placeholder="在这里输入备注">
        </label>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';
    @Component
    export default class Notes extends Vue{
        value = '';
        Oninput(event: KeyboardEvent){
            const input = event.target as HTMLInputElement;
            this.value = input.value
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