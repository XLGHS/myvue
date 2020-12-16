<!-- 秒杀 -->
<template>
  <div class="seckill-header">
    <div class="seckill">
      <div class="seckill-img">
        <img
          src="https://x.dscmall.cn/storage/data/gallery_album/177/original_img/177_P_1597978468241.png"
          alt=""
        />
      </div>
      <div class="seckill-time">
        <div class="sedkill-texts">距结束还剩:</div>
        <div class="HMS">
          <span>{{ hours }}</span>
          <i>:</i>
          <span>{{ mins }}</span>
          <i>:</i>
          <span>{{ sec }}</span>
        </div>
      </div>
    </div>
    <div class="seckill-tab">
      <ul>
        <li
          v-for="(stab, index) in stabDatas"
          :key="index"
          @click="seckillTab(index)"
        >
          <div :class="{ active: stabindex == index }">
            <strong>{{ stab.title }}</strong>
            <span v-if="stab.status">抢购中</span>
            <span v-if="stab.soon">即将开始</span>
            <span v-if="stab.isEnd">已结束</span>
          </div>
          <div class="bot" :class="{ botactive: stabindex == index }"></div>
        </li>
      </ul>
    </div>
    <div style="height: 2rem">
      <!-- <SeckillGoods /> -->
    </div>
    <div class="seckill-more">
      <strong>查看更多秒杀商品</strong>
      <i class="iconfont icon-xiangyouanniu"></i>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// import SeckillGoods from "./SeckillGoods.vue";
import ajax from "@/api/ajax";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    // SeckillGoods,
  },
  data() {
    //这里存放数据
    return {
      hours: 0,
      mins: 0,
      sec: 0,
      timer: null,
      stabindex: 0,
      stabDatas: [
        {
          id: 1,
          time: "24:00",
          title: "抢购中",
          //抢购中
          status: false,
          //已结束
          isEnd: false,
          //即将开始
          soon: false,
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
    miaoshaFn() {
      let nowTime = new Date();
      //   Mon Nov 16 2020 21:06:45 GMT+0800 (中国标准时间)
      let targetTime = new Date("Mon Nov 30 2020 12:00:00 GMT+0800");
      let oTime = (targetTime - nowTime) / 1000;

      //小时
      this.hours = parseInt((oTime % (60 * 60 * 24)) / 3600);
      this.hours = this.hours < 10 ? "0" + this.hours : String(this.hours);

      //分钟
      this.mins = parseInt(((oTime % (60 * 60 * 24)) % 3600) / 60);
      this.mins = this.mins < 10 ? "0" + this.mins : String(this.mins);

      //秒
      this.sec = parseInt(((oTime % (60 * 60 * 24)) % 3600) % 60);
      this.sec = this.sec < 10 ? "0" + this.sec : String(this.sec);
    },

    //数据
    getBestDatas() {
      ajax("/api/visual/visual_seckill", {
        page: 1,
        size: 5,
        type: "is_best",
      }).then((res) => {
        // console.log(res);
        // console.log(res.data.time_list[0].title);
        this.stabDatas = res.data.time_list;
        // console.log(this.stabDatas);
      });
    },

    seckillTab(index) {
      this.stabindex = index;
    },
  },

  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.timer = setInterval(this.miaoshaFn, 1000);
    this.getBestDatas();
    // this.soon = this.stabDatas[id].soon;
  },

  destroyed() {
    clearInterval(this.timer);
  }, //生命周期 - 销毁完成
};
</script>
<style lang="less">
.seckill-header {
  width: calc(100% - 6%);
  // height: 36rem;
  background: #ffffff;
  margin: 3%;
  border-radius: 1.5rem;

  .seckill {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2.2rem 1rem 1.2rem 1.5rem;
    img {
      display: flex;
      width: 10rem;
    }
    .seckill-time {
      display: flex;
      align-items: center;
      .sedkill-texts {
        margin-right: 0.8rem;
      }
      .HMS {
        display: flex;
        span {
          padding: 0.3rem 0.5rem;
          font-size: 1.2rem;
          border-radius: 0.5rem;
          background: linear-gradient(-88deg, #ff4f2e, #f91f28);
          color: #ffffff;
        }
        i {
          color: #f20d23;
          font-size: 1.6rem;
          font-weight: 700;
          margin: 0 0.4rem;
          font-style: normal;
        }
      }
    }
  }
  .seckill-tab {
    width: 100%;
    height: 4.8rem;
    ul {
      padding: 0.5rem 0;
      display: flex;
      li {
        width: 25%;
        height: 4rem;
        text-align: center;
        color: #999;
        font-size: 1.4rem;
        padding-bottom: 0.8rem;
        position: relative;
        span {
          display: block;
          font-size: 1.4rem;
        }
        .bot {
          width: 100%;
          height: 1px;
          background-color: rgb(214, 214, 214);
          position: absolute;
          left: 0;
          bottom: 0;
        }
        .active {
          color: #f20d28;
          font-size: 1.6rem;
        }
        .botactive {
          background-color: #f20d28;
          width: calc(100% - 2rem);
          height: 1.5px;
          left: 1rem;
        }
      }
    }
  }
  .seckill-more {
    height: 2rem;
    padding-bottom: 2rem;
    text-align: center;
    strong {
      font-size: 1.6rem;
      margin-right: 0.5rem;
    }
  }
}
</style>