<template>
    <div class="header">
        城市选择
     <router-link to="/">
       <div class="iconfont header-back">&#xe624;</div>
     </router-link>
    </div>    
</template>

<script>
export default{
    name:'cityHeader'
}
</script>

<style lang="stylus" scoped>
  @import '~@@/variables.styl';
  .header
    position:relative
    overflow:hidden
    height:$headerHeight
    line-height:$headerHeight
    text-align:center
    color:#fff
    background:$bgColor
    font-size:.32rem
    .header-back
     position:absolute
     top:0
     left:0
     width:0.64rem
     text-align:center
     font-size: 0.4rem
     color:#fff  //箭头变成a标签会自带样式加颜色，记得设定
    
</style>
