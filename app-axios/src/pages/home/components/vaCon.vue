<template>
  <div class="con">
    <div class="con-dz">归属地：广东省</div>
    <div class="aui-content">
      <div class="aui-btn" @click="Refresh">刷新</div>
    </div>
    <!-- xin -->
    <div class="aui-ft">新手指南</div>
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
    onSearch() {
      console.log(this.value);
    },
    Refresh() {
      this.$toast("请刷新页面再抢单...");
    }
  },
  mounted() {
    // this.$toast("请刷新页面再抢单");
  }
};
</script>
<style lang='scss' scoped>
.con {
  height: 17rem;
  background: #eee;
}
.con-dz {
  padding: 15px;
  font-size: 12px;
}
.van-color {
  color: #0096ff;
  background-color: #eee;
  border: 0.026667rem solid #0096ff;
  margin: 0.25rem auto;
}
.aui-content {
  text-align: center;
  margin-top: 10px;
  padding: 0px 10%;
}
.aui-btn {
  width: 100%;
  border: 1px solid #0096ff;
  color: #0096ff;
  border-radius: 20px;
  font-size: 0.38rem;
  height: 1rem;
  line-height: 1rem;
}
.aui-ft {
  position: fixed;
  bottom: 1.9rem;
  left: 0.5rem;
  padding: 10px 20px;
  font-size: 14px;
  color: rgb(255, 255, 255);
  border-radius: 40px;
  background: rgb(247, 164, 0);
}
</style>