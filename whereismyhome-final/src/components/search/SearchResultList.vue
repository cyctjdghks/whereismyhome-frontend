<template>
  <div class="result-container">
    <h1>{{ this.title }}</h1>
    <ul>
      <li v-for="(item, index) in result" :key="index">
        <div class="mainResult">{{ item.mainResult }}</div>
        <div class="subResult">{{ item.subResult }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SearchResultItem",

  props: ["title", "result"],
};
</script>

<style scoped>
.result-container {
  width: 50%;
  height: 392px;
  border-right: 1px solid #e7e7e7;
  padding: 30px 50px 30px 60px;
}

h1 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 30px;
}

ul {
  height: 250px;
  overflow: auto;
}

li {
  margin-bottom: 15px;
  text-align: start;
}

.mainResult {
  font-size: 16px;
  color: #656565;
}

.subResult {
  font-size: 15px;
  color: #868686;
}

ul::-webkit-scrollbar {
  width: 8px; /* 스크롤바의 너비 */
}

ul::-webkit-scrollbar-thumb {
  height: 30%; /* 스크롤바의 길이 */
  background: #81b3f8; /* 스크롤바의 색상 */

  border-radius: 10px;
}

ul::-webkit-scrollbar-track {
  background: rgba(33, 122, 244, 0.1); /*스크롤바 뒷 배경 색상*/
}
</style>
