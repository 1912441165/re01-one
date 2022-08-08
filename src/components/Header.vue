<template>
  <div class="nav">
      <div class="nav-item">
        <img src="@/assets/index/indexa.png" alt="" />
      </div>
      <div class="nav-item">
        <router-link to="/">首页</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/online">在线学习</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/help">解决方案</router-link>
      </div>
      <div class="nav-item">行业案例</div>
      <div class="nav-item">讲师简介</div>
      <div class="nav-item">
        <router-link to="/about">关于我们</router-link>
      </div>

      <div class="nav-item navMore" style="position:relative;margin-top:9px;">
        <img src="@/assets/index/zhankai.png" alt="" width="35px" @click="navOpen()">
        <div class="navHidd" v-show="navShow">
          <div style="color: #d10c0d">
            023-12345678
          </div>
          <div style="background-color: #4d77ed;padding: 5px 0; border-radius: 31px; color: #fff;">
            免费试用
          </div>
          <div style="padding: 4px 0; border-radius: 31px;color: #5f85ef;border: 1px solid #85a5f2;background-color: #fff;">
            快速登录
          </div>
        </div>
      </div>

      <div class="nav-item hidd" style="color: #d10c0d">
        023-12345678
      </div>
      <div class="nav-item hidd" style="background-color: #4d77ed;padding: 5px 0; border-radius: 31px; color: #fff;">
        免费试用
      </div>
      <div class="nav-item hidd" style="padding: 4px 0; border-radius: 31px;color: #5f85ef;border: 1px solid #85a5f2;">
        快速登录
      </div>
    </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
      return {
        navShow: false,
        time: 1,
      }
  },
  methods:{
    navOpen(){
      if(this.time == 1){
        this.navShow = true;
        this.time++; 
      }else{
        this.navShow = false;
        this.time--
      }
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media screen and (max-width: 1400px) {
  .hidd{
    display: none;
  }
}
@media (min-width: 1400px) {
  .navMore{
    display: none;
  }
}
.navHidd{
  position: absolute;
  width: 200px;
  top: 40px;
  right:  33px;
  z-index: 666;
  background-color: #363A40;
}
.navHidd div{
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
