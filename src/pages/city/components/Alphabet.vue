<template>
  <ul class="list">
    <li class="item" v-for="(item,key) of cities" :key="key">{{key}}</li>         
  </ul> 
</template>

<script>
export default{
    name:'cityAlphabet',
    props:{
      cities:Object
    }
}
</script>

<style lang="stylus" scoped>
  @import '~@@/variables.styl';
  .list
    position :absolute
    display :flex
    flex-direction :column
    justify-content center
    top:1.58rem
    right: 0
    bottom:0
    .item
      text-align :center
      line-height :.4rem
      color:$bgColor
</style>
