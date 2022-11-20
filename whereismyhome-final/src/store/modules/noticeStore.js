import { noticeComment, noticeList, noticeView } from "@/api/notice";

const noticeStore = {
  namespaced: true,
  state: {
    notices: [],
    notice: null,
    comments: [],
  },
  getters: {},
  mutations: {
    SET_NOTICES: (state, notices) => {
      state.notices = notices;
    },
    SET_NOTICE: (state, notice) => {
      state.notice = notice;
    },
    SET_COMMENTS: (state, comments) => {
      state.comments = comments;
    },
  },
  actions: {
    async getNotices({ commit }) {
      await noticeList(
        ({ data }) => {
          console.log("공지사항 목록: ", data);
          commit("SET_NOTICES", data);
        },
        (error) => {
          console.log(error);
          commit("SET_NOTICES", []);
        }
      );
    },
    async getNotice({ commit }, no) {
      await noticeView(
        no,
        ({ data }) => {
          console.log("공지사항 상세보기: ", data);
          commit("SET_NOTICE", data);
        },
        (error) => {
          console.log(error);
          commit("SET_NOTICE", null);
        }
      );
    },
    async getComments({ commit }, no) {
      await noticeComment(
        no,
        ({ data }) => {
          console.log("공지사항 댓글: ", data);
          commit("SET_COMMENTS", data);
        },
        (error) => {
          console.log(error);
          commit("SET_COMMENTS", null);
        }
      );
    },
  },
};

export default noticeStore;
