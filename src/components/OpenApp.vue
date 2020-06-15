<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <a href="musee://musee.com/?pid=SKUS900000993">打开商品详情</a><br/>  
    <a href="musee://musee.com/?url_link=https://s.musee.com.cn/grantCoupon/2020060400001">打开H5页面</a><br/>  
  </div>
</template>

<script>
export default {
  name: 'HelloOpenApp',
  props: {
    msg: String
  },
  data() {
    return {
      
    }
  },
  created() {
    
  },
  methods: {
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
