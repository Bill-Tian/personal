<!--
 * @Author: Mr.Tian
 * @Date: 2021-10-20 11:02:30
 * @LastEditTime: 2021-12-09 09:05:36
 * @LastEditors: Mr.Tian
 * @Description: 
-->
<template>
  <main class="mainBox">
    <div>
      <figure class="figureBox">
        <div
          style="
            display: block;
            overflow: hidden;
            position: absolute;
            inset: 0px;
            box-sizing: border-box;
            margin: 0px;
          "
        >
          <img
            class="imgs"
            alt="tree"
            src="https://edge.yancey.app/beg/w1j500k8-1635086946599.png"
            decoding="async"
            data-nimg="fill"
          />
        </div>
      </figure>

      <div class="homeFont">
        <h2 data-text="HI, Mr.Tian!" class="glitch">HI, Mr.Tian!</h2>
        <section class="sc-1mhn9p2-0 faBobE">
          <span class="sc-1mhn9p2-2 inpYYO"></span>
          <p class="descript">
            我有一壶酒，足以慰风尘，尽倾江海里，赠饮天下人。
          </p>
          <div class="top-social">
            <li v-for="item in iconList" :key="item.id">
              <a href="#" :title="item.title" onclick="mail_me()">
                <img :src="item.url" />
              </a>
            </li>
          </div>
        </section>
      </div>
      <div></div>
      <blog></blog>
    </div>
  </main>

  <a
    class="cd-top animated"
    @click="backTop"
    :style="{ top: isTop ? '-900px' : '-228px' }"
  ></a>
</template>

<script>
import blog from "./blog/blog.vue";
export default {
  components: {
    blog,
  },
  name: "Home",
  data() {
    return {
      isTop: true,
      iconList: [
        {
          id: 1,
          title: "微信",
          url: require("./../assets/images/icon/weixin.png"),
        },
        {
          id: 2,
          title: "QQ",
          url: require("./../assets/images/icon/qs.png"),
        },
        {
          id: 3,
          title: "twitter",
          url: require("./../assets/images/icon/twitter.png"),
        },
        {
          id: 4,
          title: "知乎",
          url: require("./../assets/images/icon/zhihu.png"),
        },
        {
          id: 5,
          title: "Github",
          url: require("./../assets/images/icon/github-fill.png"),
        },
        {
          id: 6,
          title: "Email",
          url: require("./../assets/images/icon/email-fill.png"),
        },
      ],
    };
  },
  methods: {
    // 回到顶部
    backTop() {
      let current, timer;
      timer = setInterval(() => {
        current = document.documentElement.scrollTop || document.body.scrollTop;
        current -= 10;
        if (current > 0) {
          window.scrollTo(0, current);
        } else {
          window.scrollTo(0, 0);
          clearInterval(timer);
          this.isTop = true;
        }
      }, 5);
    },
  },
  mounted() {
    window.onscroll = () => {
      var scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop >= 300) {
        this.isTop = false;
      } else {
        this.isTop = true;
      }
    };
  },
};
</script>


<style lang="less" scoped>
.avater {
  display: flex;
  margin: 40px 60px;
}
.person {
  margin-left: 40px;
}
.imgBox {
  width: 24px;
  height: 22px;
  border: 1px solid #cccccc;
  border-radius: 50px;
  padding: 5px;
  margin-right: 20px;
}
.el-carousel__item.is-animating {
  border-radius: 20px;
}
.mainBox {
  flex: 1 1 0%;
  overflow-x: hidden;
}
h2 {
  margin-top: 0px;
  display: block;
}
.descript {
  margin-bottom: 15px;
  color: #fff;
  text-align: center;
}
.top-social {
  display: flex;
  justify-content: space-evenly;
  li {
    list-style: none;
  }
}
.glitch {
  margin-bottom: 2.4rem;
  font-size: 5.4rem;
  text-align: center;
  color: rgb(255, 255, 255);
  user-select: none;
  font-family: STXinwei;
}

.glitch:before {
  left: -1px;
  text-shadow: rgb(255, 63, 26) 1px 0px;
}
.glitch:after {
  left: 1px;
  text-shadow: rgb(0, 167, 224) -1px 0px;
}
.glitch:hover:before {
  text-shadow: 4px 0 #ff3f1a;
  animation: glitch-loop-1 0.8s infinite ease-in-out alternate-reverse;
}
.glitch:hover:after {
  text-shadow: -5px 0 #00a7e0;
  animation: glitch-loop-2 0.8s infinite ease-in-out alternate-reverse;
}

@keyframes glitch-loop-1 {
  0% {
    clip: rect(36px, 9999px, 9px, 0);
  }

  25% {
    clip: rect(25px, 9999px, 99px, 0);
  }

  50% {
    clip: rect(50px, 9999px, 102px, 0);
  }

  75% {
    clip: rect(30px, 9999px, 92px, 0);
  }

  100% {
    clip: rect(91px, 9999px, 98px, 0);
  }
}

@keyframes glitch-loop-2 {
  0% {
    top: -1px;
    left: 1px;
    clip: rect(65px, 9999px, 119px, 0);
  }

  25% {
    top: -6px;
    left: 4px;
    clip: rect(79px, 9999px, 19px, 0);
  }

  50% {
    top: -3px;
    left: 2px;
    clip: rect(68px, 9999px, 11px, 0);
  }

  75% {
    top: 0;
    left: -4px;
    clip: rect(95px, 9999px, 53px, 0);
  }

  100% {
    top: -1px;
    left: -1px;
    clip: rect(31px, 9999px, 149px, 0);
  }
}
.glitch:after,
.glitch:before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  width: 100%;
  background: rgba(0, 0, 0, 0);
  clip: rect(0, 0, 0, 0);
}

.homeFont {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0px);
  overflow: hidden;
}
.figureBox {
  position: relative;
  margin-bottom: 3.2rem;
  width: 100vw;
  height: 100vh;
}
.figureBox::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background-image: url("./../assets/images/dot.png");
  background-repeat: repeat;
  opacity: 0.5;
}
.imgs {
  position: absolute;
  inset: 0px;
  box-sizing: border-box;
  padding: 0px;
  border: none;
  margin: auto;
  display: block;
  width: 0px;
  height: 0px;
  min-width: 100%;
  max-width: 100%;
  min-height: 100%;
  max-height: 100%;
  object-fit: cover;
  filter: none;
  background-size: cover;
  background-image: none;
  background-position: 0% 0%;
}

.faBobE {
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  padding: 1.4rem 1.8rem;
  border-radius: 0.7rem;
}

.cd-top {
  position: fixed;
  right: 25px;
  top: -900px;
  top: -255px;
  z-index: 99;
  width: 70px;
  height: 900px;
  background: url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/images/scroll.png)
    no-repeat center;
  background-size: contain;
  -webkit-transition: all 0.5s ease-in-out;
  transition: all 0.5s ease-in-out;
  cursor: url(https://cdn.jsdelivr.net/gh/moezx/cdn@3.1.9/img/Sakura/cursor/No_Disponible.cur),
    auto;
  opacity: 1;
}

.animated {
  -webkit-animation: float 2s linear infinite;
  animation: float 2s linear infinite;
}

@keyframes float {
  25% {
    transform: translatey(-2px);
  }

  50% {
    transform: translatey(-4px);
  }

  75% {
    transform: translatey(-2px);
  }
}
</style>