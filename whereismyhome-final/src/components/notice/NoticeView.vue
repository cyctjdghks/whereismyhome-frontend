<template>
  <div class="container">
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
    </div>
    <notice-comment></notice-comment>
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
    // id 해당하는 notice 정보, 댓글 정보
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
</style>
