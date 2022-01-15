<template>
    <div class="numberPad">
        <div class="output">{{output}}</div>
        <div class="buttons">
            <button @click="inputContent">1</button>
            <button @click="inputContent">2</button>
            <button @click="inputContent">3</button>
            <button @click="clear">清空</button>
            <button @click="inputContent">4</button>
            <button @click="inputContent">5</button>
            <button @click="inputContent">6</button>
            <button @click="add">+</button>
            <button @click="inputContent">7</button>
            <button @click="inputContent">8</button>
            <button @click="inputContent">9</button>           
            <button @click="reduce">-</button>
            <button @click="inputContent">.</button>
            <button @click="inputContent">0</button>
            <button @click="remove">删除</button>
            <button @click="ok">OK</button>
        </div>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  @Component
  export default class NumberPad extends Vue {
    
    @Prop(Number) readonly value!: number;
    output = this.value.toString();

    inputContent(event: MouseEvent) {
      const button = (event.target as HTMLButtonElement);
      const input = button.textContent!;
      if (this.output.length === 16) { return; }
      if (this.output === '0') {
        if ('0123456789'.indexOf(input) >= 0) {
          this.output = input;
        } else {
          this.output += input;
        }
        return;
      }
      if (this.output.indexOf('.') >= 0 && input === '.') {return;}
      this.output += input;
    }
    remove() {
      if (this.output.length === 1) {
        this.output = '0';
      } else {
        this.output = this.output.slice(0, -1);
      }
    }
    clear() {
      this.output = '0';
    }
    ok() {
      const number = parseFloat(this.output)
      this.$emit('update:value',number )
      this.$emit('submit', number)
      this.output = '0'
    }
    add() {
    }
    reduce() {
    }
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
            height: 72px;
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