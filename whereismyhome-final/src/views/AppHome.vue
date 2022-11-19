<template>
  <div class="home">
    <section class="top">
      <the-header></the-header>
      <div class="top-container">
        <h1>어떤 집을 찾으세요?</h1>
        <search-bar></search-bar>
      </div>
    </section>
    <section class="center">center</section>
  </div>
</template>

<script>
import TheHeader from "@/components/common/TheHeader.vue";
import SearchBar from "@/components/search/SearchBar.vue";

export default {
  name: "HomeView",
  components: { TheHeader, SearchBar },
  data() {
    return {};
  },
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
</style>
