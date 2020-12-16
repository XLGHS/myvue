<!--  -->
<template>
  <div class="">
    <ExhibitionMB :objDatas="objDatas" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import ExhibitionMB from "./ExhibitionMB";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    ExhibitionMB,
  },
  data() {
    //这里存放数据
    return {
      objDatas: [
        {
          id: 1,
          img:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/2xrOpGBonnFxQRzbgIEDM55NFSh0YHuTlQtap6Df.jpeg",
          childenDatas: [
            {
              id: 101,
              img:
                "https://img14.360buyimg.com/n1/s800x800_jfs/t1/146821/16/5045/125120/5f30a5a6E73b1b57d/e93faa593b84e9dc.jpg",
              name:
                "猫王收音机 猫王小王子otr便携式智能蓝牙音箱收音机复古迷你低音炮可爱无线小音响【私人企业定制礼品】 嬉皮红+【福利3选1】",
              price: "398.",
            },
            {
              id: 102,
              img:
                "https://img14.360buyimg.com/n1/s800x800_jfs/t1/146821/16/5045/125120/5f30a5a6E73b1b57d/e93faa593b84e9dc.jpg",
              name:
                "猫王收音机 猫王小王子otr便携式智能蓝牙音箱收音机复古迷你低音炮可爱无线小音响【私人企业定制礼品】 嬉皮红+【福利3选1】",
              price: "398.",
            },
            {
              id: 103,
              img:
                "https://img14.360buyimg.com/n1/s800x800_jfs/t1/146821/16/5045/125120/5f30a5a6E73b1b57d/e93faa593b84e9dc.jpg",
              name:
                "猫王收音机 猫王小王子otr便携式智能蓝牙音箱收音机复古迷你低音炮可爱无线小音响【私人企业定制礼品】 嬉皮红+【福利3选1】",
              price: "398.",
            },
            {
              id: 104,
              img:
                "https://img14.360buyimg.com/n1/s800x800_jfs/t1/146821/16/5045/125120/5f30a5a6E73b1b57d/e93faa593b84e9dc.jpg",
              name:
                "猫王收音机 猫王小王子otr便携式智能蓝牙音箱收音机复古迷你低音炮可爱无线小音响【私人企业定制礼品】 嬉皮红+【福利3选1】",
              price: "398.",
            },
            {
              id: 105,
              img:
                "https://img14.360buyimg.com/n1/s800x800_jfs/t1/146821/16/5045/125120/5f30a5a6E73b1b57d/e93faa593b84e9dc.jpg",
              name:
                "猫王收音机 猫王小王子otr便携式智能蓝牙音箱收音机复古迷你低音炮可爱无线小音响【私人企业定制礼品】 嬉皮红+【福利3选1】",
              price: "398.",
            },
            {
              id: 106,
              img:
                "https://img14.360buyimg.com/n1/s800x800_jfs/t1/146821/16/5045/125120/5f30a5a6E73b1b57d/e93faa593b84e9dc.jpg",
              name:
                "猫王收音机 猫王小王子otr便携式智能蓝牙音箱收音机复古迷你低音炮可爱无线小音响【私人企业定制礼品】 嬉皮红+【福利3选1】",
              price: "398.",
            },
          ],
        },
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
<style>
</style>