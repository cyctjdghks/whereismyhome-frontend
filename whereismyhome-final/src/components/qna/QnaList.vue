<template>
  <div class="container">
    <div class="list">
      <ul>
        <li class="head">
          <div class="th1">작성일</div>
          <div class="th2">제목</div>
          <div class="th3">답변여부</div>
        </li>
        <li>
          <qna-list-item
            v-for="qna in qnas"
            :key="qna.questionNo"
            v-bind="qna"
          ></qna-list-item>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// import { mapActions, mapGetters, mapState } from "vuex";
import QnaListItem from "./item/QnaListItem.vue";

// const noticeStore = "noticeStore";
// const memberStore = "memberStore";

export default {
  name: "QnaList",

  data() {
    return {
      qnas: [
        {
          questionNo: "1",
          userId: "T",
          subject: "문의드려요",
          content: "문의내용~~",
          answer: "답답답답",
          registerTime: "2022-11-12 21:16:16",
        },
        {
          questionNo: "2",
          userId: "T",
          subject: "문의드려요22",
          content: "문의내용~~",
          answer: null,
          registerTime: "2022-11-13 21:16:16",
        },
      ],
    };
  },

  components: {
    QnaListItem,
  },

  computed: {
    // ...mapState(noticeStore, ["notices"]),
  },

  created() {
    // this.getNoticesInfo();
  },

  methods: {
    // ...mapActions(noticeStore, ["getNotices"]),
    // async getNoticesInfo() {
    //   await this.getNotices();
    // },
  },
};
</script>

<style scoped>
.list {
  width: 60%;
  margin: auto;
}

ul {
  margin-top: 50px;
  width: 100%;
  text-align: start;
  border-collapse: collapse;
  font-size: 16px;
  table-layout: fixed;
}

.head {
  display: flex;
  border-top: 1px solid rgb(34, 34, 34);
  border-bottom: 1px solid rgb(204, 204, 204);
}

.head div {
  text-align: start;
  padding: 19px 0px 17px 0px;
  font-weight: 900;
}

.th1 {
  width: 15%;
}

.th2 {
  width: 75%;
}

.th3 {
  text-align: center;
}
</style>
