<template>
  <div>
    <h3>
      댓글 <span><font-awesome-icon icon="fa-regular fa-comment" /></span>
    </h3>
    <notice-comment-item
      v-for="comment in comments"
      :key="comment.noticeCommentNo"
      v-bind="comment"
    ></notice-comment-item>
    <form class="writeComment">
      <textarea
        placeholder="댓글 적어주세요"
        v-model="newComment.content"
      ></textarea>
      <button @click.prevent="writeNewComment">등록</button>
    </form>
  </div>
</template>

<script>
import NoticeCommentItem from "./item/NoticeCommentItem.vue";
import { mapActions, mapState } from "vuex";

const noticeStore = "noticeStore";
const memberStore = "memberStore";

export default {
  name: "NoticeComment",

  components: {
    NoticeCommentItem,
  },

  data() {
    return {
      newComment: {
        noticeNo: "",
        content: "",
        userId: "",
      },
    };
  },

  computed: {
    ...mapState(noticeStore, ["comments", "isWrite", "notice"]),
    ...mapState(memberStore, ["userInfo"]),
  },

  created() {
    this.getCommentInfo();
  },

  methods: {
    ...mapActions(noticeStore, ["getComments", "writeComment"]),
    // 댓글 목록 가져오기
    async getCommentInfo() {
      await this.getComments(this.$route.params.no);
    },
    // 댓글 추가
    async writeNewComment() {
      this.newComment.noticeNo = this.notice.noticeNo;
      this.newComment.userId = this.userInfo.userId;
      await this.writeComment(this.newComment);
      if (this.isWrite === false) {
        alert(`댓글 추가 실패 T-T`);
      } else {
        this.newComment.content = "";
        await this.getCommentInfo();
      }
    },
  },
};
</script>

<style scoped>
h3 {
  border-bottom: 1px solid #eee;
}
.writeComment {
  display: flex;
  justify-content: space-around;
  margin: 40px 0;
}
.writeComment textarea {
  width: 80%;
  height: 80px;
  border-radius: 2px;
}

button {
  min-width: 80px;
  height: 80px;
  padding: 0px 16px;
  font-weight: 700;
  cursor: pointer;
  background-color: rgb(50, 108, 249);
  border: 1px solid rgb(50, 108, 249);
  border-radius: 5px;
  color: rgb(255, 255, 255);
}
</style>
