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
import { mapActions, mapGetters, mapState } from "vuex";
import QnaListItem from "./item/QnaListItem.vue";

const qnaStore = "qnaStore";
const memberStore = "memberStore";

export default {
  name: "QnaList",

  components: {
    QnaListItem,
  },

  computed: {
    ...mapState(qnaStore, ["qnas"]),
    ...mapState(memberStore, ["userInfo"]),
  },

  created() {
    this.getQnaInfo();
  },

  methods: {
    ...mapGetters(memberStore, ["checkAdmin"]),
    ...mapActions(qnaStore, ["getQnaUser"]),
    async getQnaInfo() {
      await this.getQnaUser(this.userInfo.userId);
    },
  },
};
</script>

<style scoped>
.list {
  width: 60%;
  margin: auto;
  margin-bottom: 300px;
}

ul {
  margin-top: 50px;
  margin-bottom: 100px;
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
