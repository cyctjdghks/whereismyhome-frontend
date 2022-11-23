import {
  userDongList,
  userDongWrite,
  userDongDelete,
  userAptList,
  userAptWrite,
  userAptDelete,
} from "@/api/like";

const userLikeStore = {
  namespaced: true,
  state: {
    userlikes: [],
    userlike: null,
    comments: [],
    isWrite: false,
  },
  getters: {},
  mutations: {
    SET_USERLIKES: (state, userlikes) => {
      state.userlikes = userlikes;
    },
    SET_USERLIKE: (state, userlike) => {
      state.userlike = userlike;
    },
    SET_COMMENTS: (state, comments) => {
      state.comments = comments;
    },
    SET_ISWRITE: (state, isWrite) => {
      state.isWrite = isWrite;
    },
  },
  actions: {
    // 유저 관심 지역 목록
    async getUserLikeDong({ commit }, id) {
      await userDongList(
        id,
        ({ data }) => {
          console.log("유저 관심 지역 목록: ", data);
          commit("SET_USERLIKES", data);
        },
        (error) => {
          console.log(error);
          commit("SET_USERLIKES", []);
        }
      );
    },
    // 유저 관심 지역 추가
    async setUserLikeDong({ commit }, { id, dongcode }) {
      await userDongWrite(
        id,
        dongcode,
        ({ data }) => {
          if (data === "success") {
            console.log("관심 지역 추가 성공: ", data);
            commit("SET_ISWRITE", true);
          } else {
            console.log("관심 지역 삭제 실패1: ", data);
            commit("SET_ISWRITE", false);
          }
        },
        (error) => {
          console.log("관심 지역 삭제 실패2: ", error);
          commit("SET_ISWRITE", false);
        }
      );
    },
    // 유저 관심 지역 삭제
    async deleteUserLikeDong({ commit }, { id, dongcode }) {
      await userDongDelete(
        id,
        dongcode,
        ({ data }) => {
          if (data === "success") {
            console.log("관심 지역 삭제 성공: ", data);
            commit("SET_ISWRITE", true);
            commit("SET_USERLIKE", null);
          } else {
            console.log("관심 지역 삭제 실패1: ", data);
            commit("SET_ISWRITE", false);
          }
        },
        (error) => {
          console.log("관심 지역 삭제 실패2: ", error);
          commit("SET_ISWRITE", false);
        }
      );
    },
    // 유저 관심 아파트 목록
    async getUserLikeApt({ commit }, id) {
      await userAptList(
        id,
        ({ data }) => {
          console.log("유저 관심 아파트 목록: ", data);
          commit("SET_USERLIKES", data);
        },
        (error) => {
          console.log(error);
          commit("SET_USERLIKES", []);
        }
      );
    },
    // 유저 관심 아파트 추가
    async setUserLikeApt({ commit }, { id, aptcode }) {
      await userAptWrite(
        id,
        aptcode,
        ({ data }) => {
          if (data === "success") {
            console.log("관심 아파트 삭제 성공: ", data);
            commit("SET_ISWRITE", true);
          } else {
            console.log("관심 아파트 삭제 실패1: ", data);
            commit("SET_ISWRITE", false);
          }
        },
        (error) => {
          console.log("관심 아파트 삭제 실패2: ", error);
          commit("SET_ISWRITE", false);
        }
      );
    },
    // 유저 관심 아파트 삭제
    async deleteUserLikeApt({ commit }, { id, aptcode }) {
      await userAptDelete(
        id,
        aptcode,
        ({ data }) => {
          if (data === "success") {
            console.log("관심 아파트 삭제 성공: ", data);
            commit("SET_ISWRITE", true);
            commit("SET_USERLIKE", null);
          } else {
            console.log("관심 아파트 삭제 실패1: ", data);
            commit("SET_ISWRITE", false);
          }
        },
        (error) => {
          console.log("관심 아파트 삭제 실패2: ", error);
          commit("SET_ISWRITE", false);
        }
      );
    },
  },
};

export default userLikeStore;
