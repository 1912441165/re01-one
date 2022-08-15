<template>
  <div>
      <div class="footer">
        <div class="footnr">
          <div class="ftnr">
            <div class="ftnrtitle"><router-link to="/service" target="_blank">服务条款</router-link> \ <router-link to="/help" target="_blank">帮助中心</router-link></div>
            <div class="textmgin">学校名称：重庆市渝中区菲斯克职业培训学校</div>
            <div>学校地址：xxxxxxx</div>
          </div>
          <div class="ftnr">
            <div class="textmgin">企业合作：19112341234</div>
            <div>讲师入驻：19112341234</div>
          </div>
          <div class="ftnr">
            <div class="textmgin">关注我们</div>
            <div>扫描右侧企业微信二维码</div>
          </div>
          <div class="ftnr">
            <img src="@/assets/index/erweim.png" alt="" />
          </div>
        </div>
      </div>
      <div class="copy">
        <div>版权所有：菲斯克学校</div>
        <div>渝 | ABCD123456</div>
        <div>备案资料</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  methods:{
    
  }
}
</script>

<style scoped>
.footer {
  width: 100%;
  height: 345px;
  background-color: #434343;
}
.footnr {
  padding: 100px 50px;
  display: flex;
  color: #fff;
  justify-content: space-between;
  text-align: left;
}
.ftnr {
  align-self: flex-end;
  font-size: small;
}
.ftnrtitle {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 80px;
}
.ftnrtitle a{
  color: #fff !important;
}
.textmgin {
  margin-bottom: 20px;
}
.copy{
  display: flex;
  padding: 0 50px;
  color: #B1B1B1;
  border: 1px solid #E6E6E6;
  font-size: small;
}
.copy div{
  padding: 25px 0 25px 0;
  margin-right: 110px;
}
</style>
