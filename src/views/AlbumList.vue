<template>
  <div id="albumList">
    <div id="albums">
      <table>
        <caption>唱片列表</caption>
        <thead>
          <tr>
            <th>ID</th>
            <th>专辑名称</th>
            <th>歌手</th>
            <th>删除</th>
          </tr>
        </thead>

        <tbody>
          <tr :class="index%2==0?'even':'odd'" v-for="(album,index) in $store.state.albums" :key="album.id">
            <td>{{album.id}}</td>
            <td>
              <a @click.prevent="showDetail(album.id)" href="#">{{album.name}}</a>
            </td>
            <td>
              <a :title="album.singer?album.singer.join(' '):''" href="#">
                {{album.singer?album.singer[0]:""}}
                {{album.singer.length>1?"...":""}}
              </a>
            </td>
            <td>
              <button @click="del(album.id)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <AlbumDetail />
  </div>
</template>

<script>
import AlbumDetail from "../components/AlbumDetail";
export default {
  methods: {
    showDetail(id) {
      this.$store.commit("showDetail", id);
    },
    del(id){
      this.$store.commit("del",id)
    }
  },
  components: { AlbumDetail }
};
</script>

<style>
  #albumList{
    display: flex;
    justify-content: space-around;
    
  }
  #albums{
    padding: 20px 0px;
    flex:2;
    background-color: antiquewhite;
  }
  table{
    width: 90%;
  }
  tr.even{
    background-color:burlywood;
  }
  

</style>