import {
  userDongList,
  userDongDelete,
  userAptList,
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
    async getUserLikeDong({ commit }, id) {
      await userDongList(
        id,
        ({ data }) => {
          console.log("유저가 찜한 지역 목록: ", data);
          commit("SET_USERLIKES", data);
        },
        (error) => {
          console.log(error);
          commit("SET_USERLIKES", []);
        }
      );
    },
    async deleteUserLikeDong({ commit }, id, dongcode) {
      await userDongDelete(
        id,
        dongcode,
        ({ data }) => {
          if (data === "success") {
            console.log("찜한 지역 삭제 성공: ", data);
            commit("SET_ISWRITE", true);
            commit("userlike", null);
          } else {
            console.log("찜한 지역 삭제 실패1: ", data);
            commit("SET_ISWRITE", false);
          }
        },
        (error) => {
          console.log("찜한 지역 삭제 실패2: ", error);
          commit("SET_ISWRITE", false);
        }
      );
    },
    async getUserLikeApt({ commit }, id) {
      await userAptList(
        id,
        ({ data }) => {
          console.log("유저가 찜한 아파트 목록: ", data);
          commit("SET_USERLIKES", data);
        },
        (error) => {
          console.log(error);
          commit("SET_USERLIKES", []);
        }
      );
    },
    async deleteUserLikeApt({ commit }, id, aptcode) {
      await userAptDelete(
        id,
        aptcode,
        ({ data }) => {
          if (data === "success") {
            console.log("찜한 아파트 삭제 성공: ", data);
            commit("SET_ISWRITE", true);
            commit("userlike", null);
          } else {
            console.log("찜한 아파트 삭제 실패1: ", data);
            commit("SET_ISWRITE", false);
          }
        },
        (error) => {
          console.log("찜한 아파트 삭제 실패2: ", error);
          commit("SET_ISWRITE", false);
        }
      );
    },
  },
};

export default userLikeStore;
