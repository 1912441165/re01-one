<template>
  <div class="nav">
    <div class="nav-item">
      <img src="@/assets/index/indexa.png" alt="" />
    </div>
    <router-link to="/" :style="id == 0 ? { color: '#749AEB' } : ''">
      <div class="nav-item">首页</div>
    </router-link>
    <router-link to="/online" :style="id == 1 ? { color: '#749AEB' } : ''">
      <div class="nav-item">在线学习</div>
    </router-link>
    <router-link to="" :style="id == 2 ? { color: '#749AEB' } : ''">
      <div class="nav-item">解决方案</div>
    </router-link>
    <router-link to="" :style="id == 3 ? { color: '#749AEB' } : ''">
      <div class="nav-item">行业案例</div>
    </router-link>
    <router-link to="" :style="id == 4 ? { color: '#749AEB' } : ''">
      <div class="nav-item">讲师简介</div>
    </router-link>
    <router-link to="/about" :style="id == 5 ? { color: '#749AEB' } : ''">
      <div class="nav-item">关于我们</div>
    </router-link>
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
          <router-link to="/">免费试用</router-link>
        </div>
        <div
          style="
            padding: 4px 0;
            border-radius: 31px;
            color: #5f85ef;
            border: 1px solid #85a5f2;
            background-color: #fff;
          "
        >
          <router-link to="/" style="color: #5f85ef">快速登录</router-link>
        </div>
      </div>
    </div>
    <router-link to="">
      <div class="nav-item hidd" style="color: #d10c0d">023-12345678</div>
    </router-link>
    <router-link to="/">
      <div
        class="nav-item hidd"
        style="
          background-color: #4d77ed;
          padding: 5px 0;
          border-radius: 31px;
          color: #fff;
        "
      >
        免费试用
      </div>
    </router-link>
    <router-link to="/">
      <div
        class="nav-item hidd"
        style="
          padding: 4px 0;
          border-radius: 31px;
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
  width: 100%;
  height: 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.nav-item {
  width: 104px;
  font-weight: bold;
}
</style>
