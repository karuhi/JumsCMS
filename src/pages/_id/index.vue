<template>
  <section class="pages">
    <Header></Header>
    <div class="page_header">
      <div class="category_l color_black background_white" v-show="jsonData.featured">
        特集記事
      </div>
      <div class="category_l color_white background_skyblue" v-show="jsonData.published">
        {{jsonData.published}}
      </div>
      <div class="category_l color_white background_blue" v-show="jsonData.tag">
        {{jsonData.tag}}
      </div>
      <div class="title color_white"><div>{{jsonData.title}}</div>{{jsonData.author}}</div>
      <img :src="jsonData.image">
    </div>
    <summary v-html="jsonData.summary"></summary>
    <div class="content" v-html="jsonData.content"></div>
  </section>
</template>
<script>
import Meta from '~/assets/mixins/meta'
import Header from '~/components/header.vue'

export default {
  mixins: [Meta],
  components: {
    Header
  },
  asyncData() {
    return { json: process.env.jsonData }
  },
  data() {
    return {
      meta: {
        title: '新しいCMS作ってみた', // ←これだけでもなんとかなる。

      },
      jsonData: [],
    }
  },
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  mounted() {
    this.sortJSON();
  },
  methods: {
    sortJSON() {
      var json = this.json;
      json.sort(function(a, b) {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
      });
      var path = location.pathname;
      path = path.substr(1);
      this.jsonData = json[path];
    }
  }
}

</script>
<style scoped>
.page_header {
  margin: 0 auto;
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 480px;
}

.page_header img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-height: 480px;
}

.page_header>.title {
  background-color: rgba(30, 27, 24, 0.7);
  position: absolute;
  height: 60px;
  padding-top: 10px;
  bottom: 4px;
  left: 0px;
  right: 0px;
}
.page_header > .category_l:nth-child(1) {
  position: absolute;
  top: 10px;
  left: 10px;
}
.page_header > .category_l:nth-child(2) {
  position: absolute;
  bottom: 70px;
  left: 10px;
}
.page_header > .category_l:nth-child(3) {
  position: absolute;
  bottom: 70px;
  right: 10px;
}
</style>
