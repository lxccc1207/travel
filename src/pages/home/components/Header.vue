<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link :to="{name:'city'}">
      <div class="header-right">
        {{city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name:'HomeHeader',
    props:{
      city: String
    }
  }
</script>

<!--scoped表示只对当前组件产生影响-->
<style lang="stylus" scoped>
/*1rem = html font-size = 50px 参看reset.css的html字体像素*/
@import "~@@/variables.styl"  /*@@表示自己给路径起的名字，在build的webpack.base.conf中alias里配置*/
  .header
    display:flex
    line-height:$headerHeight
    background:$bgColor
    color:#fff
    .header-left
      width:0.64rem
      float:left
      .back-icon
        text-align:center
        font-size:0.4rem
    .header-input
      flex:1
      padding-left:0.2rem
      color:#ccc
      height:0.64rem
      line-height:0.64rem
      margin-top:0.12rem
      margin-left:0.2rem
      border-radius:0.1rem
      background:#fff
    .header-right
      width:1.24rem
      float:right
      text-align:center
      color:#fff
      .arrow-icon
        font-size:0.24rem

</style>
