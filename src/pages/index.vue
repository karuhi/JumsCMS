<template>
  <section class="main">
    <header class="color_white background_black">
      <div class="global">
        <div class="menu">
          <div class="background_white"></div>
          <div class="background_white"></div>
          <div class="background_white"></div>
        </div>
        <div class="title">Title</div>
        <div class="search">検索</div>
      </div>
      <div class="category_list">
        <div class="category_m background_skyblue">
          ニュース
        </div>
        <div class="category_m background_skyblue">
          ガジェット
        </div>
        <div class="category_m background_skyblue">
          ゲーム
        </div>
        <div class="category_m background_skyblue">
          テクノロジ
        </div>
        <div class="category_m background_skyblue">
          レビュー
        </div>
        <div class="category_m background_skyblue">
          音楽
        </div>
      </div>
    </header>
    <main>
      <div class="futured_erea background_darkblue">
        <div class="slides" ref="slides" v-for="(element, index) in json" v-if="element.futured">
          <div class="thumbnail">
            <div class="navigation navigation_left color_white">
              < </div> <div class="title color_white">
                {{element.title}}
            </div>
            <div class="navigation navigation_right color_white">
              >
            </div>
            <img :src="element.image">
          </div>
          <div class="tags">
            <div class="category_l color_black background_white" v-show="element.futured">
              Futured
            </div>
            <div class="category_l color_white background_skyblue" v-show="element.published">
              {{element.published}}
            </div>
            <div class="category_l color_white background_blue" v-show="element.tag">
              {{element.tag}}
            </div>
            <div class="category_l_read color_white background_pink" v-show="element.tag">
              続きを読む
            </div>
          </div>
        </div>
      </div>
      <div class="posts_erea background_black">
        <div class="posts" v-for="(element, index) in json">
          <div class="thumbnail">
            <div class="category_m color_black background_white" v-show="element.futured">
              Futured
            </div>
            <div class="category_m color_white background_blue" v-show="element.tag">
              {{element.tag}}
            </div>
            <div class="category_m color_white background_skyblue" v-show="element.published">
              {{element.published}}
            </div>
            <img :src="element.image">
          </div>
          <div class="title color_white">
            {{element.title}}
          </div>
        </div>
      </div>
    </main>
  </section>
</template>
<script>
export default {
  asyncData() {
    return { json: process.env.jsonData }
  },
  mounted() {
    console.log(this.json);
    this.Slider();
  },
  methods: {
    Slider: function() {
      var SlideList = this.$refs.slides;
      SlideList[0].style.display = 'block';
    }
  }
}

</script>
<style>
.main {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  text-align: center;
}

header {
  z-index: 99999;
  min-width: 100%;
  height: 108px;
  position: sticky;
  top: 0;
}

header>.global {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 68px;
}

header>.global>.menu {
  margin-left: 20px;
  height: 30px;
  width: 30px;
  vertical-align: middle;
}

header>.global>.menu>div {
  width: 28px;
  height: 2px;
  margin-top: 8px;
  vertical-align: middle;
  border-radius: 2px;
}

header>.global>.title {
  font-size: 28px;
}

header>.global>.search {
  margin-right: 20px;
}

header>.category_list {
  height: 40px;
  overflow-x: auto;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}

header>.category_list>div:nth-child(1) {
  display: inline-block;
  margin: 10px;
  height: 20px;
  width: 80px;
}

header>.category_list>div {
  display: inline-block;
  margin: 10px 10px 10px 0px;
  height: 20px;
  width: 80px;
}

main>.futured_erea {
  padding-top: 20px;
  width: 100%;
  height: 320px;
}

main>.futured_erea>.slides {
  margin: 0 auto;
  display: none;
  width: 100%;
  max-width: 480px;
}

main>.futured_erea>.slides>.thumbnail {
  position: relative;
  width: calc(100% - 20px);
  height: 240px;
  margin-left: 10px;
}

main>.futured_erea>.slides>.thumbnail img {
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 10px;
}

main>.futured_erea>.slides>.thumbnail>.title {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  margin: auto;
}

main>.futured_erea>.slides>.thumbnail>.navigation {
  width: 40px;
  height: 40px;
  font-size: 24px;
  background-color: rgba(62, 146, 204, 0.7);
  border-radius: 10px;
}

main>.futured_erea>.slides>.thumbnail>.navigation_left {
  position: absolute;
  bottom: 10px;
  left: 10px;
}

main>.futured_erea>.slides>.thumbnail>.navigation_right {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

main>.futured_erea>.slides>.tags {
  margin-left: 10px;
  margin-top: 10px;
  width: calc(100% - 40px);  
  display: flex;
  justify-content: space-between;
}

main>.futured_erea>.slides>.tags>.category_l,
main>.futured_erea>.slides>.tags>.category_l_read {
  margin-left: 10px;
  display: inline-block;
}

main>.posts_erea {
  width: 100%;
}

main>.posts_erea>.posts {
  margin-top: 10px;
  display: inline-block;
  width: 100%;
  max-width: 480px;
}

main>.posts_erea>.posts:nth-child(1) {
  margin-top: 20px;
}

main>.posts_erea>.posts>.thumbnail {
  position: relative;
  width: calc(100% - 20px);
  height: 120px;
  margin-left: 10px;
}

main>.posts_erea>.posts>.thumbnail>.category_m:nth-child(1) {
  position: absolute;
  top: 10px;
  left: 10px;
}

main>.posts_erea>.posts>.thumbnail>.category_m:nth-child(2) {
  position: absolute;
  bottom: 10px;
  left: 10px;
}

main>.posts_erea>.posts>.thumbnail>.category_m:nth-child(3) {
  position: absolute;
  bottom: 10px;
  right: 10px;
}

main>.posts_erea>.posts>.thumbnail img {
  width: 100%;
  height: 120px;
  object-fit: cover;
  border-radius: 10px;
}

main>.posts_erea>.posts>.title {
  margin-left: 20px;
  width: calc(100% - 40px);
  font-size: 14px;
  line-height: 2;
}

.category_m {
  height: 20px;
  width: 80px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
}

.category_l {
  height: 30px;
  width: 80px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  box-shadow: 3px 3px 3px rgba(30, 27, 24, 0.7);
  line-height: 2;
}

.category_l_read {
  height: 30px;
  width: 100px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  box-shadow: 3px 3px 3px rgba(30, 27, 24, 0.7);
  line-height: 2;
}

.color_white {
  color: #FFFAFF;
}

.color_black {
  color: #1E1B18;
}

.color_pink {
  color: #D8315B;
}

.color_blue {
  color: #0A2463;
}

.color_skyblue {
  color: #3E92CC;
}

.background_white {
  background-color: #FFFAFF;
}

.background_black {
  background-color: #1E1B18;
}

.background_pink {
  background-color: #D8315B;
}

.background_blue {
  background-color: #0A2463;
}

.background_darkblue {
  background-color: #222E50;
}

.background_skyblue {
  background-color: #3E92CC;
}

</style>
