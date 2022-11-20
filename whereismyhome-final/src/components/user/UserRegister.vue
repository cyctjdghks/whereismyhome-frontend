<template>
  <section>
    <div class="container">
      <h1>회원가입</h1>
      <h2>서비스 이용을 위해 아래 정보를 입력해주세요.</h2>
      <form>
        <div class="input-wrapper">
          <label for="userid">아이디</label>
          <input
            id="userid"
            v-model="user.userId"
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
            v-model="user.userPassword"
            required
            placeholder="비밀번호 입력"
            autocomplete="on"
            @keyup.enter="confirm"
          />
        </div>
        <div class="input-wrapper">
          <label for="username">이름</label>
          <input
            id="username"
            v-model="user.userName"
            required
            placeholder="이름 입력"
            @keyup.enter="confirm"
          />
        </div>
        <div class="input-wrapper">
          <label for="useremail">이메일</label>
          <input
            id="useremail"
            v-model="user.userEmail"
            required
            placeholder="이메일 입력"
            @keyup.enter="confirm"
          />
        </div>
        <div class="input-wrapper">
          <label for="userphone">휴대폰 번호</label>
          <input
            id="userphone"
            v-model="user.userPhone"
            required
            placeholder="휴대폰 번호 입력"
            @keyup.enter="confirm"
          />
        </div>
        <button type="button" @click="confirm">회원가입</button>
      </form>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";

const memberStore = "memberStore";

export default {
  name: "UserRegister",

  data() {
    return {
      user: {
        userId: null,
        userPassword: null,
        userName: null,
        userEmail: null,
        userPhone: null,
      },
    };
  },

  computed: {
    ...mapState(memberStore, ["isJoin"]),
  },

  methods: {
    ...mapActions(memberStore, ["userJoin"]),
    async confirm() {
      await this.userJoin(this.user);
      if (this.isJoin) {
        this.$router.push({ name: "login" });
      } else {
        alert(`회원가입 실패 T-T`);
      }
    },
  },
};
</script>

<style scoped>
section {
  min-height: 100vh;
  display: flex;
  align-items: center;
}
.container {
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 590px;
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
  margin-bottom: 15px;
}

.input-wrapper label {
  text-align: left;
  font-weight: bold;
  margin-bottom: 5px;
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
  margin-top: 15px;
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
