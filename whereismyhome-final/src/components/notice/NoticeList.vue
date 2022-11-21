<template>
  <div>
    <div class="top">
      <div class="title">
        <h1>공지사항</h1>
        <h2>업데이트 정보 등 다양한 소식을 알려드립니다.</h2>
      </div>
    </div>
    <div class="write-button-wrapper" v-if="this.checkAdmin()">
      <button class="write-button" @click="moveWrite">글쓰기</button>
    </div>
    <div class="list">
      <table>
        <thead>
          <tr>
            <th class="th1">작성일</th>
            <th class="th2">제목</th>
            <th class="th3">조회수</th>
          </tr>
        </thead>
        <tbody>
          <notice-list-item
            v-for="notice in notices"
            :key="notice.noticeNo"
            v-bind="notice"
          ></notice-list-item>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
import NoticeListItem from "./item/NoticeListItem.vue";

const noticeStore = "noticeStore";
const memberStore = "memberStore";

export default {
  name: "NoticeList",

  components: {
    NoticeListItem,
  },

  computed: {
    ...mapState(noticeStore, ["notices"]),
  },

  created() {
    this.getNoticesInfo();
  },

  methods: {
    ...mapGetters(memberStore, ["checkAdmin"]),
    ...mapActions(noticeStore, ["getNotices"]),
    async getNoticesInfo() {
      await this.getNotices();
    },
    moveWrite() {
      this.$router.push({ name: "noticeWrite" });
    },
  },
};
</script>

<style scoped>
.top {
  width: 100%;
  background: rgb(147, 183, 251);
  background: linear-gradient(
    90deg,
    rgba(147, 183, 251, 1) 0%,
    rgba(70, 173, 230, 1) 11%,
    rgba(75, 113, 252, 1) 100%
  );
}
.title {
  width: 65%;
  height: 230px;
  margin: auto;
  color: black;
}

h1 {
  font-size: 46px;
  margin: 0;
  padding: 65px 0 10px 0;
  text-align: start;
}

h2 {
  font-size: 16px;
  text-align: start;
}

.write-button-wrapper {
  width: 65%;
  margin: auto;
}

.write-button {
  float: right;
  margin: 15px 10px 0 0;
  min-width: 70px;
  font-weight: 700;
  cursor: pointer;
  background-color: rgb(50, 108, 249);
  border: 1px solid rgb(50, 108, 249);
  border-radius: 2px;
  color: rgb(255, 255, 255);
  height: 40px;
}

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
