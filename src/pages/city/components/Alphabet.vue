<template>
  <ul class="list">
    <li class="item" v-for="item of letters" 
    :key="item"
    :ref="item"
    @click="handleLetterClick"
    @touchstart.prevent="handleTouchStart"
    @touchmove="handleTouchMove"
    @touchend="handleTouchEnd"
    :class="{changeBackground: activeName == item}"
     >{{item}}</li>         
  </ul> 
</template>

<script>
export default{
    name:'cityAlphabet',
    props:{
      cities:Object
    },
    computed:{
      letters(){
        const letters = []  //letters:['A','B','C'...]
        for (let key in this.cities) {
            letters.push(key)
        }
        return letters
      }
    },
    data(){
      return{
        touchStatus:false,
        activeName:'', //用来实现列表切换效果，点击或者拖动到哪个字母哪个就是activeName
        startY:'',
        timer:null
      }
    },
    updated(){
      this.startY = this.$refs['A'][0].offsetTop //性能优化
    },
    methods:{
      handleLetterClick(e){
          this.$emit('change',e.target.innerText)//e.target.innerText就是key 注意innerText驼峰大写!!
          let item=e.target.innerText
          this.activeName=item
      },
      handleTouchStart(){
          this.touchStatus = true
      },
      handleTouchMove(e){
          if(this.touchStatus){   
            //节流处理，滑动切换太快（touchmove执行的频率很高），每次滑动都去计算距离造成浪费。属于性能优化
            if(this.timer){
              clearTimeout(this.timer)
            }
           this.timer = setTimeout(() => {
              //const startY = this.$refs['A'][0].offsetTop //A元素顶部距离蓝色框的距离,注意是第0个元素不然取不到！！
              const touchY = e.touches[0].clientY - 79 //拖动的位置到蓝色框的距离
              const index = Math.floor((touchY-this.startY)/20)   //20是每个字母的高度
              if(index >= 0 && index< this.letters.length){   
               this.$emit('change',this.letters[index])
               this.activeName=this.letters[index]
              }
           }, 16)
           
        }
      },
      handleTouchEnd(){
          this.touchStatus = false
      }

    }
}
</script>

<style lang="stylus" scoped>
  @import '~@@/variables.styl';
  .list
    position :absolute
    display :flex
    flex-direction :column
    justify-content center
    top:1.58rem
    right: 0
    bottom:0
    .item
      text-align :center
      line-height :.4rem
      color:$bgColor
    .changeBackground
      background:$bgColor
      color:#fff
</style>
