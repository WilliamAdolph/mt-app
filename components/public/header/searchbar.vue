<template>
  <div class="search-panel">
    <el-row class="m-header-seachbar">
      <el-col :span="3" class="left">
        <img 
        src="//s0.meituan.net/bs/fe-web-meituan/2fecdcf/img/logo.png" 
        alt="美团">
      </el-col>
      <el-col :span="12" class="center">
        <div class="wrapper">
          <!-- 如果这里没有v-model的话，会导致无法输入 -->
          <el-input placeholder="搜索商家或地点" 
          @focus="focus" @blur="blur" @input="input"
          v-model="search"></el-input>
          <button class="el-button el-button--primary"><i class="el-icon-search"/></button>
          <dl class="hotPlace"
          v-if="isHotPlace">
            <dt>热门搜索</dt>
            <dd v-for="(item,idx) in $store.state.home.hotPlace.slice(0,4)" :key="idx">
              <a :href="'http://localhost:3000/products?keyword='+encodeURIComponent(item.name)">{{item.name}}</a>
            </dd>
          </dl>
          <dl class="searchList"
          v-if="isSearchList">
            <dd v-for="(item,idx) in searchList" :key="idx">
              <a :href="'http://localhost:3000/products?keyword='+encodeURIComponent(item.name)">{{item.name}}</a>              
            </dd>
          </dl>
        </div>
        <p class="suggset">
          <a :href="'http://localhost:3000/products?keyword='+encodeURIComponent(item.name)" v-for="(item,idx) in $store.state.home.hotPlace.slice(0,4)" :key="idx">{{item.name}}&nbsp;&nbsp;</a>
        </p>
        <ul class="nav">
          <li>
            <nuxt-link to="/" class="takeout">美团外卖</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="movie">猫眼电影</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="hotel">美团酒店</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="apartment">民宿/公寓</nuxt-link>
          </li>
          <li>
            <nuxt-link to="/" class="business">商家入驻</nuxt-link>
          </li>
        </ul>
      </el-col>
      <el-col :span="6" class="right">
        <ul class="security">
          <li><i class="refund"><p class="txt">随时退</p></i></li>
          <li><i class="single"><p class="txt">不满意免单</p></i></li>
          <li><i class="overdue"><p class="txt">过期退</p></i></li>
        </ul>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import _ from 'lodash'
import axios from 'axios'
export default {
  data() {
    return {
      search: '',
      isFocus: false,
      hotPlace:['火锅','火锅','火锅','火锅','火锅'],
      searchList:[],
    }
  },
  computed: {
    isHotPlace:function() {
      // 聚焦没有输入
      return this.isFocus&&!this.search
    },
    isSearchList:function() {
      // 聚焦有输入
      return this.isFocus&&this.search
    },
  },
  methods:{
    focus:function() {
      this.isFocus = true
    },
    blur:function() {
      // this.isFocus = false
      let self = this;
      setTimeout(function(){
        self.isFocus=false
      },200)
    },
    input:_.debounce(async function(){
      let self = this;
      // let city = self.$store.geo.position.city.replace('市','')
      let city = '三亚'
      self.searchList = []
      let {status,data:{top}} = await axios.get('http://localhost:3000/search/top',{
        params: {
          input: self.search,
          city
        }
      })
      self.searchList=top.slice(0,10)
    },300)
  }
}
</script>

<style lang="scss">
  @import "@/assets/css/public/header.scss";
</style>