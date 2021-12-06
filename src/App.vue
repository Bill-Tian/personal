<!--
 * @Author: Mr.Tian
 * @Date: 2021-10-20 11:02:30
 * @LastEditTime: 2021-12-02 17:28:37
 * @LastEditors: Mr.Tian
 * @Description: 
-->
<template>
  <section>
    <headers></headers>

    <router-view />

    <foot></foot>

    <div id="aplayer"></div>
  </section>
</template>
<script>
import headers from "@/views/Header";
import foot from "./views/Foot.vue";
import APlayer from "aplayer";
import "aplayer/dist/APlayer.min.css";
import music from "./datas/music.json";
export default {
  components: {
    headers,
    foot,
  },
  mounted() {
    new APlayer({
      container: document.getElementById("aplayer"),
      fixed: true,
      lrcType: 1,
      audio: music,
    });
    console.log(
      "%c Mr.Tian %c http://tktown.top ",
      "color: #fadfa3; background: #030307; ",
      "background: #ffffff;"
    );
  },
};
</script>
<style lang="less">
* {
  margin: 0;
  padding: 0;
}
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
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background-color: rgb(228, 220, 220);
}

::-webkit-scrollbar-thumb {
  background-color: #fc3f3f;
}
</style>
