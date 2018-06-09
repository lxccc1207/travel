<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id"><!--加上border-bottom底部会自带一像素边框-->
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.des}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'HomeWeekend',
    props:{
      weekendList:Array
    }
  
  }
</script>
<style lang="stylus" scoped>
  @import "~@@/mixins.styl";
  .title
    line-height:0.8rem
    margin-top:0.2rem
    background:#eee
    text-indent:0.2rem
  // .item
  //   overflow:hidden
  //   height:1.9rem
  //   display:flex
    .item-img-wrapper 
      height:0
      overflow:hidden
      padding-bottom:33.4%
      .item-img
       width:100%
    .item-info
    //   flex:1
      padding:.1rem
    //   min-width:0
      .item-title
        line-height:.54rem
        font-size:.32rem
        ellipsis()
      .item-desc
        line-height:.4rem
        color:#333
        ellipsis()
      // .item-button
      //   line-height:.44rem
      //   margin-top:.16rem
      //   background:#ff8300
      //   padding:0 .2rem
      //   border-radiius:.06rem
      //   color:#fff
</style>
