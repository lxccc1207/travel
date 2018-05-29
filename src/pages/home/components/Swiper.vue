<template>
  <div class="wrapper">
  <swiper :options="swiperOption">
    <!-- slides -->
    <swiper-slide v-for="item of swiperList" :key="item.id">
      <img class="swiper-img" :src="item.imgUrl"  />
    </swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
    <!--<div class="swiper-button-next" slot="button-next"></div>-->
    <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
  </swiper>
  </div>
</template>

<script>
export default {
  name:'HomeSwiper',
  data(){
      return{
        swiperOption:{
          pagination:'.swiper-pagination', //用于分页的点
          loop:true //首尾连着循环
        },
        swiperList:[
          {
            id:'0001',
            imgUrl:'https://imgs.qunarzz.com/piao/fusion/1804/bd/8e4a1c3f470d3702.jpg_640x170_c1e8baeb.jpg'
          },
          {
            id:'0002',
            imgUrl:'https://imgs.qunarzz.com/piao/fusion/1710/94/e41712475cc4e702.jpg_640x170_f5dd3e83.jpg'
          },
          {
            id:'0003',
            imgUrl:'https://imgs.qunarzz.com/piao/fusion/1804/5c/969bfa7af00a2702.jpg_640x170_ec465291.jpg'
          },

        ]
      }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper>>> .swiper-pagination-bullet-active/*三个箭头表示样式穿透，不受scoped的影响*/
   background:#fff !important
  .wrapper
    width:100%
    /*height:26.56vw 兼容性不好，考虑传统写法*/
    overflow:hidden
    height:0
    padding-bottom:26.56% /*表示宽高比*/
    background:#eee
    .swiper-img
      width:100%
</style>
