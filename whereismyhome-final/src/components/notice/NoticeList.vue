<template>
  <div>
    <div class="top">
      <div class="title">
        <h1>공지사항</h1>
        <h2>업데이트 정보 등 다양한 소식을 알려드립니다.</h2>
      </div>
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
            :key="notice.no"
            v-bind="notice"
          ></notice-list-item>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import NoticeListItem from "./item/NoticeListItem.vue";

export default {
  name: "NoticeList",

  components: {
    NoticeListItem,
  },

  data() {
    return {
      notices: [
        {
          no: 1,
          date: "2022.12.12",
          title:
            "제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목제목",
          hit: 12,
        },
        {
          no: 2,
          date: "2022.12.18",
          title: "제목제목제목제목",
          hit: 14,
        },
      ],
    };
  },

  mounted() {},

  methods: {},
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
</style>
