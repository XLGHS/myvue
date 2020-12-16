<!--  v-infinite-scroll="loadMore"-->
<template>
  <div class="category-list">
    <CategoryHeader :showhide="showhide" />
    <div :style="{ height: oH }" v-infinite-scroll="loadMore">
      <div class="tabs-wrap">
        <div
          :class="activeTab0 ? 'tabs-item' : 'tabs-item active'"
          @click="sortZonghe"
        >
          <span>综合</span>
          <i
            :class="
              !activeTab00
                ? 'iconfont icon-triangle-down'
                : 'iconfont icon-sj-small-up'
            "
          ></i>
        </div>
        <div
          :class="activeTab1 ? 'tabs-item' : 'tabs-item active'"
          @click="sortNew"
        >
          <span>新品</span>
          <i></i>
        </div>
        <div
          :class="activeTab2 ? 'tabs-item' : 'tabs-item active'"
          @click="sortSale"
        >
          <span>销量</span>
          <i></i>
        </div>
        <div
          :class="activeTab3 ? 'tabs-item' : 'tabs-item active'"
          @click="sortPrice"
        >
          <span>价格</span>
          <i
            :class="
              activeTab11
                ? 'iconfont icon-triangle-down'
                : 'iconfont icon-sj-small-up'
            "
          ></i>
        </div>
        <div class="tabs-item" @click="showMask = !showMask">
          <i class="iconfont icon--filter"></i>
          <span>筛选</span>
        </div>
      </div>
      <div :class="this.$store.state.toggleStyle ? 'list-wrap' : 'list-wrap2'">
        <ul ref="listwrap">
          <li
            v-for="(categoryListData, index) in categoryListDatas"
            :key="index"
          >
            <router-link :to="'/detail/' + categoryListData.goods_id">
              <img :src="categoryListData.goods_thumb" alt="" />
              <div class="list-text">
                <h4>
                  {{ categoryListData.goods_name }}
                </h4>
                <h5><span>￥</span>{{ categoryListData.shop_price }}</h5>
                <div class="info">
                  <span class="shop">进店</span>
                  <span class="buy"
                    >{{ categoryListData.sales_volume }}人已购买</span
                  >
                  <i class="iconfont icon-gouwuche"></i>
                </div>
              </div>
            </router-link>
          </li>
        </ul>
        <div v-if="nomore" class="nodata">没有更多了</div>
      </div>
    </div>
    <transition name="hg">
      <div class="mask" v-if="showMask">
        <div class="mask-title">
          <h2>自营产品</h2>
        </div>
        <div class="attr">
          <div>仅看有货</div>
          <div>促销</div>
        </div>
        <div class="price-wrap">
          <h2>价格区间</h2>
          <div>
            <input type="text" v-model="min" placeholder="最低价" />
            —
            <input type="text" v-model="max" placeholder="最高价" />
          </div>
        </div>
        <div class="mask-footer">
          <div class="close" @click="showMask = !showMask">关闭</div>
          <div class="ok" @click="okFn">确定</div>
        </div>
      </div>
    </transition>
    <Loding v-if="showLoading" />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import CategoryHeader from "./CategoryHeader";
