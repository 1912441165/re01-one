<template>
  <div class="nav">
    <div class="gg">您身边的智能培训云平台，一站式解决培训考试难题</div>
    <div class="nav-logo">
      <img src="@/assets/index/indexa.png" alt="" />
    </div>
    <router-link to="/" :style="id == 0 ? { color: '#749AEB' } : ''">
      <div class="nav-item">首页</div>
    </router-link>
    <router-link to="/online" :style="id == 1 ? { color: '#749AEB' } : ''">
      <div class="nav-item">在线学习</div>
    </router-link>
    <router-link to="" :style="id == 2 ? { color: '#749AEB' } : ''">
      <div class="nav-item" @click="goAnchor('#jjfa')">解决方案</div>
    </router-link>
    <router-link to="" :style="id == 3 ? { color: '#749AEB' } : ''">
      <div class="nav-item" @click="goAnchor('#hyal')">行业案例</div>
    </router-link>
    <router-link to="" :style="id == 4 ? { color: '#749AEB' } : ''">
      <div class="nav-item" @click="goAnchor('#jsjj')">讲师简介</div>
    </router-link>
    <router-link to="/about" :style="id == 5 ? { color: '#749AEB' } : ''">
      <div class="nav-item">关于我们</div>
    </router-link>
    <div></div> <div></div> <div></div>
    <!-- min -->
    <div
      class="nav-item navMore"
      style="position: relative; margin-top: 9px; cursor: pointer"
    >
      <img
        src="@/assets/index/zhankai.png"
        alt=""
        width="35px"
        @click="navOpen()"
      />
      <div class="navHidd" v-show="navShow">
        <div>
          <router-link to="" style="color: #d10c0d">023-12345678</router-link>
        </div>
        <div
          style="
            background-color: #4d77ed;
            padding: 5px 0;
            border-radius: 31px;
            color: #fff;
          "
        >
          <router-link to="">免费试用</router-link>
        </div>
        <div
          style="
            padding: 4px 0;
            border-radius: 31px;
            color: #5f85ef;
            position: relative;
            border: 1px solid #85a5f2;
            background-color: #fff;
          "
        >
          <router-link to="" style="color: #5f85ef">快速登录</router-link>
        </div>
      </div>
    </div>
    <!-- max -->
    <router-link to="">
      <div class="nav-item hidd" style="color: #d10c0d">023-12345678</div>
    </router-link>
    <router-link to="">
      <div
        class="nav-item hidd"
        style="
          background-color: #4d77ed;
          padding: 5px 0;
          height: 25px;
          position: relative;
          top: -15px;
          border-radius: 31px;
          color: #fff;
        "
      >
        免费试用
      </div>
    </router-link>
    <router-link to="">
      <div
        class="nav-item hidd"
        style="
          padding: 4px 0;
          border-radius: 31px;
          height: 25px;
          position: relative;
          top: -15px;
          color: #5f85ef;
          border: 1px solid #85a5f2;
        "
      >
        快速登录
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ["id"],
  name: "Header",
  data() {
    return {
      navShow: false,
      time: 1,
    };
  },
  methods: {
    navOpen() {
      if (this.time == 1) {
        this.navShow = true;
        this.time++;
      } else {
        this.navShow = false;
        this.time--;
      }
    },
    goAnchor(selector) {/*参数selector是id选择器（#anchor14）*/
      document.querySelector(selector).scrollIntoView({
        behavior: "smooth"
      });
    },
  },
};
</script>

<style scoped>
/* 0-1400px */
@media screen and (max-width: 1400px) {
  .hidd {
    display: none;
  }
}
/* 最小1401px */
@media (min-width: 1401px) {
  .navMore {
    display: none;
  }
}
.navHidd {
  position: absolute;
  width: 200px;
  top: 40px;
  right: 33px;
  z-index: 666;
  background-color: #363a40;
}
.navHidd div {
  margin: 20px;
}
.nav {
  margin: 40px 0;
  position: relative;
  width: 100%;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  background-color: #ecf2fe;
}
.nav-item {
  width: 104px;
  height: 50px;
  position: relative;
  left: -80px;
}
.nav-logo{position: relative;left: -30px;top:-30px;width: 130px;height: 80px;background-color: #fff;}
.gg{width: 25%;height: 50px;position: absolute;line-height: 50px; left: 130px;top: -50px;font-size: 18px;color: #4684f1;}
</style>
