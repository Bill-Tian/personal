<!--
 * @Author: Mr.Tian
 * @Date: 2021-12-09 08:59:41
 * @LastEditTime: 2022-03-25 17:19:51
 * @LastEditors: Mr.Tian
 * @Description: 
-->
<template>
  <div class="top-box"></div>

  <div class="img-boxs">
    <img
      :src="
        'https://cdn.jsdelivr.net/gh/Bill-Tian/Picture-library@master/img/' +
        blogDetail.imgName
      "
      alt=""
    />
    <h1 class="title">{{ blogDetail.title }}</h1>

    <div class="byTime">
      <span class="spa">
        <span class="iconfont icon-calendar mr4"></span>
        <span class="mr4">发表于</span>
        <span>{{ blogDetail.createdAt }}</span>
      </span>

      <span class="spa">
        <span class="iconfont icon-like mr4"></span>
        <span class="mr4">点赞量</span>
        <span>{{ blogDetail.favoritesCount }}</span>
      </span>

      <span class="spa">
        <span class="iconfont icon-file-word mr4"></span>
        <span class="mr4">字数统计</span>
        <span>{{ blogDetail.body.length }}</span>
      </span>

      <span class="spa">
        <span class="iconfont icon-tag mr4"></span>
        <span v-for="item in blogDetail.tagList" :key="item" class="tag"
          >{{ item }}&nbsp;&nbsp;</span
        >
      </span>
    </div>

    <blockquote class="des">{{ blogDetail.description }}</blockquote>
  </div>

  <div>
    <div class="toc-container">
      <div class="js-toc toc"></div>
    </div>

    <div class="js-toc-content content-box" v-html="blogDetail.body"></div>
  </div>

  <mavon-editor
    class="md"
    v-model="blogDetail.body"
    :subfield="false"
    defaultOpen="preview"
    :toolbarsFlag="false"
    :editable="false"
    :scrollStyle="true"
    :ishljs="true"
  ></mavon-editor>
</template>


<script>
import { useRoute } from "vue-router";
import axios from "axios";
import { reactive, ref } from "vue";
import moment from "moment";

import tocbot from "tocbot";

import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/monokai-sublime.css"; // 引入高亮样式 这里我用的是sublime样式

marked.setOptions({
  breaks: true,
  langPrefix: "hljs language-",
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  },
});

export default {
  setup() {
    const route = useRoute();

    const detailId = ref(route.query.id);

    const blogDetail = reactive({
      title: "",
      tagList: [],
      imgName: "",
      favoritesCount: "",
      description: "",
      createdAt: "",
      body: "",
    });

    // 获取博客的详情
    const getDetail = () => {
      axios.get(`/api/article/${detailId.value}`).then((res) => {
        if (res) {
          let datas = res.data.article;
          datas.createdAt = moment(datas.createdAt).format("YYYY-MM-DD");
          Object.keys(blogDetail).forEach((item) => {
            if (item == "body") {
              blogDetail[item] = marked.parse(datas[item]);
            } else {
              blogDetail[item] = datas[item];
            }
          });
        }
      });
    };

    getDetail();

    return {
      blogDetail,
    };
  },

  updated() {
    tocbot.init({
      tocSelector: ".js-toc",
      contentSelector: ".js-toc-content",
      headingSelector: "h1, h2, h3",
      hasInnerContainers: true,
    });
  },
};
</script>

<style lang="less">
.top-box {
  padding-top: 65px;
  background-color: #fff;
}
.img-boxs {
  margin-top: 10px;
  max-width: 900px;
  padding: 0 10px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(255, 255, 255, 0.8);
  img {
    width: 100%;
    border-radius: 10px;
    object-fit: cover;
    align-items: center;
  }
}
.content-box {
  max-width: 900px;
  margin: auto;
  padding: 50px 40px;
  img {
    width: 100%;
  }
}
.md {
  max-width: 900px;
  margin: auto;
}
.title {
  margin: 2rem 0px;
  font-size: 2.4rem;
  line-height: 1.6;
  text-align: center;
}
.byTime {
  display: flex;
  justify-content: center;
  line-height: 1.6;
  color: rgb(150, 150, 150);
  .spa {
    margin-left: 20px;
    display: flex;
    align-items: center;
  }
  .tag {
    background-color: rgba(0, 150, 94, 0.2);
    color: rgb(0, 150, 94);
    border-radius: 0.1875rem;
    display: inline-block;
    margin-right: 0.6rem;
    padding: 0px 0.375rem;
    font-size: 0.875rem;
    line-height: 1.6;
  }
}

.des {
  margin: 2rem 0px;
  padding: 1rem;
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgb(28, 30, 33);
  background: rgb(230, 246, 230);
  border-left: 0.3rem solid rgba(0, 150, 94, 0.6);
  border-radius: 0.5rem;
}

.iconfont {
  font-size: 20px;
}
.mr4 {
  margin-right: 4px;
}

.toc-container {
  width: 200px;
  top: 240px;
  position: fixed;
  left: 40px;
}

.toc {
  overflow-y: auto;
}

.toc > .toc-list {
  overflow: hidden;
  position: relative;

  li {
    list-style: none;
  }
}

.js-toc {
  overflow-y: hidden;
}

.toc-list {
  margin: 0;
  padding-left: 10px;
}

a.toc-link {
  color: currentColor;
  height: 100%;
  text-decoration: none;
}

.is-collapsible {
  max-height: 1000px;
  overflow: hidden;
  transition: all 300ms ease-in-out;
}

.is-collapsed {
  max-height: 0;
}

.is-position-fixed {
  position: fixed !important;
  top: 0;
}

.is-active-link {
  font-weight: 700;
}

.toc-link::before {
  background-color: #eee;
  content: " ";
  display: inline-block;
  height: inherit;
  left: 0;
  margin-top: -1px;
  position: absolute;
  width: 2px;
}

.is-active-link::before {
  background-color: #54bc4b;
}
</style>