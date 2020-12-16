<!--  -->
<template>
  <div class="category-left">
    <ul>
      <li
        v-for="lefts in categoryLeftDatas"
        :key="lefts.cat_id"
        @click="actindexFn(lefts.cat_id)"
      >
        <p :class="{ activa: catId == lefts.cat_id }">
          {{ lefts.cat_name }}
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    categoryLeftDatas: Array,
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {
    catId() {
      return this.$store.state.cat_id;
    },
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    actindexFn(cat_id) {
      this.cat_id = cat_id;
      this.$store.dispatch("actChangeCategoryRight", cat_id);
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
.category-left {
  width: calc(25% - 1px);
  height: 100%;
  background-color: #ffff;
  border-right: 1px solid #6666;
  position: fixed;
  left: 0;
  top: 5rem;
  ul {
    li {
      width: 100%;
      height: 3.8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      p {
        width: 100%;
        height: 2rem;
        text-align: center;
        line-height: 2rem;
        color: rgba(102, 102, 102, 0.774);
      }
      .activa {
        color: red;
        border-left: 0.25rem solid red;
        width: calc(100% - 0.25rem);
      }
    }
  }
}
</style>