<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script>
  import HomeHeader from './components/Header.vue'
  import HomeSwiper from './components/Swiper.vue'
  import HomeIcons from './components/Icons.vue'
  import HomeRecommend from './components/Recommend.vue'
  import HomeWeekend from './components/Weekend.vue'
  export default {
    name:'Home',
    data(){
      return{
        swiperList:[],
        weekendList:[],
        recommendList:[],
        iconList:[]
      } 
    },
    components:{
      HomeHeader,
      HomeSwiper,
      HomeIcons,
      HomeRecommend,
      HomeWeekend
    },
    mounted(){
      this.getHomeInfo()
    },
    methods:{
      getHomeInfo(){
        this.$axios.get('/api/index.json')
          .then((res)=>{
            res = res.data
             if(res.ret&&res.data){
              this.swiperList=res.data.swiperList
              this.recommendList=res.data.recommendList
              this.iconList=res.data.iconList
              this.weekendList=res.data.weekendList
             }
          })
         
      }
    }
  }
</script>

