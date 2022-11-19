<template>
  <header>
    <div class="container">
      <!-- 헤더 왼쪽 -->
      <router-link to="/" class="navbar-brand">
        <img src="@/assets/logo.png" alt="Home logo" style="height: 35px" />
        <img
          src="@/assets/logo-text.png"
          alt="Home logo text"
          style="height: 30px"
        />
      </router-link>
      <!-- 헤더 오른쪽 - 넷바 -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/map" class="nav-link">지도</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/like" class="nav-link">관심목록</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/notice" class="nav-link">공지사항</router-link>
        </li>
        |
        <li class="nav-item">
          <router-link :to="{ name: 'login' }" class="nav-link"
            >로그인</router-link
          >
        </li>
        <div class="dropdown">
          <button class="dropbtn">
            <font-awesome-icon icon="fa-solid fa-circle-user" /> 윤소현 님
          </button>
          <div class="dropdown-content">
            <router-link to="/qna1" class="nav-link">문의하기</router-link>
            <router-link to="/qna2" class="nav-link">문의내역</router-link>
            <router-link to="/qna3" class="nav-link">내정보</router-link>
            <router-link to="/logout" class="nav-link"
              >로그아웃<font-awesome-icon
                class="logout-icon"
                icon="fa-solid fa-right-from-bracket"
            /></router-link>
          </div>
        </div>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: "TheHeader",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  padding: 8px;
}

.navbar-brand {
  margin: 5px 0 0 10px;
}

.navbar-nav {
  display: flex;
  font-weight: bold;
  font-size: large;
}

.navbar-nav .nav-item {
  margin: 0 10px;
}

.navbar-nav a.nav-link {
  color: black;
}

.navbar-nav a.router-link-exact-active {
  color: #42b983;
}

/* Style The Dropdown Button */
.dropbtn {
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: large;
  background-color: transparent;
}

.dropdown {
  margin-left: 20px;
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  right: 0;
  min-width: 160px;
  background-color: #ffffff;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 5px;
}

/* Links inside the dropdown */
.dropdown-content a {
  padding: 12px 16px;
  display: block;
  border-radius: 5px;
}

.logout-icon {
  padding-left: 5px;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
