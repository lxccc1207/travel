<template>
  <div>
    <div class="search">
       <input v-model="keyword" class="search-input" type="text" placeholder="请输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
       <ul>
        <li class="search-item border-bottom" @click="handleCityClick(item.name)" v-for="item of list" :key="item.id">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配的城市</li>
       </ul>
    </div>
  </div>    
</template>

<script>
import Bscroll from 'better-scroll'
export default{
    name:'citySearch',
    data(){
        return{
            keyword:'',
            list:[],
            timer:null
        }
    },
    props:{
        cities:Object
    },
    computed:{
        hasNoData(){
            return !this.list.length
        }
    },
    methods:{
        handleCityClick(city){
         this.$store.commit('changeCity',city)
         this.$router.push('/')
     }
    },
    mounted(){
        this.scroll = new Bscroll(this.$refs.search,{click:true})
    },
    watch:{
        keyword(){
            if(!this.keyword){
              this.list  = []
              return
            }
            if(this.timer){
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(() => {
                const result = []
                for(let key in this.cities){
                    this.cities[key].forEach(value => {
                        if(value.name.indexOf(this.keyword)>-1||value.spell.indexOf(this.keyword)>-1){
                            result.push(value)
                        }
                    });
                }
                this.list = result
            }, 100);
        }
    }
}
</script>

<style lang="stylus" scoped>
  @import '~@@/variables.styl';
   .search
     height :.72rem
     padding:0 .1rem
     background :$bgColor
     .search-input
        width :100%
        height :.62rem
        line-height :.62rem
        text-align :center
        border-radius :.06rem
        padding:0 0.1rem
        box-sizing :border-box 
        color:#666
   .search-content
     overflow :hidden
     position :absolute
     z-index :1
     top :1.58rem
     left :0
     bottom :0
     right :0
     background :#eee
     .search-item
       line-height :.62rem
       padding-left :.2rem
       background :#fff
       color :#666
</style>
