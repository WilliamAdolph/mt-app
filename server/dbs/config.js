export default {
  dbs: 'mongodb://127.0.0.1:27017/student',
  redis: {
    get host() {
      return '127.0.0.1'
    },
    get port() {
      return 6379
    }
  },
  smtp: {
    get host() {
      return 'smtp.qq.com'
    },
    get user() {
      return '1208479837@qq.com'
    },
    // QQ授权码
    get pass() {
      return 'xzfugtrodwttgeed'
    },
    // 验证码
    get code() {
      return () => {
        return Math.random().toString(16).slice(2,6).toUpperCase()
      }
    },
    // 过期时间
    get expire() {
      return () => {
        // 1分钟
        return new Date().getTime()+60*60*1000
      }
    }
  }
}