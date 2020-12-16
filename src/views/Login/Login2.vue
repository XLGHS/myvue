<!-- 短信登录 -->
<template>
  <div class="login2-wrap">
    <div class="login2-content">
      <form>
        <!-- 注册头部 -->
        <div class="form-header">
          <a
            href="javascript:;"
            class="iconfont icon-zuohuaxiangzuo"
            onclick="window.history.back()"
          ></a>
          <h1>用户登录</h1>
        </div>
        <!-- 注册表单 -->
        <div class="form-content">
          <!-- 用户名 -->
          <div class="form-item">
            <div class="icon">
              <i class="iconfont icon-wode"></i>
            </div>
            <input type="text" placeholder="请输入您的用户名/手机号" />
          </div>
          <!-- 密码 -->
          <div class="form-item">
            <div class="icon">
              <i class="iconfont icon-mima"></i>
            </div>
            <input type="password" placeholder="请输入登录密码" />
            <div class="icon-if">
              <i class="iconfont icon-yincang" v-if="!flag"></i>
              <i class="iconfont icon-xianshi" v-if="flag"></i>
            </div>
          </div>
          <!-- 问题 -->
          <div class="question">
            <a href="javascript:;" class="new-register">新用户注册</a>
            <a href="javascript:;" class="find-password">忘记密码?</a>
          </div>
        </div>
        <button>登录</button>
      </form>
      <!-- 短信验证码登录 -->
      <div class="note">
        <a href="javascript:;">短信验证码登录</a>
        <div>
          <i class="iconfont icon-xiangyouanniu"></i>
        </div>
      </div>
      <!-- qq登录 -->
      <div class="qqlogin">
        <p><span>使用以下登录方式</span></p>
        <div class="qq">
          <img :src="QQImg" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      QQImg: require("@/assets/images/qqimg.png"),
      flag: false,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less" scoped>
</style>