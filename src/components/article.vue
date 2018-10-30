<template>
  <div class="m-article">
    <ArticleCard class="articlecard" v-for="item in articleTopList" :key="item.id" v-bind="item"></ArticleCard>
    <ArticleCard class="articlecard" v-for="item in articleList" :key="item.id" v-bind="item"></ArticleCard>
    <Pager class="pager" @pagechange="loadPage($event)"></Pager>
  </div>
</template>

<script>
import Pager from './pager';
import ArticleCard from './article_intro';
export default {
  components: { Pager, ArticleCard },
  methods: {
    loadPage(e) {
      this.current = e.to;
    }
  },
  data: () => {
    return {
      current: 1,
      pageSize: 10,
      articleTopList: [],
      articleList: [
        {
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
          auther: 'cw',
          intro:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi suscipit accusantium veritatis voluptas nihil dolor, vitae ratione quas nisi quis minus nostrum sequi praesentium vel magnam id earum dolorum? Distinctio.',
          pubTime: new Date().getTime(),
          readers: 100,
          id: '123',
          url: '/asdasg',
          top: !0
        },
        {
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
          auther: 'cw',
          intro:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi suscipit accusantium veritatis voluptas nihil dolor, vitae ratione quas nisi quis minus nostrum sequi praesentium vel magnam id earum dolorum? Distinctio.',
          pubTime: new Date().getTime(),
          readers: 100,
          id: '1234',
          url: '/asdasg',
          top: !0
        },
        {
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
          auther: 'cw',
          intro:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi suscipit accusantium veritatis voluptas nihil dolor, vitae ratione quas nisi quis minus nostrum sequi praesentium vel magnam id earum dolorum? Distinctio.',
          pubTime: new Date().getTime(),
          readers: 100,
          id: '1235',
          url: '/asdasg',
          top: !0
        },
        {
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
          auther: 'cw',
          intro:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi suscipit accusantium veritatis voluptas nihil dolor, vitae ratione quas nisi quis minus nostrum sequi praesentium vel magnam id earum dolorum? Distinctio.',
          pubTime: new Date().getTime(),
          readers: 100,
          id: '1236',
          url: '/asdasg',
          top: !0
        },
        {
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
          auther: 'cw',
          intro:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi suscipit accusantium veritatis voluptas nihil dolor, vitae ratione quas nisi quis minus nostrum sequi praesentium vel magnam id earum dolorum? Distinctio.',
          pubTime: new Date().getTime(),
          readers: 100,
          id: '1237',
          url: '/asdasg',
          top: !0
        },
        {
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
          auther: 'cw',
          intro:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi suscipit accusantium veritatis voluptas nihil dolor, vitae ratione quas nisi quis minus nostrum sequi praesentium vel magnam id earum dolorum? Distinctio.',
          pubTime: new Date().getTime(),
          readers: 100,
          id: '1238',
          url: '/asdasg',
          top: !0
        },
        {
          title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
          auther: 'cw',
          intro:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi suscipit accusantium veritatis voluptas nihil dolor, vitae ratione quas nisi quis minus nostrum sequi praesentium vel magnam id earum dolorum? Distinctio.',
          pubTime: new Date().getTime(),
          readers: 100,
          id: '1239',
          url: '/asdasg',
          top: !0
        }
      ]
    };
  }
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
