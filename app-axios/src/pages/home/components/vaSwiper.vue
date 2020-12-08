<template>
  <div class>
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="image in images" :key="image.goodsId">
        <img class="wid" v-lazy="image.image" width="100%" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name:"vaSearch",
  components: {},
  props:["images"],
  methods:{

  },
  created(){
    // this.$http.get('/api/goods/getIndexInfo')
    // .then(function(res){
    //   console.log(res)
    // })
    // axiosGet('/goods/getIndexInfo')
    // .then(function(res){
    //   console.log(res)
    // })
  }
};
</script>
<style lang='scss' scoped>
</style>