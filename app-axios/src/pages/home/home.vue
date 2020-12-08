<template>
  <div class="con">
    <!-- 头部 -->
    <va-search></va-search>
    <!-- 内容 -->
    <va-con></va-con>
  </div>
</template>

<script>
import vaSearch from "./components/vaSrarch";
import vaCon from "./components/vaCon";
import { axiosGet } from "@/commonApi/index.js";
export default {
  components: {
    vaSearch,
    vaCon
  },
  data() {
    return {
        images:[]
    };
  },
  methods: {
    async getData() {
      let _self = this;
      let { data } = await axiosGet("/goods/getIndexInfo");
      _self.images = data.data.slides;
    }
  },
  created(){
      this.getData()
  }
};
</script>
<style lang='scss' scoped>
.con{
}
</style>