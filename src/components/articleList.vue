<template>
  <div class="m-article">
    <ArticleCard class="articlecard" v-for="item in articleAdList" :key="item.id" v-bind="item"></ArticleCard>
    <ArticleCard class="articlecard" v-for="item in articleTopList" :key="item.id" v-bind="item"></ArticleCard>
    <ArticleCard class="articlecard" v-for="item in articleList" :key="item.id" v-bind="item"></ArticleCard>
    <Pager class="pager" @pagechange="loadPage($event)" :current="current" :total="totalPages"></Pager>
  </div>
</template>

<script>
import Pager from "./pager";
import ArticleCard from "./article_intro";

export default {
  components: { Pager, ArticleCard },
  methods: {
    loadPage(e = {}) {
      this.current = e.to || this.current;

      this.$cache
        .get("/api/article/getList", {
          params: {
            page: this.current,
            pageSize: this.pageSize
          }
        })
        .then(res => {
          this.articleList = res.list;
          this.totalPages = Math.ceil(res.total / this.pageSize);

        });
    }
  },
  mounted() {
    this.$cache.get("/api/article/getAdList").then(res => {
      this.articleAdList = res;
    });
    this.$cache.get("/api/article/getTopList").then(res => {
      this.articleTopList = res;
    });
    this.loadPage();
  },
  data: () => ({
      current: 1,
      pageSize: 10,
      totalPages: 1,
      articleAdList: [],
      articleTopList: [],
      articleList: []
  })
};
</script>

<style scoped>
.m-article .articlecard + .articlecard {
  margin-top: 20px;
}
.m-article {
  text-align: center;
}
.m-article .pager {
  display: inline-block;
}
</style>
