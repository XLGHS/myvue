<!--  -->
<template>
  <div class="category-posp">
    <CategoryLeft :categoryLeftDatas="categoryLeftDatas" />
    <CategoryRight :categoryRightDatas="categoryRightDatas" />
    <Loding v-if="showLoading" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import CategoryLeft from "./CategoryLeft.vue";
import CategoryRight from "./CategoryRight.vue";
import Loding from "@/components/Loding";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    CategoryLeft,
    CategoryRight,
    Loding,
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    categoryLeftDatas() {
      return this.$store.state.categoryLeftDatas;
    },
    categoryRightDatas() {
      return this.$store.state.categoryRightDatas;
    },
    showLoading() {
      return this.$store.state.showLoading;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.$store.dispatch("actChangeCategoryLeft");
    this.$store.dispatch("actChangeCategoryRight", "858");
  },
};
</script>
<style>
</style>