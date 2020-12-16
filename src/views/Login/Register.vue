<!--  -->
<template>
  <div class="">
    <h2>注册页面</h2>
    <form action="">
      <div>
        <input
          type="text"
          name="user_name"
          v-model="user_name"
          placeholder="用户名"
        />
      </div>
      <div>
        <input
          type="text"
          name="login_password"
          v-model="login_password"
          placeholder="密码"
        />
      </div>
      <div>
        <input type="text" name="phone" v-model="phone" placeholder="手机号" />
      </div>
    </form>
    <button @click="Register">注册</button>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { getRegister } from "@/api/api";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      user_name: "",
      login_password: "",
      phone: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //  注册账号
    async Register() {
      // 声明参数
      var params = {
        // 手机号
        phone: this.phone,
        // 用户名
        user_name: this.user_name,
        // 密码
        login_password: this.login_password,
      };
      // 传递参数
      let result = await getRegister("/register", params, "post");
      // 派遣方法保存token
      this.$store.dispatch("setUserInfo", result);
      console.log(result);
      // 判断状态码，跳转到首页
      if (result.status == 200) {
        this.$router.push("/home");
      }

      // this.phone = "";
      // this.user_name = "";
      // this.login_password = "";
    },
  },
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
<style>
</style>