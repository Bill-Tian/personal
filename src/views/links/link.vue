<!--
 * @Author: Mr.Tian
 * @Date: 2021-12-06 11:51:34
 * @LastEditTime: 2021-12-06 18:11:51
 * @LastEditors: Mr.Tian
 * @Description: 
-->
<template>
  <div class="link-box">
    <p>
      这里是一些前端学习的相关链接，包括了一些前端学习网站、前端博客网站、前端开发小工具、日常资料查询等，前端工程师的居家旅行生活必备，让我们一起探索吧！
    </p>

    <div>
      <h3>前端工具</h3>
      <div>
        <article>
          <div class="links">
            <ul>
              <li class="eachli" v-for="item in tagsList" :key="item.id">
                <a href="" title="gitHub" class="link-item">
                  <img src="./../../assets/images/u159.png" alt="" />
                  <span class="sitename">GitHub</span>
                  <div class="linkdes">代码仓库</div>
                </a>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tagsList: [
        {
          id: 1,
          label: "github",
          des: "代码仓库",
          url: require("./../../assets/images/u159.png"),
        },
        {
          id: 2,
          label: "github",
          des: "代码仓库",
          url: require("./../../assets/images/u159.png"),
        },
        {
          id: 3,
          label: "github",
          des: "代码仓库",
          url: require("./../../assets/images/u159.png"),
        },
        {
          id: 4,
          label: "github",
          des: "代码仓库",
          url: require("./../../assets/images/u159.png"),
        },
      ],
    };
  },
};
</script>

<style>
.link-box {
  max-width: 900px;
  padding: 0 10px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(255, 255, 255, 0.8);
}
.links ul {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  list-style: none;
}
.links ul li {
  position: relative;
}
.eachli {
  width: 32%;
  border: 1px solid #ececec;
  padding: 10px 30px;
  margin: 5px 5px;
  border-radius: 10px;
  box-sizing: border-box;
  transition: all 0.3s;
}
.eachli:before {
  content: "";
  background-color: orange;
  position: absolute;
  top: 0;
  left: -60px;
  z-index: -1;
  transition: all 0.5s;
  transform: scale(0);
}

.eachli:before :hover {
  transform: scale(1);
}

.links ul li a {
  text-decoration: none;
}
.eachli:hover {
  background: #8e8cd8;
  border-color: #8e8cd8;
}
.eachli:hover .linkdes {
  color: #fff;
}
.eachli:hover .sitename {
  color: #fff;
}
.links ul li img {
  float: right;
  box-shadow: inset 0 0 10px #000;
  opacity: 1;
  transform: rotate(0);
  transition: all ease 1s;
  margin-top: 5px;
  width: 65px;
  height: 65px;
  padding: 2px;
  border-radius: 100%;
}
.links ul li:hover img {
  transform: rotate(360deg);
}

.sitename {
  color: #8e8cd8;
  padding-bottom: 10px;
  display: block;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  overflow: hidden;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  white-space: nowrap;
}
.linkdes {
  color: #949494;
  font-size: 13px;
  padding: 10px 0;
  border-top: 1px dashed #ddd;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  line-height: 25px;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
</style>