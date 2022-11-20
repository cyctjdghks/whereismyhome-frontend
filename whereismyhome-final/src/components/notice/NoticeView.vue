<template>
  <div class="container">
    <div class="head">
      <h1>제목제목</h1>
      <h2>2022.11.16</h2>
    </div>
    <div class="content">
      내용내용내용내용내용내용내용내용내용 <br />
      내용내용내용내용내용내용내용내용내용 <br />
      내용내용내용내용내용내용내용내용내용 <br />
      내용내용내용내용내용내용내용내용내용 <br />
    </div>
    <div class="moveList">
      <router-link :to="{ name: 'noticeList' }" class="moveList">
        <font-awesome-icon icon="fa-solid fa-left-long" /> 목록으로
      </router-link>
    </div>
    <notice-comment></notice-comment>
    <form class="writeComment">
      <textarea placeholder="댓글 적어주세요" v-model="comment"></textarea>
      <button @click="regist">등록</button>
    </form>
  </div>
</template>

<script>
import NoticeComment from "@/components/notice/NoticeComment.vue";
import { mapActions, mapState } from "vuex";

const noticeStore = "noticeStore";

export default {
  name: "NoticeView",

  components: {
    NoticeComment,
  },

  computed: {
    ...mapState(noticeStore, ["notice"]),
  },

  created() {
    this.getNoticeInfo();
  },

  methods: {
    ...mapActions(noticeStore, ["getNotice"]),
    async getNoticeInfo() {
      await this.getNotice(this.$route.params.no);
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
