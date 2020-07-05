<template>
  <div>
      <form @submit.prevent="addAlbum" action="#">
          <input type="text" ref="name">
          <input type="text" ref="singer">
          <button>添加专辑</button>
      </form>
  </div>
</template>

<script>
export default {
    methods:{
        addAlbum(){
            let name=this.$refs.name.value
            let singer=this.$refs.singer.value
            if(singer.trim()=="") singer="匿名"
            this.$store.commit("addAlbum",{name:name,singer:[singer]})
        }
    }
}
</script>

<style scoped>
    input{
        width: 200px;
    }
    input,button{
        line-height: 2em;
    }
    button{
        background-color:cadetblue;
        color: white;
        font-weight: 300;
    }
</style>