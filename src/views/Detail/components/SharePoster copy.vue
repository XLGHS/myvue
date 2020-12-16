<!--  -->
<template>
  <div class="share-poster" v-if="showshareposter" @click="closeSharePoster">
    <div class="poster-content">
      <div class="close-poster" @click="closeSharePoster">
        <img src="@/assets/images/poster-close.png" alt />
      </div>
      <div class="poster-img">
        <img :src="posterImage" alt />
      </div>
      <div class="poster-text">长按保存至相册</div>
      <div class="carate-poster">
        <!-- 合并海报 -->
        <div class="hideCanvas">
          <canvas ref="mycanvas"></canvas>
        </div>
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
    showshareposter: Boolean,
  },
  data() {
    //这里存放数据
    return {
      posterImage: "",
    };
  },
  //监听属性 类似于data概念
  computed: {
    posterDatas() {
      return this.$store.state.posterDatas;
    },
  },
  //监控data中的数据变化
  watch: {
    showshareposter() {
      if (this.showshareposter == true) {
        this.$nextTick(() => {
          this.savePoster();
        });
      }
    },
  },
  //方法集合
  methods: {
    closeSharePoster() {
      this.$emit("closeSharePoster");
    },
    savePoster() {
      console.log("在这里执行生成海报的函数");
      var canvas = this.$refs.mycanvas;
      var ctx = canvas.getContext("2d");

      let W = window.screen.availWidth;
      let H = window.screen.availHeight;

      let devicePixelRatio = window.devicePixelRatio || 1;

      let backingPixelRatio = ctx.webkitBackingStorePixelRatio || 1;
      let ratio = devicePixelRatio / backingPixelRatio;

      console.log(W);
      console.log(H);
      console.log(devicePixelRatio);
      console.log(backingPixelRatio);
      console.log(ratio);

      canvas.width = W * ratio;
      canvas.height = H * ratio;
      canvas.style.width = W * ratio + "px"; //设置canvas容器的宽度
      canvas.style.height = H * ratio + "px"; //设置canvas容器的高度
      ctx.scale(ratio, ratio); //将对象内容缩放

      var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      // console.log(imgData.data);
      for (var i = 0; i < imgData.data.length; i += 4) {
        imgData.data[i] = 255;
        imgData.data[i + 1] = 255;
        imgData.data[i + 2] = 255;
        imgData.data[i + 3] = 255;
      }
      ctx.putImageData(imgData, 0, 0);

      //生成图像
      var img = new Image(); //定义一个图片对象
      img.src = this.posterDatas.image;
      // console.log(img);
      img.onload = function () {
        ctx.drawImage(img, 0, 0, W, W);
      };

      // 生成标题
      // 生成价格
      ctx.font = "20px Arial"; //设置字体大小
      ctx.fillStyle = "#333333"; //设置字体的颜色
      ctx.textAlign = "center"; //设置文本的对齐方式
      ctx.fillText("￥" + this.posterDatas.title, W / 2, W + 30);

      // 生成价格
      ctx.font = "30px Arial"; //设置字体大小
      ctx.fillStyle = "#FF4444"; //设置字体的颜色
      ctx.textAlign = "center"; //设置文本的对齐方式
      ctx.fillText("￥" + this.posterDatas.price, W / 2, W + 100);

      //生成二维码图像图像
      var img2 = new Image(); //定义一个图片对象
      img2.src = this.posterDatas.code;
      // console.log(img);
      img2.onload = function () {
        ctx.drawImage(img2, 100, W + 160, W / 3, W / 3);
      };

      //生成logo图像
      var logo = new Image(); //定义一个图片对象
      logo.src = this.posterDatas.logo;
      // console.log(img);
      logo.onload = function () {
        ctx.drawImage(logo, 0, 0, 100, 50);
      };
      // 用定时器模拟异步
      setTimeout(() => {
        console.log(canvas.toDataURL());
        this.posterImage = canvas.toDataURL();
      }, 500);
    },

    //处理标题
    titleAutoLine(title, canvas, x, y, lineHeight, canvasWidth, lines) {
      //需要标题文字   title
      //画布   canvas
      //x  绘制标题的水平方向起始位置
      //y  绘制标题的垂直方向起始位置
      //lineHeight 绘制标题的行高，自己定义一个任意值即可
      //canvasWidth  绘制标题的宽度
      //lines   绘制的行数
      //this.titleAutoLine(title, canvas, 20, W + 30, 30,200, 2);
      console.log(title);
      console.log(canvas);
      var ctx = canvas.getContext("2d"); //创建一个2d画布
      var lineWidth = 0; //绘制标题文本的宽度
      var lastSubStringIndex = 0; //绘制标题文本字符串的索引
      var beginY = y; //绘制标题文本的起始y左边

      for (let i = 0; i < title.length; i++) {
        lineWidth += ctx.measureText(title[i]).width;
        console.log(lineWidth);
        if (lineWidth > canvasWidth) {
          if (y >= beginY + lineHeight * (lines - 1)) {
            ctx.fillText(
              title.substring(lastSubStringIndex, i - 5) + "...",
              x,
              y
            );
            return;
          } else {
            ctx.fillText(title.substring(lastSubStringIndex, i), x, y);
            y += lineHeight;
            lineWidth = 0;
            lastSubStringIndex = i;
          }
        }
      }

      // console.log(ctx.measureText(title).width);

      //ctx.fillText(title.substring(0, 23), x, y);
      //ctx.fillText(title.substring(23, 40) + "...", x, y + 30);
    },
  },
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
.share-poster {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  .carate-poster {
    position: fixed;
    top: 0;
    left: 0;
    .hideCanvas {
      display: block;
    }
  }
  .poster-content {
    width: 70%;
    height: 70%;
    margin-left: 15%;
    margin-top: 15%;
    background-color: #ffff;
    position: relative;
    .poster-text {
      width: 100%;
      height: 4.4rem;
      line-height: 4.4rem;
      text-align: center;
      color: #ffff;
      position: absolute;
      bottom: -4rem;
    }
    .close-poster {
      position: absolute;
      right: 2rem;
      top: -3rem;
      img {
        height: 3rem;
      }
    }
    .poster-img {
      width: 100%;
      img {
        width: 100%;
      }
    }
  }
}
</style>