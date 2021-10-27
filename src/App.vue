<!--
 * @Author: Mr.Tian
 * @Date: 2021-10-20 11:02:30
 * @LastEditTime: 2021-10-25 15:20:58
 * @LastEditors: Mr.Tian
 * @Description: 
-->
<template>
  <headers></headers>
  <!-- <div id="nav">
    <router-link to="/">首页</router-link>
    <router-link to="/work">作品</router-link>
    <router-link to="/notes">笔记</router-link>
    <router-link to="/about">关于</router-link>

    <div style="display: inline-block; float: right">
      <el-tooltip content="QQ:945119403" placement="bottom" effect="light">
        <img
          style="width: 30px; margin: 0 10px"
          src="./assets/images/icon/QQ.png"
          alt=""
        />
      </el-tooltip>
      <el-tooltip
        content="Email:945119403@qq.com"
        placement="bottom"
        effect="light"
      >
        <img
          style="width: 30px; margin: 0 10px"
          src="./assets/images/icon/email.png"
          alt=""
        />
      </el-tooltip>
    </div>
  </div> -->

  <router-view />

  <div
    id="foot"
    style="border-top: 1px solid #cccccc; margin: 0 60px; margin-top: 30px"
  >
    <div
      style="text-align: center; font-size: 13px; color: #868686; padding: 5px"
    >
      <p>野生大学自由专业 / 互联网游民 / 冰红茶再来一瓶</p>
      <p>QQ邮箱：pmdaohang@qq.com / QQ群：491931182 / 微信公众号：世界是棵树</p>
      <p>Copyright © 2020 世界是棵树</p>
    </div>
  </div>
</template>
<script>
import headers from "@/views/Header";
export default {
  components: {
    headers,
  },
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px 0;
  border-bottom: 1px solid #f2f2f2;
  margin: 0 60px;

  a {
    color: #2c3e50;
    margin-right: 30px;
    text-decoration: none;
    font-family: "Arial Negreta", "Arial Normal", "Arial";
    font-weight: 700;
    font-style: normal;

    &.router-link-exact-active {
      color: #f23051;
    }
  }
}
</style>
