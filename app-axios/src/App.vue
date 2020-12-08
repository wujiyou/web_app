<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item replace to="/" icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item replace to="/list" icon="label-o">订单</van-tabbar-item>
      <van-tabbar-item replace to="/shopcar" icon="refund-o">收益</van-tabbar-item>
      <van-tabbar-item replace to="/user" icon="friends-o">用户</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style>
@import './commonStyle/reset.css';
@import './commonStyle/border.css';
</style>
