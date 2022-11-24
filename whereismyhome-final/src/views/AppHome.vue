<template>
  <div class="home">
    <section class="top">
      <the-header></the-header>
      <div class="top-container">
        <h1>어떤 집을 찾으세요?</h1>
        <search-bar></search-bar>
      </div>
    </section>
    <section class="notice-container">
      <div class="notice-wrapper">
        <main-notice class="notice"></main-notice>
        <home-news class="notice"></home-news>
      </div>
    </section>
  </div>
</template>

<script>
import TheHeader from "@/components/common/TheHeader.vue";
import SearchBar from "@/components/search/SearchBar.vue";
import MainNotice from "@/components/main/MainNotice.vue";
import HomeNews from "@/components/main/HomeNews.vue";

export default {
  name: "HomeView",
  components: { TheHeader, SearchBar, MainNotice, HomeNews },
};
</script>

<style scoped>
.top {
  height: 465px;
  background: rgb(147, 183, 251);
  background: linear-gradient(
    90deg,
    rgba(147, 183, 251, 1) 0%,
    rgba(70, 173, 230, 1) 11%,
    rgba(75, 113, 252, 1) 100%
  );
}

.top-container {
  margin: auto;
  max-width: 1200px;
  margin-top: 100px;
}

.top-container h1 {
  text-align: left;
  font-size: 40px;
  color: black;
}

.notice-container {
  background-color: #f4f6f8;
  height: 1000px;
}

.notice-wrapper {
  max-width: 1200px;
  padding-top: 50px;
  width: 100%;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}

.notice {
  max-width: 48%;
  width: 48%;
  height: 800px;
  margin: 0;
  max-height: 700px;
  border-radius: 4px;
}
</style>
