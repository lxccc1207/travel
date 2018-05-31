<template>
    <div>
       <city-header></city-header>
       <city-search :cities="cities"></city-search>
       <city-list :hotCities="hotCities" :cities="cities" :letter="letter"></city-list>
       <city-alphabet :cities="cities" @change="handleLetterChange"></city-alphabet>
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
       cities:{},
       letter:''
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
         
      },
      handleLetterChange(letter){
          this.letter=letter //父组件通过属性的方式接收子组件传来的数据((在data里)
      }
    }
}
</script>

<style lang="stylus" scoped>

</style>
