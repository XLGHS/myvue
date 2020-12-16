<!--  -->
<template>
  <div class="index-page">
    <div class="index-header" :style="colorObj"></div>
    <div class="index-swiper">
      <Swiper @changeColor="getColor" />
    </div>
    <div :class="{ backdrop: true, indexRed: showSwiper }"></div>
    <div>
      <QuickNav />
    </div>
    <div>
      <HomeNews />
    </div>
    <div>
      <HomeImg />
    </div>
    <div>
      <HomeSeckill />
    </div>
    <div>
      <GroupTitle />
    </div>
    <div>
      <Clkj />
    </div>
    <div>
      <IndexProduct />
    </div>
    <div class="dj" style="width: 100%; height: 6rem"></div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Swiper from "../../../components/Swiper.vue";
import QuickNav from "../components/QuickNav.vue";
import HomeNews from "../components/HomeNews.vue";
import HomeImg from "../components/HomeImg.vue";
import HomeSeckill from "../components/Seckill/HomeSeckill.vue";
import IndexProduct from "../components/IndexProduct.vue";
import GroupTitle from "../components/Group/GroupTitle.vue";
import Clkj from "../components/Exhibition/Clkj";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Swiper,
    QuickNav,
    HomeNews,
    HomeImg,
    HomeSeckill,
    IndexProduct,
    GroupTitle,
    Clkj,
  },
  data() {
    //这里存放数据
    return {
      showSwiper: false,
      colorObj: {
        background: "#ec5151",
      },
      colorArr: [
        {
          background: "#E73430",
        },
        {
          background: "#0E57F1",
        },
        {
          background: "#00B9A4",
        },
        {
          background: "#FE5A3F",
        },
        {
          background: "#3974E8",
        },
      ],

      // isShowLoading: false,
    };
  },
  //方法集合
  methods: {
    getColor(data) {
      // console.log(data);
      this.colorObj = this.colorArr[data];
    },

    scrollPage() {
      if (document.documentElement.scrollTop > 100) {
        this.showSwiper = true;
      } else if (document.documentElement.scrollTop < 100) {
        this.showSwiper = false;
      }
    },
  },
  mounted() {
    window.addEventListener("scroll", this.scrollPage, false);
  },
};
</script>
<style lang="less">
.index-page {
  .index-header {
    height: 14.8rem;
    background: red;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
  }
  .index-swiper {
    position: relative;
    top: -5rem;
  }
  .backdrop {
    height: 8.8rem;
    background: transparent;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
  }
  .indexRed {
    background: red;
  }
}
</style>