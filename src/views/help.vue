<template>
  <div>
      <div class="home">
          <img src="@/assets/help/help.png" alt="">
      </div>
      <div class="shouce">下载帮助手册</div>
      <div class="dianji">（点击此文字跳转到下载帮助手册PDF文档界面）</div>
      <div class="shoucenr">
        <div style="margin-right:150px;"><img src="@/assets/help/admin-sc.png" alt=""></div>
        <div style="margin-left:150px;"><img src="@/assets/help/xueyu-sc.png" alt=""></div>
      </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style >
.home{
  width: 100%;
  height: 100%;
}
.home>img{
  width: 100%;
  z-index: -1;
  position: relative;
}
.shouce{
    font-weight: bold;
    margin-top:85px;
    font-size: 25px;
}
.dianji{
    color: #A4A4A4;
    font-size: 25px;
    margin-top: 15px;
}
.shoucenr{
    margin: 114px 0 221px 0;
    display: flex;
    justify-content: center;
}

</style>
