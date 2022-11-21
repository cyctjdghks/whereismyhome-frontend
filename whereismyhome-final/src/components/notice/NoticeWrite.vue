<template>
  <div class="container">
    <h1>공지사항 글 작성</h1>
    <form>
      <div class="head">
        <label for="notice-subject">제목</label>
        <input
          id="notice-subject"
          v-model="newNotice.subject"
          placeholder="제목 적어주세요"
          required
        />
      </div>
      <div class="notice-content">
        <label for="notice-content">내용</label>
        <textarea
          id="content"
          v-model="newNotice.content"
          placeholder="내용 적어주세요"
          required
        ></textarea>
      </div>
      <div class="moveList">
        <router-link :to="{ name: 'noticeList' }" class="moveList">
          <font-awesome-icon icon="fa-solid fa-left-long" /> 목록으로
        </router-link>
        <button class="write-button" @click.prevent="writeNotice">
          글등록
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

const memberStore = "memberStore";
const noticeStore = "noticeStore";

export default {
  name: "NoticeWrite",

  data() {
    return {
      newNotice: {
        content: "",
        subject: "",
        userId: "",
      },
    };
  },

  computed: {
    ...mapState(noticeStore, ["isWrite"]),
    ...mapState(memberStore, ["userInfo"]),
  },

  methods: {
    ...mapActions(noticeStore, ["setNotice"]),
    // 공지 추가
    async writeNotice() {
      this.newNotice.userId = this.userInfo.userId;
      await this.setNotice(this.newNotice);
      if (this.isWrite === false) {
        alert(`댓글 추가 실패 T-T`);
      } else {
        this.$router.push({ name: "noticeList" });
      }
    },
  },
};
</script>

<style scoped>
.container {
  min-height: 100vh;
  width: 65%;
  margin: auto;
  text-align: start;
  color: black;
}
.container h1 {
  margin: 80px 0px 30px;
  font-size: 36px;
  line-height: 70px;
  letter-spacing: -1px;
  font-weight: 700;
  border-bottom: 1px solid #eee;
}
.head {
  padding-bottom: 32px;
}

.head,
.notice-content {
  display: flex;
  flex-direction: column;
}

label {
  font-size: 20px;
  font-weight: bold;
}

#subject {
  height: 28px;
}

.notice-content {
  padding: 32px 0 60px 0;
  border-bottom: 1px solid #eee;
}

#content {
  min-width: 100%;
  max-width: 100%;
  height: 200px;
  min-height: 200px;
}

.moveList {
  padding: 32px 0 100px 0;
  color: blue;
  width: 100%;
}

.write-button {
  float: right;
  min-width: 70px;
  font-weight: 700;
  cursor: pointer;
  background-color: rgb(50, 108, 249);
  border: 1px solid rgb(50, 108, 249);
  border-radius: 2px;
  color: rgb(255, 255, 255);
  height: 40px;
}
</style>
