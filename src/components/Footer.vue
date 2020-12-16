<!-- 公共底部 -->
<template>
  <div class="footer-wrap">
    <ul>
      <router-link to="/home" tag="li">
        <div class="nav-img">
          <i class="iconfont icon-shouye" v-if="active.includes('/home')"></i>
          <i class="iconfont icon-shouye1" v-else></i>
        </div>
        <span>首页</span>
      </router-link>

      <router-link to="/category" tag="li">
        <div class="nav-img">
          <i
            class="iconfont icon-leimupinleifenleileibie2"
            v-if="active == '/category'"
          ></i>
          <i class="iconfont icon-leimupinleifenleileibie" v-else></i>
        </div>
        <span>分类</span>
      </router-link>

      <router-link to="/find" tag="li">
        <div class="nav-img">
          <i class="iconfont icon-faxian1" v-if="active == '/find'"></i>
          <i class="iconfont icon-faxian" v-else></i>
        </div>
        <span>发现</span>
      </router-link>

      <router-link to="/cart" tag="li">
        <div class="nav-img">
          <i class="iconfont icon-gouwuche1" v-if="active == '/cart'"></i>
          <i class="iconfont icon-gouwuche" v-else></i>
        </div>
        <span>购物车</span>
      </router-link>

      <router-link to="/mind" tag="li">
        <div class="nav-img">
          <i class="iconfont icon-wode" v-if="active == '/mind'"></i>
          <i class="iconfont icon-biaoqiankuozhan_wode-400" v-else></i>
        </div>
        <span>我的</span>
      </router-link>
    </ul>
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
      active: "/home",
    };
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.active = this.$route.path;
  },
};
</script>
<style lang="less">
.footer-wrap {
  height: 4.9rem;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #ffff;
  border-top: 1px solid #efefef;
  ul {
    display: flex;
    height: 4.9rem;
    justify-content: center;
    align-items: center;
    li {
      width: 20%;
      text-align: center;
      i {
        font-size: 2.2rem;
      }
    }
  }
}
.router-link-active {
  color: red;
}
</style>