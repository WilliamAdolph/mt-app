import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import geo from './modules/geo'
import home from './modules/home'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    geo,
    home
  },
  actions: {
    async nuxtServerInit({commit},{req,app}) {
      // 这里加上http://127.0.0.1:3000/
      // 获取定位城市
      const {status,data:{province,city}} = await axios.get('http://127.0.0.1:3000/geo/getPosition')
      // console.log(province.city);
      commit('geo/setPosition',status === 200?{city,province}:{city:'',province:''})
      // 获取菜单
      const {status:status2,data:{menu}} = await axios.get('http://127.0.0.1:3000/geo/menu')
      commit('home/setMenu',status2===200?menu:[])
      // 获取热门城市
      const {status:status3,data:{result}} = await axios.get('http://127.0.0.1:3000/search/hotPlace',{
        params: {
          // city: app.store.state.geo.position.city.replace('市','')
          city: '三亚'
        }
      })
      // console.log(result);
      commit('home/setHotPlace',status3===200?result:[])
    }
  }
})

export default store