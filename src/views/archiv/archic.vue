<!--
 * @Author: Mr.Tian
 * @Date: 2021-12-02 15:26:25
 * @LastEditTime: 2021-12-02 15:30:06
 * @LastEditors: Mr.Tian
 * @Description: 
-->
<template>
  <div class="blog-box">
    <time-line></time-line>
  </div>
</template>

<script>
import timeLine from "./../../components/TimeLine.vue";
export default {
  components: {
    timeLine,
  },
};
</script>

<style>
.blog-box {
  max-width: 900px;
  padding: 0 10px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(255, 255, 255, 0.8);
}
</style>
