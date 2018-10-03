<template>
  <div class="m-article">
    <ArticleCard class="articlecard" v-for="item in articleList" :key="item.id" v-bind="item"></ArticleCard>
    <Pager class="pager" @pagechange="loadPage" :long="10"></Pager>
  </div>
</template>

<script>
import Pager from './pager';
import ArticleCard from './article_intro';
export default {
  components: { Pager, ArticleCard },
  methods:{
    loadPage(){
      this.current+=1;
      this.articleList.forEach(item=>{
       item.title += this.current;
        console.log(item);
      });
      console.log(this.current);
    }
  },
  data: () => {
    return {
      current: 1,
      pageSize: 10,
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
        },
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
