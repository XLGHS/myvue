<!--  -->
<template>
  <div class="quick-nav">
    <mt-swipe :auto="0">
      <mt-swipe-item v-for="(tiem, index) in quickNavDatas" :key="index">
        <ul>
          <li v-for="(titn, index) in tiem" :key="index">
            <img :src="titn.imgsrc" alt="" />
            <span>{{ titn.title }}</span>
          </li>
        </ul>
      </mt-swipe-item>
    </mt-swipe>
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
      quickNavDatas: [
        [
          {
            id: 1,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png",
            title: "潮流服饰",
          },
          {
            id: 2,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/EaINOz1VE3yvzyO6l2LoHNRQHt0iGXrk1uhfvwEf.png",
            title: "箱包配饰",
          },
          {
            id: 3,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/ZHsZuTkcuZGa7Mu4n5W1E6qsRQQBtkl9fzByJsUk.png",
            title: "美容护肤",
          },
          {
            id: 4,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/8vjN7XPR9BD1BGqGYDGmJiQvk1UPH4duF4csjuaV.png",
            title: "母婴儿童",
          },
          {
            id: 5,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/xypYud8p2sTivnyrf3cSmVwLt5ZalTtHraQqGYCl.png",
            title: "手机数码",
          },
          {
            id: 6,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/xnzngK6mJ1VamCDXKd5GH51C3asWfCnd8btRiZn2.png",
            title: "微社区",
          },
          {
            id: 7,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/3QggHJzSCrK1osf8DUYQxCUC3RhxaUySDkc5EMoC.gif",
            title: "拼团",
          },
          {
            id: 8,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png",
            title: "潮流服饰",
          },
          {
            id: 9,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png",
            title: "潮流服饰",
          },
          {
            id: 10,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/9JVcPMp5TemauXCVQxnIY50u80vcxnFGfnn33CKh.png",
            title: "潮流服饰",
          },
        ],
        [
          {
            id: 11,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/EaINOz1VE3yvzyO6l2LoHNRQHt0iGXrk1uhfvwEf.png",
            title: "箱包配饰",
          },
          {
            id: 12,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/EaINOz1VE3yvzyO6l2LoHNRQHt0iGXrk1uhfvwEf.png",
            title: "箱包配饰",
          },
          {
            id: 13,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/EaINOz1VE3yvzyO6l2LoHNRQHt0iGXrk1uhfvwEf.png",
            title: "箱包配饰",
          },
          {
            id: 14,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/EaINOz1VE3yvzyO6l2LoHNRQHt0iGXrk1uhfvwEf.png",
            title: "箱包配饰",
          },
          {
            id: 15,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/EaINOz1VE3yvzyO6l2LoHNRQHt0iGXrk1uhfvwEf.png",
            title: "箱包配饰",
          },
          {
            id: 16,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/EaINOz1VE3yvzyO6l2LoHNRQHt0iGXrk1uhfvwEf.png",
            title: "箱包配饰",
          },
          {
            id: 17,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/EaINOz1VE3yvzyO6l2LoHNRQHt0iGXrk1uhfvwEf.png",
            title: "箱包配饰",
          },
          {
            id: 18,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/EaINOz1VE3yvzyO6l2LoHNRQHt0iGXrk1uhfvwEf.png",
            title: "箱包配饰",
          },
          {
            id: 19,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/EaINOz1VE3yvzyO6l2LoHNRQHt0iGXrk1uhfvwEf.png",
            title: "箱包配饰",
          },
          {
            id: 20,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/EaINOz1VE3yvzyO6l2LoHNRQHt0iGXrk1uhfvwEf.png",
            title: "箱包配饰",
          },
        ],
        [
          {
            id: 11,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/EaINOz1VE3yvzyO6l2LoHNRQHt0iGXrk1uhfvwEf.png",
            title: "箱包配饰",
          },
          {
            id: 12,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/EaINOz1VE3yvzyO6l2LoHNRQHt0iGXrk1uhfvwEf.png",
            title: "箱包配饰",
          },
          {
            id: 13,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/EaINOz1VE3yvzyO6l2LoHNRQHt0iGXrk1uhfvwEf.png",
            title: "箱包配饰",
          },
          {
            id: 14,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/EaINOz1VE3yvzyO6l2LoHNRQHt0iGXrk1uhfvwEf.png",
            title: "箱包配饰",
          },
          {
            id: 15,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/EaINOz1VE3yvzyO6l2LoHNRQHt0iGXrk1uhfvwEf.png",
            title: "箱包配饰",
          },
          {
            id: 16,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/EaINOz1VE3yvzyO6l2LoHNRQHt0iGXrk1uhfvwEf.png",
            title: "箱包配饰",
          },
          {
            id: 17,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/EaINOz1VE3yvzyO6l2LoHNRQHt0iGXrk1uhfvwEf.png",
            title: "箱包配饰",
          },
          {
            id: 18,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/EaINOz1VE3yvzyO6l2LoHNRQHt0iGXrk1uhfvwEf.png",
            title: "箱包配饰",
          },
          {
            id: 19,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/EaINOz1VE3yvzyO6l2LoHNRQHt0iGXrk1uhfvwEf.png",
            title: "箱包配饰",
          },
          {
            id: 20,
            imgsrc:
              "https://x.dscmall.cn/storage/data/gallery_album/original_img/EaINOz1VE3yvzyO6l2LoHNRQHt0iGXrk1uhfvwEf.png",
            title: "箱包配饰",
          },
        ],
      ],
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
<style lang="less">
.quick-nav {
  height: 21.5rem;
  position: relative;
  width: 94%;
  margin: 5% 3%;
  border-radius: 1.5rem 1.5rem 0 0;
  background: #ffff;
  top: -60px;
  margin-bottom: 0;
  ul {
    height: 18rem;
    display: flex;
    flex-wrap: wrap;

    li {
      height: 9rem;
      width: 20%;
      text-align: center;
      img {
        width: 7rem;
        height: 7rem;
      }
    }
  }
  .mint-swipe-indicators {
    background: #FFB3B3;
    border-radius: 2px;
    height: 4px;
    display: flex;
    position: absolute;
    top: 19.2rem;
    .mint-swipe-indicator {
      width: 1.5rem;
      height: 4px;
      opacity: 0;
      border-radius: 2px;
      margin: 0;
    }
    .mint-swipe-indicator.is-active {
      background: red;
      opacity: 1;
    }
  }
}
</style>