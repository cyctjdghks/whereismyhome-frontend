<template>
  <div class="list">
    <h2>실시간 뉴스</h2>
    <table>
      <thead>
        <tr>
          <th class="th1"></th>
          <th class="th2"></th>
        </tr>
      </thead>
      <tbody v-for="(news, index) in newslist" :key="index">
        <home-news-list-item v-bind="news"></home-news-list-item>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import HomeNewsListItem from "./item/HomeNewsListItem.vue";

const newsStore = "newsStore";

export default {
  name: "HomeNews",

  components: {
    HomeNewsListItem,
  },

  computed: {
    ...mapState(newsStore, ["newslist"]),
  },

  created() {
    this.getNewsInfo();
  },

  methods: {
    ...mapActions(newsStore, ["getNews"]),
    async getNewsInfo() {
      await this.getNews();
    },
    mvNews() {},
  },
};
</script>

<style scoped>
.list {
  width: 100%;
  margin: 0 auto;
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
  width: 90%;
}

.th2 {
  width: 10%;
}
</style>
