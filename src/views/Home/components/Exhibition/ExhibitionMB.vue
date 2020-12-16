<!--  -->
<template>
  <div class="exhibition-mb">
    <div v-for="(obj, index) in objDatas" :key="index">
      <div class="mb-img">
        <img :src="obj.img" alt />
      </div>
      <div class="mb-ul">
        <ul>
          <li v-for="(tist, index) in obj.childenDatas" :key="index">
            <div class="li-img">
              <img :src="tist.img" alt />
            </div>
            <div class="li-goods">
              <div class="li-details">{{ tist.name }}</div>
              <div class="li-newprice">
                <em class="max">￥</em>
                <span>{{ tist.price }}</span>
                <em class="min">00</em>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    objDatas: Array,
  },
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
.exhibition-mb {
  height: 31rem;
  margin: 3%;
  position: relative;

  .mb-img {
    width: 100%;
    height: 19rem;
    border-radius: 1.5rem;
    overflow: hidden;
    img {
      width: 100%;
      height: 19rem;
    }
  }
  .mb-ul {
    width: 100%;
    height: 18rem;
    position: absolute;
    top: 40%;
    overflow: auto;
    ul {
      width: 200%;
      display: flex;
      li {
        width: 10.5rem;
        height: 18rem;
        background-color: #ffff;
        margin: 0 0.5rem;
        border-radius: 1.5rem;
        overflow: hidden;
        .li-img {
          width: 100%;
          height: 10.5rem;
          img {
            width: 100%;
            height: 10.5rem;
          }
        }
        .li-goods {
          width: calc(100% - 1.6rem);
          padding: 1rem 0.8rem;
          .li-details {
            width: 100%;
            height: 3.4rem;
            font-size: 1.2rem;
            overflow: hidden;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .li-newprice {
            color: red;
            font-weight: 700;
            span {
              font-size: 1.6rem;
            }
            em {
              font-style: normal;
              font-size: 1.3rem;
            }
          }
        }
      }
    }
  }
  .mb-ul::-webkit-scrollbar {
    display: none;
  }
}
</style>