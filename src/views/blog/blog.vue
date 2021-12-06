<!--
 * @Author: Mr.Tian
 * @Date: 2021-11-29 11:43:42
 * @LastEditTime: 2021-12-02 09:44:30
 * @LastEditors: Mr.Tian
 * @Description: 
-->

<template>
  <div class="blog-box">
    <!--通知栏-->
    <div class="notice">
      <span class="iconfont icon-notification"></span>
      <div class="tian">Tian 的网站上线啦</div>
    </div>

    <!--聚焦栏-->
    <div class="feature">
      <h1 class="title">
        <span class="iconfont icon-notification"></span>
        <span>聚焦</span>
      </h1>

      <div class="feature-box">
        <div class="img-titie" v-for="item in featureList" :key="item.label">
          <a href="">
            <div class="img-box">
              <img :src="item.url" />
            </div>
            <div class="descript">
              <h3>{{ item.h3 }}</h3>
              <p>{{ item.des }}</p>
            </div>
          </a>
        </div>
      </div>
    </div>

    <!-- Discovery栏 -->
    <div class="discovery">
      <h1 class="title">
        <span class="iconfont icon-notification"></span>
        <span>Discovery</span>
      </h1>

      <article
        class="article"
        v-for="(item, index) in blog"
        :key="item.id"
        :style="{ flexDirection: index % 2 == 1 ? 'row-reverse' : 'row' }"
      >
        <div class="picture-box">
          <a href="" :class="{ radl: index % 2 == 0, radr: index % 2 == 1 }">
            <img src="./../../assets/images/hansjorg.jpg" alt="" />
          </a>
        </div>
        <div class="word-box">
          <div>
            <div class="time">
              <span class="iconfont icon-notification"></span>
              <span>发布于</span>
              <span>{{ item.creatime }}--{{ index }}</span>
            </div>
            <a href="" class="titles">
              <h3>{{ item.title }}</h3>
            </a>
            <div class="hots">
              <span>
                <i class="iconfont icon-notification"></i>
                {{ item.hot }} 热度
              </span>
              <span>
                <i class="iconfont icon-notification"></i>
                <span>{{ item.like }}</span>
                <span>点赞</span>
              </span>
            </div>
            <div class="contents">
              <p>
                {{ item.content }}
              </p>
              <div></div>
            </div>
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import blog from "./../../datas/blog.json";
export default {
  data() {
    return {
      blog,
      featureList: [
        {
          label: "1",
          url: require("../../assets/images/card/land1.jpg"),
          h3: "feature",
          des: "Html5",
        },
        {
          label: "2",
          url: require("../../assets/images/card/land2.jpg"),
          h3: "feature",
          des: "Css3",
        },
        {
          label: "3",
          url: require("../../assets/images/card/land3.jpg"),
          h3: "feature",
          des: "JavaScript",
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.blog-box {
  max-width: 900px;
  padding: 0 10px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(255, 255, 255, 0.8);
  .notice {
    display: flex;
    align-items: center;
    padding: 20px;
    border: 1px dashed #e6e6e6;
    color: #969696;
    background: #fbfbfb50;
    border-radius: 10px;
    span {
      font-size: 20px;
    }
    .tian {
      margin-left: 10px;
    }
  }
}

.feature,
.discovery {
  margin-top: 40px;
  padding: 10px 0;
  h1 {
    color: #666;
    font-size: 16px;
    font-weight: 400;
    padding-bottom: 5px;
    margin-bottom: 30px;
    border-bottom: 1px dashed #ececec;
  }
}

.feature-box {
  display: flex;
  justify-content: space-between;
  .img-titie {
    position: relative;
    width: 280px;
    height: 170px;
    box-shadow: 1px 1px 3px rgb(0 0 0 / 30%);
    overflow: hidden;
    border-radius: 10px;
  }
  .img-box {
    img {
      width: 280px;
      height: 170px;
      cursor: pointer;
      transition: all 0.6s;
    }
  }

  a:hover .descript {
    opacity: 1;
    visibility: visible;
  }
  a:hover h3 {
    visibility: visible;
    transform: translateX(0);
  }
  a:hover p {
    visibility: visible;
    transform: translateX(0);
  }
  a:hover img {
    transform: scale(1.4);
  }

  .descript {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    text-align: center;
    background: rgba(0, 0, 0, 0.6);
    visibility: hidden;
    opacity: 0;
    -webkit-transition: all 0.35s ease-in-out;
    transition: all 0.35s ease-in-out;
    border-radius: 10px;
    h3 {
      text-transform: uppercase;
      color: #fff;
      text-align: center;
      font-size: 17px;
      padding: 10px;
      background: #111;
      margin: 30px 0 0 0;
      -webkit-transition: all 0.35s ease-in-out;
      transition: all 0.35s ease-in-out;
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
    p {
      font-style: italic;
      font-size: 12px;
      position: relative;
      color: #bbb;
      padding: 20px 20px 20px;
      text-align: center;
      -webkit-transition: all 0.35s linear 0.1s;
      transition: all 0.35s linear 0.1s;
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
  }
}

.article {
  width: 100%;
  height: 300px;
  border-radius: 10px;
  margin: 40px 0;
  background-color: rgba(255, 255, 255, 0);
  box-shadow: 0 1px 20px -8px #00000080;
  display: flex;
  .picture-box {
    width: 55%;
    .radl {
      border-radius: 10px 0 0 10px;
    }
    .radr {
      border-radius: 0 10px 10px 0;
    }
    a {
      height: 300px;
      position: relative;
      display: block;
      background-repeat: no-repeat;
      background-size: cover;
      overflow: hidden;
      img {
        width: 100%;
        height: 300px;
        transition: all 0.8s;
      }
    }
    a:hover img {
      transform: scale(1.1);
    }
  }

  .word-box {
    padding: 20px;
    width: 40%;
    .time {
      color: #888;
      font-size: 13px;
    }
    .titles {
      text-decoration: none;
      color: #504e4e;
      h3 {
        margin: 20px 0px;
      }
    }
    .hots {
      color: #888;
      font-size: 13px;
    }
    .contents {
      color: rgba(0, 0, 0, 0.66);
      p {
        margin: 20px 0px;
      }
    }
  }
}
</style>