<template>
    <div class="tags">
            <div class="new">
                <button @click="create">新增标签</button>
            </div>
            <ul class="current">
                <li v-for="tag in tagList" :key="tag.id"
                    :class="{selected: selectedTags.indexOf(tag)>=0}"
                    @click="toggle(tag)">
                {{tag.name}}   
                </li>
            </ul>
        </div> 
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component} from 'vue-property-decorator';
    import store from '@/store/indexStore';

    @Component
    
    export default class Tags extends Vue{
        tagList = store.fetchTag();
        selectedTags: string[] = [];
        
        toggle(tag:string){
            const index = this.selectedTags.indexOf(tag)
            if(index >= 0){
                this.selectedTags.splice(index, 1)
            }else{
                this.selectedTags.push(tag)
            }
            this.$emit('update:value', this.selectedTags)
        }

        create(){
            const name = window.prompt('请输入标签名')
            if(!name){return window.alert('标签名不能为空');}
            store.createTag(name);  
        }
    }
</script>

<style lang="scss" scoped>
    .tags{
        font-size: 14px;
        padding: 16px;
        display: flex;
        flex-grow: 1;
        flex-direction: column-reverse;
        .current{
            display: flex;
            flex-wrap: wrap;
            li{ 
                $bg: rgb(174, 184, 199);
                background: $bg;
                $h:24px;
                height: $h;
                line-height: $h;
                border-radius: $h/2;
                padding: 0 16px;
                margin-right: 16px;
                margin-top: 4px;
                color: white;
                &.selected {
                  background: darken($bg, 50%);
                }
            }
        }
        .new{
            padding-top: 16px;
            button{
                border: none;
                background: transparent;
                border-bottom: 1px solid;
                padding: 0 4px;
                color: rgb(26, 75, 88);
            }
        }
    }
</style>