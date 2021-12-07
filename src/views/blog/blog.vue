<!--
 * @Author: Mr.Tian
 * @Date: 2021-11-29 11:43:42
 * @LastEditTime: 2022-01-13 11:39:45
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
      <h1>
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
      <h1>
        <span class="iconfont icon-notification"></span>
        <span>Discovery</span>
      </h1>

      <article
        class="article"
        v-for="(item, index) in tableData"
        :key="item._id"
        :style="{ flexDirection: index % 2 == 1 ? 'row-reverse' : 'row' }"
        @click="toDetail(item)"
      >
        <div class="picture-box">
          <a
            @click="toDetail(item)"
            :class="{ radl: index % 2 == 0, radr: index % 2 == 1 }"
          >
            <img
              :src="
                'https://cdn.jsdelivr.net/gh/Bill-Tian/Picture-library@master/img/' +
                item.imgName
              "
              alt=""
            />
          </a>
        </div>
        <div class="word-box">
          <div>
            <div class="time">
              <span class="iconfont icon-notification iconR10"></span>
              <span class="mar5">发布于</span>
              <span>{{ item.createdAt }}</span>
            </div>
            <a href="" class="titles">
              <h3>{{ item.title }}</h3>
            </a>
            <div class="hots">
              <span class="span-box">
                <span class="iconfont icon-view iconR10"></span>
                <span class="mar5">{{ item.viewCount }} </span>
                <span>查看</span>
              </span>
              <span class="span-box">
                <span class="iconfont icon-like iconR10"></span>
                <span class="mar5">{{ item.favoritesCount }}</span>
                <span>点赞</span>
              </span>
            </div>
            <div class="contents">
              <p>
                {{ item.description }}
              </p>
              <div></div>
            </div>
          </div>
        </div>
      </article>

      <div class="loading">
        <button v-if="!loading && !isShow" @click="loadMore">加载更多</button>
        <button v-if="isShow">没有啦，已经到底了！</button>
        <el-table v-if="loading" v-loading="loading" style="width: 100%">
        </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import blog from "./../../datas/blog.json";
import { ref, reactive } from "vue";
import axios from "axios";
import moment from "moment";
import { useRouter } from "vue-router";

export default {
  setup() {
    const tableData = ref([]);
    const loading = ref(false);
    const isShow = ref(false);
    // 查询参数
    const query = reactive({
      pageIndex: 1,
      pageSize: 10,
    });

    const router = useRouter();
    // 获取blog表格数据
    const getListOfData = () => {
      axios({
        method: "get",
        url: "/api/article",
        params: query,
      }).then((res) => {
        if (res) {
          let tableDatas = res.data.article;
          tableDatas.forEach((item) => {
            item.createdAt = moment(item.createdAt).format("YYYY-MM-DD");
          });
          // tableData.value = tableDatas;
          tableData.value = tableData.value.concat(tableDatas);
          loading.value = false;
          let index = query.pageIndex * query.pageSize;
          if (index >= res.data.articlesCount) {
            isShow.value = true;
          }
        }
      });
    };
    getListOfData();

    // 加载更多
    const loadMore = () => {
      loading.value = true;
      query.pageIndex += 1;
      getListOfData();
    };

    // 跳转到详情页面
    const toDetail = (item) => {
      console.log(item);
      router.push({
        path: "/blogDetail",
        query: {
          id: item._id,
        },
      });
    };

    return {
      tableData,
      loading,
      isShow,
      toDetail,
      loadMore,
    };
  },

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
  methods: {},
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
    .iconR10 {
      margin-right: 10px;
    }
    .mar5 {
      margin-right: 5px;
    }
    .time {
      color: #888;
      font-size: 13px;
      display: flex;
      align-items: center;
      height: 20px;
      line-height: 20px;
    }
    .titles {
      text-decoration: none;
      color: #504e4e;
      h3 {
        margin: 20px 0px;
      }
    }
    .hots {
      display: flex;
      color: #888;
      font-size: 13px;
      .span-box {
        display: flex;
        align-items: center;
        margin-right: 10px;
      }
    }
    .contents {
      color: rgba(0, 0, 0, 0.66);
      p {
        margin: 20px 0px;
      }
    }
  }
}

.loading {
  width: 100%;
  padding: 20px 0;
  text-align: center;
  margin: 40px 0;
  display: inline-block;
  button {
    padding: 13px 35px;
    border: 1px solid #d6d6d6;
    border-radius: 50px;
    color: #adadad;
    background: none;
    cursor: pointer;
    transition: color 0.2s ease-out, border 0.2s ease-out, opacity 0.2s ease-out;
  }
  button:hover {
    border-color: #fe9600;
    color: #fe9600;
    box-shadow: 0 0 4px #fe9600;
  }
}
</style>