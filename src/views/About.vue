<!--
 * @Author: Mr.Tian
 * @Date: 2021-10-20 11:02:30
 * @LastEditTime: 2022-01-05 10:18:42
 * @LastEditors: Mr.Tian
 * @Description: 
-->
<template>
  <div class="img-box">
    <img
      alt="tree"
      src="./../assets/images/about.jpg"
      decoding="async"
      data-nimg="fill"
    />
  </div>

  <div>
    <ul>
      <li>在这里写一些什么呢，一些关于我，about关于你。</li>
    </ul>
  </div>

  <div id="editor">
    <mavon-editor :codeStyle="codeStyle" v-model="handbook" :ishljs="true" />
  </div>

  <button @click="submit">提交</button>
  <!-- <div class="markdown-body">
    <markdown-test>
      <template v-slot:footer>
        <div>test</div>
        <button>footer</button>
      </template>
    </markdown-test>
  </div> -->

  <mavon-editor
    class="md"
    v-model="result"
    :subfield="false"
    defaultOpen="preview"
    :toolbarsFlag="false"
    :editable="false"
    :scrollStyle="true"
    :ishljs="true"
  ></mavon-editor>
</template>

<script>
// import hljs from "highlight.js"; // 引入 highlight.js
import "highlight.js/styles/monokai-sublime.css"; // 引入高亮样式 这里我用的是sublime样式
export default {
  data() {
    return {
      handbook: "",
      codeStyle: "monokai-sublime", //主题
      result: "",
    };
  },

  methods: {
    submit() {
      const MarkdownIt = require("markdown-it");
      const md = new MarkdownIt();
      this.result = md.render(this.handbook);
      this.result = this.handbook;

      console.log(this.result);
    },
  },
};
</script>

<style lang="less" scoped>
#editor {
  margin: auto;
  width: 80%;
}
.img-box {
  width: 100%;
  position: relative;
  text-align: center;
  img {
    width: 100%;
  }
}
.md {
  max-width: 900px;
  margin: auto;
}
</style>
