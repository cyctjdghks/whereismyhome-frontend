<template>
  <section>
    <div class="container">
      <h1>로그인</h1>
      <h2>서비스 이용을 위해 로그인해주세요.</h2>
      <form>
        <div class="input-wrapper">
          <label for="userid">아이디</label>
          <input
            id="userid"
            v-model="user.userid"
            required
            placeholder="아이디 입력"
            @keyup.enter="confirm"
          />
        </div>
        <div class="input-wrapper">
          <label for="userpwd">비밀번호</label>
          <input
            type="password"
            id="userpwd"
            v-model="user.userpwd"
            required
            placeholder="비밀번호 입력"
            @keyup.enter="confirm"
          />
        </div>
        <div class="checkbox-wrapper">
          <label
            ><input type="checkbox" name="saveId" value="saveId" />아이디
            저장</label
          >
          <router-link to="/join" class="moveJoin">회원가입</router-link>
        </div>
        <button type="button" @click="confirm">로그인</button>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "UserLogin",
  data() {
    return {
      // isLoginError: false,
      user: {
        userid: null,
        userpwd: null,
      },
    };
  },
  // computed: {
  //   ...mapState(memberStore, ["isLogin", "isLoginError", "userInfo"]),
  // },
  // methods: {
  //   ...mapActions(memberStore, ["userConfirm", "getUserInfo"]),
  //   async confirm() {
  //     await this.userConfirm(this.user);
  //     let token = sessionStorage.getItem("access-token");
  //     // console.log("1. confirm() token >> " + token);
  //     if (this.isLogin) {
  //       await this.getUserInfo(token);
  //       // console.log("4. confirm() userInfo :: ", this.userInfo);
  //       this.$router.push({ name: "main" });
  //     }
  //   },
  //   movePage() {
  //     this.$router.push({ name: "join" });
  //   },
  // },
};
</script>

<style scoped>
.container {
  margin: auto;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 590px;
  height: 691px;
  padding: 64px;
  border: 1px solid #f5f5f5;
}

h1 {
  width: 100%;
  text-align: left;
  font-size: 30px;
  font-weight: 900;
  padding-bottom: 10px;
  border-bottom: 1px solid #f5f5f5;
}

h2 {
  font-size: 14px;
  padding-bottom: 20px;
}

form {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.input-wrapper {
  display: flex;
  flex-direction: column;
}

.input-wrapper label {
  text-align: left;
  font-weight: bold;
  margin-bottom: 10px;
}

.input-wrapper input {
  width: 100%;
  height: 44px;
  padding: 10px 16px;
  color: #222222;
  font-size: 14px;
  line-height: 24px;
  border: 1px solid rgb(237, 237, 237);
  border-radius: 2px;
}

.checkbox-wrapper {
  display: flex;
  justify-content: space-between;
}

.checkbox-wrapper label {
  opacity: 50%;
  color: #222222;
  font-size: 15px;
}

.checkbox-wrapper input {
  border: 1px solid rgb(237, 237, 237);
}

.moveJoin {
  color: black;
  font-size: 14px;
  font-weight: bold;
}

button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 80px;
  padding: 0px 16px;
  font-weight: 700;
  vertical-align: middle;
  cursor: pointer;
  background-color: rgb(50, 108, 249);
  border: 1px solid rgb(50, 108, 249);
  border-radius: 2px;
  color: rgb(255, 255, 255);
  height: 56px;
}
</style>
