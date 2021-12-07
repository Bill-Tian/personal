<!--
 * @Author: Mr.Tian
 * @Date: 2021-11-04 14:48:32
 * @LastEditTime: 2022-01-13 09:51:41
 * @LastEditors: Mr.Tian
 * @Description: 
-->
<template>
  <footer id="foot" class="footers">
    <div class="fot-box">
      <p class="author">
        Created by
        <span class="iconfont icon-love"></span> Mr.Tian
      </p>

      <p class="copyright">
        <span>Copyright © 2022 Tian Inc. and its affiliates. </span>
        <a
          href="https://beian.miit.gov.cn"
          target="_blank"
          rel="noopener noreferrer"
          >蜀ICP备2021029391号</a
        >
      </p>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="less">
.footers {
  margin: 50px 60px;
  .fot-box {
    text-align: center;
    font-size: 13px;
    color: #868686;
    padding: 5px;
  }
}
.author {
  font-size: 16px;
  span {
    color: #f05228;
  }
}
.copyright {
  font-size: 14px;
  margin: 5px 0;
  a {
    text-decoration: none;
    color: #fe9600;
  }
}
</style>