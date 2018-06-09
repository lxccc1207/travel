<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner> 
    <detail-header></detail-header> 
    <div class="content"><!--帮助撑开页面高度-->
      <detail-list :list="list"></detail-list>
    </div>   
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailList from './components/List'
export default{
  name:'Detail',
  data(){
    return{
      sightName:'',
      bannerImg:'',
      gallaryImgs:[],
      list:[]
    }
  },
  components:{
    DetailBanner,
    DetailHeader,
    DetailList
  },
  mounted(){
    //this.$axios.get('/api/detail.json?id='+this.$route.params.id)   动态路由地址
    this.$axios.get('/api/detail',{
      params:{
        id:this.$route.params.id  //在recommend组件配置
      }
    }).then((res)=>{
      res = res.data
      if(res.ret && res.data){
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height:50rem
</style>
