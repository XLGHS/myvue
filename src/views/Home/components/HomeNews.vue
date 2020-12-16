<!--  -->
<template>
  <div class="home-news">
    <div class="news-img">
      <img :src="titlemg" alt="" />
    </div>
    <ul ref="news" :class="{ trans: flag }">
      <li v-for="(news, index) in newsData" :key="index">{{ news.title }}</li>
    </ul>
    <div class="news-fons">
      <i class="iconfont icon-xiangyou"></i>
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
      titlemg:
        "https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978466633.png",
      newsData: [
        {
          id: 1,
          title: "新闻001",
        },
        {
          id: 2,
          title: "新闻002",
        },
        {
          id: 3,
          title: "新闻003",
        },
      ],
      flag: false,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    scrollNewsFn() {
      // console.log(this.$refs.news);
      let oUl = this.$refs.news;
      oUl.style.top = "-5rem";
      this.flag = !this.flag;
      setTimeout(() => {
        this.newsData.push(this.newsData[0]);
        this.newsData.shift();
        oUl.style.top = "0rem";
        this.flag = !this.flag;
      }, 500);
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.timer = setInterval(this.scrollNewsFn, 2000);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {
    clearInterval(this.timer);
  }, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.home-news {
  position: relative;
  background: #ffffff;
  width: calc(94% - 2rem);
  height: 5rem;
  padding: 0 1rem;
  margin-left: 3%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: -60px;
  overflow: hidden;
  border-radius: 0 0 1.5rem 1.5rem;
  .news-img {
    width: 20%;
    height: 3rem;
    img {
      height: 3rem;
    }
  }
  .trans {
    transition: all 0.5s linear;
  }
  ul {
    width: 30%;
    height: 5rem;
    position: absolute;
    left: 20%;
    margin-left: 2rem;
    li {
      height: 5rem;
      line-height: 5rem;
      font-size: 1.4rem;
      font-weight: 700;
    }
  }
  .news-fons {
    width: 10%;
    text-align: right;
    i {
      color: red;
      font-size: 2.5rem;
    }
  }
}
.home-news::after {
  position: absolute;
  content: "";
  width: 94%;
  height: 1px;
  background: #cccc;
  top: 0px;
  left: 3%;
}
</style>