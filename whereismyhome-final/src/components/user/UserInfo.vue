<template>
  <section>
    <div class="container">
      <form>
        <div class="input-wrapper">
          <label for="userid">아이디</label>
          <input
            id="userid"
            v-model="user.userId"
            disabled
            required
            placeholder="아이디 입력"
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
          />
        </div>
        <div class="input-wrapper">
          <label for="username">이름</label>
          <input
            id="username"
            v-model="user.userName"
            required
            placeholder="이름 입력"
          />
        </div>
        <div class="input-wrapper">
          <label for="useremail">이메일</label>
          <input
            id="useremail"
            v-model="user.userEmail"
            required
            placeholder="이메일 입력"
          />
        </div>
        <div class="input-wrapper">
          <label for="userphone">휴대폰 번호</label>
          <input
            id="userphone"
            v-model="user.userPhone"
            required
            placeholder="휴대폰 번호 입력"
          />
        </div>
        <button type="button" @click="modifyEvent">수정하기</button>
      </form>
      <div class="delete-wrapper">
        <button class="delete" @click="deleteEvent">회원탈퇴</button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapState } from "vuex";

const memberStore = "memberStore";

export default {
  name: "UserInfo",

  data() {
    return {
      user: null,
    };
  },

  created() {
    this.user = this.userInfo;
  },

  computed: {
    ...mapState(memberStore, ["isLogin", "isJoin", "userInfo"]),
  },

  methods: {
    ...mapActions(memberStore, ["userModify", "userDelete"]),
    async modifyEvent() {
      await this.userModify(this.user);
      if (this.isJoin) {
        alert(`회원정보 수정 성공!`);
      } else {
        alert(`회원정보 수정 실패 T-T`);
      }
    },
    async deleteEvent() {
      if (window.confirm(`회원 탈퇴하시겠습니까?`)) {
        await this.userDelete(this.user.userId);
        if (!this.isLogin) {
          alert(`회원탈퇴 성공!`);
          this.$router.push({ name: "home" });
        } else {
          alert(`회원탈퇴 실패 T-T`);
        }
      }
    },
  },
};
</script>

<style scoped>
section {
  display: flex;
  align-items: center;
}
.container {
  margin: auto;
  margin-bottom: 130px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 590px;
  padding: 64px;
  border: 1px solid #f5f5f5;
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

.delete-wrapper {
  margin-top: 20px;
  width: 100%;
}

.delete-wrapper button {
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 0;
  min-width: 0;
  float: right;
  font-weight: bold;
  color: black;
}
</style>
