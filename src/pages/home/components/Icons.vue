<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="page of pages"><!--这里的循环很巧妙，注意-->
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl"/>
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
  export default {
    name:'HomeIcons',
    props:{
      iconList:Array
    },
    data(){
      return{
        swiperOption:{
          autoplay:false //禁止轮播图自动滚动
        }
      }  
    },
      computed:{
        //将图标列表放到二位数组中，page表示图标放在第几页，大于8的图标轮播到下一页，以此类推
        pages(){
          const pages = []
          this.iconList.forEach((item,index)=>{
            const page = Math.floor(index/8)
            if(!pages[page]){
              pages[page] = []
            }
             pages[page].push(item)
          })
          return pages
        }
      }

  }
</script>

<style lang="stylus" scoped>
  @import "~@@/mixins.styl";
  .icons>>>.swiper-container
    height:0
    padding-bottom:50% /*表示高宽比*/
  .icons
    margin-top:0.2rem
    .icon
      overflow:hidden
      height:0
      padding-bottom:25%/*相当于高度*/
      width:25%
      float:left

      position:relative
      .icon-img
        position:absolute
        top:0
        left:0
        right:0
        bottom:0.44rem
        box-sizing:border-box
        padding:0.1rem

        .icon-img-content
          height:100%
          display:block
          margin:0 auto
      .icon-desc
          position:absolute
          left:0
          right:0
          bottom:0
          height:0.44rem
          line-height:0.44rem
          text-align:center
          ellipsis()
</style>


