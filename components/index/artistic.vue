<template>
  <section class="m-istyle">
    <dl @mouseover="over" @mouseout="out">
      <dt kind="all">有格调</dt>
      <dd
        :class="{active:kind==='all'}"
        kind="all"
        keyword="景点">全部</dd>
      <dd
        :class="{active:kind==='part'}"
        kind="part"
        keyword="美食">约会聚餐</dd>
      <dd
        :class="{active:kind==='spa'}"
        kind="spa"
        keyword="丽人">丽人SPA</dd>
      <dd
        :class="{active:kind==='movie'}"
        kind="movie"
        keyword="电影">电影演出</dd>
      <dd
        :class="{active:kind==='travel'}"
        kind="travel"
        keyword="旅游">品质出游</dd>
    </dl>
    <ul class="ibody">
      <li
        v-for="item in cur"
        :key="item.title">
        <el-card
          :body-style="{ padding: '0px' }"
          shadow="never">
          <img
            :src="item.img"
            class="image">
          <ul class="cbody">
            <li class="title">{{ item.title }}</li>
            <li class="pos"><span>{{ item.pos }}</span></li>
            <li class="price">￥<em>{{ item.price }}</em><span>/起</span></li>
          </ul>
        </el-card>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  data: () => {
    return {
      kind: 'all',
      list: {
        all: [{
          title: '中央电视塔空中观景旋转餐厅',
          pos: '学校周边',
          price: '150',
          img: 'http://p1.meituan.net/msmerchant/edabcb17c64d979c2bebf568dab11598116805.jpg@368w_208h_1e_1c',
          url: '//abc.com'
        },
        {
          title: '好利来（磁器口店）',
          pos: '崇文门',
          price: '530',
          img: 'http://p0.meituan.net/xianfu/0dff28633d42242f9d844de6f36078fd7275.jpeg@watermark=0|368w_208h_1e_1c',
          url: '//abc.com'
        },
        {
          title: '幸福时光蛋糕（朝外店）',
          pos: '朝外大街/世贸天阶',
          price: '500',
          img: 'http://p0.meituan.net/bbia/aee3f14e9a33c138f7e7c473e51766a392274.jpg@368w_208h_1e_1c',
          url: '//abc.com'
        },
        {
          title: '北京饭店阳光咖啡厅',
          pos: '王府井/东单',
          price: '300',
          img: 'http://p0.meituan.net/msmerchant/1a8aaac8cfcf76fae83c2ecd6405bd4c1457315.jpg@368w_208h_1e_1c',
          url: '//abc.com'
        },
        {
          title: '木北造型（崇文门新世界店）',
          pos: '崇文门新世界',
          price: '600',
          img: 'http://p1.meituan.net/wedding/8d26f93de654d433b17774e60a1fc5bd1028431.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
          url: '//abc.com'
        },
        {
          title: '天安瑞嘉烤鸭',
          pos: '王府井/东单',
          price: '280',
          img: 'http://p0.meituan.net/merchantpic/8d40aacd77004b484151c1ee547918d287691.jpg@368w_208h_1e_1c',
          url: '//abc.com'
        }],
        part: [{
          title: '北京饭店诺金东33餐厅',
          pos: '王府井/东单',
          price: '1000',
          img: 'http://p1.meituan.net/poi/697cf6a6e1785559a7bb31d0bf03c649110592.jpg@368w_208h_1e_1c',
          url: '//abc.com'
        },
        {
          title: '1949-全鸭季（金宝街店）',
          pos: '王府井/东单',
          price: '1188',
          img: 'http://p1.meituan.net/msmerchant/5017fa086d769a5c60f8cd875ee545eb1730510.jpg@368w_208h_1e_1c',
          url: '//abc.com'
        },
        {
          title: '大董（王府井店）',
          pos: '王府井/东单',
          price: '413',
          img: 'http://p0.meituan.net/msmerchant/96a8260ce5e79d6fa448afaf5e0f6daf575800.jpg@368w_208h_1e_1c',
          url: '//abc.com'
        },
        {
          title: 'COSTACOFFEE（摩方购物中心店）',
          pos: '崇文门新世界',
          price: '30',
          img: 'http://p0.meituan.net/scarlett/0938786f28888cfcebdf59de23f87dd394965.png@368w_208h_1e_1c',
          url: '//abc.com'
        },
        {
          title: '旺顺阁鱼头泡饼（王府井店）',
          pos: '王府井/东单',
          price: '199',
          img: 'http://p0.meituan.net/msmerchant/8e9d07bac32473da09c402203cc5288c138748.jpg@368w_208h_1e_1c',
          url: '//abc.com'
        },
        {
          title: '丰泽园饭店（王府井店）',
          pos: '王府井/东单',
          price: '280',
          img: 'http://p0.meituan.net/msmerchant/c08c616aa835bc7cebdc3bd17184afef312214.jpg@368w_208h_1e_1c',
          url: '//abc.com'
        }],
        spa: [{
          title: '米娜造型美甲美睫（绿地缤纷城店）',
          pos: '黄村',
          price: '1000',
          img: 'http://p1.meituan.net/wedding/0eda23994f542f513d842f8d4b51c340341724.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
          url: '//abc.com'
        },
        {
          title: '时尚殿堂hair salon（北京王府井店）',
          pos: '王府井/东单',
          price: '288',
          img: 'http://p0.meituan.net/wedding/5c0d0f8bd55ce05776974129c972b2fe477875.png@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
          url: '//abc.com'
        },
        {
          title: '木北造型（崇文门新世界店）',
          pos: '崇文门新世界',
          price: '472',
          img: 'http://p1.meituan.net/wedding/8d26f93de654d433b17774e60a1fc5bd1028431.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
          url: '//abc.com'
        },
        {
          title: '众祥聚美容养生馆（广渠门店）',
          pos: '广渠门',
          price: '30',
          img: 'http://p0.meituan.net/shopmainpic/9678c0e6918cf712048dbad35082c55f169474.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
          url: '//abc.com'
        },
        {
          title: '东方唯尔中短发定制（前门店）',
          pos: '王府井/前门',
          price: '325',
          img: 'http://p0.meituan.net/msmerchant/8e9d07bac32473da09c402203cc5288c138748.jpg@368w_208h_1e_1c',
          url: '//abc.com'
        },
        {
          title: '只劫财不劫色美甲美睫工作室',
          pos: '崇文门新世界',
          price: '280',
          img: 'http://p1.meituan.net/wedding/166aad5b3daa18080fd175895ac70460462275.jpg@240w_180h_1e_1c_1l|watermark=1&&r=2&p=9&x=2&y=2&relative=1&o=20|368w_208h_1e_1c',
          url: '//abc.com'
        }],
        movie: [{
          title: '美嘉欢乐影城（三里屯店）',
          pos: '黄村',
          price: '43.9',
          img: 'http://p1.meituan.net/poi/__4869021__8615266.jpg@368w_208h_1e_1c',
          url: '//abc.com'
        },
        {
          title: '百丽宫影城（国贸店）',
          pos: '王府井/东单',
          price: '46.9',
          img: 'http://p0.meituan.net/deal/__42960235__2874607.jpg@368w_208h_1e_1c',
          url: '//abc.com'
        },
        {
          title: '活力天宝国际影城',
          pos: '崇文门新世界',
          price: '472',
          img: 'http://p1.meituan.net/poi/__4527127__9024245.jpg@368w_208h_1e_1c',
          url: '//abc.com'
        },
        {
          title: '百老汇影城（apm购物中心店）',
          pos: '广渠门',
          price: '19.9',
          img: 'http://p0.meituan.net/deal/__42960313__1244354.jpg@368w_208h_1e_1c',
          url: '//abc.com'
        },
        {
          title: '嘉华国际影城（学清路店）',
          pos: '王府井/前门',
          price: '19.9',
          img: 'http://p1.meituan.net/deal/201301/14/105159_7079944.jpg@368w_208h_1e_1c',
          url: '//abc.com'
        },
        {
          title: '珠影耳东传奇影城',
          pos: '崇文门新世界',
          price: '19.5',
          img: 'http://p0.meituan.net/deal/201207/23/4_0723162730.jpg@368w_208h_1e_1c',
          url: '//abc.com'
        }],
        travel: [{
          title: '北京瑞吉酒店',
          pos: '黄村',
          price: '1568',
          img: 'http://p1.meituan.net/tdchotel/c5b0c2e24fd4991594d84ac11adbaa135226763.jpg@368w_208h_1e_1c',
          url: '//abc.com'
        },
        {
          title: '北京维景国际大酒店',
          pos: '王府井/东单',
          price: '1018',
          img: 'http://p0.meituan.net/tdchotel/b90641df1318d69a5592a46afc5908ff710821.png@368w_208h_1e_1c',
          url: '//abc.com'
        },
        {
          title: '北京国际艺苑皇冠假日酒店',
          pos: '崇文门新世界',
          price: '850',
          img: 'http://p0.meituan.net/tdchotel/084dcdf3393ad9e1d8d7aea1c0f19262127986.jpg@368w_208h_1e_1c',
          url: '//abc.com'
        },
        {
          title: '北京金融街丽思卡尔顿酒店',
          pos: '广渠门',
          price: '1956',
          img: 'http://p1.meituan.net/dnaimgdark/76af0465f5614ed089227449c9354b674427249.jpg@368w_208h_1e_1c',
          url: '//abc.com'
        },
        {
          title: '北京国贸大酒店',
          pos: '王府井/前门',
          price: '1619',
          img: 'http://p1.meituan.net/tdchotel/836bb3e109b1c705d2e5f50d9bff70dc9820182.jpg@368w_208h_1e_1c',
          url: '//abc.com'
        },
        {
          title: '北京华侨大厦',
          pos: '崇文门新世界',
          price: '1889',
          img: 'http://p0.meituan.net/dnaimgdark/d23f5b95e36e43dd765dc3b0c2c431702389675.jpg@368w_208h_1e_1c',
          url: '//abc.com'
        }]
      }
    }
  },
  computed: {
    cur: function () {
      return this.list[this.kind]
    }
  },
  // async mounted(){
  //   let self=this;
  //   let {status,data:{count,pois}}=await self.$axios.get('/search/resultsByKeywords',{
  //     params:{
  //       keyword:'景点',
  //       city:self.$store.state.geo.position.city
  //     }
  //   })
  //   if(status===200&&count>0){
  //     let r= pois.filter(item=>item.photos.length).map(item=>{
  //       return {
  //         title:item.name,
  //         pos:item.type.split(';')[0],
  //         price:item.biz_ext.cost||'暂无',
  //         img:item.photos[0].url,
  //         url:'//abc.com'
  //       }
  //     })
  //     self.list[self.kind]=r.slice(0,9)
  //   }else{
  //     self.list[self.kind]=[]
  //   }
  // },
  methods: {
    over: async function (e) {
    //   let dom = e.target
    //   let tag = dom.tagName.toLowerCase()
    //   let self = this
    //   if (tag === 'dd') {
    //     this.kind = dom.getAttribute('kind')
    //     let keyword = dom.getAttribute('keyword')
    //     let {status,data:{count,pois}}=await self.$axios.get('/search/resultsByKeywords',{
    //       params:{
    //         keyword,
    //         city:self.$store.state.geo.position.city
    //       }
    //     })
    //     if(status===200&&count>0){
    //       let r= pois.filter(item=>item.photos.length).map(item=>{
    //         return {
    //           title:item.name,
    //           pos:item.type.split(';')[0],
    //           price:item.biz_ext.cost||'暂无',
    //           img:item.photos[0].url,
    //           url:'//abc.com'
    //         }
    //       })
    //       self.list[self.kind]=r.slice(0,9)
    //     }else{
    //       self.list[self.kind]=[]
    //     }
    //   }
      let dom = e.target
      let tag = dom.tagName.toLowerCase()
      let self = this;
      self.kind = dom.getAttribute('kind')
    },
    out: async function(e) {
      let dom = e.target
      let tag = dom.tagName.toLowerCase()
      let self = this;
      self.kind = 'all'
    }
  },
  async mounted() {
    this.kind = 'all';
  }

}
</script>
<style lang="scss">
    @import "@/assets/css/index/artistic.scss";
</style>
