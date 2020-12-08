<template>
  <div class>
    <van-nav-bar class="van-hd" title="首页" right-text="扫码" @click-right="onClickRight"></van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "vaSrarch",
  components: {},
  data() {
    //这里存放数据
    return {
      value: ""
    };
  },
  methods: {
    // 扫码
    onClickRight() {
      // console.log(this.value);
    }
  }
};
</script>
<style lang='scss' scoped>
.van-hd {
  background-color: #0096ff;
  .van-nav-bar__title {
    color: #fff;
  }
  .van-nav-bar__text {
    color: #fff;
  }
}
.van-ft {
  width: 100%;
  height: 1.1rem;
  line-height: 1.1rem;
  position: relative;
  font-size: 0.35rem;
  text-align: center;
  color: #212121;
  margin-left: -1px;
  -webkit-box-flex: 1;
  box-flex: 1;
}
.aui-active {
  color: #4598f7;
  border-bottom: 2px solid #4598f7;
}
</style>