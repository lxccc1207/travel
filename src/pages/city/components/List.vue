<template>
  <div class="list" ref="wrapper">
    <div class="content">
      <div class="area">
          <div class="title border-topbottom">当前城市</div>
          <div class="button-list">
              <div class="button-wrapper">
                <div class="button"> {{this.$store.state.city}}</div>
              </div>     
          </div>
      </div>
      <div class="area">
           <div class="title border-topbottom">热门城市</div>
           <div class="button-list">
              <div class="button-wrapper"
                @click="handleCityClick(item.name)"
                v-for="item of hotCities" 
                :key="item.id">
                <div class="button">{{item.name}}</div>
              </div>
              
             
          </div>
      </div>
      <div class="area" v-for="(item,key) of cities" :key="key" :ref="key">
           <div class="title border-topbottom">{{key}}</div>
           <div class="item-list">
               <div class="item border-bottom"
                 @click="handleCityClick(innerItem.name)" 
                 v-for="innerItem of item"
                 :key="innerItem.id"> 
                 {{innerItem.name}}
               </div>
           </div>
      </div>
      
     
    </div>
  </div>    
</template>

<script>
import Bscroll from 'better-scroll'
export default{
    name:'cityList',
    mounted(){
      this.scroll = new Bscroll(this.$refs.wrapper,{click:true}) //// 一开始的点击事件被bscroll阻止了，设置这个才能点击
    },
   props:{
     hotCities:Array,
     cities:Object,
     letter:String
   },
   methods:{
     handleCityClick(city){
       this.$store.commit('changeCity',city)
       this.$router.push('/')
     }
   },
   watch:{
     letter(){
       if(this.letter){
           const element = this.$refs[this.letter][0]//第0项才是真正的dom元素，可以输出看看
           this.scroll.scrollToElement(element) //better-scroll自带的方法，能直接把元素定位到顶部
       }
     }
   }
}
</script>

<style lang="stylus" scoped>
  @import '~@@/variables.styl';
  .border-topbottom
    &:before
       border-color:#ccc
    $:after
       border-color:#ccc 
  .border-bottom
    &:before
       border-color:#ccc
  .list
    overflow: hidden
    position:absolute
    top: 1.58rem
    left:0
    right:0
    bottom:0
    .title
      line-height :.54rem
      background:#eee
      padding-left :.2rem
      color:#666
      font-size:.26rem
    .button-list
      overflow :hidden
      padding :.1rem .6rem .1rem .1rem
      .button-wrapper
        float:left
        width:33.33%  
        .button
          margin:.1rem
          padding:.1rem 0 
          text-align:center
          border:.02rem solid #ccc
          border-radius:.06rem
    .item-list
      .item
        line-height :.76rem
        padding-left :.2rem
</style>