import Loding from "@/components/Loding";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    CategoryHeader,
    Loding,
  },
  data() {
    //这里存放数据
    return {
      showhide: true,
      cid: 1131,
      size: 10,
      page: 1,
      sort: "goods_id",
      order: "desc",
      min: "",
      max: "",
      activeTab0: false,
      activeTab1: true,
      activeTab2: true,
      activeTab3: true,
      activeTab00: false,
      activeTab11: true,
      showMask: false,
      oH: 0,
      arr: 0,
    };
  },

  //监控data中的数据变化
  watch: {
    cid: function () {
      this.$store.state.categoryListDatas = [];
      this.$store.state.showLoading = true;
      // console.log("cid");
      this.$store.state.nomore = false;
    },
  },
  //方法集合
  methods: {
    cids() {
      this.$store.state.categoryListDatas = [];
      this.$store.state.showLoading = true;
      // console.log("cids");
      this.$store.state.nomore = false;
    },
    sortZonghe() {
      this.activeTab0 = false;
      this.activeTab1 = true;
      this.activeTab2 = true;
      this.activeTab3 = true;
      this.activeTab00 = !this.activeTab00;
      this.sort = "goods_id";
      if (this.activeTab00) {
        this.page = 1;
        this.cids();
        this.order = "asc";
        this.reqDatas();
      } else {
        this.page = 1;
        this.cids();
        this.order = "desc";
        this.reqDatas();
      }
    },
    sortNew() {
      this.activeTab0 = true;
      this.activeTab1 = false;
      this.activeTab2 = true;
      this.activeTab3 = true;
      this.activeTab00 = false;
      this.page = 1;
      this.cids();
      this.sort = "last_update";
      this.reqDatas();
    },
    sortSale() {
      this.activeTab0 = true;
      this.activeTab1 = true;
      this.activeTab2 = false;
      this.activeTab3 = true;
      this.page = 1;
      this.cids();
      this.sort = "sales_volume";
      this.reqDatas();
    },
    sortPrice() {
      this.activeTab0 = true;
      this.activeTab1 = true;
      this.activeTab2 = true;
      this.activeTab3 = false;
      this.activeTab11 = !this.activeTab11;
      this.sort = "shop_price";
      if (this.activeTab11) {
        this.page = 1;
        this.cids();
        this.order = "desc";
        this.reqDatas();
      } else {
        this.page = 1;
        this.cids();
        this.order = "asc";
        this.reqDatas();
      }
    },
    okFn() {
      this.page = 1;
      this.cids();
      this.reqDatas();
      this.min = "";
      this.max = "";
      this.showMask = false;
    },

    loadMore() {
      this.arr++;
      if (this.arr >= 2) {
        this.page++;
        this.reqDatas();
      }
    },

    reqDatas() {
      let params = {
        url: "/catalog/goodslist",
        params: {
          cat_id: this.cid,
          size: this.size,
          page: this.page,
          sort: this.sort,
          order: this.order,
          min: this.min,
          max: this.max,
        },
        type: "post",
      };
      this.$store.dispatch("actChangeCategoryList", params);
    },
  },
  //监听属性 类似于data概念
  computed: {
    categoryListDatas() {
      return this.$store.state.categoryListDatas;
    },
    nomore() {
      return this.$store.state.nomore;
    },
    showLoading() {
      return this.$store.state.showLoading;
    },
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    let cid = this.$route.params.cid;
    this.cid = cid;
    this.reqDatas();
  },
  updated() {
    // console.log(this.$refs.listwrap.offsetHeight);
    this.oH = this.$refs.listwrap.offsetHeight + "px";
  },
};
</script>
<style lang="less">
.category-list {
  width: 100%;
  .hg-enter-active,
  .hg-leave-active {
    transition: all 0.5s linear;
  }
  .hg-enter,
  .hg-leave-to {
    transform: translateX(100%);
  }
  .nodata {
    height: 4.4rem;
    text-align: center;
    line-height: 4.4rem;
  }
  .category-list {
    background: #efefef;
    height: 100%;
  }
  .mask {
    position: fixed;
    z-index: 9999;
    background: #efefef;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    .mask-title {
      height: 4.4rem;
      background: #fff;
      line-height: 4.4rem;

      h2 {
        font-weight: normal;
        text-indent: 1rem;
      }
    }
    .attr {
      display: flex;
      div {
        width: 10rem;
        height: 3rem;
        line-height: 3rem;
        text-align: center;
        border: 1px solid #ccc;
        background: #fff;
        margin: 1rem;
      }
    }
    .price-wrap {
      h2 {
        height: 4.4rem;
        background: #fff;
        line-height: 4.4rem;
        font-weight: normal;
        text-indent: 1rem;
      }
      input {
        width: 15rem;
        height: 3rem;
        line-height: 3rem;
        text-align: center;
        border: 1px solid #ccc;
        background: #fff;
        margin: 1rem;
      }
    }
    .mask-footer {
      height: 5rem;
      background: #fff;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      display: flex;
      div {
        flex: 1;
        text-align: center;
        line-height: 5rem;
        font-size: 1.4rem;
      }
      .ok {
        background: #e93b3d;
        color: #fff;
      }
    }
  }
  .tabs-wrap {
    margin-top: 5rem;
    height: 4.4rem;
    display: flex;
    background: #fff;
    .tabs-item {
      flex: 1;
      text-align: center;
      line-height: 4.4rem;
      font-size: 1.4rem;
    }
    .active {
      color: red;
    }
  }

  .list-wrap {
    width: 100%;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 50%;
        background-color: #ffffff;
        text-align: center;
        img {
          width: 17.8rem;
          height: 17.8rem;
        }
        .list-text {
          padding: 0.8rem;
          h4 {
            font-size: 1.4rem;
            height: 3.8rem;
            overflow: hidden;
            font-weight: normal;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            text-align: left;
            color: #333;
          }
          h5 {
            font-size: 1.4rem;
            color: red;
            padding: 0.6rem 0;
            text-align: left;
            span {
              font-size: 1.2rem;
            }
          }
          .info {
            position: relative;
            height: 2rem;
            text-align: left;
            .shop {
              padding: 0.1rem 0.5rem;
              color: #f92028;
              background-color: #fef0f0;
              font-size: 1.3rem;
            }
            .buy {
              margin-left: 0.6rem;
              color: #999;
              font-size: 1.2rem;
            }
            i {
              position: absolute;
              right: 0;
              color: #f92028;
            }
          }
        }
      }
    }
  }
  .list-wrap2 {
    padding: 0 0.7rem;
    ul {
      li {
        display: flex;
        width: calc(100% - 1.6rem);
        padding: 0.8rem;
        margin-top: 0.5rem;
        background-color: #ffffff;
        img {
          width: 9rem;
          height: 9rem;
        }
        .list-text {
          width: 67%;
          margin-left: 5%;
          h4 {
            height: 3.8rem;
            line-height: 1.9rem;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-size: 1.4rem;
            font-weight: normal;
            color: #333;
            text-align: left;
          }
          h5 {
            font-size: 1.6rem;
            color: #f00;
            padding-top: 0.6rem;
            padding-bottom: 0.8rem;
            span {
              font-size: 1.2rem;
            }
          }
          .info {
            position: relative;
            height: 2rem;
            line-height: 2rem;
            .shop {
              padding: 0.1rem 0.5rem;
              color: #f92028;
              background-color: #fef0f0;
              font-size: 1.3rem;
            }
            .buy {
              margin-left: 0.6rem;
              color: #999;
              font-size: 1.2rem;
            }
            i {
              position: absolute;
              right: 0;
              color: red;
            }
          }
        }
      }
    }
  }
  .nodata {
    margin-top: 1rem;
    color: #999;
    font-size: 1.6rem;
    height: 4.8rem;
    text-align: center;
    line-height: 4.8rem;
  }
}
</style>