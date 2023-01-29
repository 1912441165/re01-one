<template>
  <div>
    <div class="indexs">

      <Header id="0"></Header>
    </div>
      <div v-show="maskShow" style="position:fixed;top:0;bottom:0;right:0;left:0;background:rgba(0,0,0,.5);z-index:999"></div>
      <div style="position: relative">
        <div class="lbZoom">
          <el-carousel trigger="click" :interval="3000" :autoplay="true" :height="height">
            <el-carousel-item v-for="(item,index) in lbList" :key="index">
              <img
                :width="width"
                :height="height"
                :src= 'lbList[index].url'
                alt=""
              />
            </el-carousel-item>
          </el-carousel>
        </div>
        <div class="zixun">
          <div class="zx-img">
            <el-image :src="src"></el-image>
          </div>
          <div class="zx-kuan">
            <div style="padding: 0 20px">
              <div style="
                  padding: 65px 0 40px 0;
                  color: #fff;
                  font-size: 16px;
                  font-weight: bold;
                "
              >
                您需要
              </div>
              <div class="zx-btn" @click="maskShow = true">资讯电话</div>
              <div class="zx-btn">在线资讯</div>
              <div class="zx-btn">行业案例</div>
              <div class="zx-btn">试用账号</div>
            </div>
          </div>
        </div>
        <!-- 在线资讯 -->
        <div class="zaixAll" v-show="maskShow">
          <div class="zaix">
            <div class="zaix-a">在线资讯</div>
            <div class="zaix-b" @click="closeZaix()">×</div>
          </div>
          <div class="zaixs">
            <div class="zxtitle">
              <div>售前咨询</div>
              <i class="el-icon-arrow-down"></i>
            </div>
            <div class="title-nr">
              <img
                src="https://www.ucharts.cn/v2/static/img/avatar.c74643a2.png"
                alt=""
                width="21px"
                height="21px"
              />
              <div @click="zxteaShow = true;">资讯老师</div>
            </div>
            <div class="title-nr">
              <img
                src="https://www.ucharts.cn/v2/static/img/avatar.c74643a2.png"
                alt=""
                width="21px"
                height="21px"
              />
              <div>资讯老师</div>
            </div>
            <div class="zxtitle">
              <div>售前咨询</div>
              <i class="el-icon-arrow-down"></i>
            </div>
            <div class="title-nr">
              <img
                src="https://www.ucharts.cn/v2/static/img/avatar.c74643a2.png"
                alt=""
                width="21px"
                height="21px"
              />
              <div>资讯老师</div>
            </div>
          </div>
        </div>
        <!-- 资讯老师 -->
        <div class="zxTeaTitle" v-show="zxteaShow">
            <div class="zxTea">
              <div class="xinlai">
                <div>
                  <img src="@/assets/index/teacherSmall.png" alt="">
                </div>
                <div style="text-align: left;margin-left:10px;">
                  <div style="font-weight: bold;">王老师</div>
                  <div style="margin-top:7px;color:#D0D9F9;font-size: small;">您值得信赖的人力资源服务机构</div>
                </div>
              </div>
              <div style="display:flex;">
                <div style="margin:8px 20px 0 0;cursor: pointer;" >
                  <img src="@/assets/index/laba.png" alt="" @click="laba()">
                </div>
                <div style="margin-top:8px;cursor: pointer;">
                  <i class="el-icon-minus" @click="zxteaShow = false"></i>
                </div>
              </div>
            </div>
            <div class="zxStu">
              <div class="student">
                <div class="stuSpack">
                  <div style="padding: 25px 15px;">
                    <div style="display:flex;align-items: center;">
                      <img src="@/assets/index/smtou.png" alt="" width="18px" height="18px"><span>&nbsp;咨询老师</span>
                    </div>
                    <!-- <div style="text-align:left">内容</div> -->
                  </div>
                  <div style="padding: 25px 15px;">
                    <div style="display:flex;align-items: center;justify-content: flex-end;">
                      <span>学员名字</span>&nbsp;<img src="@/assets/index/smtou.png" alt="" width="18px" height="18px">
                    </div>
                    <!-- <div style="text-align:left">内容</div> -->
                  </div>
                </div>
                <div class="stuSave">
                  <el-input
                    type="textarea"
                    :rows="4"
                    placeholder="请输入内容"
                    resize="none"
                    v-model="textarea">
                  </el-input>
                  <div class="save">
                    <div class="saveBtn">发送</div>
                  </div>
                </div>
              </div>
              <div class="stuDetails">
                <div style="width:190px;height: 60px;margin: 20px 0;">
                  <img src="@/assets/index/indexa.png" alt="" width="60px" height="60px">
                </div>
                <div style="margin-bottom:20px;">咨询老师</div>
                <div style="width:140px;padding: 0 25px;text-align: left;font-size: 12px;">
                  <div style="margin-bottom:10px;">职位:</div>
                  <div style="margin-bottom:10px;">电话:</div>
                  <div style="margin-bottom:10px;">手机:</div>
                  <div style="margin-bottom:10px;">邮箱:</div>
                </div>
                <div style="width:140px;padding: 40px 25px 50px 25px;text-align: left;font-size: 10px;">
                  <div style="width:140px;height:65px;color: #9D9D9D;line-height:22px;">文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案</div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div class="nanti">
          <div class="nt-head">企业面临的培训难题</div>
          <div class="nt-nr">
            <div class="wenan">
              <div>
                <img src="@/assets/index/nt-a.png" alt="">
              </div>
              <div class="wenanTit">文案文案文案</div>
              <div class="wenannr">文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案</div>
            </div>
            <div class="wenan">
              <div>
                <img src="@/assets/index/nt-b.png" alt="">
              </div>
              <div class="wenanTit">文案文案文案</div>
              <div class="wenannr">文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案</div>
            </div>
            <div class="wenan">
              <div>
                <img src="@/assets/index/nt-c.png" alt="">
              </div>
              <div class="wenanTit">文案文案文案</div>
              <div class="wenannr">文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案</div>
            </div>
            <div class="wenan">
              <div>
                <img src="@/assets/index/nt-d.png" alt="">
              </div>
              <div class="wenanTit">文案文案文案</div>
              <div class="wenannr">文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案</div>
            </div>
          </div>
      </div>
      <div class="bodys">
        <div class="hyal" id="hyal" @click="hyalBtn()" ref="hyal">行业案例</div>
        <div class="lbs">
          <el-carousel trigger="click" :autoplay="true" :height="heights" indicator-position="none" arrow="always">
            <el-carousel-item v-for="item in 3" :key="item">
              <img
                :width="width"
                :height="heights"
                src="@/assets/index/lbs.png"
                alt=""
              />
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
      <div style="position:relative;">
          <div class="teacher" id="jsjj" ref="jsjj">
            <img src="@/assets/index/teacher.png" alt="" :width="width" :height="heightTea">
          </div>
          <div class="teaNr">
            <div class="jiangshi">
              <div class="js jsa">
                <div class="jsleft">
                    <div class="leftimg">
                      <img src="@/assets/index/teapic.png" alt="">
                    </div>
                    <div class="leftjj">
                      <div class="jjtitle">讲师姓名：（简介）</div>
                      <div class="jjwenan">文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案</div>
                    </div>
                </div>
                <div class="jjbtn">
                  <div class="btn">课程名称文案文案</div>
                  <div class="btn">课程名称文案文案</div>
                  <div class="btn">课程名称文案文案</div>
                  <div class="btn btnlast">更多课程</div>
                </div>
                <div class="djcx" @click="djcxBtn()">点击查询</div>
              </div>
              <div class="js jsb">
                <div class="jsleft">
                    <div class="leftimg">
                      <img src="@/assets/index/teapic.png" alt="">
                    </div>
                    <div class="leftjj">
                      <div class="jjtitle">讲师姓名：（简介）</div>
                      <div class="jjwenan">文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案文案</div>
                    </div>
                </div>
                <div class="jjbtn">
                  <div class="btn">课程名称文案文案</div>
                  <div class="btn">课程名称文案文案</div>
                  <div class="btn">课程名称文案文案</div>
                  <div class="btn btnlast">更多课程</div>
                </div>
                <div class="mfsy" @click="mfsyBtn()">免费试用</div>
              </div>
            </div>
          </div>
      </div>
      <div class="jiejue">
        <div class="jijuTitle" id="jjfa" ref="jjfa">
          解决方案
        </div>
        <div class="qiyenr">
          <div class="qynr" style="min-width: 432px;">
            <div class="jijutou touqita">企业内训及考试解决方案</div>
            <div class="jijutext">线上课程支持反复学习，随时随地皆可学习</div>
            <div class="jijutext">课程添加多个课程文件，每个文件独立设置完成条件</div>
            <div class="jijutext">课程视频支持指定时间添加练习，视频观看过程中将触发练习</div>
            <div class="jijutext">支持对每个部门、学员进行多维度分析，学习情况一目了然</div>
            <div class="jijutou touqitas">企业内训及考试解决方案</div>
            <div class="jijutext">支持创建短中长期练习计划，可题库随机抽取练习</div>
            <div class="jijutext">公众号自动推送提醒，通过提醒即可进入练习</div>
            <div class="jijutext">自动生成并学员报告，随时随地查看练习情况</div>
            <div class="jijutext">学员在考试、课程中获得积分，积分排名能反映整体培训情况</div>
          </div>
          <div class="imgMax">
            <img src="@/assets/index/fanan.png" alt="">
          </div>
          <div class="imgMin">
            <img src="@/assets/index/fanan.png" alt="" width="600px" height="407px">
          </div>
        </div>
        <div class="qiyenr" style="margin-top:50px">
          <div class="jjimg">
            <img src="@/assets/index/fanans.png" alt="">
          </div>
          <div class="qynr jjer">
            <div class="jijutou" style="margin-top:55px;">企业内训及考试解决方案</div>
            <div class="jijutext">多种录题方式，支持添加试题分类、难度、标签等属性</div>
            <div class="jijutext">支持多种组卷模式，随机组卷每个学员不同试卷，杜绝相互抄袭</div>
            <div class="jijutext">考前人脸身份核验，考中随机拍照，切页面和离开考试智能监测</div>
            <div class="jijutext">智能判分系统，问答题也能判，考后直出成绩及排行榜等信息</div>
            <div class="jijutext">多维度、多角度分析考试结果，掌握部门、学员考试情况</div>
          </div>
          <div class="qynr jjer">
            <div class="jijutou" >企业内训及考试解决方案</div>
            <div class="jijutext">可添加子管理员参与系统管理，满足多管理者分工合作的管理需求</div>
            <div class="jijutext">人性化组织管理，支持人员信息导入及导出，解决数据迁移问题</div>
            <div class="jijutext">人员信息字段支持自定义，满足组织内部特殊字段需求</div>
          </div>
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
    Footer
  },
  data() {
    return {
      lbList: [{'url':'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-655599a5-1b85-4dfb-8f82-a479fc279bdb/7a7ffac1-094e-41be-b971-0e88475060cb.png'}
                ,{'url':'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-655599a5-1b85-4dfb-8f82-a479fc279bdb/7a7ffac1-094e-41be-b971-0e88475060cb.png'}
                ,{'url':'https://vkceyugu.cdn.bspapp.com/VKCEYUGU-655599a5-1b85-4dfb-8f82-a479fc279bdb/7a7ffac1-094e-41be-b971-0e88475060cb.png'}],
      src: "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      id:0,
      activeIndex: "1",
      activeIndex2: "1",
      height: "",
      heights: "",
      heightTea: "",
      width: "",
      maskShow:false,
      zxteaShow:false,
      textarea:'',
    };
  },
  mounted() {
    this.width = document.body.clientWidth - 150 + "px";
    this.height = ((document.body.clientWidth - 150) * 892) / 1838 + "px";
    this.heights = ((document.body.clientWidth - 150) * 727) / 1823 + "px";
    this.heightTea = ((document.body.clientWidth - 150) * 723) / 1818 + "px";
    console.log('行业案例距离顶部高度', this.$refs.hyal.getBoundingClientRect().top)
    console.log('讲师简介距离顶部高度', this.$refs.jsjj.getBoundingClientRect().top)
    console.log('解决方案距离顶部高度', this.$refs.jjfa.getBoundingClientRect().top)
  },
  methods: {
    laba(){
      console.log("88")
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    closeZaix(){
      this.maskShow = false;
    },
    hyalBtn(){
      console.log("点击行业案例");
    },
    djcxBtn(){
      console.log("点击了点击查询")
    },
    mfsyBtn(){
      console.log("点击免费试用")
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
}
/* .indexs {
  padding: 40px 75px;
  box-sizing: border-box;
} */

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
.el-carousel__indicator--horizontal {
    display: inline-block;
    margin: 56px 13px !important;
    padding: 0 !important;
}
.el-carousel__arrow--right {
    right: 150px !important;
}
.el-carousel__arrow--left {
    left: 150px !important;
}

.el-carousel__button {
  width: 20px !important;
  height: 20px !important;
  border-radius: 50% !important;
  opacity: 1 !important;
}
.el-carousel__indicator.is-active button {
    opacity: 1;
    background-color: #fad029 !important;
}
.zixun {
  position: absolute;
  top: calc(50% + 100px);
  right: 78px;
  z-index: 998;
}
.zx-img {
  width: 75px;
  height: 75px;
  border-radius: 50%;
  margin-left: 37.5px;
}
.zx-img img {
  width: 75px;
  height: 75px;
  border-radius: 50%;
}
.zx-kuan {
  width: 150px;
  height: 376px;
  margin-top: -37.5px;
  
  background-color: #547fee;
  border-radius: 15px;
}
.zx-btn {
  background-color: #fff;
  width: 100%;
  height: 30px;
  border-radius: 30px;
  margin-bottom: 30px;
  font-size: 16px;
  font-weight: bold;
  color: #527ced;
  line-height: 30px;
  cursor:pointer;
}

.zaixAll {
  position: absolute;
  top: calc(50% + 300px);
  right: 230px;
  z-index: 999;
}
.zaix {
  width: 220px;
  padding: 20px;
  background-color: #4e79ee;
  display: flex;
  justify-content: space-between;
  color: #fff;
  align-items: center;
}
.zaix-a {
  font-weight: bold;
}
.zaix-b {
  font-size: 25px;
  cursor:pointer;
}
.zaixs {
  width: 220px;
  background-color: #fff;
  padding: 15px 20px 30px 20px;
}
.zxtitle {
  display: flex;
  align-items: center;
  font-weight: bold;
  padding: 15px 0 10px 0;
}
.title-nr {
  display: flex;
  align-items: center;
  padding-bottom: 10px;
  cursor: pointer;
}
.title-nr img {
  margin-right: 5px;
}
.el-icon-arrow-down {
  margin-left: 10px;
}

.nt-head{
  margin: 120px 0 100px 0;
  font-weight: bold;
  font-size: 30px;
}
.nt-nr{
  display: flex;
  margin: 0 10%;
  justify-content: space-between;
}
.wenan{
  width: 17%;
}
.wenan .wenanTit{
  font-weight: bold;
  font-size: 20px;
  margin: 45px 0;
}
.wenan .wenannr{
  font-size: small;
  text-align: left;
}

.bodys{
  margin: 200px 0 40px 0;
  position: relative;
}
.bodys .hyal{
  position: absolute;
  background-color: #5D79EB;
  color: #fff;
  width: 8%;
  font-weight: bold;
  font-size: 18px;
  padding: 1%;
  top: -5%;
  right: 155px;
  z-index: 666;
  cursor:pointer;
}
.lbs .el-carousel__arrow{
  background-color: transparent !important;
  color: #99B4F6 !important;
  font-size: 45px !important;
  top: 51% !important;
  font-weight: bold !important;
}
.lbs .el-carousel__arrow--right{
  right: 150px !important;
}
.lbs .el-carousel__arrow--left{
  left: 150px !important;
}
.lbs .el-carousel__arrow i {
   font-weight: 800;
}
.teaNr{
  position: absolute;
  width: 100%;
  height: 80%; 
  bottom: 0;
}
.jiangshi{
  margin: 0 5%;
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.jiangshi .js{
  width: 47%;
  height: 100%;
  position: relative;
}

.jsleft{
  display: flex;
  justify-content: space-between;
}
.leftimg{
  width: 360px;
  height: 280px;
  margin-right: 40px;
}
.leftimg img{
  width: 100%;
  height: 100%;
}
.leftjj{
  text-align: left;
  color: #fff;
}
.jjtitle{
  font-size: 22px;
  margin-bottom: 3%;
}
.jjwenan{
  line-height: 30px;
  height: 134px;
  overflow: hidden;
}
.jjbtn{
  display: flex;
  justify-content: space-between;
  margin-top: 10%;
}
.btn{
  width: 20%;
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  background-color: #fff;
  font-size: 15px;
}
.btnlast{
  border: 1px solid #fff;
  background-color: transparent;
  color: #fff;
}
.djcx{
  background-color: #fff;
  border-radius: 20px;
  font-size: 25px;
  font-weight: 600;
  color: #4684f1;
  width: 25%;
  padding: 10px;
  position: absolute;
  bottom: 5%;
  left: 30%;
  cursor: pointer;
}
.mfsy{
  background-color: #fff;
  font-size: 25px;
  font-weight: 600;
  border-radius: 20px;
  color: #4684f1;
  width: 25%;
  padding: 10px;
  position: absolute;
  bottom: 5%;
  right: 30%;
  cursor:pointer;
}
.jijuTitle{
  margin: 80px 0 0 0;
  font-weight: bold;
  font-size: 40px;
}
.qiyenr{
  display: flex;
  justify-content: space-between;
  margin: 0 80px;
}
.qynr{
  text-align: left;
}
.jijutou{
  margin-bottom: 40px;
  font-weight: bold;
  font-size: 20px;
}
.touqita{
  margin-top: 78px;
}
.touqitas{
  margin-top: 80px;
}
.jijutext{
  color: #CBCACA;
  margin-bottom: 10px;
}
.zxTeaTitle{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  z-index: 999;
}
.zxTea{
  width: 610px;
  height: 70px;
  background-color: #4E79EE;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  color: #fff;
}
.xinlai{
  margin-top: 11.5px;
  display: flex;
}
.zxStu{
  width: 650px;
  height: 400px;
  background-color: #fff;
  display: flex;
  border: 1px solid #E1E1E1;
}
.stuSpack{
  width: 460px;
  height: 260px;
  background-color: #fff;
  border-right: 1px solid #E1E1E1;
  border-bottom: 2px solid #E1E1E1;
}
.stuSave{
  width: 460px;
  height: 138px;
  border-right: 1px solid #E1E1E1;
}
.save{
  display: flex;
  justify-content: flex-end;
}
.saveBtn{
  width:77px;height: 28px;background-color: #4E79EE;text-align: center;line-height: 28px;
  color: #fff;
  font-size: 15px;
  margin: 8px 15px 0 0;
  cursor:pointer;
}
.el-textarea__inner{
  border: 0px solid #fff !important;
  border-radius: 0px !important;
}
/* 0-1400px */
@media screen and (max-width: 1600px) {  
  .teaNr {
    position: absolute;
    width: 80%;
    height: 80%;
    bottom: 0;
  }
  .jiangshi{
    margin: 0 15%;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }
  .imgMax{
    display: none;
  }
  .touqita{
    margin-top: 0;
  }
  .touqitas{
    margin-top: 40px;
  }
  .jjer .jijutext{
    width: 320px;
  }
  .jjimg{
    margin-top: 90px; 
  }
}
@media (min-width:1400px) and (max-width: 1600px) {
  .imgMax{
    display: block;
  }
  .touqitas{
    margin-top: 80px;
  }
}
/* 大于1400px */
@media (min-width: 1401px) {
  .imgMin{
    display: none;
  }
}
</style>