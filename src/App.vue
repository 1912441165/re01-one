<template>
  <div id="app">
    <div class="indexs">
        <Header></Header>
    </div>
    <!-- 返回顶部 -->
    <el-backtop :bottom="74" :right="40">
      <div style="width:48px;height:48px;background-color: transparent;">
        <img src="@/assets/index/top.png" alt="">
      </div>
    </el-backtop>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  components: {
    Header,
    Footer,
},
}

</script> 

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a{
  color: #2c3e50;
}
.indexs {
  padding: 40px 75px 0 75px;
  box-sizing: border-box;
}
.el-backtop{
  background-color: transparent !important;
}
</style>
