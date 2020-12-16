<!--  -->
<template>
  <div class="group-title">
    <header>
      <h2>拼团专区</h2>
      <span>拼着买更实惠</span>
      <i class="iconfont icon-xiangyou"></i>
      <div class="but"></div>
    </header>
    <div class="group-list">
      <ul>
        <li v-for="(groups, index) in groupDatas" :key="index">
          <div class="group-img">
            <img :src="groups.goods_thumb" alt />
          </div>
          <div class="group-goods">
            <div class="group-details">{{ groups.goods_name }}</div>
            <div class="group-newprice">
              <img src="@/assets/images/Group.png" alt />
              <span>{{ groups.team_price_formated }}</span>
            </div>
            <div class="group-oldprice">{{ groups.shop_price_formated }}</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import ajax from "@/api/ajax";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      groupDatas: [],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    //数据
    getBestDatas() {
      ajax("/api/team/goods", {
        page: 1,
        size: 10,
        tc_id: 0,
        type: "setTeamGoods",
      }).then((res) => {
        // console.log(res);
        // console.log(res.data);
        this.groupDatas = res.data;
        // console.log(this.groupDatas);
      });
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getBestDatas();
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.group-title {
  width: 94%;
  height: 25rem;
  margin: 3%;
  background: #ffffff;
  border-radius: 1.5rem;
  overflow: hidden;

  header {
    width: calc(100% - 2rem);
    height: 2rem;
    padding: 1.5rem 1rem;
    display: flex;
    position: relative;
    h2 {
      font-size: 2rem;
      line-height: 2rem;
      margin-left: 0.5rem;
    }
    span {
      font-size: 1.4rem;
      margin-left: 1rem;
      color: #949090fa;
    }
    .icon-xiangyou {
      color: red;
      font-size: 1.8rem;
    }
    .but {
      width: calc(100% - 2rem);
      height: 1px;
      background: #b6b5b583;
      position: absolute;
      right: 1rem;
      bottom: 0;
    }
  }
  .group-list {
    width: calc(100% - 1rem);
    height: calc(100% - 6.5rem);
    padding: 1.5rem 0 0 1rem;
    ul {
      display: flex;
      overflow: auto;
      li {
        width: 11.5rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        .group-img {
          width: 10.9rem;
          height: 10.9rem;
          img {
            width: 10.9rem;
            height: 10.9rem;
          }
        }
        .group-goods {
          width: 9.9rem;
          height: 6rem;
          padding: 1rem 0.5rem;
          text-align: center;
          .group-details {
            height: 2rem;
            font-size: 1.3rem;
            overflow: hidden;

            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
          }
          .group-newprice {
            height: 1.8rem;
            margin-top: 0.5rem;
            display: flex;
            justify-content: center;
            img {
              width: 1.8rem;
              height: 1.8rem;
              margin-right: 0.5rem;
            }
            span {
              color: red;
              font-size: 1.4rem;
              font-weight: 700;
            }
          }
          .group-oldprice {
            text-decoration: line-through;
          }
        }
      }
    }
    ul::-webkit-scrollbar {
      display: none;
    }
  }
}
</style>