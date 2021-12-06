<!--
 * @Author: Mr.Tian
 * @Date: 2021-11-05 17:20:06
 * @LastEditTime: 2021-12-06 11:55:17
 * @LastEditors: Mr.Tian
 * @Description: 
-->
<template>
  <div class="img-box">
    <img
      alt="tree"
      src="./../assets/images/hansjorg.jpg"
      decoding="async"
      data-nimg="fill"
    />
    <span class="work">Here are some links.</span>
  </div>

  <alink></alink>
</template>

<script>
import alink from "./links/link.vue";
export default {
  components: {
    alink,
  },
};
</script>

<style lang="less" scoped>
.img-box {
  width: 100%;
  position: relative;
  text-align: center;
  img {
    width: 100%;
  }
}
.work {
  position: absolute;
  font-size: 40px;
  left: 0px;
  right: 30%;
  top: 43%;
}
</style>