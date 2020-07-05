<template>
  <div id="app">
    <div>
      <AlbumCreator/>
      <router-link to="/">列表</router-link>|
      <router-link to="/card">卡片</router-link>
      <a @click.prevent="refresh" href="#">刷新</a>|
    </div>
    <router-view/>
    <Dashboard/>
  </div>
</template>

<script>
import AlbumCreator from './components/AlbumCreator'
import Dashboard from './components/Dashboard'
export default {
  mounted(){
    this.$store.dispatch("load")
  },
  methods:{
    refresh(){
      this.$store.dispatch("load")
    }
  },
  components:{AlbumCreator,Dashboard}
}
</script>

<style>
  #app{
    background-color: black; 
    
  }
  #app>div:first-child>a:visited{
    color: white; 
  }
  #app>div:first-child{
    width: 800px;
    
    display: flex;
    justify-content: space-around;
    height: 60px;
    align-items: center;
  }
</style>