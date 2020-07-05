<template>
  <h3>唱片数量：<span>{{albumCount}}</span> 张</h3>
</template>

<script>
export default {
    computed:{
        albumCount(){
            return this.$store.state.albums.reduce((prev)=>prev+1,0)
        }
    }
}
</script>

<style scoped>
    h3{
        color: white;
    }
    h3 span{
        color: red;
        font-size: 1.2em;
    }
</style>