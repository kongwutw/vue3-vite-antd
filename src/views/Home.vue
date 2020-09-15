<template>
  <div class="home-ctn">
    <div class="carousel-wrap">
      <Carousel
        autoplay
        dotPosition="bottom"
      >
        <div v-for="(item, index) in swiperArr" :key="index" class="item-wrap">
          <img  class="img-wrap" :src="item.coverImg">
        </div>
      </Carousel>
    </div>
    <div class="article-wrap">
      <ArticleItem v-for="(item, index) in articleArr" :key="index" :item="item" />
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

import { Carousel } from 'ant-design-vue';

import ArticleItem from "/@/components/ArticleItem.vue";
import api from "/@/api";

export default {
  components: {
    ArticleItem,
    Carousel,
  },
  setup() {
    const swiperArr = ref([]);
    const articleArr = ref([]);
    let articleCount = 0;

    const getHomeData = () => {
      api.getHomeData({ offset: 0, limit: 6 }).then((res) => {
        if (res.data.code === 200) {
          const { articles, banners } = res.data.data;
          swiperArr.value = banners;
          const { count, rows } = articles;
          articleArr.value = rows;
          articleCount = count;
        }
      });
    };

    onMounted(() => getHomeData());

    return {
      swiperArr,
      articleArr,
    };
  },
};
</script>

<style lang="scss">
.home-ctn {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .carousel-wrap {
    width: 45%;
    margin: 30px 0;
  }

  .item-wrap {
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;

    .img-wrap {
      height: 300px;
      width: 100%;
    }
  }

  .article-wrap {
    width: 45%;
    margin-bottom: 60px;
  }
}
</style>
