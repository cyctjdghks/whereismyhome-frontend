import { newsList } from "@/api/news";

const newsStore = {
  namespaced: true,
  state: {
    newslist: [],
    news: null,
    comments: [],
    isWrite: false,
  },
  mutations: {
    SET_NEWSLIST: (state, newslist) => {
      state.newslist = newslist;
    },
    SET_NEWS: (state, news) => {
      state.news = news;
    },
    SET_COMMENTS: (state, comments) => {
      state.comments = comments;
    },
    SET_ISWRITE: (state, isWrite) => {
      state.isWrite = isWrite;
    },
  },
  actions: {
    async getNews({ commit }) {
      await newsList(
        ({ data }) => {
          console.log("뉴스 목록: ", data.items);
          commit("SET_NEWSLIST", data.items);
        },
        (error) => {
          console.log(error);
          commit("SET_NEWSLIST", []);
        }
      );
    },
  },
};

export default newsStore;
