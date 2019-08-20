import Router from 'koa-router';
import axios from './utils/axios'
import Province from '../dbs/models/province'
import Category from '../dbs/models/category'
import sign from './utils/sign'

let router = new Router({prefix: '/category'})

// const sign = 'abcd';

router.get('/crumbs',async (ctx)=>{
  // let result = await Category.findOne({city: ctx.query.city.replace('市', '') || '三亚'})
  // console.log(city);
  // if (result) {
  //   ctx.body = {
  //     areas: result.areas,
  //     types: result.types
  //   }
  // } else {
  //   ctx.body = {
  //     areas: [],
  //     types: []
  //   }
  // }

  // 线上获取
  let {status,data:{areas,types}} = await axios.get('http://cp-tools.cn/category/crumbs',{
    params:{
      city:ctx.query.city.replace('市','') || "北京",
      sign
    }
  })
  ctx.body={
    areas: status===200?areas:[],
    types: status===200?types:[]
  }
})


export default router;
