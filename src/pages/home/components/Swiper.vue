<template>
  <div class="wrapper">
  <swiper :options="swiperOption" v-if="showSwiper">
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
  props:{
    swiperList:Array
  },
  data(){
      return{
        swiperOption:{
          pagination:'.swiper-pagination', //用于分页的点
          loop:true,//首尾连着循环
          autoplay: 3000
        }
      }
  },
  computed:{
    //这一步的目的是解决加载成功后显示最后一张轮播图的问题，没有拿到数据的时候轮播不会被渲染，加载完成后显示第一张图
    showSwiper(){
      return this.swiperList.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper>>> .swiper-pagination-bullet-active/*三个箭头表示样式穿透，不受scoped的影响*/
   background:#fff !important
  .wrapper
    width:100%
    /*height:31.25vw 兼容性不好，考虑传统写法*/
    overflow:hidden
    height:0
    padding-bottom:31.25% /*表示宽高比*/
    background:#eee
    .swiper-img
      width:100%
</style>
