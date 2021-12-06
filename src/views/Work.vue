<!--
 * @Author: Mr.Tian
 * @Date: 2021-10-20 11:25:30
 * @LastEditTime: 2021-12-02 15:29:21
 * @LastEditors: Mr.Tian
 * @Description: 
-->
<template>
  <div class="img-box">
    <img
      alt="tree"
      src="./../assets/images/unsplash.jpg"
      decoding="async"
      data-nimg="fill"
    />
    <span class="work">归档</span>
  </div>

  <archiv></archiv>
</template>

<script>
import archiv from "./archiv/archic.vue";
export default {
  components: {
    archiv,
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
  font-size: 50px;
  left: 0px;
  right: 0px;
  color: #fff;
  top: 50%;
}
</style>