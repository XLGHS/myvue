<!--  -->
<template>
  <div class="islogin">
    <div class="islogin-content">
      <div class="btn" @click="toLogin(0)">短信登录</div>
      <div class="btn" @click="toLogin(1)">账号登录</div>
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
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    toLogin(index) {
      this.$router.push("/login?id=" + index);
    },
  },
};
</script>
<style lang="less">
.islogin {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffff;
  .islogin-content {
    width: 90%;
    height: 4.4rem;
    display: flex;
    .btn {
      flex: 1;
      line-height: 4.4rem;
      text-align: center;
      font-size: 1.4rem;
      color: #ffff;
      &:first-child {
        background-color: chocolate;
      }
      &:last-child {
        background-color: paleturquoise;
      }
    }
  }
}
</style>