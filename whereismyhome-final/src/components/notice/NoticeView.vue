<template>
  <div class="container" v-if="this.notice">
    <div class="head">
      <h1>{{ notice.subject }}</h1>
      <h2>{{ notice.registerTime }}</h2>
    </div>
    <div class="content" v-html="handleNewLine(this.notice.content)"></div>
    <div class="moveList">
      <div>
        <router-link :to="{ name: 'noticeList' }" class="moveList">
          <font-awesome-icon icon="fa-solid fa-left-long" /> 목록으로
        </router-link>
      </div>
      <div class="move-buttons" v-if="this.checkAdmin()">
        <button class="modify-button" @click.prevent="moveModify">
          글수정
        </button>
        <button class="delete-button" @click.prevent="deleteNoticeEvent">
          글삭제
        </button>
      </div>
    </div>
    <notice-comment></notice-comment>
  </div>
</template>

<script>
import NoticeComment from "@/components/notice/NoticeComment.vue";
import { mapActions, mapState, mapGetters } from "vuex";

const noticeStore = "noticeStore";
const memberStore = "memberStore";

export default {
  name: "NoticeView",

  components: {
    NoticeComment,
  },

  computed: {
    ...mapState(noticeStore, ["notice", "isWrite"]),
  },

  created() {
    // id 해당하는 notice 정보, 댓글 정보
    this.getNoticeInfo();
  },

  methods: {
    ...mapGetters(memberStore, ["checkAdmin"]),
    ...mapActions(noticeStore, ["getNotice", "deleteNotice"]),
    async getNoticeInfo() {
      await this.getNotice(this.$route.params.no);
    },
    // 글 삭제
    async deleteNoticeEvent() {
      await this.deleteNotice(this.$route.params.no);
      if (this.isWrite === false) {
        alert(`글 삭제 실패 T-T`);
      } else {
        alert(`글이 삭제되었습니다.`);
        this.$router.push({ name: "noticeList" });
      }
    },
    // 글 수정 페이지로
    async moveModify() {
      this.$router.push({ name: "noticeModify" });
    },
    // 줄바꿈 처리
    handleNewLine(str) {
      return String(str).replace(/(?:\r\n|\r|\n)/g, "</br>");
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
.head {
  padding: 100px 0 32px 0;
  border-bottom: 1px solid #eee;
}

h1 {
  font-weight: 900;
  margin: 0;
  font-size: 30px;
  margin-bottom: 32px;
}

h2 {
  color: #777;
  letter-spacing: -1px;
  margin: 0;
  font-size: 16px;
}

.content {
  padding: 32px 0 60px 0;
  border-bottom: 1px solid #eee;
}

.moveList {
  display: flex;
  justify-content: space-between;
  margin: 32px 0 80px 0;
  color: blue;
  width: 100%;
}

.move-buttons button {
  min-width: 70px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 2px;
  color: rgb(255, 255, 255);
  height: 40px;
  margin-top: 32px;
}
.delete-button {
  background-color: rgb(249, 50, 50);
  border: 1px solid rgb(249, 50, 50);
}

.modify-button {
  background-color: rgb(250, 182, 47);
  border: 1px solid rgb(250, 182, 47);
  margin-right: 3px;
}
</style>
