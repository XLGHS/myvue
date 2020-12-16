<!-- 首页 -->
<template>
  <div class="home-page">
    <HomeHeader />
    <div class="navbar">
      <ly-tab
        v-model="selectedId"
        :items="items"
        :options="options"
        @change="changeTab"
      >
      </ly-tab>
      <div class="category-btn">
        <i class="iconfont icon-ai222"></i>
        <span>分类</span>
      </div>
    </div>
    <div class="backdrop" v-if="this.$route.path != '/home/index'"></div>
    <div>
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Footer from "@/components/Footer.vue";
import HomeHeader from "./components/HomeHeader.vue";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer,
    HomeHeader,
  },
  data() {
    //这里存放数据
    return {
      selectedId: 0,
      items: [
        { label: "首页" },
        { label: "家用电器" },
        { label: "男装女装" },
        { label: "前端" },
        { label: "鞋靴箱包" },
        { label: "手机数码" },
        { label: "电脑办公" },
        { label: "家居家纺" },
        { label: "个人化妆" },
      ],
      options: {
        activeColor: "#fff",
        // 可在这里指定labelKey为你数据里文字对应的字段名
      },
      routerDatas: [
        "/home/index",
        "/home/household",
        "/home/clothing",
        "/home/shoebag",
        "/home/mobilephones",
        "/home/computer",
        "/home/hometextiles",
        "/home/personalmakeup",
      ],
    };
  },
  methods: {
    changeTab(item, index) {
      // console.log(item);
      // console.log(index);
      // console.log(this.selectedId);
      this.$router.push(this.routerDatas[index]);
    },
  },
  mounted() {
    this.routerDatas.forEach((item, index) => {
      if (item == this.$route.path) {
        this.selectedId = index;
      }
    });
  },
};
</script>
<style lang="less">
.home-page {
  .navbar {
    position: fixed;
    width: 100%;
    left: 0;
    top: 4.4rem;
    background: transparent;
    z-index: 99;
    display: flex;
    .ly-tab {
      width: 85%;
      .ly-tabbar {
        height: 4.4rem;
        background-color: transparent;
        border-bottom: 0px solid #eee;
        box-shadow: 0 0px 0px 0px rgba(0, 0, 0, 0);
        .ly-tab-list {
          a {
            color: #fff;
          }
        }
      }
    }

    .category-btn {
      width: 15%;
      height: 4.4rem;
      text-align: center;
      color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      i {
        font-size: 2rem;
        box-shadow: -6px 0 4px -4px rgba(0, 0, 0, 0.4);
      }
    }
  }
  .backdrop {
    width: 100%;
    height: 8.8rem;
    background: #e73430;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
  }
}
</style>