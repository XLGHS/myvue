<!-- 首页头部 -->
<template>
  <div class="home-header">
    <header>
      <form action="">
        <input type="text" placeholder="搜索商品名称" />
        <i class="iconfont icon-search"></i>
      </form>
      <a class="iconfont icon-xinxi"></a>
    </header>
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
<style lang="less">
.home-header {
  width: 100%;
  height: 4.4rem;
  position: fixed;
  top: 0;
  left: 0;
  background: transparent;
  z-index: 99;
  header {
    display: flex;
    text-align: center;
    form {
      width: 90%;
      position: relative;
      input {
        width: 100%;
        height: 3rem;
        margin-top: 0.7rem;
        border-radius: 1.5rem;
        margin-left: 1rem;
        text-indent: 1.5rem;
        width: calc(100% - 0.7rem);
      }
      i {
        position: absolute;
        right: 0;
        top: 0;
        font-size: 2.5rem;
        width: 4.4rem;
        height: 4.4rem;
        text-align: center;
        line-height: 4.4rem;
        color: #ccc;
      }
    }
    a {
      width: 4.4rem;
      height: 4.4rem;
      font-size: 2.8rem;
      text-align: center;
      line-height: 4.4rem;
      color: #fff;
    }
  }
}
</style>