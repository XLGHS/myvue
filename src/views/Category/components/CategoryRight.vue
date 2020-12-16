<!--  -->
<template>
  <div class="category-right">
    <div v-if="showText" style="text-align: center; line-height: 3rem">
      下拉刷新
    </div>
    <div class="category-right" id="wrapper">
      <div class="category-right-content">
        <div class="right-img">
          <img :src="this.$store.state.categoryRightImg" alt="" />
        </div>
        <ul class="right-tist">
          <li v-for="rights in categoryRightDatas" :key="rights.cat_id">
            <h3>
              <span>-</span>
              {{ rights.cat_name }}
              <span>-</span>
            </h3>
            <ul class="right-child">
              <li v-for="childs in rights.child" :key="childs.cat_id">
                <router-link :to="'/categorylist/' + childs.cat_id">
                  <img :src="childs.touch_icon" alt />
                  <h4>{{ childs.cat_name }}</h4>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import BScroll from "better-scroll";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  props: {
    categoryRightDatas: Array,
  },
  data() {
    //这里存放数据
    return {
      rightScroll: null,
      scrollTop: 0,
      oHeight: 0,
      arr: ["858", "6", "8", "3", "4", "5", "860"],
      index: 0,
      showText: false,
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {
    // categoryRightDatas(value) {
    // console.log(value);
    // },
  },
  //方法集合
  methods: {
    scrollPage() {
      this.rightScroll = new BScroll("#wrapper", {
        // pullUpLoad: true,
        scrollbar: false,
        // pullDownRefresh: true,
        click: true,
      });
      this.rightScroll.on(
        "scroll",
        (obj) => {
          if (obj.y > 30 && obj.y < 100) {
            console.log(123);
            this.showText = true;
          } else {
            this.showText = false;
          }
          if (obj.y > 100) {
            let index = this.arr.findIndex((val) => {
              return val == this.$store.state.cat_id;
            });

            if (index) {
              console.log(this.index);
              this.$store.dispatch(
                "actChangeCategoryRight",
                this.arr[index - 1]
              );
              this.rightScroll.refresh();
            } else {
              this.$store.dispatch("actChangeCategoryRight", this.arr[index]);
            }
          }

          this.scrollTop = Math.abs(obj.y); //Math.abs() 绝对值
          //
          // console.log(this.scrollTop);
          if (document.querySelector("#content")) {
            this.oHeight =
              document.querySelector("#content").scrollHeight -
              document.querySelector("#wrapper").offsetHeight;
          }

          // console.log(this.oHeight);
          // console.log(this.scrollTop);
          if (this.scrollTop > this.oHeight + 100) {
            // console.log(this.$store.state.cat_id);

            let index = this.arr.findIndex((val) => {
              return val == this.$store.state.cat_id;
            });

            // console.log(this.index);
            this.$store.dispatch("actChangeCategoryRight", this.arr[index + 1]);
            console.log(111);
            this.rightScroll.refresh();
          }
        },
        false
      );
    },
    toList() {
      console.log(123);
    },
  },
  beforeCreate() {}, //生命周期 - 创建之前
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  beforeMount() {}, //生命周期 - 挂载之前
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.scrollPage();
    // console.log(this.categoryRightDatas);
  },
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style lang="less">
.category-right {
  width: 75%;
  height: calc(100% - 10rem);
  position: fixed;
  right: 0;
  top: 5rem;
  overflow-y: scroll;
  background-color: #ffffff;
  .category-right-content {
    .right-img {
      width: calc(100% - 2.2rem);
      height: 9.6rem;
      padding: 0 1.1rem;
      margin-top: 1.1rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .right-tist {
      li {
        h3 {
          font-size: 1.4rem;
          height: 2.5rem;
          line-height: 2.5rem;
          color: #666;
          text-align: center;
          margin: 1.1rem 0;
          font-weight: normal;
          span {
            color: #ccc;
          }
        }
        .right-child {
          display: flex;
          flex-wrap: wrap;
          text-align: center;
          li {
            width: 33%;
            height: 8.2rem;
            margin-bottom: 2rem;
            img {
              width: 5.2rem;
              height: 5.2rem;
            }
            h4 {
              font-size: 1.2rem;
              font-weight: normal;
              color: #777;
              margin-top: 1rem;
            }
          }
        }
      }
    }
  }
}
</style>