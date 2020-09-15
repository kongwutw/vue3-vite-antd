<template>
  <div class="ch-ctn">
    <div class="nav-wrap">
      <img @click="goHome" src="https://static.huiman.top/logo/gdr.png" alt="">
      <div @click="goHome" :class="curNav === 1 ? 'active-wrap' : ''">首页</div>
    </div>
    <div @click="goLogin" class="info-wrap">登录</div>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from 'vue-router';

export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const userInfo = computed(() => store.state.userInfo);
    const curNav = computed(() => store.state.curNav);

    const goHome = () => {
      router.push({ name: 'home'});
      store.dispatch("setCurNav", 1);
    };


    const goLogin = () => {
      router.replace({ name: 'login'});
    };

    const logout = () => {
      store.dispatch("setSignOut");
      router.push({ name: 'login'});
    };

    return {
      userInfo,
      curNav,
      goHome,
      logout,
      goLogin
    };
  },
};
</script>

<style lang="scss">
.ch-ctn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  background: #67CCFF;
  color: white;
  z-index: 100;

  .nav-wrap  {
    display: flex;
    justify-content: center;
    margin: 0 15px;

    img  {
      width: 30px;
      height: 30px;
      border-radius: 6px;
    }
    div  {
      margin-left: 10px;
      height: 30px;
      line-height: 30px;
    }
    .active-wrap  {
      background: #fff;
      color: #3397e4;
      border-radius: 6px;
      padding: 0px 5px;
    }
  }
}
.info-wrap {
  display: flex;
  align-items: center;
  margin-right: 25px;

  img {
    width: 36px;
    height: 36px;
    border-radius: 36px;
    margin-right: 15px;
  }
}
</style>