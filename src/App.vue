<template>
  <div id="app">
    <ComHeader />
    <router-view class="route-ctn" />
    <ComFooter />
  </div>
</template>

<script>
import ComHeader from '/@/components/ComHeader.vue';
import ComFooter from '/@/components/ComFooter.vue';

export default {
  name: 'App',
  components: {
    ComHeader,
    ComFooter,
  },
}
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

input:-webkit-autofill {
  -webkit-box-shadow: 0 0 0px 1000px #ffffff inset !important;
}

#app {
  width: 100%;
  height: 100%;

  .route-ctn {
    display: flex;
  }
}
</style>
