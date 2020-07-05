<template>
  <div id="detail">
      <div>
        <h3>专辑名称：{{$store.state.album.name}}<span></span></h3>
        <h4>歌手：
            <span v-for="s in $store.state.album.singer" :key="s">{{s}}</span>
        </h4>
        <img :src="$store.state.album.img" alt="">
      </div>  
  </div>
</template>

<script>
export default {

}
</script>

<style>
    #detail{
        flex:1;
        background-color:cadetblue;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    h4 span{
        margin: 2px;
    }
    h4 span::before{
        content: ".";
    }
    
</style>