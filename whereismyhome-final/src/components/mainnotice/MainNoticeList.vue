<template>
  <div class="list">
    <h2>공지사항</h2>
    <table>
      <thead>
        <tr>
          <th class="th1">작성일</th>
          <th class="th2">제목</th>
          <th class="th3">조회수</th>
        </tr>
      </thead>
      <tbody v-for="(notice, index) in notices" :key="notice.noticeNo">
        <main-notice-list-item
          v-if="index < 3"
          v-bind="notice"
        ></main-notice-list-item>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import MainNoticeListItem from "./item/MainNoticeListItem.vue";

const noticeStore = "noticeStore";

export default {
  name: "MainNoticeList",

  components: {
    MainNoticeListItem,
  },

  computed: {
    ...mapState(noticeStore, ["notices"]),
  },

  created() {
    this.getNoticesInfo();
  },

  methods: {
    ...mapActions(noticeStore, ["getNotices"]),
    async getNoticesInfo() {
      await this.getNotices();
    },
  },
};
</script>

<style scoped>
.list {
  width: 65%;
  margin: auto;
}

table {
  margin-top: 50px;
  width: 100%;
  text-align: start;
  border-collapse: collapse;
  font-size: 16px;
  table-layout: fixed;
}

thead tr {
  border-bottom: 2px solid black;
}

thead th {
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
