<template>
  <div class="mypage-container">
    <div class="mypage-head">
      <h1>MY PAGE</h1>
      <ul>
        <li :class="{ black: isBlack }" @click="updateColor">
          <router-link :to="{ name: 'myQna' }" :class="{ white: !isWhite }"
            >1:1 문의내역</router-link
          >
        </li>
        <li :class="{ black: !isBlack }" @click="updateColor">
          <router-link :to="{ name: 'myInfo' }" :class="{ white: isWhite }"
            >내 정보</router-link
          >
        </li>
      </ul>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "AppMypage",

  data() {
    return {
      isBlack: false,
      isWhite: false,
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
a {
  color: white;
}
.mypage-container {
  min-height: 100vh;
}

.mypage-head {
  width: 50%;
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
  width: 50%;
  line-height: 64px;
  border: 1px solid rgb(237, 237, 237);
  cursor: pointer;
}

.white {
  background-color: white;
  color: black;
}

.black {
  background-color: black;
  color: white;
}
</style>
