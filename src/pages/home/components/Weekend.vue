<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of recommendList" :key="item.id"><!--加上border-bottom底部会自带一像素边框-->
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name:'HomeWeekend',
    data(){
    return{
      recommendList:[
        {
          id:'0001',
          imgUrl:'http://img1.qunarzz.com/sight/source/1505/d1/3070ad726f861b.jpg_r_640x214_39709b85.jpg',
          title:'乐岛海洋王国（乐岛海洋公园）',
          desc:'浪漫的海洋主题乐园'
        },
        {
          id:'0002',
          imgUrl:'http://img1.qunarzz.com/sight/source/1505/d1/3070ad726f861b.jpg_r_640x214_39709b85.jpg',
          title:'乐岛海洋王国（乐岛海洋公园）',
          desc:'浪漫的海洋主题乐园'
        },
        {
          id:'0003',
          imgUrl:'http://img1.qunarzz.com/sight/source/1505/d1/3070ad726f861b.jpg_r_640x214_39709b85.jpg',
          title:'乐岛海洋王国（乐岛海洋公园）',
          desc:'浪漫的海洋主题乐园'
        }
      ]
    }
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
