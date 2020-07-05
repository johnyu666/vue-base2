import Vue from 'vue'
import Vuex from 'vuex'
import logo from '../assets/logo.png'
Vue.use(Vuex)
let max=14
let url="http://www.cjlly.com:3046/record"
export default new Vuex.Store({
  state: {
    albums:[],album:{}
  },
  mutations: {
    load(state,albums){
      state.albums=albums
      state.album=state.albums[0]
    },
    showDetail(state,id){
      let index=state.albums.findIndex(a=>a.id==id)
      state.album=state.albums[index]
    },
    addAlbum(state,album){
      album.id=++max
      album.img=logo
      state.albums.push(album)
    },
    del(state,id){
      let index=state.albums.findIndex(a=>a.id==id)
      state.albums.splice(index,1)
    }
  },
  actions: {
    load(context){
      fetch(url,{method:"GET"})
      .then(resp=>resp.json())
      .then(albums=>{
        context.commit("load",albums)
      })
      .catch(()=>{
        alert("请检查后台服务器是否开通:"+url)
      })
    }
  },
  modules: {
  }
})
