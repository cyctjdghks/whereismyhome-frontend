<template>
  <div class="container" v-if="this.notice">
    <div class="head">
      <h1>{{ notice.subject }}</h1>
      <h2>{{ notice.registerTime }}</h2>
    </div>
    <div class="content">
      {{ notice.content }}
    </div>
    <div class="moveList">
      <router-link :to="{ name: 'noticeList' }" class="moveList">
        <font-awesome-icon icon="fa-solid fa-left-long" /> 목록으로
      </router-link>
      <button
        v-if="this.checkAdmin()"
        class="delete-button"
        @click.prevent="deleteNoticeEvent"
      >
        글삭제
      </button>
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
  padding: 32px 0 100px 0;
  color: blue;
  width: 100%;
}

.delete-button {
  float: right;
  min-width: 70px;
  font-weight: 700;
  cursor: pointer;
  background-color: rgb(249, 50, 50);
  border: 1px solid rgb(249, 50, 50);
  border-radius: 2px;
  color: rgb(255, 255, 255);
  height: 40px;
}
</style>
