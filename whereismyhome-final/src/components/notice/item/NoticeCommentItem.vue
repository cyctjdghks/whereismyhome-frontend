<template>
  <div class="comment">
    <div class="head">
      <h4>{{ userId }}</h4>
      <h5>({{ registerTime }})</h5>
      <button class="delete-button" v-if="this.isMine()" @click="deleteEvent">
        <font-awesome-icon icon="fa-regular fa-rectangle-xmark" />
      </button>
    </div>
    <div class="content" v-html="handleNewLine(content)"></div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

const memberStore = "memberStore";
const noticeStore = "noticeStore";

export default {
  name: "NoticeCommentItem",

  props: {
    noticeCommentNo: Number,
    content: String,
    userId: String,
    registerTime: String,
  },

  computed: {
    ...mapState(memberStore, ["userInfo"]),
    ...mapState(noticeStore, ["isWrite"]),
  },

  methods: {
    ...mapActions(noticeStore, ["deleteComment", "getComments"]),
    isMine() {
      return this.userId === this.userInfo.userId;
    },
    async deleteEvent() {
      await this.deleteComment(this.noticeCommentNo);
      if (this.isWrite === false) {
        alert(`댓글 삭제 실패 T-T`);
      } else {
        await this.getComments(this.$route.params.no);
      }
    },
    // 줄바꿈 처리
    handleNewLine(str) {
      return String(str).replace(/(?:\r\n|\r|\n)/g, "</br>");
    },
  },
};
</script>

<style scoped>
.comment {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}
.head {
  display: flex;
  margin-bottom: 5px;
}

h4 {
  margin: 0;
  margin-right: 7px;
}

h5 {
  margin: 0;
  font-size: 10px;
  padding-top: 5px;
}

.delete-button {
  margin-left: 5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
