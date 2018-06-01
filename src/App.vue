<template>
  <div id="app">
    <keep-alive exclude="Detail"> <!--除了Detail组件其他都会被缓存，Detail在每次进入都会被重新渲染（执行生命周期钩子）-->
      <router-view/>
    </keep-alive> 
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
