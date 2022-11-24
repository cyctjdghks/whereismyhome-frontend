<template>
  <div>
    <h2>홈 뉴스</h2>

    <table>
      <thead>
        <tr>
          <th>제목</th>
          <th>링크</th>
        </tr>
      </thead>
      <tbody v-for="(news, index) in newslist" :key="index">
        <tr>
          <td v-html="news.title"></td>
          <td><a :href="news.link" v-html="news.link" target="_blank"></a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

const newsStore = "newsStore";

export default {
  name: "HomeNews",

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

<style lang="scss" scoped></style>
