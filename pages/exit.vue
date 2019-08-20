<template>
  <div class=""/>
</template>

<script>
import axios from 'axios';
export default {
  layout: 'blank',
  middleware: async (ctx) => {
    // 还是因为没有全局配置axios，所以对比上下两条
    let {status,data}=await axios.get('/users/exit')
    // let {status,data}=await ctx.axios.get('/users/exit')
    if(status===200&&data&&data.code===0){
      window.location.href='/'
    }
  }
}
</script>
