import {
  noticeList,
  noticeView,
  noticeWrite,
  noticeDelete,
  noticeComment,
  noticeCommentWrite,
} from "@/api/notice";

const noticeStore = {
  namespaced: true,
  state: {
    notices: [],
    notice: null,
    comments: [],
    isWrite: false,
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
    SET_ISWRITE: (state, isWrite) => {
      state.isWrite = isWrite;
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
    async setNotice({ commit }, notice) {
      await noticeWrite(
        notice,
        ({ data }) => {
          if (data === "success") {
            console.log("공지사항 추가 성공: ", data);
            commit("SET_ISWRITE", true);
          } else {
            console.log("공지사항 추가 실패1: ", data);
            commit("SET_ISWRITE", false);
          }
        },
        (error) => {
          console.log("공지사항 추가 실패2: ", error);
          commit("SET_ISWRITE", false);
        }
      );
    },
    async deleteNotice({ commit }, no) {
      await noticeDelete(
        no,
        ({ data }) => {
          if (data === "success") {
            console.log("공지사항 삭제 성공: ", data);
            commit("SET_ISWRITE", true);
            commit("SET_NOTICE", null);
          } else {
            console.log("공지사항 삭제 실패1: ", data);
            commit("SET_ISWRITE", false);
          }
        },
        (error) => {
          console.log("공지사항 추가 실패2: ", error);
          commit("SET_ISWRITE", false);
        }
      );
    },
    async getComments({ commit }, no) {
      await noticeComment(
        no,
        ({ data }) => {
          console.log("공지사항 댓글들: ", data);
          commit("SET_COMMENTS", data);
        },
        (error) => {
          console.log(error);
          commit("SET_COMMENTS", null);
        }
      );
    },
    async writeComment({ commit }, comment) {
      await noticeCommentWrite(
        comment,
        ({ data }) => {
          if (data === "success") {
            console.log("댓글 추가 성공: ", data);
            commit("SET_ISWRITE", true);
          } else {
            console.log("추가 실패1: ", data);
            commit("SET_ISWRITE", false);
          }
        },
        (error) => {
          console.log("추가 실패2: ", error);
          commit("SET_ISWRITE", false);
        }
      );
    },
  },
};

export default noticeStore;
