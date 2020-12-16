<!-- 公共列表 -->
<template>
  <div class="list">
    <ul class="list-wrap">
      <li v-for="(list, index) in listdatas" :key="index">
        <div class="list-img">
          <img :src="list.goods_thumb" alt="" />
        </div>
        <div class="list-details">
          <div class="list-title">{{ list.title }}</div>
          <div class="list-price">{{ list.shop_price }}</div>
        </div>
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
    listdatas: Array,
  },
  data() {
    //这里存放数据
    return {};
  },
};
</script>
<style lang="less">
.list {
  display: flex;
  justify-content: space-around;
  .list-wrap {
    width: 94%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    li {
      width: 48.5%;
      height: 23.5rem;
      text-align: center;
      margin-bottom: 2.5%;
      .list-img {
        width: 100%;
        height: 57%;
        img {
          width: 100%;
          height: 100%;
          border-radius: 1.5rem 1.5rem 0 0;
        }
      }
      .list-details {
        padding: 1.5rem;
        background: #ffffff;
        border-radius: 0 0 1.5rem 1.5rem;
        .list-title {
          font-size: 1.4rem;
          height: 4rem;
          overflow: hidden;
          text-align: left;
          line-height: 2rem;

          //省略号
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .list-price {
          font-size: 1.8rem;
          color: red;
          line-height: 3rem;
          &::before {
            content: "￥";
          }
        }
      }
    }
  }
}
</style>