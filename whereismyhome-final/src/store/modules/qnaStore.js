import {
  qnaAdminList,
  qnaUserList,
  qnaWrite,
  qnaModify,
  qnaDelete,
  qnaAnswerWrite,
  qnaAnswerModify,
  qnaAnswerDelete,
} from "@/api/qna";

const qnaStore = {
  namespaced: true,
  state: {
    qnas: [],
    qna: null,
    comments: [],
    isWrite: false,
  },
  getters: {},
  mutations: {
    SET_QNAS: (state, qnas) => {
      state.qnas = qnas;
    },
    SET_QNA: (state, qna) => {
      state.qna = qna;
    },
    SET_COMMENTS: (state, comments) => {
      state.comments = comments;
    },
    SET_ISWRITE: (state, isWrite) => {
      state.isWrite = isWrite;
    },
  },
  actions: {
    async getQnaAdmin({ commit }) {
      await qnaAdminList(
        ({ data }) => {
          console.log("1:1문의 전체 목록: ", data);
          commit("SET_QNAS", data);
        },
        (error) => {
          console.log(error);
          commit("SET_QNAS", []);
        }
      );
    },
    async getQnaUser({ commit }, id) {
      await qnaUserList(
        id,
        ({ data }) => {
          console.log("1:1문의 유저 목록: ", data);
          commit("SET_QNAS", data);
        },
        (error) => {
          console.log(error);
          commit("SET_QNAS", []);
        }
      );
    },
    async setQna({ commit }, qna) {
      await qnaWrite(
        qna,
        ({ data }) => {
          if (data === "success") {
            console.log("문의사항 추가 성공: ", data);
            commit("SET_ISWRITE", true);
          } else {
            console.log("문의사항 추가 실패1: ", data);
            commit("SET_ISWRITE", false);
          }
        },
        (error) => {
          console.log("문의사항 추가 실패2: ", error);
          commit("SET_ISWRITE", false);
        }
      );
    },
    async modifyQna({ commit }, qna) {
      await qnaModify(
        qna,
        ({ data }) => {
          if (data === "success") {
            console.log("문의사항 수정 성공: ", data);
            commit("SET_ISWRITE", true);
          } else {
            console.log("문의사항 수정 실패1: ", data);
            commit("SET_ISWRITE", false);
          }
        },
        (error) => {
          console.log("문의사항 수정 실패2: ", error);
          commit("SET_ISWRITE", false);
        }
      );
    },
    async deleteQna({ commit }, no) {
      await qnaDelete(
        no,
        ({ data }) => {
          if (data === "success") {
            console.log("문의사항 삭제 성공: ", data);
            commit("SET_ISWRITE", true);
            commit("SET_QNA", null);
          } else {
            console.log("문의사항 삭제 실패1: ", data);
            commit("SET_ISWRITE", false);
          }
        },
        (error) => {
          console.log("문의사항 삭제 실패2: ", error);
          commit("SET_ISWRITE", false);
        }
      );
    },
    async setAnswer({ commit }, qna) {
      await qnaAnswerWrite(
        qna,
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
    async modifyAnswer({ commit }, qna) {
      await qnaAnswerModify(
        qna,
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
    async deleteAnswer({ commit }, no) {
      await qnaAnswerDelete(
        no,
        ({ data }) => {
          if (data === "success") {
            console.log("문의사항 댓글 삭제 성공: ", data);
            commit("SET_ISWRITE", true);
          } else {
            console.log("문의사항 댓글 삭제 실패1: ", data);
            commit("SET_ISWRITE", false);
          }
        },
        (error) => {
          console.log("문의사항 댓글 삭제 실패2: ", error);
        }
      );
    },
  },
};

export default qnaStore;
