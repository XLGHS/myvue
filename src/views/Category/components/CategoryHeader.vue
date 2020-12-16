<!-- 搜索分类 -->
<template>
  <div class="category-header">
    <header>
      <a
        href="javascript:;"
        class="iconfont icon-zuohuaxiangzuo"
        onclick="window.history.back()"
      ></a>
      <form action>
        <input
          type="text"
          placeholder="请输入关键字"
          v-model="keywords"
          @click="gotoSearch"
        />
        <i class="iconfont icon-search"></i>
      </form>

      <div class="changefont" v-if="showhide" @click="icon">
        <a
          href="javascript:;"
          class="iconfont icon-leimupinleifenleileibie"
          v-if="this.$store.state.toggleStyle"
        ></a>
        <a href="javascript:;" class="iconfont icon-ai222" v-else></a>
      </div>
    </header>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: ["showhide", "keywords"],
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
    icon() {
      return this.$store.commit("changeCategoryToggleStyle");
    },
    gotoSearch() {
      this.$router.push("/search");
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
<style lang="less">
.category-header {
  width: 100%;
  height: 4.9rem;
  background: #fff;
  border-bottom: 1px solid #ccc;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  header {
    height: 4.9rem;
    display: flex;
    a {
      display: block;
      width: 10%;
      height: 4.9rem;
      text-align: center;
      line-height: 4.9rem;
      font-size: 3rem;
    }
    form {
      width: 85%;
      position: relative;
      input {
        height: 3rem;
        width: 100%;
        border: 1px solid #ccc;
        border-radius: 1.5rem;
        margin-top: 0.8rem;
        text-indent: 10px;
      }
      i {
        font-size: 2.5rem;
        position: absolute;
        top: 0;
        right: 0;
        width: 4.9rem;
        height: 4.9rem;
        line-height: 4.9rem;
        text-align: center;
        color: #9999;
      }
    }
    .changefont {
      width: 2.5rem;
      margin-left: 1rem;
      a {
        font-size: 2rem;
        font-weight: normal;
      }
    }
  }
}
</style>