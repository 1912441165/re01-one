<template>
  <div>
    <div class="indexs">
        <Header></Header>
    </div>
    <div class="home">
      <img src="@/assets/help/server.png" alt="" />
    </div>
    <div class="text">
      <div class="text-nr">
        欢迎你使用魔学院移动学习平台服务！<br> 为使用魔学院移动学习平台服务(以下简称“本服务”)，你应当阅读并遵守《魔学院移动学习平台服务协议》(以下简称“本协议”)以及专项规则等。请你务必审慎阅读、充分理解各条款内容，特别是免除或制责仟的相应条款，以及开通或使用某项服务的单独协议并选择接受或不接受。限制、免责条款可能以加相形式提示你注意。除非你已阅读并接受本协议所有条款。否则你无权使用摩博云学习服务。你对本服务的登录、查看、发布信息笔行为即视为你已阅读并同意本协议的约束。
      </div>
      <div class="text-titles">一、【协议的范围】</div>
      <div class="text-nr">
        1.1本协议是你与摩博科技之间关于你使用魔学院移动学习平台服务所订立的协议。“摩博科技”是指摩博(北京)科技有限公司。<br>
        1.2“摩学院移动学习平台用户”是指注册、购买摩学院移动学习平台服务并获得云学习管理权限的个人或组织，在本协议中更多地称为“你” “最终用户”是指使用摩学院移动
        学习平台用户购买云学习服务后获得分配使用的个人用户。前述“魔学院移动学习平台用户”及“最终用户”统称为“用户”或“所有用户”。本协议内容同时包括摩博科技可能
        下断发布的关千本服务的相关协议、服务声明、业务规则及公告指引等内容(以下统称为“专项规则”)。上述内容一经正式发布，即为本协议不可分割的组成部分，所有用户均
        应同样予以遵守。
      </div>
      <div class="text-titles">二、【关于本服务】</div>
      <div class="text-nr" style="margin-bottom:170px;">
        2.1【本服务的获取】<br>
        2.1.1你可以向得到摩博科技授权的经销商购买本服务。<br>
        2.1.2如果你通过未经摩博科技授权的第二方获取本服务，博科技无法保证本服务能够正常使用，并对你因此遭受的损失不予负责。<br>
        2.1.3摩博科技对于你通过授权经销商提交的订单会尽快完成审核。审核结果将通过电子邮件、手机短信或授权经销商等其他方式通知
        你指定的联系人。<br>
        2.1.4你理解并同意，你按照相关流程、提示提交订单需求并确认相关订单信息后，你的订单信息、你所提交的公司信息和咨币、发票
        信息等何信息将不可再进行何修改，同时，你应严格按照要求完成付款。<br>
        2.1.5你向摩博科技授权的经销商购买本服务，摩博科技将按照本协议以及专项规则的规定向你提供服务。超越前述协议或规则的约定
        (如你向经销商特别定制的服务)，你应向经销商请求履行，摩博科技并不保证前述约定得以履行。<br>
        2.2【本服务的内容】<br>
        2.2.1本服务是摩博科技向用户提供云学习存储空间，并利用云学习系统为用户提供在线学习、考试与互动，上传、下载课件与试题，
        进行课件内容托管以及其他相关在线学习功能的服务。<br>
        2.2.2在你成功购买本服务并开通后，摩博科技以你购买的最终用户数为基础，向你提供云学习的管理权限，App使用说明，相应的存
        储空间和使用说明等，并保证本服务的正常运<br>
      </div>
    </div>
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
  mounted(){
    window.scroll(0, 0); 
  }
}
</script>

<style scoped>
.home {
  width: 100%;
  height: 100%;
}
.home > img {
  width: 100%;
  z-index: 0;
  position: relative;
}
.text {
  width: 60%;
  margin: 80px 20%;
}
.text-nr {
  color: #C0C0C0;
  font-size: 18px;
  text-align: left;
  line-height: 35px;
  padding: 0;
}
.text-titles{
    text-align: left;
    font-weight: bold;
    color: #676767;
    margin-top: 55px;
    margin-bottom: 10px;
}
</style>
