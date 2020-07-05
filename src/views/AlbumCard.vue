<template>
  <div class="about">
    <h1>唱片卡片管理</h1>
    <div id="cards">
      <div class="card" v-for="a in $store.state.albums" :key="a.id">
        <h3>{{a.name}}</h3>
        <div class="singers">
          <span>歌手：</span>
          <span v-for="(s,index) in a.singer" :key="index">{{s}}</span>
        </div>
        <img :src="a.img" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
  #cards{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
  .card{
    flex-basis: 300px;
    background-color: antiquewhite;
    margin: 10px;
    
  }
  .singers span{
    color: red;
    margin-right: 4px;
  }
</style>