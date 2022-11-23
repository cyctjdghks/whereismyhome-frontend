<template>
  <div class="mypage-container">
    <div class="mypage-head">
      <h1>관심 목록</h1>
      <ul>
        <li @click="updateColor">
          <router-link :to="{ name: 'myDongList' }">관심 지역</router-link>
        </li>
        <li @click="updateColor">
          <router-link :to="{ name: 'myAptList' }">관심 아파트</router-link>
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "AppLike",

  data() {
    return {
      isBlack: [false, false, false],
    };
  },

  methods: {
    updateColor() {
      this.isBlack = !this.isBlack;
      this.isWhite = !this.isWhite;
    },
  },
};
</script>

<style scoped>
h1 {
  color: black;
}

a {
  color: white;
}
.mypage-container {
  width: 100%;
  min-height: 100vh;
}

.mypage-head {
  width: 60%;
  margin: auto;
  margin-bottom: 50px;
}

.mypage-head h1 {
  margin: 80px 0px 64px;
  font-size: 46px;
  line-height: 70px;
  letter-spacing: -1px;
  font-weight: 700;
}
.mypage-head ul {
  display: flex;
  width: 100%;
  height: 64px;
  font-size: 16px;
  font-weight: 700;
}

.mypage-head li {
  height: 64px;
  width: 100%;
  line-height: 64px;
  cursor: pointer;
}
.mypage-head li a {
  display: block;
  border: 1px solid rgb(237, 237, 237);
  color: black;
}

.mypage-head a.router-link-exact-active {
  background-color: black;
  color: white;
}
</style>
