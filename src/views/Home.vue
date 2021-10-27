<!--
 * @Author: Mr.Tian
 * @Date: 2021-10-20 11:02:30
 * @LastEditTime: 2021-10-25 15:29:26
 * @LastEditors: Mr.Tian
 * @Description: 
-->
<template>
  <main class="sc-1gn4h97-1 uQRSU">
    <section class="sc-rq02yo-0 OtmLf">
      <div class="sc-rq02yo-3 kozIVv">
        <figure class="sc-1m4p5gq-0 cszRny">
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
              alt="tree"
              src="https://edge.yancey.app/beg/w1j500k8-1635086946599.png"
              decoding="async"
              data-nimg="fill"
              style="
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
              "
            /><noscript></noscript>
          </div>
        </figure>
        <section class="sc-rq02yo-1 eBWUnY">
          <h2 data-slogan="HI, YANCEY!" class="sc-1pwq9u7-0 gKPNhc">
            HI, YANCEY!
          </h2>
          <section class="sc-1mhn9p2-0 faBobE">
            <span class="sc-1mhn9p2-2 inpYYO"></span>
            <p class="sc-1mhn9p2-1 eMhkWa">
              死は生の対極としてではなく、その一部として存在している。
            </p>
            <div class="sc-1mhn9p2-3 kdrQrC">
              <a
                href="https://github.com/YanceyOfficial/"
                target="_blank"
                rel="noopener noreferrer"
                ><svg class="sc-1mhn9p2-4 iyoJtU">
                  <use xlink:href="#github"></use></svg></a
              ><a
                href="https://twitter.com/YanceyOfficial/"
                target="_blank"
                rel="noopener noreferrer"
                class="sc-1mhn9p2-5 kWiPkv"
                ><svg class="sc-1mhn9p2-4 iyoJtU">
                  <use xlink:href="#twitter"></use></svg></a
              ><a
                href="https://www.instagram.com/yancey_leo/"
                target="_blank"
                rel="noopener noreferrer"
                ><svg class="sc-1mhn9p2-4 iyoJtU">
                  <use xlink:href="#instagram"></use></svg></a
              ><a
                href="https://soundcloud.com/yancey-leo/"
                target="_blank"
                rel="noopener noreferrer"
                ><svg class="sc-1mhn9p2-4 iyoJtU">
                  <use xlink:href="#soundcloud"></use></svg></a
              ><a
                href="https://t.me/YanceyOfficial"
                target="_blank"
                rel="noopener noreferrer"
                ><svg class="sc-1mhn9p2-4 iyoJtU">
                  <use xlink:href="#telegram"></use></svg></a
              ><a
                href="https://www.paypal.me/yanceyleo/10usd"
                target="_blank"
                rel="noopener noreferrer"
                ><svg class="sc-1mhn9p2-4 iyoJtU">
                  <use xlink:href="#paypal"></use></svg></a
              ><a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                class="sc-1mhn9p2-6 beYPfA"
                ><svg class="sc-1mhn9p2-4 iyoJtU">
                  <use xlink:href="#wechat"></use></svg></a
              ><a
                href="mailto:support@yanceyleo.com"
                target="_blank"
                rel="noopener noreferrer"
                ><svg class="sc-1mhn9p2-4 iyoJtU">
                  <use xlink:href="#email"></use></svg
              ></a>
            </div>
          </section>
        </section>
      </div>
      <div class="home">
        <div class="avater">
          <div>
            <img src="./../assets/images/u159.png" alt="" />
          </div>

          <div class="person">
            <div>
              <span
                style="
                  font-family: 'Arial Normal', 'Arial';
                  font-weight: 400;
                  font-size: 36px;
                "
                >Hello,欢迎来到</span
              >
              <span
                style="
                  font-family: 'Arial Normal', 'Arial';
                  font-weight: 700;
                  font-size: 36px;
                  color: #f23051;
                  margin-left: 10px;
                "
                >S博客</span
              >
            </div>

            <div style="padding: 5px 0">
              <span style="font-size: 16px; color: #868686"
                >互联网时代，没有自己的网站意味着你在这个世界上不存在。</span
              >
            </div>

            <div>
              <div style="font-size: 16px; color: #868686; margin-top: 15px">
                社交媒体
              </div>
              <div style="margin-top: 10px; display: flex">
                <div class="imgBox" v-for="item in lists" :key="item.id">
                  <img :src="item.url" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="margin: 0px 60px">
          <el-carousel height="520px" trigger="click">
            <el-carousel-item v-for="item in carouselList" :key="item.id">
              <img style="width: 100%" :src="item.url" alt="" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: "Home",
  components: {
    // HelloWorld
  },
  data() {
    return {
      lists: [
        { id: 1, url: require("./../assets/images/icon/u127.png") },
        { id: 2, url: require("./../assets/images/icon/u130.png") },
        { id: 3, url: require("./../assets/images/icon/u144.png") },
        { id: 4, url: require("./../assets/images/icon/u147.png") },
      ],
      carouselList: [
        { id: 1, url: require("./../assets/images/card/1.jpg") },
        { id: 2, url: require("./../assets/images/card/2.jpg") },
        { id: 3, url: require("./../assets/images/card/3.jpg") },
        { id: 4, url: require("./../assets/images/card/4.jpg") },
        { id: 5, url: require("./../assets/images/card/5.jpg") },
      ],
    };
  },
};
</script>


<style scoped>
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
.uQRSU {
  flex: 1 1 0%;
  overflow-x: hidden;
}
.gKPNhc {
  margin-bottom: 2.4rem;
  font-size: 5.4rem;
  text-align: center;
  color: rgb(255, 255, 255);
  user-select: none;
}
.gKPNhc::before {
  left: -1px;
  text-shadow: rgb(255 63 26) 1px 0px;
}
.gKPNhc::before,
.gKPNhc::after {
  position: absolute;
  content: attr(data-slogan);
  top: 0px;
  width: 100%;
  clip: rect(0px, 0px, 0px, 0px);
}
.eBWUnY {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0px);
}
.cszRny {
  position: relative;
  margin-bottom: 3.2rem;
  width: 100vw;
  height: 100vh;
}
.cszRny::after {
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
</style>