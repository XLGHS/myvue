<!--  -->
<template>
  <div class="product-new" v-infinite-scroll="loadMore">
    <div>
      <ul class="tabs">
        <li
          v-for="(tabsData, index) in tabsDatas"
          :key="index"
          @click="changeTab(index, tabsData.url, tabsData.type)"
        >
          <h3>{{ tabsData.title }}</h3>
          <h6 :class="{ active: activeIndex == index }">{{ tabsData.tips }}</h6>
        </li>
      </ul>
      <List :listdatas="listdatas" />
    </div>

    <div class="loading" v-if="isShowLoading">
      <mt-spinner type="triple-bounce" color="#6666"></mt-spinner>
    </div>
    <div class="no" v-if="isShowLoading == false">
      <p>没有更多了</p>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { getHomeList } from "@/api/api";
import List from "@/components/List.vue";
// import Loading from "@/components/Loading";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    List,
    // Loading,
  },
  data() {
    //这里存放数据
    return {
      listdatas: [],
      page: 1,
      size: 10,
      type: "is_best",
      url: "/goods/type_list",

      isShowLoading: true,
      activeIndex: 0,
      tabsDatas: [
        {
          id: 1,
          title: "精选",
          tips: "为你推荐",
          type: "is_best",
          url: "/goods/type_list",
        },
        {
          id: 2,
          title: "社区",
          tips: "新奇好物",
          type: "",
          url: "/discover/find_list",
        },
        {
          id: 3,
          title: "新品",
          tips: "潮流上新",
          type: "is_new",
          url: "/goods/type_list",
        },
        {
          id: 4,
          title: "热卖",
          tips: "火热爆款",
          type: "is_hot",
          url: "/goods/type_list",
        },
      ],
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    async getBestDatas(url, page, size, type) {
      let result = await getHomeList(url, {
        page: page,
        size: size,
        type: type,
      });
      // console.log(result.data);
      if (result.data) {
        let resultArr = result.data;
        this.listdatas = this.listdatas.concat(resultArr);
        if (resultArr == "") {
          this.isShowLoading = false;
        }
        // console.log(result.data);
      } else if (result.data == "undefined") {
        alert("网络出现故障");
      }
    },

    changeTab(index, url, type) {
      this.page = 1;
      this.listdatas = [];
      this.activeIndex = index;
      this.url = url;
      this.type = type;
      this.getBestDatas(url, this.page, this.size, type);
    },

    loadMore() {
      this.getBestDatas(this.url, this.page, this.size, this.type);
      this.page++;
    },
  },

  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.getBestDatas(this.url, this.page, this.size, this.type);
  },
};
</script>
<style lang="less">
.product-new {
  .tabs {
    width: calc(100% - 2rem);
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    li {
      flex: 1;
      text-align: center;
      position: relative;
      &::after {
        content: "";
        width: 1px;
        height: 80%;
        background: #cccccc;
        position: absolute;
        right: 0;
        top: 10%;
      }
      &:last-child {
        &::after {
          height: 0;
        }
      }
      h3 {
        font-size: 1.4rem;
        color: #666;
      }
      h6 {
        margin-top: 0.2rem;
        padding: 0.1rem 0.8rem;
        color: #999;
        font-weight: normal;
      }
      .active {
        border-radius: 1rem;
        background: red;
        color: #fff;
        width: 55%;
        margin-left: 15%;
      }
    }
  }
  .loading {
    span {
      .mint-spinner-triple-bounce {
        width: 10%;
        margin-left: 45%;
      }
    }
  }
  .no {
    p {
      width: 100%;
      height: 2.8rem;
      text-align: center;
      line-height: 2.8rem;
      font-size: 1.6rem;
      color: #888;
    }
  }
}
</style>