<template>
	<header class="color_white background_black">
      <div class="global">
        <div class="menu">
          <div class="background_white"></div>
          <div class="background_white"></div>
          <div class="background_white"></div>
        </div>
        <div class="title">JumsCMS</div>
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
</template>
<style scoped>
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
</style>