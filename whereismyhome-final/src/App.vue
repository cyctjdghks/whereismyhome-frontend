<template>
  <div id="app">
    <the-header v-if="$route.name !== 'home'"></the-header>
    <router-view :key="$route.fullPath"></router-view>
  </div>
</template>

<script>
import TheHeader from "@/components/common/TheHeader.vue";

export default {
  name: "App",
  components: {
    TheHeader,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

a {
  text-decoration: none;
}

* ::-webkit-scrollbar {
  width: 5px; /* 스크롤바의 너비 */
}

* ::-webkit-scrollbar-thumb {
  height: 30%; /* 스크롤바의 길이 */
  background: rgb(208, 207, 207); /* 스크롤바의 색상 */

  border-radius: 10px;
}

* ::-webkit-scrollbar-track {
  background: rgba(33, 122, 244, 0.1); /*스크롤바 뒷 배경 색상*/
}
</style>
