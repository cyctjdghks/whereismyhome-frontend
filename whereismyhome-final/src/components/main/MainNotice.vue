<template>
  <div class="list">
    <h2>공지사항</h2>
    <table>
      <thead>
        <tr>
          <th class="th1"></th>
          <th class="th2"></th>
          <th class="th3"></th>
        </tr>
      </thead>
      <tbody v-for="(notice, index) in notices" :key="notice.noticeNo">
        <main-notice-list-item
          v-if="index < 10"
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
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: #fff;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 6%);
}

h2 {
  text-align: start;
  padding-left: 3%;
  margin-bottom: 0;
}

table {
  margin-top: 50px;
  width: 95%;
  margin: auto;
  text-align: start;
  border-collapse: collapse;
  font-size: 16px;
  table-layout: fixed;
}

thead tr {
  border-bottom: 2px solid black;
}

thead th {
  padding-bottom: 5px;
}

.th1 {
  width: 20%;
}

.th2 {
  width: 60%;
}
</style>
