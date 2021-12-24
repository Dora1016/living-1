<template>
    <div class="numberPad">
        <div class="output">100</div>
        <div class="buttons">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>今天</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>+</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>           
            <button> -</button>
            <button>.</button>
            <button>0</button>
            <button>删除</button>
            <button>OK</button>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'NumberPad'
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";    
    .numberPad{
        .output{
            @extend %clearfix;
            @extend %innerShadow;
            font-size: 36px;
            font-family: Consolas,monospace;
            text-align: right;
            padding: 16px 9px;
            color: rgb(26, 75, 88);
        }
        .buttons{
            @extend %clearfix;
            button{
                width: 25%;
                height: 64px;
                background: transparent;
                border: none;
                float: left;
                color: rgb(26, 75, 88);
                border-radius: 8px;
                border:1px solid rgb(26, 75, 88);
                
            }
        }
    }
</style>