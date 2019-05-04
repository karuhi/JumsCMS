<template>
  <section class="main">
    <header>
      <div class="global">
        <div class="menu">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div class="title">JumsCMS</div>
        <div class="search">検索</div>
      </div>
      <div class="category_list">
        <div class="category_m">
          ニュース
        </div>
        <div class="category_m">
          ガジェット
        </div>
        <div class="category_m">
          ゲーム
        </div>
        <div class="category_m">
          テクノロジ
        </div>
        <div class="category_m">
          レビュー
        </div>
        <div class="category_m">
          音楽
        </div>
      </div>
    </header>
  </section>
</template>
<script>
export default {
  asyncData() {
    return { json: process.env.jsonData }
  },
  mounted() {
    console.log(this.json);
  }
}

</script>
<style>
.main {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
}

header {
  background-color: #1E1B18;
  color: #FFFAFF;
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
  background-color: #FFFAFF;
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

.category_m {
  height: 20px;
  width: 80px;
  background-color: #3E92CC;
  color: #FFFAFF;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
}

</style>
