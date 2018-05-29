<template>
  <div>
    <home-header :city="city"></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
  import HomeHeader from './components/Header.vue'
  import HomeSwiper from './components/Swiper.vue'
  import HomeIcons from './components/Icons.vue'
  import HomeRecommend from './components/Recommend.vue'
  import HomeWeekend from './components/Weekend.vue'
  import axios from 'axios'
  export default {
    name:'Home',
    data(){
      return{
        city:'',
        swiperList:[]
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
        axios.get('/api/city.json')
          .then((res)=>{
            res = res.data
             console.log(res.data)
             if(res.ret&&res.data){
               this.city = res.data.hotCities[0].name
             }
          })
         
      }
    }
  }
</script>

