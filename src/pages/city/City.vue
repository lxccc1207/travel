<template>
    <div>
       <city-header></city-header>
       <city-search></city-search>
       <city-list :hotCities="hotCities" :cities="cities"></city-list>
       <city-alphabet :cities="cities"></city-alphabet>
    </div>
</template>

<script>
import cityHeader from './components/Header.vue'
import citySearch from './components/Search.vue'
import cityList from './components/List.vue'
import cityAlphabet from './components/Alphabet.vue'
export default{
   name:'city' ,
   data(){
     return{
       hotCities:[],
       cities:{}
     }
   },
   components:{
       cityHeader,
       citySearch,
       cityList,
       cityAlphabet
   },
    mounted(){
      this.getHomeInfo()
    },
    methods:{
      getHomeInfo(){
        this.$axios.get('/api/city.json')
          .then((res)=>{
            res = res.data
             console.log(res.data)
             if(res.ret&&res.data){
              this.hotCities=res.data.hotCities
              this.cities=res.data.cities
             }
          })
         
      }
    }
}
</script>

<style lang="stylus" scoped>

</style>
